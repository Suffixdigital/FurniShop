import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:timberr/constants.dart';
import 'package:timberr/models/address.dart';

class AddressController extends GetxController {
  final _supabaseClient = Supabase.instance.client;
  List<Address> addressList = [];
  int selectedIndex = 0;

  String name = "", address = "", country = "", city = "", state = "";
  String zipcode = '';

  Future<void> fetchAddresses(String userId) async {
    //get address list
    final response = await _supabaseClient.from("addresses").select().eq(
          "user_id",
          userId,
        );
    final responseList = response;
    for (int i = 0; i < responseList.length; i++) {
      addressList.add(Address.fromJson(responseList[i]));
    }
    update();
  }

  Future<void> getDefaultShippingAddress() async {
    final userId = _supabaseClient.auth.currentUser?.id;
    if (userId == null) return;

    //get default shipping address
    final defaultShippingResponse = await _supabaseClient.from("users").select('default_shipping_id').eq(
          "user_id",
          userId,
        );
    int? responseId = defaultShippingResponse[0]['default_shipping_id'];
    await fetchAddresses(userId);
    if (responseId != null) {
      for (int i = 0; i < addressList.length; i++) {
        if (addressList.elementAt(i).addressId == responseId) {
          selectedIndex = i;
          update();
          break;
        }
      }
    }
  }

  Future<void> setDefaultShippingAddress(int index) async {
    if (selectedIndex == index) {
      return;
    }
    selectedIndex = index;
    update();
    await _supabaseClient.from("users").update({'default_shipping_id': addressList.elementAt(index).addressId}).eq(
      "user_id",
      _supabaseClient.auth.currentUser!.id,
    );
  }

  Future<void> uploadAddress() async {
    final insertData = await _supabaseClient.from("addresses").insert({
      'full_name': name,
      'address': address,
      'zipcode': zipcode,
      'country': country,
      'city': city,
      'state': state,
      'user_id': _supabaseClient.auth.currentUser!.id,
    }).select();
    if (addressList.isEmpty) {
      selectedIndex = 0;
      //set default user Address Id in the database
      await _supabaseClient.from("users").update({'default_shipping_id': insertData[0]['address_id']}).eq(
        "user_id",
        _supabaseClient.auth.currentUser!.id,
      );
    }
    //add to shipping address list
    addressList.add(
      Address(
        addressId: insertData[0]['address_id'],
        fullName: name,
        address: address,
        zipcode: zipcode,
        country: country,
        city: city,
        state: state,
      ),
    );
    update();
    Get.back();
  }

  Future<void> editAddress(int index, int addressId) async {
    Address newAddress = Address(addressId: addressId, fullName: name, address: address, zipcode: zipcode, country: country, city: city, state: state);
    //update values in the database
    await _supabaseClient.from("addresses").update(newAddress.toJson()).eq("address_id", addressId);
    //update the value locally
    addressList[index] = newAddress;
    update();
    Get.back();
  }

  Future<void> deleteAddress(int index) async {
    //check if it is the selected index
    if (index == selectedIndex) {
      if (addressList.length == 1) {
        await kDefaultDialog("Error", "Add a different address before removing this one");
        return;
      } else {
        selectedIndex = 0;
        await setDefaultShippingAddress((index == 0) ? 1 : 0);
      }
    }
    //remove address from the database
    await _supabaseClient.from("addresses").delete().eq("address_id", addressList.elementAt(index).addressId);
    //remove from local list
    addressList.removeAt(index);
    //go back to previous page
    update();
    Get.back();
  }
}

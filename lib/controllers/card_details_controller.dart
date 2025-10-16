import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:timberr/models/card_detail.dart';

class CardDetailsController extends GetxController {
  final _supabaseClient = Supabase.instance.client;
  var cardDetailList = <CardDetail>[].obs;
  var selectedIndex = 0.obs;

  String getLastFourDigits() {
    if (cardDetailList.isNotEmpty) {
      return cardDetailList.elementAt(selectedIndex.value).cardNumber.toString().substring(12);
    }
    return "XXXX";
  }

  Future<void> fetchCardDetails(String userId) async {
    //fetch Card Details
    final response = await _supabaseClient.from("payment_methods").select().eq(
          "user_id",
          userId,
        );
    final responseList = response;
    for (int i = 0; i < responseList.length; i++) {
      cardDetailList.add(CardDetail.fromJson(responseList[i]));
    }
  }

  Future<void> getDefaultCardDetail() async {
    final userId = _supabaseClient.auth.currentUser?.id;
    if (userId == null) return;
    //get default card detail
    final defaultShippingResponse = await _supabaseClient.from("users").select('default_payment_id').eq("user_id", userId);
    int? responseId = defaultShippingResponse[0]['default_payment_id'];
    await fetchCardDetails(userId);
    if (responseId != null) {
      for (int i = 0; i < cardDetailList.length; i++) {
        if (cardDetailList.elementAt(i).paymentId == responseId) {
          selectedIndex.value = i;
          break;
        }
      }
    }
  }

  Future<void> setDefaultCardDetail(int index) async {
    if (selectedIndex.value == index) {
      return;
    }
    selectedIndex.value = index;
    await _supabaseClient.from("users").update({'default_payment_id': cardDetailList.elementAt(index).paymentId}).eq(
      "user_id",
      _supabaseClient.auth.currentUser!.id,
    );
  }
}

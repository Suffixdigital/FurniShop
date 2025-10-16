import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:timberr/controllers/card_details_controller.dart';
import 'package:timberr/models/card_detail.dart';

class AddPaymentController extends GetxController {
  int cvv = 0, month = 0, year = 0;
  String cardNumber = '';
  var name = "".obs;
  var dateString = "".obs;
  var lastFourDigits = "".obs;
  final _supabaseClient = Supabase.instance.client;
  final CardDetailsController _cardDetailsController = Get.find();

  Future<void> addCardDetail() async {
    final insertData = await _supabaseClient.from("payment_methods").insert({
      "cardholder_name": name.value,
      "card_number": cardNumber,
      "cvv": cvv,
      "expiration_date": dateString.value,
      "user_id": _supabaseClient.auth.currentUser!.id
    }).select();
    if (_cardDetailsController.cardDetailList.isEmpty) {
      _cardDetailsController.selectedIndex.value = 0;
      //set default user Card Id in the database
      await _supabaseClient.from("users").update({'default_payment_id': insertData[0]['payment_id']}).eq(
        "user_id",
        _supabaseClient.auth.currentUser!.id,
      );
    }
    _cardDetailsController.cardDetailList.add(
      CardDetail(
        paymentId: insertData[0]['payment_id'],
        name: name.value,
        cardNumber: cardNumber,
        cvv: cvv,
        expirationDate: dateString.value,
      ),
    );
    Get.back();
  }
}

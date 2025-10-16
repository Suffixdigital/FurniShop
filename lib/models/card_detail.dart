class CardDetail {
  int paymentId;
  String name;
  String cardNumber;
  int cvv;
  String expirationDate;
  CardDetail({required this.paymentId, required this.name, required this.cardNumber, required this.cvv, required this.expirationDate});
  factory CardDetail.fromJson(Map<String, dynamic> json) {
    return CardDetail(
        paymentId: json['payment_id'],
        name: json['cardholder_name'],
        cardNumber: json['card_number'],
        cvv: json['cvv'],
        expirationDate: json['expiration_date']);
  }
}

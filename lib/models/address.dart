class Address {
  late int addressId;
  String fullName;
  String address;
  String zipcode;
  String country;
  String city;
  String state;
  Address({
    required this.addressId,
    required this.fullName,
    required this.address,
    required this.zipcode,
    required this.country,
    required this.city,
    required this.state,
  });
  factory Address.fromJson(Map<String, dynamic> json) {
    return Address(
      addressId: json['address_id'],
      fullName: json['full_name'],
      address: json['address'],
      zipcode: json['zipcode'],
      country: json['country'],
      city: json['city'],
      state: json['state'],
    );
  }
  String displayAddress() {
    return "$address, $city, $state,$zipcode";
  }

  Map<String, dynamic> toJson() {
    return {"address_id": addressId, "full_name": fullName, "address": address, "zipcode": zipcode, "country": country, "city": city, "state": state};
  }
}

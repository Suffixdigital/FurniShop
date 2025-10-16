import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:timberr/models/product.dart';

class HomeController extends GetxController {
  final _supabaseInstance = Supabase.instance;
  var selectedCategory = 0.obs;
  var productsList = <Product>[].obs;

  Future<void> changeCategory(int categoryId) async {
    print("HomeController: selectedCategory: $selectedCategory categoryID: $categoryId");
    if (selectedCategory.value == categoryId) return;
    selectedCategory.value = categoryId;
    await getProducts(categoryId);
  }

  Future<void> getProducts(int categoryId) async {
    final response = (categoryId == 0)
        ? await _supabaseInstance.client.from('products').select()
        : await _supabaseInstance.client.from('products').select().eq('categoryId', categoryId);
    List responseList = response;
    // print("product response: ${responseList.first}");
    productsList.value = responseList.map((productResponse) => Product.fromJson(productResponse)).toList();
  }
}

import 'package:get/get.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:timberr/models/product.dart';

class FavoritesController extends GetxController {
  var favoritesList = <Product>[].obs;
  final _supabaseClient = Supabase.instance.client;

  Future<void> fetchFavorites() async {
    final userId = _supabaseClient.auth.currentUser?.id;
    if (userId == null) return;

    final response = await _supabaseClient.from("users").select("favoriteslist").eq("user_id", userId).maybeSingle();

    // Safely extract favoritesList
    final List<dynamic> favoriteIds = (response?['favoriteslist'] as List?) ?? [];

    favoritesList.clear();

    for (final productId in favoriteIds) {
      final productResponse = await _supabaseClient.from('products').select().eq("product_id", productId).maybeSingle();

      if (productResponse != null) {
        favoritesList.add(Product.fromJson(productResponse));
      }
    }
  }

  Future<void> updateDatabase() async {
    await _supabaseClient
        .from('users')
        .update({'favoriteslist': favoritesList.map((favoriteItem) => favoriteItem.productId).toList()}).eq("user_id", _supabaseClient.auth.currentUser!.id);
  }

  Future<void> addProduct(Product product) async {
    favoritesList.add(product);
    await updateDatabase();
  }

  Future<void> removeProduct(Product product) async {
    favoritesList.remove(product);
    await updateDatabase();
  }

  Future<void> removeProductAt(int index) async {
    favoritesList.removeAt(index);
    await updateDatabase();
  }
}

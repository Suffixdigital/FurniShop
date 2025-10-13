'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3bff87bda3570c2c23bc0716b7b6e9ad",
"assets/AssetManifest.bin.json": "459205ae31704a2a0fa09508b75839af",
"assets/AssetManifest.json": "f3acbd8e60c5a65d2462aff5c58cbb81",
"assets/assets/card_bg.png": "bf19eb3cb65fc0602e56d89de281229d",
"assets/assets/default_avatar.png": "41f632c911a713ed26d3c694fcc58cf5",
"assets/assets/dhl.png": "93046587a25ce28638433df1c7a242c9",
"assets/assets/fonts/Gelasio_Bold.ttf": "182c19b03c947075995a9e9a46dace60",
"assets/assets/fonts/Gelasio_Medium.ttf": "1bb0eaf190490f12c0e76b80e9741a71",
"assets/assets/fonts/Gelasio_Regular.ttf": "72a4ca62f31d230271575890444397a6",
"assets/assets/fonts/Gelasio_SemiBold.ttf": "225936e8957344a8748a1e3ca9aa322d",
"assets/assets/fonts/Merriweather_Bold.ttf": "79ea53fed59f391498dfc6f2fbea97c2",
"assets/assets/fonts/Merriweather_Regular.ttf": "e2f219e63a575a41e10f991e9c95819a",
"assets/assets/fonts/NunitoSans_Bold.ttf": "4aa57ec2fb7650165f1f2fef64d61b2e",
"assets/assets/fonts/NunitoSans_ExtraBold.ttf": "6d4e31b91a86fc3766f24db02fac9556",
"assets/assets/fonts/NunitoSans_Light.ttf": "b73b535f97c0f02d92a0648e8ebc10fa",
"assets/assets/fonts/NunitoSans_Regular.ttf": "05f376c99895ad997a49c579d385d589",
"assets/assets/fonts/NunitoSans_SemiBold.ttf": "6c7de16a9fe7eeb51fa02e3532c8c119",
"assets/assets/furniture_loading.gif": "a02f339698d9f6d1a9ca1b225492cff0",
"assets/assets/furniture_vector.svg": "4f5b313177a95d931be81aeb5eb5f58b",
"assets/assets/icons/armchair_icon.svg": "5e1a01db53c39367cc7edf7ec37b9bc6",
"assets/assets/icons/bed_icon.svg": "ca2d2c0cb48d56634efb9cb238fd5e45",
"assets/assets/icons/cart_icon.svg": "e109b1dff82d75f06d0302dd30ab5559",
"assets/assets/icons/cart_icon_grey.svg": "e56d72e90b1b0fb966c3c6d3410f76b4",
"assets/assets/icons/chair_icon.svg": "71eab1d3e4495fffbd740ac943e042de",
"assets/assets/icons/edit_icon.svg": "643623455fd746e62f940c3afcb5606a",
"assets/assets/icons/favorite_icon.svg": "ac4b303fb5554142c66336c53f990f82",
"assets/assets/icons/favorite_icon_black.svg": "9b631ddaa55a1fea4085bdb7f1817cbe",
"assets/assets/icons/favorite_selected_icon.svg": "e29d7eac66b06328d6da1ae605071a7d",
"assets/assets/icons/home_icon.svg": "b898921cc1b11cdcd26226d46d4fec5a",
"assets/assets/icons/home_selected_icon.svg": "00144da9cdb69a6aa12254ec714bc16b",
"assets/assets/icons/lamp_icon.svg": "3b1ccb195d2d4a55e62c839d53e89ac9",
"assets/assets/icons/logout_icon.svg": "bdafe37d3b41e274304b8571592f4de1",
"assets/assets/icons/mastercard.svg": "2e0d5273ea91987577142a4a0ce22bf0",
"assets/assets/icons/mastercard_bw.svg": "88c8c94e25a8dea6073b4b69b4e0911b",
"assets/assets/icons/notification_icon.svg": "32b4301765995cc97a233b13f57f707b",
"assets/assets/icons/notification_selected_icon.svg": "ab3708c3412c34fe2eceaabc0a2ed7bb",
"assets/assets/icons/password_visible.svg": "d356134e3f51b68ec0e3d5117baad115",
"assets/assets/icons/person_icon.svg": "59d743f88b7fedbcf01bc2095030f846",
"assets/assets/icons/person_selected_icon.svg": "a0a6e8714e3d63008ec5315eddf5aa2a",
"assets/assets/icons/popular_icon.svg": "220e800647fa74056228b94e97889937",
"assets/assets/icons/search_icon.svg": "1a7a77c1bd31eeeefd3b41e6c348c047",
"assets/assets/icons/search_icon_grey.svg": "825104965530e473a608511f7c236d5b",
"assets/assets/icons/shopping_bag_icon.svg": "32c08ecb441a2fc1a8a5eef323212787",
"assets/assets/icons/shopping_bag_icon_black.svg": "6c5979764485acc23c114ffa8650cc0d",
"assets/assets/icons/star_icon.svg": "3af37a79b5b7b7661e27dce5213b01f0",
"assets/assets/icons/table_icon.svg": "b33e86e3390a6b494a4ded0d4343f7ee",
"assets/assets/icons/visacard.svg": "e7114e9c7ac6ce3f41355d1d1f6b0fa0",
"assets/assets/lottie/splash_loading_animation.json": "34a16afc61004644462b60a76cfe41f8",
"assets/assets/onBoarding.png": "fd52182d5b18234bf1aad3132ad0e737",
"assets/assets/order_success.svg": "e8c91f645ef0e12b617b215de78ede78",
"assets/assets/sample.png": "1fbff2bf74d353e86bce5ea6aa069a7f",
"assets/FontManifest.json": "77bf4879edfab53823226876f3ce2f89",
"assets/fonts/MaterialIcons-Regular.otf": "a268d5b99b61de761c9f136ee267c0ed",
"assets/NOTICES": "1b3a248bfe1c7ca731cbd555630771ae",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "936ded702b22d63038d6bd8bebce9c79",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "136ce17b5ec9ca149987d7a1e20d76b6",
"/": "136ce17b5ec9ca149987d7a1e20d76b6",
"main.dart.js": "88f47db61f932a07579f81a7b61524ea",
"manifest.json": "493bcc807a9f6eff25d77fce385bf347",
"version.json": "33cf26600c29b0e0f44e5b61842d978a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

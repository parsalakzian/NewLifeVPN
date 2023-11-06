'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "f1c275e0de3c1f08bfd09256a5afd59d",
"icons/Icon-maskable-192.png": "0fbbd198d6d0ba7862014f0237e927a0",
"icons/Icon-512.png": "7fb5d8cb8f66df7642be1bb9ee4c7238",
"icons/Icon-maskable-512.png": "f7a25efa665281800c6929d87a74e2ec",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin": "fb85d4e4e11c39bc0dcc190e03ef762c",
"assets/assets/icons/linkedin.svg": "2d331657904bdd184bd0cd82140c871c",
"assets/assets/icons/instagram.svg": "4c7ce1b03d039e985ccc196099fde994",
"assets/assets/icons/youtube.svg": "363aa8888c16180c5aed84a805a9a6b2",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/readme/screenshots/projects.png": "bb211ced90d5b173a286cdca3270f533",
"assets/assets/readme/screenshots/2.png": "a6a2e70c1753f7c7b7ea5656fca67b8e",
"assets/assets/readme/screenshots/home_dark.png": "b361c4f7a912d36dd6469489d355cff4",
"assets/assets/readme/screenshots/projects_dark.png": "9e451ef2503b6fadf6ccace45ac72aa5",
"assets/assets/readme/screenshots/6.png": "89b602b45ac731fbdc45ba4fd3aa0af1",
"assets/assets/readme/screenshots/3.png": "9dc3e1bd815c6289feb600db2538c309",
"assets/assets/readme/screenshots/1.png": "cd943333ef7fd47e0672803381eb5135",
"assets/assets/readme/screenshots/home_light.png": "5c8f8704e8f0cec4b9fd20a883444f3e",
"assets/assets/readme/screenshots/7.png": "30d495f195cd5da39fd23f91cd8270ae",
"assets/assets/readme/screenshots/4.png": "f84847ec1becc537b718b939b06b428b",
"assets/assets/readme/screenshots/5.png": "7ebaa68cfa4fd494df14d7d3af243765",
"assets/assets/images/threads_dash.png": "08100648951860bc4d25d7cb1d8419c7",
"assets/assets/images/logo.png": "bce07d82746809c80e65166e417f2695",
"assets/assets/images/sun.png": "18dfc536ae939604c3e4c6dadb535429",
"assets/assets/images/moon.png": "47009ed126ab16e8d4fd17310c27197a",
"assets/assets/images/epona_dash.png": "9ed73aeaa9a08d7658612e2828d63169",
"assets/assets/images/linkedin_480.png": "9a642c22165f5b493639d2f8101efac9",
"assets/assets/images/maviarge.png": "6356689e75d1f5ef3294c3ca570ec1b6",
"assets/assets/images/bdo_light.png": "41864209c0fccbf6553c31e7d7cc4187",
"assets/assets/images/github_850.png": "062344fc16dc0a101cd62205f58aae0c",
"assets/assets/images/tenant_dash.png": "a01a95bb9d628b92b29385ccadcbd100",
"assets/assets/images/black.jpg": "f9074fffd52042b93f097aa3bd77b008",
"assets/assets/images/bdo_logo.png": "f19c0de7068aa43db644749e0516eafa",
"assets/assets/images/barista_dash.png": "43b335dfaedf338f085669d0aabd4d08",
"assets/assets/images/github.png": "49ce671d71ef625b9e90aca6286bb1ce",
"assets/assets/gifs/roll.gif": "292ce0e19c14944b73b30333b861e740",
"assets/assets/gifs/projects.gif": "f194c53cb22cc3a9ac706fefe2ac4bd8",
"assets/assets/gifs/fin.gif": "6f5c58cbdb45d470fb21054337bbe0a4",
"assets/assets/gifs/work.gif": "05517ebd2de835de4f408e686a2206c8",
"assets/assets/gifs/go.gif": "6bd21d6d541c056c5ebc23e6cbfd05eb",
"assets/assets/gifs/game.gif": "d36145f244c94db34a35d3e198a59589",
"assets/AssetManifest.json": "7dae66cb43e27b0516495dca34c605bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/fonts/MaterialIcons-Regular.otf": "e74d4d885cfab8b66fc0df3fe763bd36",
"assets/NOTICES": "89b9ae392bb433a28be258144730bbbd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"favicon.ico": "7099f83565603bb1472d6c041a951624",
"index.html": "7c895254ab2636c9ee9029c1d0afe019",
"/": "7c895254ab2636c9ee9029c1d0afe019",
"main.dart.js": "c0881671b3d334ae8fcce06c39f63770",
"manifest.json": "fbefd8f9ed3444f68bb1201f486fc18c",
"version.json": "061cf9c9feae7e0cf5b6c6c33f279d9c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

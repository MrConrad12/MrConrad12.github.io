'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dc27f860af7e8176102af119a2fccef4",
"assets/AssetManifest.bin.json": "551de1ce87d69d25a46b2211dcba64de",
"assets/AssetManifest.json": "135150622ddc9d8e79172d26af17dce5",
"assets/assets/audio/8BitPlatformerLoop.wav": "f6b03e1f08c979b5ea451635495ab4c3",
"assets/assets/audio/animal.wav": "dc80b96370b38e5ec8db4f26caf28a65",
"assets/assets/audio/attack.wav": "d2370fef96138870385d8cdbc6e1daaf",
"assets/assets/audio/attack2.wav": "fa1ef9ab5dab052f15196ca51b4e466a",
"assets/assets/audio/bird.wav": "40a12034db40f1f766119d25d1bc4dee",
"assets/assets/audio/enemy_hit.wav": "7912047aee7fb9335b0494cd44a70bdf",
"assets/assets/audio/gameBgm.wav": "44f6d945298c93ab18ea842a47d1280f",
"assets/assets/audio/homeBgm.wav": "2cfab62ac3cf0ecc3268ec58e2eac78c",
"assets/assets/audio/hurt7.wav": "1d3abcc01a999fc13bbb91e75a15c72c",
"assets/assets/audio/jump14.wav": "117ba1ac434eaba4dc894b0bfe16e42e",
"assets/assets/audio/readme.md": "e35e5729070bad556b3903efb60e9aa0",
"assets/assets/audio/seed.wav": "e76545ec30877f73ff7bb078a1f7ed67",
"assets/assets/audio/Selection.wav": "ba94fa7c8758467fceba901b07f602d2",
"assets/assets/audio/waste.wav": "06fa357ff0bce29fbc9505d781199179",
"assets/assets/brand/icon.png": "998cf37541e11b5289ca16f44e850ab9",
"assets/assets/brand/wildrun_logo.png": "d65fbc0d5ff54bf3fb6a220ecccc1b2c",
"assets/assets/fonts/Audiowide-Regular.ttf": "e9ee108cd098321ac27b95ebcebfcdf6",
"assets/assets/fonts/Oswald-Bold.ttf": "c95751378db3c5c8bfd993b164e13422",
"assets/assets/fonts/Oswald-Regular.ttf": "b299a657c45aa257f1458b327f491bfb",
"assets/assets/images/animals/bird.png": "abfccd7c2130b5163196e391455d5c6f",
"assets/assets/images/animals/hog.png": "b4d0cdd7db722dd02304a90b7c9fab1b",
"assets/assets/images/animals/snake.png": "2b9601849c0b9338844e24ed986dac22",
"assets/assets/images/animals/squirel.png": "5640cd12ea2b1586bcb1df82f0bba562",
"assets/assets/images/animals/wolf.png": "f7304240fd535950556fcaac7cbbd3c4",
"assets/assets/images/credits.txt": "9add3ab43810366911556dfbe90b88e4",
"assets/assets/images/effects/attack.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/effects/glowingball.png": "a3f246eb18c36d7830186f140f1b1711",
"assets/assets/images/enemies/CO2.png": "29fd2d7ccf48a3a506ac20ebff867e37",
"assets/assets/images/enemies/enemy.png": "565cf994976f43d6ea957f8674a26631",
"assets/assets/images/enemies/radioactivity.png": "18c00de4ccc9a5026237c945ff226a4c",
"assets/assets/images/items/Apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/items/arrowTree.png": "e09b17cb10372c8145ee5ba5e5e89131",
"assets/assets/images/items/Bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/items/Cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/items/coin.png": "b6a2cf64300f71eb74ab867a9081ef63",
"assets/assets/images/items/Kiwi.png": "3d903dd9bf3421c31a5373b0920c876e",
"assets/assets/images/items/Melon.png": "eb6f978fbf95d76587bcf656c649540b",
"assets/assets/images/items/Orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/items/Pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/items/seed.png": "b37b2d2f26a89838b3f6749eb4e5d8d0",
"assets/assets/images/items/Strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/landscape/ground.png": "9ef87d85eeafaab30427558f071c2cd3",
"assets/assets/images/landscape/ground_center.png": "d36dbc2a8d442df9b34439c079965441",
"assets/assets/images/landscape/ground_left.png": "c940cc49e494ccf01518eb9bb3c2c212",
"assets/assets/images/landscape/ground_long.png": "c06358e802b3723b2aee53b000098f90",
"assets/assets/images/landscape/ground_right.png": "78248dcad51ad4e3ec49b8bf4d0bf65e",
"assets/assets/images/landscape/Idle.png": "64c275b1b14a4c8cd49088ce8ebf0db5",
"assets/assets/images/landscape/platform_center.png": "c9d191d7d42428c117c0754a38373e44",
"assets/assets/images/landscape/platform_left.png": "4b5ee02c1530a8e652f3d01ab72dfac9",
"assets/assets/images/landscape/platform_right.png": "ad46d12dd320164a39daa1d0c5fbe7fc",
"assets/assets/images/landscape/spiked.png": "23dc73da891d246d43b1df2f6a7a63d9",
"assets/assets/images/landscape/spikedPlatform.png": "304ae77606a66b8e14285bf7c683aa09",
"assets/assets/images/landscape/tile.png": "493088508ef9454b0e2d4ecff83d76b1",
"assets/assets/images/landscape/tree0.png": "654f1294cb105ee8a9e2a862b039e932",
"assets/assets/images/landscape/tree1.png": "7e8ee99215797de396132d485c71b399",
"assets/assets/images/landscape/tree2.png": "00106c195d8a053b9006bb3a6f698b9f",
"assets/assets/images/landscape/tree3.png": "d98698d53b8def3eeb55a94dbdf782c4",
"assets/assets/images/landscape/void.png": "08246a928fedd18a2e33d13fd9e6fe63",
"assets/assets/images/landscape/waste.png": "b717937a2b6edf9c96e106d846f014b3",
"assets/assets/images/parallax/plx-1.png": "7d576806cc2d5ef2b910dffdeaae3b49",
"assets/assets/images/parallax/plx-2.png": "53d9e937ac94613d7d408fcc50fa67c7",
"assets/assets/images/parallax/plx-3.png": "b50ebfb91131365a479f229c0325c033",
"assets/assets/images/parallax/plx-4.png": "58662c8e1ed9bd74717dfa54df862788",
"assets/assets/images/parallax/plx-5.png": "552941c58ccaa9782ebee6496e77e003",
"assets/assets/images/parallax/plx-6.png": "07d8adae2bb5c695f99b111fd0d8e5d0",
"assets/assets/images/parallax/plx-7.png": "e4d459ed192bf106dc8bbd3a04a54509",
"assets/assets/images/parallax/plx-8.png": "07b9aeda90128cb6e63954f56d0af5d7",
"assets/assets/images/players/player1/player.png": "84fa3679a0687d75995f189c95fb854b",
"assets/assets/images/tutos/attack.png": "950a05dd5dbad6015cf926650fa1b64a",
"assets/assets/images/tutos/double_jump.png": "297444c5634ff4e61e57fcd3678c2f5d",
"assets/assets/images/tutos/end.png": "4cbcd80f7f522ea64a1220db5f2dcd50",
"assets/assets/images/tutos/enemies.png": "4088c1609da591a46d338b8af7e84e03",
"assets/assets/images/tutos/fly.png": "d4dcd25f8eabadf1561cbbfc6519d127",
"assets/assets/images/tutos/fruit.png": "fe3fb9a250e803d0a60210f8d8fa692b",
"assets/assets/images/tutos/jump.png": "58ed22d10df612f2156c0645cf5f31c9",
"assets/assets/images/tutos/plant_tree.png": "1fc8e45b45aa4a56a2581eb03d36dd47",
"assets/assets/images/tutos/play.png": "620c237311e94be79ac7d2f11c314e50",
"assets/assets/images/tutos/squirrel.png": "9068731f2282adcbec676667d89644cb",
"assets/assets/images/tutos/waste.png": "6b8dde77d86ee31ec7ba2e023845d4d3",
"assets/assets/images/tutos/wolf.png": "1f672708007083cf2d796bcc971899e9",
"assets/FontManifest.json": "7b14f44408b36e665d06b1ce6db15db6",
"assets/fonts/MaterialIcons-Regular.otf": "862422a52fca8788e484d0f566949a7e",
"assets/NOTICES": "559d98c756d5cc51b8af29c1187cd159",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "aebe7e1dd113654dd97bad0a51436091",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "da0138cb2741df4d51d7450805b93320",
"icons/Icon-512.png": "0cdd35873d6e9282fe9af51127d06e49",
"icons/Icon-maskable-192.png": "da0138cb2741df4d51d7450805b93320",
"icons/Icon-maskable-512.png": "0cdd35873d6e9282fe9af51127d06e49",
"index.html": "f72ffdff81aaaade1f25bd8b6686a7a4",
"/": "f72ffdff81aaaade1f25bd8b6686a7a4",
"main.dart.js": "51f5c124f15a52fe84d6f40a56e80878",
"manifest.json": "caf8d531b7b9b3811ca08e2c72779ca3",
"version.json": "88fe428e633ee29908e9deba92de5e75"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

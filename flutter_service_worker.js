'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f33ea38ae1e7bceb15cc886e8c9dcbaa",
"index.html": "3a1fb2dce7112a02524303fb9c49ebb4",
"/": "3a1fb2dce7112a02524303fb9c49ebb4",
"main.dart.js": "c53fbfd80855ad712a5fae0780bd2e32",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ebba05e9eb32b7fe34245fb4acb6ae0a",
".git/config": "4cf2c5cfd8e08013cc59fa042938f94f",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/ae/817e8ed34b537ffad7c9b2f6b660b1defb0f0a": "e9ee77efd29362f012d443d755008d2d",
".git/objects/c9/9ec1dc68df1e19ac2f101f780dd6e2f341175e": "c3cdd131d5b01c872bceeed929703971",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/4e/b68cbf14f5c0d298be6e6302172b21a612af9e": "5ab8cd7129201f0aad71a0e0e124b390",
".git/objects/20/6935bdf81c51627cc9387a56ed7998354fdc7a": "ada3bd5461795905d2bf3359193061a2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/89/8effbdf4c8b89d643ecf1ac6f1ea424e735d63": "393bfb04cfc9820d84b1f1d07c913905",
".git/objects/87/185ea172cff2061032ffb0bad15ed53dc05801": "1be116eb54cf35e7b56710a0f63656de",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4c/59f1a360fb9329d4d99bf2b10295d346d8405b": "4a83033133654ffd889c29dd02bd527d",
".git/objects/4d/6938667969657d0cb7f78bcc2e6bf08e5449b5": "925329f63af80d78bf72d12b610b86d5",
".git/objects/75/09dd4c969ae89dd05a44b8d00662b19492302d": "657d7d5fe5d2526a36dfd8097acc1cfd",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/34a3d3f264d2001ef66b0fbb6e48abcc52a9cc": "0e8e81a5fef4e5625a5b9172633d9195",
".git/objects/38/4f53432ba4ec83de0e72ce09f5f73c9875d5af": "e74510c2c969f1040be0f9aa7f169045",
".git/objects/91/4248403c64dd6c9b829e3244857325061b5418": "cb86d2de40c10a27e0a5247404686d3c",
".git/objects/01/c57a36d488657361880a6171b0c13859b80584": "41501685efbee75f0c4bb3d4e80a0ec1",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/b1/53cded08001fd64d73565cb702248cde1f7618": "9a86b3e05e25cc3d5ebfe0ff7724af3e",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/f51035df6dda000df6612f3eec4753cecb273c": "5bb0763555528dbdc9a58a0299a05fe8",
".git/objects/b9/2e1ae1c3ce4abe34c55981f46afcbcddc6dfbd": "ea6e9439db9bae08a9bc97574556d2c5",
".git/objects/c3/ebd204508d6a24a968bd2ca42f40fe43c6e4ca": "968ef85097978c2efbf0bdf4010da748",
".git/objects/e1/a8d59eb32c53ec4ff79940b1e56b3648e87307": "67513431fb960e9d7d37839db7fd6ebe",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/4a/f0f954ec894c5255fb24b5010271780c0e3a5b": "7ece69e63df7d8e95492838176bc2ee8",
".git/objects/4a/2cd2c6d9ae8dcd21aeb11fef4b730184e5d8e5": "49ded8eb36272322b97f9848c76e8ef4",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/6fdf2f547dfe7fdf1aa9808b8fd831bce8e72e": "b3dee9dd27a516ef4185bc0343405202",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/82/9a90c91b8df24a05f7c421cc0e2a5247c4ff76": "fcea09630735f8ddad95f011b715a74a",
".git/objects/49/a551f4eeacd829b8b2af05a0cc3dbb47828f30": "1f90c3ccc7ff72f0d22c12936a5309d1",
".git/objects/49/e904660b2fb3b58d1983f05a71e146298b364c": "c662f6b6344309221251b19204f4ea0a",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/40/be021942ef608842b7e503bfc4971be15bf088": "e05de3d96b57959397a286e45c6856bd",
".git/objects/13/f920efdf08b4878f3e3aaa0ba31ad9271344ed": "0863e7d89bda65ddf8ff6e7510bb531b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd783bfbf3930c4c1a298c87076bbd24",
".git/logs/refs/heads/master": "cd783bfbf3930c4c1a298c87076bbd24",
".git/logs/refs/remotes/origin/master": "ea690fe41df24a7f0afe4fc42b5b6ab3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "8c82fbcf2f043576b86f4092d6443e5b",
".git/refs/remotes/origin/master": "8c82fbcf2f043576b86f4092d6443e5b",
".git/index": "298141037cb20aa9e054dc7b2c65c53f",
".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
"assets/AssetManifest.json": "a5ea5526b150fb66537ce8457052ec24",
"assets/NOTICES": "daa59887ba5dd96973c3c4c0d4b4b605",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/appstore.png": "98c922e36b7da7d0b23d00975a5aeb00",
"assets/assets/images/resume.docx": "43276aaf96a30608a2c294d92ce63fe4",
"assets/assets/images/myimage.jpeg": "00e291a1ec41bbd12286ad495eca6a08",
"assets/assets/images/googlePlaystore.png": "88c54782480ce9d6136328e6c501fd6c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

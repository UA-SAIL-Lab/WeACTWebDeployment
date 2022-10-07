'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0dc0019f867d471b056c48a43edf9d63",
".git/config": "5a6977e886f9bc613027c40cbc588511",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7e603fcd55ec7b6488907f0f83e52527",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18a8b1821e52c4f1a5c7392b4568e342",
".git/logs/refs/heads/main": "18a8b1821e52c4f1a5c7392b4568e342",
".git/logs/refs/remotes/origin/HEAD": "15f8d0d94860936d52acbc24eb1ad814",
".git/logs/refs/remotes/origin/main": "aeac82c476f4d14e5ee62940ddfd7257",
".git/objects/03/b3866921ea252d57a8c5fc2e090b26882d9fdf": "e78f2ef22646e4f02903e932bfc43410",
".git/objects/1a/d1dceef9397b05dea4e9d150d97b88b173e48b": "8600e97cbbfadc7b41ac703115932999",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/51/759d52089c08a7e1c45c34f3ada614e699bdda": "31e7262bdf7caeb8f6dd97121d7f08f2",
".git/objects/52/ce53675863b7dd15512043865ec0421507a5c2": "d3ed3a1d56994ec6c53955787c4f7361",
".git/objects/62/0092e94ef38702f56237b7bf1e7aa2dac2b5bf": "0c714284b8a28662bae5d3418e8b925b",
".git/objects/6c/d6678375fd60c150a744582bbeb8fd60e4d0ac": "3de82e851dca2b39b8816d0df4ddc3f2",
".git/objects/84/6fe437396cd80216a21bc891395ab610a9b0b9": "28e16a662e45aaa766c5de214a1d1032",
".git/objects/95/68bb67a46aa1c417446cab80084cd82bc98b59": "6763c64a4b5037aaa6884f8864e63a80",
".git/objects/96/60a17f2cde1eb73e959e33e8d7e14b5eeb37bd": "2d907078c4d298a6d9db1a34498ff1be",
".git/objects/c2/df5a8852af9d6f9dbc79eb8a613c22d12aa883": "a0103e513a454d3d5b1e9b0181bf576a",
".git/objects/d9/24943d1c7e8b4a192c90441bd3cdbb906a1583": "75d1f7fccc5f4ac7e89963008ea9367c",
".git/objects/e4/d528d5cd7430f555a84c5d384d7191b8878260": "8d7851910aad787285fa45b263b7f19b",
".git/objects/pack/pack-2c2bce3dcc4f9646335952f07679823ea166e251.idx": "8bb15c3af157f4eaf2056f2546b14198",
".git/objects/pack/pack-2c2bce3dcc4f9646335952f07679823ea166e251.pack": "8214da469bb821c496d8cefaec35bfb9",
".git/packed-refs": "fd58998c0b7d84137456c74dc03a56c6",
".git/refs/heads/main": "d5d28211fffe7f3701aab9cf0cb29e76",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d5d28211fffe7f3701aab9cf0cb29e76",
"assets/AssetManifest.json": "31c974fc26ee4710041fbec3f0e27fd6",
"assets/assets/10MinuteMeditation.mp4": "5c2235a8515bc1db79bfbc9a83205e7d",
"assets/assets/AcceptingEmotionsMeditation.mp4": "6bbed55cce50ec94ca07b8783c35c4a7",
"assets/assets/ACTModule1-Orientation/BasicConceptsACT.m4a": "8d6662445870ea8f31283c9a2f5e0aba",
"assets/assets/ACTModule1-Orientation/Orientation.m4a": "c204ab378fbcc616f8073472dad85b52",
"assets/assets/ACTModule2-CreativeHopelessness/ChineseHandcuffs.m4a": "a04c8d6feedba4e5a4baf780e4ff5df1",
"assets/assets/ACTModule2-CreativeHopelessness/InstructionsCreativeHopelessnessWorksheet.m4a": "185c79a223398e911ccc899ed79b656e",
"assets/assets/ACTModule2-CreativeHopelessness/InstructionsGuidedExerciseDifficultFeelings.m4a": "96acabf44ae4907429e869e1316d11aa",
"assets/assets/ACTModule2-CreativeHopelessness/Introduction.m4a": "afe8e4566415e2c700385d891be225fa",
"assets/assets/ACTModule2-CreativeHopelessness/ManInHole.m4a": "ada9ec2f36eadbef983174c1c6ae496e",
"assets/assets/ACTModule2-CreativeHopelessness/Quicksand.m4a": "34572e4b2515f4058b0ee52210b21764",
"assets/assets/ACTModule2-CreativeHopelessness/TugOfWar.m4a": "43e038e9cd4dc52240de9a26a1e9041d",
"assets/assets/ACTModule3-ControlvsWillingness/InstructionsForControlProblemWorksheet.m4a": "2efb8ef25e9ea2e4fcf1f9b1bfacfc37",
"assets/assets/ACTModule3-ControlvsWillingness/InstructionsForLeavesStream.m4a": "9bbbeb9351088287a4b9eda148aaf3e3",
"assets/assets/ACTModule3-ControlvsWillingness/InstructionsForStruggleSwitch.m4a": "ae2f0e26ec851dc5e0180aeb2bac0356",
"assets/assets/ACTModule3-ControlvsWillingness/InstructionsWillingnessWorksheet.m4a": "93030a428a926246cf34254729b64b4a",
"assets/assets/ACTModule3-ControlvsWillingness/ThinkAboutVanilla.m4a": "6807b270d977258004dd212f524905c5",
"assets/assets/ACTModule3-ControlvsWillingness/ThoughtDistancing.m4a": "381c4d801a47f465350fee3021ea1cfd",
"assets/assets/ACTModule3-ControlvsWillingness/ThoughtsAndFeelings.m4a": "c11f083be70c05a143059affb6c23438",
"assets/assets/ACTModule3-ControlvsWillingness/WillingnessAsAlternative.m4a": "91dce8c6949eafee90fc591787cbf394",
"assets/assets/ACTModule4-Acceptance/CaseScenarioPart1.m4a": "49fcbde8009f3b96d08e24a7693f25f4",
"assets/assets/ACTModule4-Acceptance/CaseScenarioPart2.m4a": "2d8d0d691f69f375f5320b56f353e32a",
"assets/assets/ACTModule4-Acceptance/CaseScenarioPart2Continued.m4a": "c78102d6d9cc0f6d768a1c93513299dc",
"assets/assets/ACTModule4-Acceptance/InstructionsForAcceptanceVideo.m4a": "4bf253b964519f604be8b6534ed337e4",
"assets/assets/ACTModule4-Acceptance/InstructionsForCopingWorksheet.m4a": "b3cd415b34935ba9d5691f5232cee477",
"assets/assets/ACTModule4-Acceptance/InstructionsForWillingnessWorksheet.m4a": "d365cc4aa010552ce8cb6ccca9027bd4",
"assets/assets/ACTModule4-Acceptance/ThoughtsAboutHer.m4a": "a06e2afbe9fec21ef59c9b91c8e236a9",
"assets/assets/ACTModule4-Acceptance/ThreeStrategies.m4a": "6ca4d0cf246511ca36074db5340a56bb",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/InstructionsForSelfAContextWorksheet.m4a": "7a7b5f1dc0a05265decf7942ffc597db",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/InstructionsObserverSelf.m4a": "3b299a50f6385bf0d1c048b2e2a84a55",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/LemonExercise.m4a": "479bdc2647bfa207454cdacaeba9b462",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/ObserverSelf.m4a": "30989307f327287087093a0dd0934f2e",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/ObserverSelf13Min.mp3": "c6a69a0938877abd1e06affc5de5b464",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/PassengersOnBus.m4a": "2f86a64650d7db9d1565fdbca87be575",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/BodyScan.m4a": "8ee79e215ac9c874715c7365f13698ea",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/InstructionsFor10MinMeditation.m4a": "e259e4fb8ce4b0d70bfaa26a8640ace0",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/InstructionsForSelfWorksheet.m4a": "72c6d68409800d689fd1c931d6ff1fdc",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/MindfulBreathing.m4a": "e7557cd0331eaeace62ea43b50c6c3c0",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/PhysicalizingEmotions.m4a": "f559659373f09e9773ed803caf21c274",
"assets/assets/ACTModule7-ValuesAndCommittedAction/CommittedAction.m4a": "deb46ceac23c21e07c7ea7748a52ee97",
"assets/assets/ACTModule7-ValuesAndCommittedAction/InstructionsForActionPlanWorksheet.m4a": "1316b0394efa1c997b7b6ff93205b718",
"assets/assets/ACTModule7-ValuesAndCommittedAction/InstructionsForReflectingWorksheet.m4a": "8555fc11a521c3b0cbf1710c9ffb84aa",
"assets/assets/ACTModule7-ValuesAndCommittedAction/InstructionsForValuesWorksheet.m4a": "fce1abf99191377bc7aa5b9fc0a298cc",
"assets/assets/ACTModule7-ValuesAndCommittedAction/ValuesExercise.m4a": "8b6678db8209dc3ce808285a5a6546e5",
"assets/assets/ACTModule7-ValuesAndCommittedAction/ValuesInACT.m4a": "706ca6dbffb958f9a596277d05c72707",
"assets/assets/ACTModule7-ValuesAndCommittedAction/ValuesInACTContinued.m4a": "4f3c73d0d173de151f53e28135399ec2",
"assets/assets/ACTModule8-ValuesAndCommittedActionPart2/ChooseToAct.m4a": "bb26c363611c0b7b661cbaecdc3e9ec3",
"assets/assets/ACTModule8-ValuesAndCommittedActionPart2/Instructions.m4a": "87d7f494ed370dc7612a1987eb79b0a9",
"assets/assets/ACTModule8-ValuesAndCommittedActionPart2/InstructionsForActionPlanWorksheet2.m4a": "72894380b5c00e8a6fac69ee6dd9902a",
"assets/assets/ACTModule8-ValuesAndCommittedActionPart2/InstructionsForAdditionalPractice.m4a": "ec740618ba921910d91c98d8cfca184e",
"assets/assets/DemonsOnTheBoat.mp4": "573c3cbbe394ec74cb6cd0bdc7caeb5e",
"assets/assets/GriefLoss.mp4": "d2682a50aa623ff477f08e7f4692f46c",
"assets/assets/LeavesOnAStream.mp4": "0a297a075c56b1c1d19e457e07facf7d",
"assets/assets/MakingSpace.mp4": "437a682218ecb793596b4ca089c955a1",
"assets/assets/ObserverSelfExercise.mp4": "de949940eb0dd1281558730339dc4384",
"assets/assets/PracticeExercise1.mp4": "02bfa7e9c7e70574e31631a03f05a542",
"assets/assets/PracticeExercise2.mp4": "10633ed464c920156f08b272f345f111",
"assets/assets/PracticeExercise3.mp4": "168f521f9d275cfd2f2dd6c9c3bbc584",
"assets/assets/PracticeExercise4.mp4": "9db40c3e9953efd2b988fb99f75a2846",
"assets/assets/TheStruggleSwitch.mp4": "a8487963e6554e9cf11b7c0275a8f279",
"assets/assets/Training-Acceptance/AcceptanceAnxiety.mp3": "931fd2b57b8794ccb3af4ab9a6ce56f9",
"assets/assets/Training-Acceptance/LocatingEmotions.m4a": "e45a6c9f6e5a0539b21c812ff83fe598",
"assets/assets/Training-Acceptance/MeditationWorkingDifficulties.mp3": "f1c3b3308429f45368a634e085a48c43",
"assets/assets/Training-Acceptance/MindfulnessEmotions.m4a": "55b01ddd61114c17ed959486e9df488c",
"assets/assets/Training-Acceptance/PhysicalizingEmotion.m4a": "f4a06937df6afc22adc93a17bdfc1386",
"assets/assets/Training-Acceptance/TakingAction.m4a": "2e2a1e565d90908b90a69ed699d707e4",
"assets/assets/Training-Defusion/DisobeyOnPurpose.m4a": "384c71b7e6257aef2e965ac91360be75",
"assets/assets/Training-Defusion/GiveTheMind.m4a": "f31b5c694153942006da9a6d323874a8",
"assets/assets/Training-Defusion/LabelingThoughts.m4a": "eaf1d07464d2e2a2efcb4943680a36bf",
"assets/assets/Training-Defusion/MovieScreen.m4a": "be8969bccb99040d72018d07169bfa4b",
"assets/assets/Training-Defusion/SushiTrain.m4a": "e5a0204c7ea384cda874445731a011f1",
"assets/assets/Training-Observer/BlueGlasses.m4a": "a4af4dd768a0339c468c1b896da166af",
"assets/assets/Training-Observer/Chessboard.m4a": "e397a708a7d445f354c10d92fc4bde00",
"assets/assets/Training-Observer/ObserverSelfMetaphors.m4a": "38261ad0cbb5152b4d5547075ad6fa71",
"assets/assets/Training-Observer/TranscendentSelf.mp3": "13d7a2bc9ebbf56dbc69356a04b79082",
"assets/assets/Training-Present/Anchoring.m4a": "79272d891f89469b9f6a20b65db016d8",
"assets/assets/Training-Present/BodyScanMeditation.mp3": "7aa14bd00fa5c9ed3e3c436a03898f04",
"assets/assets/Training-Present/BreathingMeditation.mp3": "2481bfa3f2f83a7ed5e992f3b346c1fe",
"assets/assets/Training-Present/MindfulActivities.m4a": "becfff09869de8ec73c64be18c2efb2e",
"assets/assets/Training-Present/MindfulBreathing.m4a": "fd76d9d438a852a32bd736013f74f221",
"assets/assets/Training-Present/MindfulEating.m4a": "1544f00ac08140eaa1f81ec021228476",
"assets/assets/Training-Present/MindfulnessOfBreath.mp3": "0b4bada3f6580cc1966bd1fcab565bad",
"assets/assets/Training-Present/SoundBodyMeditation.mp3": "c9c2cde0d1475fc0dc340480c4111d5a",
"assets/assets/UnwelcomePartyGuest.mp4": "d4b6bf5096663ae3e0f34f64133d3b36",
"assets/FontManifest.json": "797892e376b6ed09513e57e4841de795",
"assets/fonts/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MaterialIcons-Regular.ttf": "0f900b1d6585ac3d1cdffa01f420472e",
"assets/NOTICES": "bae33b1a8e31b887000f39e1f022cd71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/packages/youtube_player_iframe/assets/player.html": "3e1f3fad6eb85b36d87c8cf245306e0e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9d96ffe461d67b8d1c7973d275be8426",
"/": "9d96ffe461d67b8d1c7973d275be8426",
"main.dart.js": "965b0db40047a734cfe1724bd1121aa4",
"manifest.json": "17866c5dc455070d0c4934d9b0e50cc4",
"README.md": "b692dcfc18c6e8670666b4d6802cad8e",
"version.json": "504bcbc18337c9784bdf96e4bf415224"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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

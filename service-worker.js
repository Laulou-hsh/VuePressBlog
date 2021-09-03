/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4621b33062fdd1b0012fb363ec5f85f0"
  },
  {
    "url": "about.html",
    "revision": "d3cfeb4be63302a390843ae953f4b972"
  },
  {
    "url": "assets/css/0.styles.c1ad4519.css",
    "revision": "74968c1abf7e1c163119469a70d9f395"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bubbleSort/bubbleSort.gif",
    "revision": "b7d216a5b292cf3a5412bbc7fbb56a9e"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/img20210302/matchAll.png",
    "revision": "34221e8670c3cca10de7bc7b582ed8cc"
  },
  {
    "url": "assets/img/img20210302/promiseallSettled.png",
    "revision": "be06d9dcfce414c7509fba9c4684928d"
  },
  {
    "url": "assets/img/img20210302/promiseany.png",
    "revision": "6c2fccce297ee0767ed0551105ae903b"
  },
  {
    "url": "assets/img/img20210302/shuzifengefu.png",
    "revision": "0a1496e66753e2bf4bfbe8b639d71fa2"
  },
  {
    "url": "assets/img/img20210302/zhengze01.png",
    "revision": "a3f357dcba75729c1222d459be3854cb"
  },
  {
    "url": "assets/img/img20210302/zhengze02.png",
    "revision": "494e0422bb0f0967d36aedaf202e4dc0"
  },
  {
    "url": "assets/img/img20210302/zhengze03.png",
    "revision": "c42d93882eb3c3def6c2944280a82edc"
  },
  {
    "url": "assets/img/img20210302/zhengze04.png",
    "revision": "cdb4c8c14fe2733cb2d877bdab8b46bd"
  },
  {
    "url": "assets/img/insertionSort/insertionSort.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "assets/img/selectionSort/selectionSort.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "assets/img/备案图标.png",
    "revision": "d0289dc0a46fc5b15b3363ffa78cf6c7"
  },
  {
    "url": "assets/js/1.a5b8cb58.js",
    "revision": "7704762c8bb778941770119f8916fd40"
  },
  {
    "url": "assets/js/10.82ff6fcf.js",
    "revision": "6940a10ad53a0dfafad613ed7b3c755a"
  },
  {
    "url": "assets/js/11.3283863c.js",
    "revision": "9167cddaa322cc5c7d9f48d83e8006ff"
  },
  {
    "url": "assets/js/12.4f8af16c.js",
    "revision": "bc69dcf009098854a1bc67fb054e8772"
  },
  {
    "url": "assets/js/13.147c7f26.js",
    "revision": "0902952180defbfd99bdf7b533515746"
  },
  {
    "url": "assets/js/14.45f590e2.js",
    "revision": "4fda73a3aa9db86cb7805d4bf49e61dc"
  },
  {
    "url": "assets/js/15.c9a251fd.js",
    "revision": "88cd13ea76b81fffcd054f2cc714cc3d"
  },
  {
    "url": "assets/js/16.c4037784.js",
    "revision": "0785fd0efedffb1052ee2f438f217bcb"
  },
  {
    "url": "assets/js/17.d705fdb2.js",
    "revision": "70aea9600daf1b2972ea48b2284ddf54"
  },
  {
    "url": "assets/js/18.f8b1ecc4.js",
    "revision": "de858dedec74004575280b5c247b182a"
  },
  {
    "url": "assets/js/19.44389c18.js",
    "revision": "80208924ed608d2965e687bf84cb8c19"
  },
  {
    "url": "assets/js/20.a472e235.js",
    "revision": "a86e650b73596b26a4e769ce51ccd1d8"
  },
  {
    "url": "assets/js/21.5c9f2d9e.js",
    "revision": "2aad1726214d97b2682b3d6b504da93c"
  },
  {
    "url": "assets/js/22.6503b715.js",
    "revision": "269fb502c8af479c0a6159f84a18e9d2"
  },
  {
    "url": "assets/js/23.4183a0aa.js",
    "revision": "fde0af3bdedb3ba7fc825efb16634128"
  },
  {
    "url": "assets/js/24.ab245858.js",
    "revision": "73d3f799459aa0c2234b6a99a352999d"
  },
  {
    "url": "assets/js/25.50b90a6e.js",
    "revision": "6f7be51056d4f5271943d79979c16f24"
  },
  {
    "url": "assets/js/26.87b06f76.js",
    "revision": "bcacfba15e20183454e53fd445c807d7"
  },
  {
    "url": "assets/js/27.35b36083.js",
    "revision": "aa2bd0e07d8877dce55fd6796cac0eb8"
  },
  {
    "url": "assets/js/28.e2c7f897.js",
    "revision": "99ccd75002bd2eb055a5205d723ea113"
  },
  {
    "url": "assets/js/29.33b28dcb.js",
    "revision": "22e68347787e9f79c434bd58084cc525"
  },
  {
    "url": "assets/js/3.8591dd69.js",
    "revision": "c2cbc06b1ff5b5cde3c78aa8ecb11165"
  },
  {
    "url": "assets/js/30.8adcf99e.js",
    "revision": "214ce1e332b7956ac63e75cf95ec5d1c"
  },
  {
    "url": "assets/js/31.909ca879.js",
    "revision": "ebf961ad898a5a28906e25d42c78d26a"
  },
  {
    "url": "assets/js/32.eda236b3.js",
    "revision": "37ab0fc15931dbbf638439262b3e924e"
  },
  {
    "url": "assets/js/33.7a3bb749.js",
    "revision": "71f51f24f2ca202681fdc36c5f62cdfe"
  },
  {
    "url": "assets/js/34.b28c5306.js",
    "revision": "0a2940022fc44888add58b6e3a4d25c0"
  },
  {
    "url": "assets/js/35.7663c3e5.js",
    "revision": "7e3876a50f4cfb80bf2314204662abe3"
  },
  {
    "url": "assets/js/36.7dd1e62f.js",
    "revision": "494671cb6fd58690863b3005b82de4b2"
  },
  {
    "url": "assets/js/37.485491c8.js",
    "revision": "ced58afa0854ecc324a76b2bb5569607"
  },
  {
    "url": "assets/js/38.3df124fb.js",
    "revision": "375e7605922d8971ed09e85a9c03ea35"
  },
  {
    "url": "assets/js/39.9349ca00.js",
    "revision": "c752eeb3970f176a1fada43eaf8a9ea9"
  },
  {
    "url": "assets/js/4.4d1fa8af.js",
    "revision": "ca559824db9e77ad1f784fab34ca0811"
  },
  {
    "url": "assets/js/40.b341128e.js",
    "revision": "47593ca3f5f61e7a3d57df370bc50fb2"
  },
  {
    "url": "assets/js/41.df9ec8e4.js",
    "revision": "0355aebb6c63b331fdab09d25946b1d6"
  },
  {
    "url": "assets/js/42.9fd2042d.js",
    "revision": "fbce5259244d1220eb4a38e5cb831633"
  },
  {
    "url": "assets/js/43.dea69cdf.js",
    "revision": "0dfa4d5406fe2db440cb63002ee8e17b"
  },
  {
    "url": "assets/js/44.9bb054e3.js",
    "revision": "2201d6094fcd94a941b6d909144799cb"
  },
  {
    "url": "assets/js/45.2a4cce2d.js",
    "revision": "1f0e7de49980d1f7992999d0965ed3ef"
  },
  {
    "url": "assets/js/46.148a5ccc.js",
    "revision": "e0a6bedba08827882978c564a5db6873"
  },
  {
    "url": "assets/js/47.59c54cd0.js",
    "revision": "59bd8f7610973b2d3a87d05882f32431"
  },
  {
    "url": "assets/js/48.576755b4.js",
    "revision": "6cd5168ee0756729eb93c7c4166cf9a1"
  },
  {
    "url": "assets/js/49.39eec52c.js",
    "revision": "1d14e3b6e02b2913573018a4695c9a62"
  },
  {
    "url": "assets/js/5.fb9a3a27.js",
    "revision": "7c2d82fc352344cb090d4ec4c5a84edf"
  },
  {
    "url": "assets/js/50.da62090e.js",
    "revision": "7676e32c2623003c5b8822009b9690c3"
  },
  {
    "url": "assets/js/51.92f0644a.js",
    "revision": "ea00fe781e489ff939a97af1e00a7c23"
  },
  {
    "url": "assets/js/52.65dea3d9.js",
    "revision": "7e9ee847e1b2ae7c1460f270c27a66ed"
  },
  {
    "url": "assets/js/53.7f6a55f3.js",
    "revision": "3f43c4855a8a5d114e1b69d9ee8a545f"
  },
  {
    "url": "assets/js/54.8ca47605.js",
    "revision": "98bac5c289ebe5ac9ac75d360873a79f"
  },
  {
    "url": "assets/js/55.68d0f4d6.js",
    "revision": "9fff2587b0098b4bd74d02acf76feb7d"
  },
  {
    "url": "assets/js/56.d2dd1298.js",
    "revision": "dd55335ebda68eb9ef6a12e41a2125f3"
  },
  {
    "url": "assets/js/57.a6bc1cf1.js",
    "revision": "2ef55ac0711ef8eb9fc346665f695e06"
  },
  {
    "url": "assets/js/58.39b792f0.js",
    "revision": "7e008bfba25f328908bd06c27226c08a"
  },
  {
    "url": "assets/js/59.6c63ef5e.js",
    "revision": "403664b211cd7c8a3e7f690f62510391"
  },
  {
    "url": "assets/js/6.454b9f78.js",
    "revision": "526717839e75df4636f1d8d89a9d481a"
  },
  {
    "url": "assets/js/7.99b046f4.js",
    "revision": "3ffca269f24559396b36ac48228143bf"
  },
  {
    "url": "assets/js/8.54c4d1cd.js",
    "revision": "29261bf471f78a24b6243e571afd5fbc"
  },
  {
    "url": "assets/js/9.f1e5c7cb.js",
    "revision": "57c0ed75d79fde4017cc47187648401f"
  },
  {
    "url": "assets/js/app.7e836d29.js",
    "revision": "be701a2fbe5999c53fbb3e754df70918"
  },
  {
    "url": "categories/index.html",
    "revision": "5e4108f3d7c4ad94ab04bdcf3fed4d93"
  },
  {
    "url": "countup.html",
    "revision": "198d31b1e23de070eb93493ad5682cf3"
  },
  {
    "url": "css/20210803.html",
    "revision": "5d09582016ba40c0234ebf870d21d703"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "8ccb760c770226b5da46eeb5481d6179"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "f7aa8bbf081afbb6306dd5c0ec30b3cc"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "ff68d84662480a7602a305b3cbff16cd"
  },
  {
    "url": "css/index.html",
    "revision": "d6a159b0cffb8cbc750e8995b8fee990"
  },
  {
    "url": "firstblog.html",
    "revision": "237137ef41591ac56593b3659342d6c2"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "b1289043f5a935fa5e8516864c989b3b"
  },
  {
    "url": "html/index.html",
    "revision": "f27bb61941426e43a9bb397ad63b2c59"
  },
  {
    "url": "index.html",
    "revision": "5fdee5347e0d17a412b9138da1a0dc7b"
  },
  {
    "url": "interview/20201127.html",
    "revision": "35f2b4600d142ddd6e60222cd45567af"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "9d1a0cfce380030789e811737a90017d"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "b23682b8bb65296e2e57f8c5d9751e7e"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "34880b7cb514abe75a91ba65e49e2588"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "29b7649977d7278e6c392173f4b1a878"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "6552f4fbaabdb2527b5ad3f892316534"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "62c80f113ca8c3712c408a549e819c22"
  },
  {
    "url": "interview/index.html",
    "revision": "2f676887a0e0b66092a7cc758244cdb6"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "adee3d8b8689819d8231b296bad479bf"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "98f83f9e965c094c2d74b3bf4dfa9a91"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "73efac94ed73730bcd59616027d15c0e"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "1ce22bc3e735e03e8580d0a2719d4856"
  },
  {
    "url": "interview/TypeScript/20210903.html",
    "revision": "f2a7f9d9d51f4bc5e8e9b652990e43f1"
  },
  {
    "url": "interview/TypeScript/index.html",
    "revision": "34b0099f7761bd59e32846aacbb1b41e"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "fdba6cb43adb7975bfae83b7eef07762"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "b66aa2aa6125326feaf28366d4c31081"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "39e826668ed3cb5c5fbfbfcf63ec4923"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "9c9d38d13867de1173c6eb08e57df03b"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "66d4c3ee8fefae8193fcb06ca1d1389d"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "1c8554791e21930afac7c980f123e7d9"
  },
  {
    "url": "javascript/algorithm/03_insertionSort.html",
    "revision": "8936e3cce982d9caea9ce554949da781"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "109ea256107191c9e10d73647fc3fded"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "094b1bc0020d9159b3966572c535c6f4"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "687150baa35974392f7fb387338aaca1"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "900f00db4c41b420676677a52d706f84"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "74ff69a77c53793c476efee30756e014"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "5d023ec724cc5f391d1a7380c7227208"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "844c7597187fefa9468097575754d5a2"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "81254056426606d29d6cf751975fcca7"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "9c46a95dce9fd7c0c7bede5ee67fe4f2"
  },
  {
    "url": "javascript/DailyNote/20210823.html",
    "revision": "8dcf63da97d69f5ea90c87a8d894fe55"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "c56d81103d5f8e28d6357a1628c435b5"
  },
  {
    "url": "javascript/index.html",
    "revision": "d096073065a095f997611aec2e3f1346"
  },
  {
    "url": "LICENSE.html",
    "revision": "f97995c2ccd23fec696c7a4c71d928b4"
  },
  {
    "url": "quanxue.html",
    "revision": "9ab31d5142b00fbd1799dec647edeb6e"
  },
  {
    "url": "tag/index.html",
    "revision": "7992409d08eea6c520058fe3ffd13c50"
  },
  {
    "url": "timeline/index.html",
    "revision": "4dbaab881417af807e3897c37112d53f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

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
    "revision": "d5f04b130701703acdf890cd87d57c5d"
  },
  {
    "url": "about.html",
    "revision": "eecb9d87ce7a27012b614ef8f7261ac2"
  },
  {
    "url": "about1.html",
    "revision": "7ffb38257373c71596bcb90f01f0163e"
  },
  {
    "url": "about2.html",
    "revision": "875b6dcb9169956c83a0ebc443a6cec5"
  },
  {
    "url": "about3.html",
    "revision": "ed49f8320072ed5ad82efea4bf5e5614"
  },
  {
    "url": "about4.html",
    "revision": "94db17f4d30e2febddc3eb7ef3932116"
  },
  {
    "url": "assets/css/0.styles.3d65f779.css",
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
    "url": "assets/img/selectionSort/selectionSort.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "assets/img/备案图标.png",
    "revision": "d0289dc0a46fc5b15b3363ffa78cf6c7"
  },
  {
    "url": "assets/js/1.8e11c6e8.js",
    "revision": "c76bd415c955d030b03da40f044e9063"
  },
  {
    "url": "assets/js/10.a015494c.js",
    "revision": "a749ecbd440a83750892d14211bcf380"
  },
  {
    "url": "assets/js/11.e05fcd6e.js",
    "revision": "afb2a36a2c78e90024f92e46decc9930"
  },
  {
    "url": "assets/js/12.a1ece265.js",
    "revision": "926d8ec85a703c3d447b405ca033a9ce"
  },
  {
    "url": "assets/js/13.0a269060.js",
    "revision": "df0c73e109a8d773d5cfcb1a819ede90"
  },
  {
    "url": "assets/js/14.5394493a.js",
    "revision": "5312173552317937298fcaca28d3a49c"
  },
  {
    "url": "assets/js/15.4c31baa3.js",
    "revision": "4568917d9aca3072598f49724309611c"
  },
  {
    "url": "assets/js/16.e1dcca9a.js",
    "revision": "ec5b07a409fc269fcef2dad24962244e"
  },
  {
    "url": "assets/js/17.7585bfc3.js",
    "revision": "5725136799b64b3022706f37bfcc3e6f"
  },
  {
    "url": "assets/js/18.dc901306.js",
    "revision": "4ac9b483b59dd03adbffd12d05a709c7"
  },
  {
    "url": "assets/js/19.52d00104.js",
    "revision": "2b667c00abbb4c6c36bfb5e093ec6e01"
  },
  {
    "url": "assets/js/20.9fd57936.js",
    "revision": "eeaa36e6badddded6b948da93612d03f"
  },
  {
    "url": "assets/js/21.727d2814.js",
    "revision": "b18c3d32828b87de351f90b1e909ef1a"
  },
  {
    "url": "assets/js/22.591c25f2.js",
    "revision": "e23a177d07a0f22dfea1e76e9bcb94d5"
  },
  {
    "url": "assets/js/23.4a361e07.js",
    "revision": "886e67db6c5415c2a93cda92997933de"
  },
  {
    "url": "assets/js/24.2b3300a7.js",
    "revision": "a189c277c6b9f4920ee36c00b880dd17"
  },
  {
    "url": "assets/js/25.019a1c9f.js",
    "revision": "9f862cbf7cb4f1b07917d261c60ab4e2"
  },
  {
    "url": "assets/js/26.9c4a236c.js",
    "revision": "c95a721cca451185b5c7318dc67fbde4"
  },
  {
    "url": "assets/js/27.e6a2a881.js",
    "revision": "e363f3a7fa38d05002f2bc489acdcf1d"
  },
  {
    "url": "assets/js/28.8b091a03.js",
    "revision": "5aca6a0168a5a2979c428674184b464c"
  },
  {
    "url": "assets/js/29.eba1064e.js",
    "revision": "31ef1492628f4f2d288fecd1d4efc07c"
  },
  {
    "url": "assets/js/3.b3ccca7c.js",
    "revision": "079991cc3c37e17a2857a1551caa65db"
  },
  {
    "url": "assets/js/30.0be39524.js",
    "revision": "ed341d3710c167a343a18082fc74d298"
  },
  {
    "url": "assets/js/31.973eb8f8.js",
    "revision": "9903de3006d5bf53010ee809e23d2d56"
  },
  {
    "url": "assets/js/32.2f401948.js",
    "revision": "04160bfdca9d9dcb27c34cf7760f7146"
  },
  {
    "url": "assets/js/33.0988180b.js",
    "revision": "555ce9dc68957e8d42df1a4cb32e84fd"
  },
  {
    "url": "assets/js/34.23a03406.js",
    "revision": "d76ea99cb86e464ce6ae0e06bfa0db42"
  },
  {
    "url": "assets/js/35.a5f2f62a.js",
    "revision": "28e6b97a923ff37193c38a048b0d6217"
  },
  {
    "url": "assets/js/36.b585f860.js",
    "revision": "294e0cec62cd88225f258abac0822cad"
  },
  {
    "url": "assets/js/37.eff63663.js",
    "revision": "e6285be93a4b11b937843c272f7d35ce"
  },
  {
    "url": "assets/js/38.c589a683.js",
    "revision": "521566dcbe3fc6f9650c30f85d1ab6d3"
  },
  {
    "url": "assets/js/39.ab6c72a1.js",
    "revision": "b42a1b00992db884a9dd9d97d0f0af32"
  },
  {
    "url": "assets/js/4.ecea50c1.js",
    "revision": "743515003f031e39d9b819355fab819f"
  },
  {
    "url": "assets/js/40.0cafd471.js",
    "revision": "c590632a1f65fc9efaae3d35bb6cdfa1"
  },
  {
    "url": "assets/js/41.cd66cf2d.js",
    "revision": "c8809756ef2ddd1601df5b77e0787b88"
  },
  {
    "url": "assets/js/42.1c11445c.js",
    "revision": "47d853dd477cacf369ea64f95d8f4229"
  },
  {
    "url": "assets/js/43.e5d2183a.js",
    "revision": "959678cd6b54dd1132ff6514aea67618"
  },
  {
    "url": "assets/js/44.a9a3ac0e.js",
    "revision": "0fab333445a7d8e23b13ab6e6c6537d8"
  },
  {
    "url": "assets/js/45.f120d2c3.js",
    "revision": "e2a157a586a1bcf021992abd59bb99a8"
  },
  {
    "url": "assets/js/46.d6c4c20b.js",
    "revision": "caa2142c48a510f1c0026a505f697194"
  },
  {
    "url": "assets/js/47.f643c567.js",
    "revision": "e1e8b5e0bdb1b48bed8596faf4687ba0"
  },
  {
    "url": "assets/js/48.73252f15.js",
    "revision": "e64e5e4fa1c2c820b058718a8dc4905f"
  },
  {
    "url": "assets/js/49.317424f4.js",
    "revision": "a8032ced15284bd6c6808b0c832fa6a0"
  },
  {
    "url": "assets/js/5.756e2749.js",
    "revision": "da76e0b4919b75e053d6ddb315f35a52"
  },
  {
    "url": "assets/js/50.20b86630.js",
    "revision": "60e56031de60600a18a2c30ed6366f62"
  },
  {
    "url": "assets/js/51.5197db81.js",
    "revision": "1b1e8ae3500a6d6522f9b379add83dfd"
  },
  {
    "url": "assets/js/52.185f9dfa.js",
    "revision": "ac9848787c1d77181d4134037f71bd83"
  },
  {
    "url": "assets/js/53.3362d93b.js",
    "revision": "9039b3d2aa6c5a64aab06f5ea4ba1363"
  },
  {
    "url": "assets/js/54.5e8ed0d4.js",
    "revision": "96165a349e94040fdabaafccba36e0de"
  },
  {
    "url": "assets/js/55.0cb0e34b.js",
    "revision": "bbe96af9378a2d554aa8933949a48893"
  },
  {
    "url": "assets/js/56.807c93b3.js",
    "revision": "1a27a9e65fe65104801b6ca6173c0922"
  },
  {
    "url": "assets/js/57.9c6b3723.js",
    "revision": "9127aeac7977607498bf600240ef23f1"
  },
  {
    "url": "assets/js/58.aa9af8d7.js",
    "revision": "88737fee25b5ddf5a9d1b59d1578eaa0"
  },
  {
    "url": "assets/js/6.2db525e3.js",
    "revision": "96f0feb0531310d983208ca57875bb03"
  },
  {
    "url": "assets/js/7.98e3f06e.js",
    "revision": "3e47fef1b864432834028092fcb4cb79"
  },
  {
    "url": "assets/js/8.b8639e2d.js",
    "revision": "08c28ab74b4382dcb964f2671088676b"
  },
  {
    "url": "assets/js/9.7e5f11fc.js",
    "revision": "c1d8dda8d70b32dfebc06ee4c3e9ec4b"
  },
  {
    "url": "assets/js/app.15df492e.js",
    "revision": "03c52f36c7b53571f98265b1f1671697"
  },
  {
    "url": "categories/index.html",
    "revision": "65138b1ee3208e580fd685e6fb70a793"
  },
  {
    "url": "countup.html",
    "revision": "6e10e518ba69e70047e12cac7a9d7e18"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "a47782f035a0fb0b90bbbb1078654878"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "b909c793a9f78030f3bd17426eb32a37"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "2089d35a5bfdbeb0a6140fc7c48cc406"
  },
  {
    "url": "css/index.html",
    "revision": "955392ba15709e1aa1c5d20d93f5b0e6"
  },
  {
    "url": "firstblog.html",
    "revision": "64ad158cdb8511a8ff3cff060443590f"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "15bec0c3d8dcd79dedfa792e3c63f2c6"
  },
  {
    "url": "html/index.html",
    "revision": "91246de4f5e816090c549a738d7365c8"
  },
  {
    "url": "index.html",
    "revision": "334e950991dfd83c11f60d97ee9d0c85"
  },
  {
    "url": "interview/20201127.html",
    "revision": "99c916c441e94db1431ec3c0221288f1"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "dfd8713f452e181bd7b158b12869f7a2"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "ba7b7ef71d03a7f4aa4789a057512108"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "9ce4f4b8acfaf8d126d7be2548c285af"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "8aac4caef3150a059014956b596e2769"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "0edf46503ca2dcd011fdda9878aaf0a2"
  },
  {
    "url": "interview/index.html",
    "revision": "0b707964d6ef32c1f08bf9c90ff6ea63"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "ac4b135076a4934bf3d0e5edc20210d3"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "1723ae3be703a63bca8c1add22cbc542"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "28192013e570aab1e585ce88667258e7"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "9b8f0897b98ca6219301181e665de059"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "748c9e89ccdc49b91c6862665ef265a0"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "15d669a52aef17c13e889ba7693a619a"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "ccc8a73bf280043d1956cf23a38919ac"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "c1bbc96ca0ab61f709769cf67381c4c2"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "e1e5b5b4a665185710d99f63a99a59d1"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "f2b0d6eff0dc233a64bb4a7cc5295a3e"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "acf8fd8d6f73e6975842f3c7b99f406a"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "98ffaee20cd41468ab1518cf9ea1a46e"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "9fd6b0b61e0e3c22dcedebf0c3deed0a"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "f2c4760c4cf53181528326fa90cc7928"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "6235c5fee4592c658a7d1d77ce2167f0"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "5e25b0288ee0c6c510589eded6f82f8b"
  },
  {
    "url": "javascript/index.html",
    "revision": "759cf823a5b389cd3688d737db38788e"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "3fd627909bf88e52b1cad20a20f627e9"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "a89fbf39ae4bb8a4db6dced4e643fdcf"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "f92b8c6844043683dbbb62f5a0f2bd0e"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "f9a7ea332a314162c782c32d550049b8"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "21a25ac2e9c19d865785241471f66ed4"
  },
  {
    "url": "LICENSE.html",
    "revision": "6b74d02987501c565c71f4333859ff63"
  },
  {
    "url": "quanxue.html",
    "revision": "b2b8bc3deb7bea289936351dd4cdf452"
  },
  {
    "url": "tag/index.html",
    "revision": "38512c88c0ddd435fe9a469b3ad4d3b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "2621a3cab527fa5f8c2d626f3901240c"
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

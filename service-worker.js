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
    "revision": "dddc97326a9e1d10e687e483a7937322"
  },
  {
    "url": "about.html",
    "revision": "cfbef803b84763cd062e9e92ba92b50a"
  },
  {
    "url": "about1.html",
    "revision": "89f70b9a4f6be81aebc6206152174021"
  },
  {
    "url": "about2.html",
    "revision": "31710300614708f1ac85c957904bfccf"
  },
  {
    "url": "about3.html",
    "revision": "eb621156a07c97062dd663046a297b01"
  },
  {
    "url": "about4.html",
    "revision": "35e4b6a1f45d187e5c3fb9f771750589"
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
    "url": "assets/js/18.4568d3d0.js",
    "revision": "62bd61e55e890b82abe3e814f3730b25"
  },
  {
    "url": "assets/js/19.659cba27.js",
    "revision": "ef066c521d87dcd828f0d3481f5463b2"
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
    "url": "assets/js/49.a4d02efc.js",
    "revision": "fbc9b6ffc4fc5a0359731427434e1920"
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
    "url": "assets/js/app.ecff9e6e.js",
    "revision": "3866f3519cf23c27573249bda7b0aceb"
  },
  {
    "url": "categories/index.html",
    "revision": "d5943054ffb0b9c7ae857223946e991a"
  },
  {
    "url": "countup.html",
    "revision": "980a4a751217bfb40d6e9aa00b8ebf34"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "2bf266db136d03923c68102c298a463e"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "ead6e93558f0fd0dd7a185b597cc8f6a"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "5503ffcb9d99a1035eaa4018c1ecaa4e"
  },
  {
    "url": "css/index.html",
    "revision": "d30804b0d5e598b7c74616db5be15fb6"
  },
  {
    "url": "firstblog.html",
    "revision": "8f86bd986f1806794b2d36321f885e29"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "578a56672af0d82138e383813c8e679a"
  },
  {
    "url": "html/index.html",
    "revision": "38c43ff0608f8db1a0373c719d509026"
  },
  {
    "url": "index.html",
    "revision": "3dfeec41e990873f0947c501f86394b3"
  },
  {
    "url": "interview/20201127.html",
    "revision": "a158bb8d44a154363b6c25ddf3090d28"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "aad533cddd143104a546805aea96ad7b"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "1b81f13b577bcf156c83e89ef21eb3d9"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "1b279de20fa854eff0993bdd02cebf59"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "b531584b750e0d9d909086ce68a5a83c"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "e51fcd5277d811e69edcf6607e96a467"
  },
  {
    "url": "interview/index.html",
    "revision": "dfbdb1c4624882d52fd0bb7d4c148233"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "656776afb256fc060eaba5b31d92a214"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "23e24afc465e29775b9f179d9908f84d"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "dcc575fbcc28c72b4004d277c95f7b8b"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "9aaa049f2e62f4864b6e9ebd6092586a"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "e94493312e429483c153365736da9d48"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "9fc66594e5ac05fd156a1ec016b3e2f3"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "972a547756fbbee31e197b918aee02de"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "43cb79b41c691623daef1d87a40c0279"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "894098023423dc5ffd887a9175b9305b"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "31efedf943f82c8e05afcd9afc642f86"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "292958662fae3b4020bffa059689f3e1"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "9d4aa1f150bd0a4d5d29cf4070f66986"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "d391b416ef94001b360f3a35fe9284eb"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "343f3301cd0d00b74e01f04b23881d13"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "43f37428c95c8ce0ea99f694bd1a3099"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "91edf1679054d8e3e026ad7d40fc4d16"
  },
  {
    "url": "javascript/index.html",
    "revision": "b31e43db0d342e111e5c869cc8a565d9"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "63a699f58da0a8756c330f5ff344a6cf"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "f429df51cd64c605366a3d95d9cb5c6c"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "356c52f25852d77af4c660031a4a74a1"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "8ae9f0862a7e666bf960ce169ed66921"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "5a184f277fe8a1ba276b2186c7602f30"
  },
  {
    "url": "LICENSE.html",
    "revision": "625604664c293273523181f07e6002f8"
  },
  {
    "url": "quanxue.html",
    "revision": "c07a7c1496e2c9fe7bd2cb85998f2706"
  },
  {
    "url": "tag/index.html",
    "revision": "0f1aa879d021ffdd7f126c3a4ed98d9d"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9879658e8f970a082696cd253813878"
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

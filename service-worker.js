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
    "revision": "9192b94de13304fad2297d8e2afba41a"
  },
  {
    "url": "about.html",
    "revision": "878fc68878e917b63c724c44dc14ae7c"
  },
  {
    "url": "about1.html",
    "revision": "1cdb9cf8c03aba3bacab8746c7bd07ef"
  },
  {
    "url": "about2.html",
    "revision": "cc6c484c77c53a56e05d7136ddaf1a11"
  },
  {
    "url": "about3.html",
    "revision": "b6aec4267b21f7910bb89765bea443b8"
  },
  {
    "url": "about4.html",
    "revision": "19d39c6445a3747381bfe3c58171a51b"
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
    "url": "assets/js/31.faba2e6d.js",
    "revision": "b8fc89e8369429f5d261c8ca5ead65ba"
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
    "url": "assets/js/app.0df728ca.js",
    "revision": "2a15621dd5bff905973e5dd103b05eef"
  },
  {
    "url": "categories/index.html",
    "revision": "ac34e4089ce5003b1c783691d6bde23d"
  },
  {
    "url": "countup.html",
    "revision": "d047e8daa83bfa02255ace790907655b"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "df709325bb3c783594cc6e0836bc28a3"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "03bf552e30ff5c7a847e6f730ff18c22"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "94e865dd3d8ef73c3bcc52264097ef24"
  },
  {
    "url": "css/index.html",
    "revision": "a57a5af9811045d2b9b82bf61b9bfede"
  },
  {
    "url": "firstblog.html",
    "revision": "0e72cc5abbe7c2a492efb0551a0e7211"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "5a81eae1abe4e334a42bb2f2687500ef"
  },
  {
    "url": "html/index.html",
    "revision": "516bb55be3382748dad7c7e6e86704a1"
  },
  {
    "url": "index.html",
    "revision": "2f435c61c19a2aae8de7fbbffcf6883a"
  },
  {
    "url": "interview/20201127.html",
    "revision": "70495eb06de96d5f7b48adceb42c8fdb"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "1ca6a89ad0531f3842c0fc3deffcf6c6"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "8f671570ce2d9010070bb1f50a5ec9ce"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "db3f0b52fcb0124c66819794aabf5168"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "4ebfb7bc29e85d555f9cf97c4b553f25"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "ec94e2ec5ed77fcceb333fdcec379226"
  },
  {
    "url": "interview/index.html",
    "revision": "a37451d18e722a6f83b77b6b28fba14d"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "d6e949fbe64dc3feb6a2d82887a34794"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "89092b902a7d5283fdb7f9398d052661"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "4279eb8bcda5a87ef8bc2dee0675bb3e"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "62f3390f08dfa4162d8bd3d9c3317d23"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "0de988bc88653cff0300a8f9ccabd875"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "dccb22b58f35417f5e91984e69bf43b0"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "c8aa8235e1e6f55ace2e270086f56e2d"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "c7a7a458e670536668dfde3a44564e50"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "0ec45336848d4347d4a648b2aab5a68d"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "45bdcde933bb17d01b450420bae2007f"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "ad14f6b9f1d8e742e7d6cd9b35578f0a"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "295ab81dd80c6efd2bb15378a04f6dad"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "82d2eb9084cc56ceddb2db3577a9972f"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "13eaa86732a640cb5b2d3df3dc2bd499"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "59f95b61255ff84db7235bbc4c143798"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "09867e8142344bdbcf7c280ae02ca43d"
  },
  {
    "url": "javascript/index.html",
    "revision": "1bbcf330ff0b9b1794f4407727ca41c0"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "c141fae06ab3c8bd34c9a21bca5ed72e"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "c1a448e99ba6f68ef175294a118eb2b8"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "0f49dc68d8d78c2c5942e85828934bac"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "d96cbf6cc99482553c6d3bc8069c0006"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "57b3183019a9082dcee8123eb66bfb47"
  },
  {
    "url": "LICENSE.html",
    "revision": "584d55936a783ddb6550e11093f5c12b"
  },
  {
    "url": "quanxue.html",
    "revision": "668281f721ab5eaa71830ea048843118"
  },
  {
    "url": "tag/index.html",
    "revision": "65abac21c75a45bd1a4e1f4ac386898a"
  },
  {
    "url": "timeline/index.html",
    "revision": "1d1db3b21808abcab79a2ac3cf3c5411"
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

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
    "revision": "4e4d25ea0d960cd92fd5f66e33010556"
  },
  {
    "url": "about.html",
    "revision": "299c754d097ad34ffc910590912ddb5f"
  },
  {
    "url": "about1.html",
    "revision": "ce5be5da167b2368fdf8b7243ceec151"
  },
  {
    "url": "about2.html",
    "revision": "471b1fdb284ba1099dab8da4c8cbc411"
  },
  {
    "url": "about3.html",
    "revision": "2a77c732231410f85a17e92684fb957f"
  },
  {
    "url": "about4.html",
    "revision": "fd65eecf6a95c51da1791a377904d307"
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
    "url": "assets/js/app.7d8da7bd.js",
    "revision": "b9c4b698782d8cf7aabac65485674044"
  },
  {
    "url": "categories/index.html",
    "revision": "a3bc5684fc75d46527b2a72b23abd087"
  },
  {
    "url": "countup.html",
    "revision": "c9b02b0595c5452ba5c83361ff3dab89"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "c3e7214f73edf1ad1410d4422abf10cb"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "14b46fcab2c40e5b408b4123c753ee3c"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "a7bb84219859aba9f64af9e5c34e2c70"
  },
  {
    "url": "css/index.html",
    "revision": "981f370cccd68e0732996faeb667ffd1"
  },
  {
    "url": "firstblog.html",
    "revision": "382d15148a3151250298b784ef46f3a0"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "1be6cb68a44b19559210fe39d4a5ba8f"
  },
  {
    "url": "html/index.html",
    "revision": "edc51cdbb22936570d9e15e2fba5d5d5"
  },
  {
    "url": "index.html",
    "revision": "c5c5a25591a672a76915875a7aa7cc41"
  },
  {
    "url": "interview/20201127.html",
    "revision": "a680d9b20c64c58f604cb88f3bad9dd2"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "2c6b36cd6a8fd0e1f8a816af2a4c6310"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "57b65cc726f30a98677c44ac6eea339a"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "56c20bff17d36409e0fa709acc2359a8"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "824665c41af59fc807e058a046e13efd"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "2cc55ff29bf824e1b99299250fd25956"
  },
  {
    "url": "interview/index.html",
    "revision": "bc9eb5d0eef0ee9af358e10761d6db37"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "fef2ad954535dd5bef596dbed45b2652"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "84dc2371a80c6f5dc88cc838b410d503"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "ce7515c1736a99d58f8aab12d23de4f9"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "522791c61585ab399fdb9e0e6c2c63b4"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "ffca316cd400c41b11d0cfa9bcffd8c8"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "67ccbc42f131797bd098316e76a07507"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "12926b7289cefedca4f969f45a4fdcc9"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "b85ccffa95d62c64905c724702380772"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "cc3366ad1e4323ac8993eb8c69b9a74e"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "ede0df778137cdcc7451c96ab73b93a3"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "d0a45fef13ed0c7025db932e794ab8fb"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "526a840be42fc792726bbe930edf039d"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "3c29c9efa6465e6b9e252799cd4757b8"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "fd4292ccdc0b818223f22748a8bd4150"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "81b8f00c7db01275209d9ae7b1c61249"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "5d23c251ae5357b609ae1b005ca0941d"
  },
  {
    "url": "javascript/index.html",
    "revision": "18b46ff78ab09f4209108a22d24d9332"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "8d67b7764c524647eacc19b63abf4269"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "b30b798ff25793c93d8ffddc61b0aec0"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "e6a63f7c4dc386264e41bfef7c3d7903"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "52d121c551cfd771d0e385e23061d97e"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "4968efdd967bff640e4e17765e7cf1a4"
  },
  {
    "url": "LICENSE.html",
    "revision": "9880af0a254632ce665940abb4fc8d30"
  },
  {
    "url": "quanxue.html",
    "revision": "bb961aaee4c6077fc7f8ec6b89e6c6d5"
  },
  {
    "url": "tag/index.html",
    "revision": "91a3e6bb1cd9578ce1228222059278cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "0fe6491fa75838faa87df40f4dab9aba"
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

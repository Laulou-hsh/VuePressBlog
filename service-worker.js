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
    "revision": "e85e97b2f3dbbf587cb4b29fc04441d1"
  },
  {
    "url": "about.html",
    "revision": "0aa37cf8499efa0d030a3d8834bcfb66"
  },
  {
    "url": "assets/css/0.styles.ba0a51fc.css",
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
    "url": "assets/js/1.808ba2a5.js",
    "revision": "055edde3ab539d374b523a7aaa78ae85"
  },
  {
    "url": "assets/js/10.14b3b795.js",
    "revision": "b6175e23a62d487f741f2ed71014f3ea"
  },
  {
    "url": "assets/js/11.90bf946c.js",
    "revision": "d2adf6991975ec6b65e1bb125b63a203"
  },
  {
    "url": "assets/js/12.2838a209.js",
    "revision": "c81a528f4b335af96946ad49a1f4af38"
  },
  {
    "url": "assets/js/13.5f72bffd.js",
    "revision": "b1e0a72261951732d89acead072768f1"
  },
  {
    "url": "assets/js/14.45d50652.js",
    "revision": "532eebacd6a298efe3f4a48f8823f645"
  },
  {
    "url": "assets/js/15.521a6a88.js",
    "revision": "607877264ad06e1189625e96e70e7218"
  },
  {
    "url": "assets/js/16.884be17a.js",
    "revision": "d41ba690781bd7b83f51cb5191de0caa"
  },
  {
    "url": "assets/js/17.8a9b1ec0.js",
    "revision": "c2839955c8f6c543eadb339e47ec133d"
  },
  {
    "url": "assets/js/18.1703e3a1.js",
    "revision": "5071abe1900c3d88d59f8a6ecaa76b6d"
  },
  {
    "url": "assets/js/19.574f22ec.js",
    "revision": "e29da8a330ac888cba3d6cccdc8bb129"
  },
  {
    "url": "assets/js/20.856d90e9.js",
    "revision": "1fabbf8fb00053b1ab3ee47f34c85314"
  },
  {
    "url": "assets/js/21.619c91cf.js",
    "revision": "d114a993be0739db5bccebd7fac1171b"
  },
  {
    "url": "assets/js/22.9d659ab5.js",
    "revision": "bfe905053cf417e2d3abbb077de45054"
  },
  {
    "url": "assets/js/23.432634bb.js",
    "revision": "1d901e0340ae752b3154f2d69f4b41f0"
  },
  {
    "url": "assets/js/24.0ae0f463.js",
    "revision": "2044218e4bda203040a74071f715e39f"
  },
  {
    "url": "assets/js/25.2d0e1876.js",
    "revision": "a9867c1a7927e2e2224394f2291abc64"
  },
  {
    "url": "assets/js/26.30fde911.js",
    "revision": "02de24a28c34691b994fc3328f08d2f1"
  },
  {
    "url": "assets/js/27.955404e0.js",
    "revision": "0b76514caf260c097e7a9bde0fc260ec"
  },
  {
    "url": "assets/js/28.491ccf57.js",
    "revision": "397e0dec45fad45247c3a7e297f1edc4"
  },
  {
    "url": "assets/js/29.fca69b94.js",
    "revision": "a64edda068c666835419a53585da0d9d"
  },
  {
    "url": "assets/js/3.ba4675b7.js",
    "revision": "2739212b8a6db7d28d9c2efb49d06386"
  },
  {
    "url": "assets/js/30.8374635b.js",
    "revision": "6108f0e18271c21fac39e4c828006406"
  },
  {
    "url": "assets/js/31.3e5b0a67.js",
    "revision": "1024b5c6c1eecb6e18d6e9f7a248c946"
  },
  {
    "url": "assets/js/32.fdb9df4e.js",
    "revision": "9415fa315c820436fd96bddd2932c077"
  },
  {
    "url": "assets/js/33.8aa22413.js",
    "revision": "09a7e45421940c74dd279bd4a04c2793"
  },
  {
    "url": "assets/js/34.e120e46d.js",
    "revision": "bbb7ab9837a09c342e28fd635994019a"
  },
  {
    "url": "assets/js/35.af49e015.js",
    "revision": "55c976e8beac8001c5742c95acdf84d4"
  },
  {
    "url": "assets/js/36.4a29cdbb.js",
    "revision": "b7b269b9892576c9de00e341689cfb8d"
  },
  {
    "url": "assets/js/37.74ad39ac.js",
    "revision": "b962cf05141f58858e27f3bd12b2b76d"
  },
  {
    "url": "assets/js/38.3719e08e.js",
    "revision": "34e627fe3ffd337f029a4a2d99ebbf51"
  },
  {
    "url": "assets/js/39.1e99325b.js",
    "revision": "51631e23cc70c531e4c478c99ca9931f"
  },
  {
    "url": "assets/js/4.44ad6ad7.js",
    "revision": "e705ac6858c4a4803e296ceb11165d14"
  },
  {
    "url": "assets/js/40.7a99df3e.js",
    "revision": "aff642f91716af4ab28e0e46b58b0280"
  },
  {
    "url": "assets/js/41.47d65fcf.js",
    "revision": "45939302070a7abfce4beb1488e1c443"
  },
  {
    "url": "assets/js/42.b2597b7b.js",
    "revision": "caf812beff3033010da01cf092d5c011"
  },
  {
    "url": "assets/js/43.bf0a676b.js",
    "revision": "e9c5baf450beade78bbd8b5d4c8a0404"
  },
  {
    "url": "assets/js/44.efd93d1b.js",
    "revision": "aff5c0e62b52e47cef9b83b8bcf14e1f"
  },
  {
    "url": "assets/js/45.9eee1296.js",
    "revision": "c39576b5a1b6a21bd54c73cd9b9a5409"
  },
  {
    "url": "assets/js/46.253d1cf1.js",
    "revision": "f77bb6b2a373f90d999b05b7f8830ba2"
  },
  {
    "url": "assets/js/47.b5878c45.js",
    "revision": "7d9ab99e5ece3786ffa61340ae482958"
  },
  {
    "url": "assets/js/48.64bbf381.js",
    "revision": "6af214afca3d98ad72dc8936de8ff690"
  },
  {
    "url": "assets/js/49.bb942ee8.js",
    "revision": "373c1075ba052b2ef13fa4ece9d89543"
  },
  {
    "url": "assets/js/5.1c0e0e1c.js",
    "revision": "7b1677a1ad5aba1cc98bba18afc1c5e4"
  },
  {
    "url": "assets/js/50.005d6fe8.js",
    "revision": "459f0aa492bc093b0e4135b1d8181e42"
  },
  {
    "url": "assets/js/51.5eeb9d34.js",
    "revision": "f59810a808f9b3fbb72e19b761b675da"
  },
  {
    "url": "assets/js/52.5b28dedc.js",
    "revision": "7897037d7a7f0b1872e9df0498fbdf93"
  },
  {
    "url": "assets/js/53.bd5bd1fe.js",
    "revision": "e4367273f2c29b1c87dee9207f472b75"
  },
  {
    "url": "assets/js/54.8308f08f.js",
    "revision": "2c57f7eace18b6a5120f1d0591227726"
  },
  {
    "url": "assets/js/55.9d7186f8.js",
    "revision": "5e997aad693b85eedc4123db0c9f8ba8"
  },
  {
    "url": "assets/js/56.d0fd1761.js",
    "revision": "c8f4a4131e1c4fca6d763a04aefcfdfa"
  },
  {
    "url": "assets/js/57.cf60f052.js",
    "revision": "ec6eab7fd038108c943777888f6fa208"
  },
  {
    "url": "assets/js/6.068385ad.js",
    "revision": "52bd8b98c91139516b98eb9070c56ed0"
  },
  {
    "url": "assets/js/7.c8479615.js",
    "revision": "a37064cb1d7bc26c4563c110b243cd9b"
  },
  {
    "url": "assets/js/8.2047ca7d.js",
    "revision": "3924af0cf79f22bc927576eaadae272f"
  },
  {
    "url": "assets/js/9.edadc439.js",
    "revision": "7ff89d584f391d9cec6b154a3007bac5"
  },
  {
    "url": "assets/js/app.33f57afd.js",
    "revision": "4678024ee774c094cd4835fb76c6e621"
  },
  {
    "url": "categories/index.html",
    "revision": "6f6620be9ecb83890815172ade3c2b54"
  },
  {
    "url": "countup.html",
    "revision": "477ffd64d72b66b2a8193a7047221200"
  },
  {
    "url": "css/20210803.html",
    "revision": "d37b433a9e3d37d4cba8d21424a80db9"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "4b6ac0c1c8b0672f0699b02fe3a65958"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "2e4b4809521c9ff99ff9940c03e5e0a4"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "f1e1cfc7af0ca8c9e1d4b80523e30c9d"
  },
  {
    "url": "css/index.html",
    "revision": "bfcb0135b60589bf61e7d875418b2e29"
  },
  {
    "url": "firstblog.html",
    "revision": "7870a74149204908a2521fff186d706e"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "02352e63192f9423403f02c6acb0bbd3"
  },
  {
    "url": "html/index.html",
    "revision": "97653faab4e4857cdb05a5a4513d6b5f"
  },
  {
    "url": "index.html",
    "revision": "a8ddba76c12fcedd3e8ea37bab7b892d"
  },
  {
    "url": "interview/20201127.html",
    "revision": "6c93b0c3691167e5ead8124db22b0179"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "ba9bf9c92a06b2cb79452af7666318c2"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "0019a690c602ad3c4f8e86b75b744583"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "2f8e1461c55e843b9da85d41237f5bf8"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "4875469363d5c935dea8418a4398bd46"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "900208e97c81eac397661a806f81702c"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "6745d1bf388417b363a9c04182823acc"
  },
  {
    "url": "interview/index.html",
    "revision": "c20b3cf5e2157b9add6578cf423bd7dc"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "29c1d57545210f7db19c257487286227"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "73d4b38ee2d0493bcb40924f713168e4"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "ae24b655ab34ce36d05a1fe418906114"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "99c246ec58ec2c8344f7ecf9dd27157e"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "f51e03fca6a06f1db77b2a6ae3837ba2"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "81015a5684bfd403bb8e0dcc1011b841"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "5bd8677d537fb0c3c88259b0e42dff0f"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "c499d752283d5fa8ae46069556f3e8b9"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "3a25f0c44fb7d25c2bab0ccf8994907f"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "a5c0bb7ed26332619008f8e76d05d2a0"
  },
  {
    "url": "javascript/algorithm/03_insertionSort.html",
    "revision": "b8d42acaa50afff45bf657f629deebb9"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "5e6d74d03b51bbc1bb5f641beb96fc84"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "dc520072061c20758d6876b3fa76f2a1"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "a3c7e9e3bd2628ace9986f80986a87d8"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "b4b00216266d451b27a4189997d4e200"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "43a6a865368ccdebd240ee9f9035f485"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "2536cee224ba38444ac26ea9caecffea"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "ebc93fd89b762a04b6732e899f8a2efe"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "7bf39a671fca5e7ddc06d4d55a481eb2"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "c134088c8b276593ca4e6c7700f6b3ed"
  },
  {
    "url": "javascript/DailyNote/20210823.html",
    "revision": "bf7d168ac0264e03a1878b313d036e3a"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "1ce1e0c3f7b2e6925501dc4e89f91e8c"
  },
  {
    "url": "javascript/index.html",
    "revision": "8feb0072d4725090ebac454fea686471"
  },
  {
    "url": "LICENSE.html",
    "revision": "ff367d9d5aab8c7e336c99daa3d59b0c"
  },
  {
    "url": "quanxue.html",
    "revision": "0f58a144c95d2c739e65f850f028ab3e"
  },
  {
    "url": "tag/index.html",
    "revision": "e8b0c74bcf074a6dfa0bafdd8924c027"
  },
  {
    "url": "timeline/index.html",
    "revision": "48a1eba73f36586111e7a4b89fd48279"
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

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
    "revision": "462fdff0d8999e9c93d53aad21e213df"
  },
  {
    "url": "about.html",
    "revision": "08371619dfe8c8359c327343a79b0259"
  },
  {
    "url": "assets/css/0.styles.b86adfba.css",
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
    "url": "assets/js/1.d69690dd.js",
    "revision": "4ab019b6726ba04fb98c470ad6f8ce58"
  },
  {
    "url": "assets/js/10.4729b212.js",
    "revision": "a4755a4935bdb20362e506d0bb7d63ee"
  },
  {
    "url": "assets/js/11.fc784bcf.js",
    "revision": "589fc766bd1f8d0aa9d19e07dc1102fa"
  },
  {
    "url": "assets/js/12.248b0f2a.js",
    "revision": "2ed09bf214ec6f6bed1c4669ca2168f0"
  },
  {
    "url": "assets/js/13.643b67f2.js",
    "revision": "89a72bc0396e52ef21c12c7714f77668"
  },
  {
    "url": "assets/js/14.74c71eb7.js",
    "revision": "869dcf7574d0b2fe159d30e90da9f118"
  },
  {
    "url": "assets/js/15.71fded30.js",
    "revision": "c552cabb81077a073a9519bf0c132203"
  },
  {
    "url": "assets/js/16.548a4b02.js",
    "revision": "54f370cefd36e233d6ec875f587f5e6e"
  },
  {
    "url": "assets/js/17.265abd03.js",
    "revision": "1e33bcbd0cf50613c278e92373767f53"
  },
  {
    "url": "assets/js/18.a3060f6d.js",
    "revision": "15377c83c3d0f4d818ba59c812f189cb"
  },
  {
    "url": "assets/js/19.eacc4f18.js",
    "revision": "9fe78f0dd538d8c13636b9825cb75677"
  },
  {
    "url": "assets/js/20.374185a1.js",
    "revision": "40148445bfb213fb9c035e0b65b1fdc2"
  },
  {
    "url": "assets/js/21.205b740f.js",
    "revision": "1599d48dbcb3552bcb86554e3ffb68bb"
  },
  {
    "url": "assets/js/22.7b1813c5.js",
    "revision": "874303de013c79ec5f1e9ad3fefc1a41"
  },
  {
    "url": "assets/js/23.d1e2bb78.js",
    "revision": "8216412c2ee83ecaea0caa369ad0111a"
  },
  {
    "url": "assets/js/24.1298157e.js",
    "revision": "b88939e5d18fb7fdb6a0cc62ac262247"
  },
  {
    "url": "assets/js/25.0bea598b.js",
    "revision": "cb9e18485363618884e0b8b2bf28d46f"
  },
  {
    "url": "assets/js/26.0eb5be5d.js",
    "revision": "8fde9ed5e73d71711a0baf44c5008cba"
  },
  {
    "url": "assets/js/27.c3c0e8c5.js",
    "revision": "bc08a59b8f6a76e6b711f1ae91f554c5"
  },
  {
    "url": "assets/js/28.4f186a97.js",
    "revision": "27e5ba033992505bcf16a01449d3d6f2"
  },
  {
    "url": "assets/js/29.16842b55.js",
    "revision": "68952e3254e8b5d4b99e82b324c2ba15"
  },
  {
    "url": "assets/js/3.6accc26c.js",
    "revision": "2058ecc428edc5629109970b8b1ab0b6"
  },
  {
    "url": "assets/js/30.24fc5604.js",
    "revision": "7c4a32cf53c2fc50fb6adbabbc9ddb13"
  },
  {
    "url": "assets/js/31.a48aaa27.js",
    "revision": "da72259aee3b02b4e270eedd1b9821c5"
  },
  {
    "url": "assets/js/32.022fc124.js",
    "revision": "d78e9fce2656c2b4e98bc1a0a707369c"
  },
  {
    "url": "assets/js/33.38d689f2.js",
    "revision": "b7fac3b173b6f0255fdd214710831fc8"
  },
  {
    "url": "assets/js/34.012da7a2.js",
    "revision": "fb9e4c32ba38d257749388651245e1fb"
  },
  {
    "url": "assets/js/35.6c349934.js",
    "revision": "8669bccd8766d800450fb8fcbc683554"
  },
  {
    "url": "assets/js/36.02303377.js",
    "revision": "2821a12bde7716ef27de7eb1de448ca6"
  },
  {
    "url": "assets/js/37.9ce4810d.js",
    "revision": "2cc03e774c891aa388446aab6854361d"
  },
  {
    "url": "assets/js/38.1d033ab6.js",
    "revision": "4133fcc688200df13b9c43a9cf31c6e4"
  },
  {
    "url": "assets/js/39.a7e539c7.js",
    "revision": "1024c114d476a9f038c43deec7147a1e"
  },
  {
    "url": "assets/js/4.2b1955cc.js",
    "revision": "929f6d2ec9e0f36033f2f796dd02db3b"
  },
  {
    "url": "assets/js/40.43829995.js",
    "revision": "cc0f06043228b74d7190f816d923b3a8"
  },
  {
    "url": "assets/js/41.0709c3c9.js",
    "revision": "c6ed1d1bdbc9aa53cf6a9d9d6d1853f6"
  },
  {
    "url": "assets/js/42.776864cd.js",
    "revision": "650b999755941fb1362a59a05a3c93ea"
  },
  {
    "url": "assets/js/43.6652a902.js",
    "revision": "65afe4e68e69dc468cc5262c327a0281"
  },
  {
    "url": "assets/js/44.3a96e57c.js",
    "revision": "953370e0b1cfe1ea51f0e1947530fa84"
  },
  {
    "url": "assets/js/45.6089edda.js",
    "revision": "49f3cd262758170cc8fea6bef3bb5919"
  },
  {
    "url": "assets/js/46.5e1518fb.js",
    "revision": "a44d9bf70cd204cc454450e2455dd760"
  },
  {
    "url": "assets/js/47.867ce1e2.js",
    "revision": "30167fe7896b2eb1b8d774f233e6a7f4"
  },
  {
    "url": "assets/js/48.d750428e.js",
    "revision": "1d2035de155db5f640b218b9d2784ac5"
  },
  {
    "url": "assets/js/49.4739e0bf.js",
    "revision": "b94cf7f28a29f329ed8ef103e3ec6440"
  },
  {
    "url": "assets/js/5.6bb57442.js",
    "revision": "ce82d34005c0f48bf026e0236269ca80"
  },
  {
    "url": "assets/js/50.a52d2ac2.js",
    "revision": "80746b351f277193609b6b7ba8af6048"
  },
  {
    "url": "assets/js/51.31ec974a.js",
    "revision": "ad41a4697b2fb8fcff468d66f0e7b171"
  },
  {
    "url": "assets/js/6.eef8c17a.js",
    "revision": "6857df73279474285fa1b3c4c1791afd"
  },
  {
    "url": "assets/js/7.8820dc09.js",
    "revision": "156f44f35885b28cb8430b317a6a292b"
  },
  {
    "url": "assets/js/8.08f1a9bc.js",
    "revision": "34a2593b9912595e7f8ec674d592d257"
  },
  {
    "url": "assets/js/9.8140e957.js",
    "revision": "f124529882a8a4b0dbcfb4fa3d5bad1e"
  },
  {
    "url": "assets/js/app.a6a63f74.js",
    "revision": "b3b6f9534e07f52f777c61082af73ee2"
  },
  {
    "url": "categories/index.html",
    "revision": "40aec53a85a2d208e4ef49bda10f84da"
  },
  {
    "url": "countup.html",
    "revision": "c0c0deea46f22425f769645f3e92835b"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "3a577aa5cf88d757a7b2d98400816301"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "d5c73ee4904329a53594a7b220526634"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "ff7b0eeb935cf2d4cbe76ef7291e6090"
  },
  {
    "url": "css/index.html",
    "revision": "e1d1d427aff40cd48267487901447655"
  },
  {
    "url": "firstblog.html",
    "revision": "05635dc84fce4d208e1ea0826a359ca3"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "447d979e45209ea1c272725b8b213a22"
  },
  {
    "url": "html/index.html",
    "revision": "18eaa60bf8b6dc1411f0a507b9dd2e04"
  },
  {
    "url": "index.html",
    "revision": "00d94db05e336d9950c5f6569f0e8ca6"
  },
  {
    "url": "interview/20201127.html",
    "revision": "aa641927c1adcbb8097f8e6fbcc5d0a4"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "e03217fb620f21a3d3db368bb2ea05b6"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "31132f77f90d4a40ce5ac6c826fa98c4"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "e4d69bde7e588d4ad6900f08b0301c04"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "d65391d993c191c361a82553e7ace8d5"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "cc3091c718b6ca0a9d9d99f611857036"
  },
  {
    "url": "interview/index.html",
    "revision": "b7aba1f880193eee1e42430b52c016b1"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "8ee15bdee996d553ff6c91351176a54a"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "9bd0929d0d6748d0a601245f6a3c32ac"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "a701ad37ed5fbf371076bfaf3dd7f6bc"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "734e07623f1822854f5115d9d0dbf713"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "4d25fad42fcedce1760b69a54bd6be21"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "c6824b3f45e1602606db941c9776fcb8"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "35a80b8671053120897d1fec52e3f48c"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "ab5541c6c0fa48fdf5861642e0b6ada0"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "1f3fbbfcd8b72d8b2b114ec6d67d2dbe"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "70ea19485cc18dce018998cd1cadfe8e"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "381905568b3cc46611577e532a2272d7"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "7c1debbe5840582849b06efb0fff38d3"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "d4b002830baa03cc945289e307336f91"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "1c4cea04ad4b8d5833665f9bd07d4eab"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "4e239e961a2701c45b300892006dddc2"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "4414f95f1753414d5bcd7af180ca52d6"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "32fbf06077c4a9394b326f5f9334669c"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "7232e48f8be6ebaaa092a593e2584270"
  },
  {
    "url": "javascript/index.html",
    "revision": "1ee24f589274bcf14464a4dcb7fa207d"
  },
  {
    "url": "LICENSE.html",
    "revision": "21fb61bd6cb86d30832ace5b70014d2c"
  },
  {
    "url": "quanxue.html",
    "revision": "c17abea3fe6598a9ac44dd27c34e62a2"
  },
  {
    "url": "tag/index.html",
    "revision": "85bc9ee7210e4d1be46f6e251af2cc47"
  },
  {
    "url": "timeline/index.html",
    "revision": "f6bc858261aee9098165d1a3674a3b24"
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

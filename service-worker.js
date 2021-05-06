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
    "revision": "f3fe1087bf5667154a377a1923f520b5"
  },
  {
    "url": "about.html",
    "revision": "de305f6e5989b13249444ead894870fc"
  },
  {
    "url": "about1.html",
    "revision": "56a1a49f59d9b21d4c2d762decb9202a"
  },
  {
    "url": "about2.html",
    "revision": "2dd43c2a5f6fa828d9b1fbf1668d214e"
  },
  {
    "url": "about3.html",
    "revision": "0a7b4348e6ff98e6f16a8ef3bbc45003"
  },
  {
    "url": "about4.html",
    "revision": "7280dfee62156aed00c31b3daee8fd65"
  },
  {
    "url": "assets/css/0.styles.6c6fc30d.css",
    "revision": "81034de187b8700a3f1e5fca3014ae53"
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
    "url": "assets/js/1.c7650eef.js",
    "revision": "232772787a5948bf8ccff0e221856ec4"
  },
  {
    "url": "assets/js/10.285136c1.js",
    "revision": "fc2995dd13b7d43722ccdc7fe72367b0"
  },
  {
    "url": "assets/js/11.5bb29277.js",
    "revision": "bdb6c100b552d7c4d6de05f810d810dc"
  },
  {
    "url": "assets/js/12.9874bab6.js",
    "revision": "dd6ba7591611eef831af3a8e5fbf9312"
  },
  {
    "url": "assets/js/13.74967fce.js",
    "revision": "023ae2c6f9cc8af9016079c61f075645"
  },
  {
    "url": "assets/js/14.79fd8176.js",
    "revision": "e7a0b8acfb21b1b9716025f48eb01259"
  },
  {
    "url": "assets/js/15.74b224e1.js",
    "revision": "66ecfaf6bf4a1667cf7b4bd360ef5bce"
  },
  {
    "url": "assets/js/16.e6ab0b36.js",
    "revision": "23fa152107c63982bd0d19fed3ea7e64"
  },
  {
    "url": "assets/js/17.9bc67516.js",
    "revision": "2d202c3ddffc09979030c77068279e3b"
  },
  {
    "url": "assets/js/18.80e2d048.js",
    "revision": "00ec7bad487907fe64cc925d8ee05bf6"
  },
  {
    "url": "assets/js/19.64e53a23.js",
    "revision": "a5405f16e8ee30a9f35127f55492b32a"
  },
  {
    "url": "assets/js/20.5d6a698d.js",
    "revision": "2a542e2b0f23352560df09ddddc28d3a"
  },
  {
    "url": "assets/js/21.2405bbd8.js",
    "revision": "67538b9413e63f03cf0bd3854269ccd8"
  },
  {
    "url": "assets/js/22.33b45354.js",
    "revision": "e91b575dd62d0cecd4930bb5d0b03118"
  },
  {
    "url": "assets/js/23.83824432.js",
    "revision": "0ea8ac79b2780d33cb51151acc9509f1"
  },
  {
    "url": "assets/js/24.ddc23036.js",
    "revision": "4fb17b0cc49b132e03f19b9ec3fe8a26"
  },
  {
    "url": "assets/js/25.e88a2aa2.js",
    "revision": "9e93979590b21b79f47bc866aceeaecc"
  },
  {
    "url": "assets/js/26.6d805ec1.js",
    "revision": "aec34cec28a6cf1697972e8d40a700c1"
  },
  {
    "url": "assets/js/27.b31cafdb.js",
    "revision": "bb355390f158c18607cb9a8b442444ce"
  },
  {
    "url": "assets/js/28.31e7ad43.js",
    "revision": "0f3af41b621fe711159181fc595db893"
  },
  {
    "url": "assets/js/29.f75536bf.js",
    "revision": "84cac03421ee30754d36376900daf57b"
  },
  {
    "url": "assets/js/3.59e12466.js",
    "revision": "8e25b9ff62dd521e609ec72fe4280e96"
  },
  {
    "url": "assets/js/30.82940589.js",
    "revision": "231c5ed6daf22a960110a47b97c2a27c"
  },
  {
    "url": "assets/js/31.7c2f9242.js",
    "revision": "3871471bb436fc76fc5362b920e2e276"
  },
  {
    "url": "assets/js/32.263b8e85.js",
    "revision": "061ed087321af5ff061f6d00a166899d"
  },
  {
    "url": "assets/js/33.cc6e92e6.js",
    "revision": "e23fdb5f34bcc262a68df1072bc3325c"
  },
  {
    "url": "assets/js/34.4472a77e.js",
    "revision": "2291688d2994cbaac29f543d16dc8f52"
  },
  {
    "url": "assets/js/35.eb8de0ec.js",
    "revision": "2c3ea7b0e7509eba74823969de7fc1e5"
  },
  {
    "url": "assets/js/36.0dd0c7b6.js",
    "revision": "95e8f96ba5a5a23d7c18e52f08d1a1fa"
  },
  {
    "url": "assets/js/37.3c65a818.js",
    "revision": "128f860009de968d080fabaa79ff1d6e"
  },
  {
    "url": "assets/js/38.0d842add.js",
    "revision": "93628acf8c868188fd6f45773e247d6d"
  },
  {
    "url": "assets/js/39.05c2483c.js",
    "revision": "3ed6e3ab152681b263b3192aa17eff96"
  },
  {
    "url": "assets/js/4.cece4c22.js",
    "revision": "2d1ad11fd197b113c7b4a46d713ec63c"
  },
  {
    "url": "assets/js/40.14527d72.js",
    "revision": "cd72ec3a5dced1be07cc40ca9b066256"
  },
  {
    "url": "assets/js/41.4b55b089.js",
    "revision": "d857ac75bbba40218f85c98d008fd875"
  },
  {
    "url": "assets/js/42.333acf01.js",
    "revision": "d5626de726e9baabae954d6554a259bc"
  },
  {
    "url": "assets/js/43.5bc13d14.js",
    "revision": "1717e66aecfd930d64e5aab987c0cf3b"
  },
  {
    "url": "assets/js/44.67688dff.js",
    "revision": "23c8cd68fb1c6cdb24bb55b28de595e1"
  },
  {
    "url": "assets/js/45.480b8a1b.js",
    "revision": "f9d06f4c73f27c21cac64e6f73278804"
  },
  {
    "url": "assets/js/46.3ebdc1cb.js",
    "revision": "8da9a803b2d740ad963ca22073701081"
  },
  {
    "url": "assets/js/47.1bb77703.js",
    "revision": "0aed80e1211bf278379d92251f31b48d"
  },
  {
    "url": "assets/js/48.b1d162f4.js",
    "revision": "67cd4bde5ed72fd6cbc59ffd76671d7f"
  },
  {
    "url": "assets/js/49.566a5346.js",
    "revision": "a6938947d6be19e1b37603d799929625"
  },
  {
    "url": "assets/js/5.942bef9d.js",
    "revision": "00104eb20d9662e15a4e0b0bdd158c9f"
  },
  {
    "url": "assets/js/50.384fe129.js",
    "revision": "e2e8084937109adeb7756e62ca43dbcc"
  },
  {
    "url": "assets/js/51.93ad20dc.js",
    "revision": "733aa5ba53287aec2c6edb477e0c0c34"
  },
  {
    "url": "assets/js/52.c45b5903.js",
    "revision": "613ac68e8f33d78fb229ea5505e33cd5"
  },
  {
    "url": "assets/js/53.3232f85e.js",
    "revision": "253d1516d0070920d397f5d3e655a624"
  },
  {
    "url": "assets/js/54.f5fc4b4b.js",
    "revision": "6bd18fc9721ba518b0214f0e2500f541"
  },
  {
    "url": "assets/js/55.c4f6a059.js",
    "revision": "f5d77f67b3db1256a166091d0bee9889"
  },
  {
    "url": "assets/js/56.b964a722.js",
    "revision": "d441657d078b111de8edd6aa66c96e00"
  },
  {
    "url": "assets/js/57.677293cf.js",
    "revision": "0e6513b4c52f500a3839d1e44148e9a6"
  },
  {
    "url": "assets/js/6.51818d7d.js",
    "revision": "2dc38dadcafc6ede07898e7449b49bc2"
  },
  {
    "url": "assets/js/7.4155663c.js",
    "revision": "2ecefd1dc248d5947223ed93cd9747e2"
  },
  {
    "url": "assets/js/8.3f3b96c5.js",
    "revision": "5f349581729d6267597164a5fea2d628"
  },
  {
    "url": "assets/js/9.ee7b7692.js",
    "revision": "c2752d80de2ae7b27181959cb0f78599"
  },
  {
    "url": "assets/js/app.6368f241.js",
    "revision": "ec9e3f877858ec12e974338614ca56f4"
  },
  {
    "url": "categories/index.html",
    "revision": "bfd552046f76cdc47e82340ca0638ee9"
  },
  {
    "url": "countup.html",
    "revision": "09d32416de6ed26554d2f892ac70e5bd"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "3ad69daa5744952ce6e796df7e87b692"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "137dfde2ae3fd88652d4d876b3a6d074"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "163ce7cf881b4360d92f3f87068d3aaa"
  },
  {
    "url": "css/index.html",
    "revision": "273408849ebf76154eacfb660e0d1a6b"
  },
  {
    "url": "firstblog.html",
    "revision": "c9cc2b9c6d8840c53e5038197e6af6fd"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "ccaf3241b2a3c67f2ac8c892c15868e5"
  },
  {
    "url": "html/index.html",
    "revision": "9d607cb8d87cd946d96dcadba6a5e0e7"
  },
  {
    "url": "index.html",
    "revision": "1b2aab71baeb6efa8009376c90079d48"
  },
  {
    "url": "interview/20201127.html",
    "revision": "7847854483e73459408b83fcbe07435e"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "687c956612ef8d0449fb13d3cd80822b"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "0815365bbc99ea5339873d8612f458d1"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "02980d8fbdc620bf5ccdeaecab57fe87"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "db220382b0c98f5a88fdb18fd35ae128"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "a61fd906acc7c5fa505545e413e9bd99"
  },
  {
    "url": "interview/index.html",
    "revision": "63493cb7cf14228d947add18b4e6cb4b"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "4305f6933a900c4823b5e812a8fdd25b"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "ad70c0a24b174f594b1e497027ca14f4"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "98e1f2535a4b3ea5a48bcbde9be1faed"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "c194635ed679a4258122bcd77d831fc2"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "b9f0f03f607cbd2fa471c164e9e337ac"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "60ac8446e06c655fe2029e91bd8438f5"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "d7fc513af52085168657f12c6307983e"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "9f0f7ef3e0dd5dbb901e6c45971cc8fd"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "e203cd71e7c8f15b7c365b147767e432"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "0b2b11bf787ab1d9aa1e1b008eeadfeb"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "bbc2b1b367a6dd8f50977cd3a2bbba70"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "6899926b1444e95a7147d2181c50cd8e"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "36d6456263537d71c5d7a5e2ea366ae0"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "a44027e7d7b53d9cd22773c0f5e7ad80"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "08b120a4b76ffe41241a8eca6227f33d"
  },
  {
    "url": "javascript/index.html",
    "revision": "95e43da984d213353674f546cb0b7924"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "6375dc474e761a15ea79a782b4c1b618"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "1b1f3239c9e2b306c32a84273c4e83f5"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "700f991ac63fffa444d6b1e314b1c81c"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "0111d93ca97e6ef4d2324cf56a8f10c5"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "29c821a18f42debfd495abb66dcda3bf"
  },
  {
    "url": "LICENSE.html",
    "revision": "830f5a47f4a70372c18b9ddd43d9a537"
  },
  {
    "url": "quanxue.html",
    "revision": "069e0728c210346725ba1653c8debd47"
  },
  {
    "url": "tag/index.html",
    "revision": "7c2884ebd0778fae66c50abbedb28faf"
  },
  {
    "url": "timeline/index.html",
    "revision": "ec827a6c5d22af56b88ac069119fd12a"
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

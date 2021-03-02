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
    "revision": "714a073919ecd9e44f4780d2346e6e80"
  },
  {
    "url": "about.html",
    "revision": "2e47acaec7265cb9d45bea6fe280635a"
  },
  {
    "url": "about1.html",
    "revision": "09ca3e1e663ab07841ea0a8153db4f6a"
  },
  {
    "url": "about2.html",
    "revision": "e59af0b2b591d6080f8f7e491e80aca4"
  },
  {
    "url": "about3.html",
    "revision": "5fd4473f83880b75f10f7b4027b19183"
  },
  {
    "url": "about4.html",
    "revision": "022daebfabb1a0995cf5f35d48a143dd"
  },
  {
    "url": "assets/css/0.styles.3cecfe86.css",
    "revision": "ef7e273c0eaa4b4057379041ad202f2e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
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
    "url": "assets/js/1.df8cccb5.js",
    "revision": "9582eb886aae12f1563a17977b033a82"
  },
  {
    "url": "assets/js/10.89d6685b.js",
    "revision": "0efb83f8a9cb53505e38e969d3e7529f"
  },
  {
    "url": "assets/js/11.7fa005d2.js",
    "revision": "f6ad455783677dd403f6fced01465655"
  },
  {
    "url": "assets/js/12.68b56985.js",
    "revision": "5d1ba700c5620d97c4e59d3a749f2c60"
  },
  {
    "url": "assets/js/13.d081bb3b.js",
    "revision": "ba28c4342abe295c9f732bf32c09b3dd"
  },
  {
    "url": "assets/js/14.7c2a55c0.js",
    "revision": "9f59f527215830cdaaba22f818a60ec4"
  },
  {
    "url": "assets/js/15.6954854f.js",
    "revision": "9eb5158d5194cf28bb1d6b80d823ad26"
  },
  {
    "url": "assets/js/16.016344d3.js",
    "revision": "38f3887e7efddbd2607a2bfd656ad9b0"
  },
  {
    "url": "assets/js/17.ec150def.js",
    "revision": "787bbebb824a1eb716ad1203917f50ba"
  },
  {
    "url": "assets/js/18.d214a899.js",
    "revision": "4f2a7fc57e4471e5dce15ce836c9e8f8"
  },
  {
    "url": "assets/js/19.42615d42.js",
    "revision": "3b1d649c91646dabbb544a99f7d9b194"
  },
  {
    "url": "assets/js/20.e378e483.js",
    "revision": "27f1fa7daf1ab451468f691897431180"
  },
  {
    "url": "assets/js/21.332ee8dd.js",
    "revision": "3d2ce2ad50672a3999ccdf149876d925"
  },
  {
    "url": "assets/js/22.38d56983.js",
    "revision": "20519a9593f2624ee79b9223a27cd38b"
  },
  {
    "url": "assets/js/23.1b1ac78f.js",
    "revision": "bb5c871a5e6fda8fc1a930b987580e7f"
  },
  {
    "url": "assets/js/24.dad3803b.js",
    "revision": "06877428a6813fb0618c9e737511bd53"
  },
  {
    "url": "assets/js/25.5e786324.js",
    "revision": "45c593f98fb31b4dd581915622973c1b"
  },
  {
    "url": "assets/js/26.05bb09fa.js",
    "revision": "ecaf12bc2eca79b7ea27aaeb89736e12"
  },
  {
    "url": "assets/js/27.d930e23a.js",
    "revision": "f4ac00db473c2a4a26fe8034241a4821"
  },
  {
    "url": "assets/js/28.1440a40f.js",
    "revision": "68439325cecd8cb4d1da4760ac69aa80"
  },
  {
    "url": "assets/js/29.967e5bd7.js",
    "revision": "2a7c7aa3c7a51c797976af0b984320db"
  },
  {
    "url": "assets/js/3.6bc8c152.js",
    "revision": "d0f9d90d94c428991d3c6b2ab75fe195"
  },
  {
    "url": "assets/js/30.1b005ac4.js",
    "revision": "3261ee65ce8e04b8284206c0e694c92a"
  },
  {
    "url": "assets/js/31.9e00ae64.js",
    "revision": "72bc68f13e6a53be0589d99d5058ef59"
  },
  {
    "url": "assets/js/32.3198dd9f.js",
    "revision": "f1f549193a843e175bd1b9cd3834c120"
  },
  {
    "url": "assets/js/33.015f5d1a.js",
    "revision": "20f09698f14dd3f39b9ac4bf62675f98"
  },
  {
    "url": "assets/js/34.07e20f9b.js",
    "revision": "da2682f65a235541f1ddb76cebf7884c"
  },
  {
    "url": "assets/js/35.587619a2.js",
    "revision": "d4c817b78c50eb546af7881388f6a282"
  },
  {
    "url": "assets/js/36.5bd8f36c.js",
    "revision": "5e4a5ec454e06a276fdd64846a4c1128"
  },
  {
    "url": "assets/js/37.b5dff9b7.js",
    "revision": "d17e876a3cf8baa548bc858da9ea852c"
  },
  {
    "url": "assets/js/38.16dcf373.js",
    "revision": "89e6f8f453cd895ab331bd3ee7e7dc20"
  },
  {
    "url": "assets/js/39.13986696.js",
    "revision": "db4684989d53a70635a5a18ee086c879"
  },
  {
    "url": "assets/js/4.2d187c80.js",
    "revision": "d859f7b925cde24e28a0642ba3d05672"
  },
  {
    "url": "assets/js/40.ae3ff17d.js",
    "revision": "a8f255780eb3685a497807f1ca04329b"
  },
  {
    "url": "assets/js/41.51389deb.js",
    "revision": "32b1f0c0b49469076695f9d740161f11"
  },
  {
    "url": "assets/js/42.b0ea7f4d.js",
    "revision": "dc23968074b4d2200cc377a98b1317e7"
  },
  {
    "url": "assets/js/43.22654aec.js",
    "revision": "390517d3dffe7ddc85e1295a50745d35"
  },
  {
    "url": "assets/js/44.b9cfe4f8.js",
    "revision": "87bba0a7ac2b663f128e930ff0be6428"
  },
  {
    "url": "assets/js/45.5da224fc.js",
    "revision": "cb973a097f554b335a95e2fc039fec9e"
  },
  {
    "url": "assets/js/46.0da54dbb.js",
    "revision": "91724b904a5f017d6349f2db2e6c1dfe"
  },
  {
    "url": "assets/js/47.bb7070e5.js",
    "revision": "37fb991b7523ee05b9cccce702560b11"
  },
  {
    "url": "assets/js/48.b27f0c6e.js",
    "revision": "3b165e96916aa83ca04798c5b1f44191"
  },
  {
    "url": "assets/js/49.62c6d7b0.js",
    "revision": "183fdfb9ffcf253f231915cb965bb78b"
  },
  {
    "url": "assets/js/5.7c0da7aa.js",
    "revision": "6f8738098c9b52208f299ec6a94a3c5b"
  },
  {
    "url": "assets/js/50.41ce8e5f.js",
    "revision": "831f736b4657b648bef9707eebc601e6"
  },
  {
    "url": "assets/js/51.c296d27f.js",
    "revision": "ea3e0416875e11fa2f1a546e95440e5f"
  },
  {
    "url": "assets/js/6.80474f9f.js",
    "revision": "0db71af38257054df1620c02bdeeeab3"
  },
  {
    "url": "assets/js/7.3b4fe280.js",
    "revision": "0b1d39dba60740508e727f6556e4b8fa"
  },
  {
    "url": "assets/js/8.3833d314.js",
    "revision": "3035b7dee4c88c117116665b5c5de07c"
  },
  {
    "url": "assets/js/9.3041d2da.js",
    "revision": "5764ae81bcf55f52e97e1c97b6ca86d4"
  },
  {
    "url": "assets/js/app.43a2264e.js",
    "revision": "cc263d047d5314d328d24ec42b8da3d2"
  },
  {
    "url": "categories/index.html",
    "revision": "aa8b8b1bda97e345a0f7f2a45025032f"
  },
  {
    "url": "countup.html",
    "revision": "5421323dfd30fea5f40f7f6503315cdb"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "2e206a45302bee1077879804ce046052"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "ff004296bb47e678becad577094225c0"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "f0cee440c30ce664c15df1f215587fd9"
  },
  {
    "url": "css/index.html",
    "revision": "1bdf3361d634da78f0fda5bae6f5fb53"
  },
  {
    "url": "firstblog.html",
    "revision": "d334e5e979efd3a90ebee47bae623a76"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "06d8af56b6c51849a2df2b94fb052257"
  },
  {
    "url": "html/index.html",
    "revision": "61be5365625128f7c26a7812f0ecf896"
  },
  {
    "url": "index.html",
    "revision": "687359ede8d2f6072b6b66efaa4c9b5b"
  },
  {
    "url": "interview/20201127.html",
    "revision": "1630ff5da33335bdd82bfbcd6959a8f5"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "58273bc1a0d20d3faa072c2a57fa5ece"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "32d329118a54ad14221ccc188955a467"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "08525941105711abce7feecc63b5ce27"
  },
  {
    "url": "interview/index.html",
    "revision": "1f78073e8abbacb45f42588574de430c"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "18866427a04fe8ec3d53e0e901cb4c96"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "dc3eea8ae2968d7c5d708605c2e0dd0b"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "795eb25bc26a465cdf7c67416ae07652"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "2d0c0cb8e7fcf78f01e5afa11adc59d5"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "0fecb5479865b31aed45271cb27d65a7"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "6c41510f73cef7bde19c601fa7adbfe9"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "72cbd3dbdbf58fbc68291ab81d924c89"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "da1fd430de14939b599c56c3849d2694"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "b5b679928c463f77909acd43687ac260"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "09f4205d5a5fa961c9c855730f953d7c"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "796af5f8a7e7c4b7ae89fefb4014d16c"
  },
  {
    "url": "javascript/index.html",
    "revision": "bfeab350efd8a831bc6be321199fdbdf"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "443570929abf8ca6909c5b73c5280970"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "c7669cc3a0a8ceab4133dbca83609598"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "cd2d3f27d0d740133f1eb1a70dacfd34"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "0cd44a1668728bab6edbd28d75f4abe7"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "e38fd54a4cf58faef736abb11a5413ba"
  },
  {
    "url": "LICENSE.html",
    "revision": "ffe516a599543691a4a12af28e2a05d0"
  },
  {
    "url": "quanxue.html",
    "revision": "ccc5c3e7166087c2e6efe9946171ebbe"
  },
  {
    "url": "tag/index.html",
    "revision": "83fbc996189acf48a958dbecc29d7f3e"
  },
  {
    "url": "timeline/index.html",
    "revision": "0dbd72811c6b44ce5b41fd58196a9431"
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

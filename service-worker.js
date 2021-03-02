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
    "revision": "7ecf0971daf7b7df7918b64cbe1dd755"
  },
  {
    "url": "about.html",
    "revision": "7c1fdb83608d5ee3a709c20aaef7be20"
  },
  {
    "url": "about1.html",
    "revision": "056d80d1b67f067814ad3b752b91f24b"
  },
  {
    "url": "about2.html",
    "revision": "cdb78ce4ff5a47ff430e232ed9f53761"
  },
  {
    "url": "about3.html",
    "revision": "a9da8809fb0cc9c8c15bd04679d93889"
  },
  {
    "url": "about4.html",
    "revision": "7479cdf4cedb0ff8062a8b9b5ae7cf49"
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
    "url": "assets/js/25.acba317c.js",
    "revision": "1e1722cee6a903603a07f7711417c4e8"
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
    "url": "assets/js/app.865b8957.js",
    "revision": "5171a97eb3d0458adf9ae54535e0c37f"
  },
  {
    "url": "categories/index.html",
    "revision": "687defff89a4e7215cc1ed63cf327bc0"
  },
  {
    "url": "countup.html",
    "revision": "bc618d5010b2ddbcd5f606387ca17c95"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "072a3eec54e12d66f5e462ace1353dab"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "9094eb76ea9d9d0b15cc2c25a6494cc0"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "8643528f44504d3cd1e0eb5a23fed970"
  },
  {
    "url": "css/index.html",
    "revision": "d78fcf0ead43c20831dadcfc17cbd471"
  },
  {
    "url": "firstblog.html",
    "revision": "64a391afa19d0813d5d33cefa19b4c97"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "6a8538d66d12ff22527a082350b39c95"
  },
  {
    "url": "html/index.html",
    "revision": "642ff3be33967e299902e1569b4ac090"
  },
  {
    "url": "index.html",
    "revision": "d4e27d51f81b2d7ee5d492b5c5cfe58a"
  },
  {
    "url": "interview/20201127.html",
    "revision": "1d1adec951223706a1fba534ceaa0abf"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "5fa5b3e3c124ac656a94178b08d39ca1"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "0255ab795a981094e7bd5c4d1049d290"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "ea99ba368638e469a2a4b323785cc84f"
  },
  {
    "url": "interview/index.html",
    "revision": "066bd4f0cbf16b279729e99b45a0ab0b"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "6d74aef7a4ae769182ea8a5669850fba"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "d5af303d2f5880535e747c39f3c2437f"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "a30708838b35c0d421ef8912d0df26af"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "8eb164ef961362520df59e572aec4b2f"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "4ee364ce5de20e83842585b75545ab40"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "75dcfaa22d6febf78fcb30502cec9c7b"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "2e9ecc7d94f6243d39903d3e83481133"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "1954922068e3055b98e0ec5ff4e2193c"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "d9db3c4f590cedf0f61b5f7da568db02"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "5d3a3a8763fb2236302ef8fd76e522db"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "54611e53468a30d61df765571c4cc720"
  },
  {
    "url": "javascript/index.html",
    "revision": "8f651f5cc80fa5335706f7af8e5a3346"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "b9cea7bcbe549e3665b82d63562556e0"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "fbf5bf3d5839e131404a0b93450fa158"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "c13ac782301cb09cb50ec755798fc4d5"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "dfc7a37f886a8c9cc68a59e85124c96b"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "158eed2822bfb5785f7707ef3196cab6"
  },
  {
    "url": "LICENSE.html",
    "revision": "57dbd74657daab6e25254590f06bfd65"
  },
  {
    "url": "quanxue.html",
    "revision": "b68802e51abc8e42913f5f3f8f9dfdda"
  },
  {
    "url": "tag/index.html",
    "revision": "5dc2567cd540212739d464b9c4885d29"
  },
  {
    "url": "timeline/index.html",
    "revision": "4452e8d95543f266582008fbd85a5155"
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

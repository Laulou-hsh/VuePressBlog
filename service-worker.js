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
    "revision": "ef4acbf4233add7714f1b2168c0fee2b"
  },
  {
    "url": "about.html",
    "revision": "691185350dfc7785052f2de1a585b139"
  },
  {
    "url": "assets/css/0.styles.7b0754ca.css",
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
    "url": "assets/js/1.180feb48.js",
    "revision": "7632f8f2083e241697fec73f0c84e9fa"
  },
  {
    "url": "assets/js/10.88d9a6d3.js",
    "revision": "a0caf3bf98613c6f737b2c3337f7869e"
  },
  {
    "url": "assets/js/11.9ec79e57.js",
    "revision": "e4200166325eb16b4e2d938f36557f9d"
  },
  {
    "url": "assets/js/12.e9915af2.js",
    "revision": "5eca92e6c31b38f95c3c826e66d2cbd3"
  },
  {
    "url": "assets/js/13.8d533fbc.js",
    "revision": "5d55ed1fbff48dbeb01f5b7288798bb5"
  },
  {
    "url": "assets/js/14.0393a185.js",
    "revision": "673a0c2fed44d5dad5f4bd5a2c5e54fe"
  },
  {
    "url": "assets/js/15.f83011e0.js",
    "revision": "f4fe314c259ed852d277f3f400039bb2"
  },
  {
    "url": "assets/js/16.074399bd.js",
    "revision": "2e89d2cad0beca54ccca1033a4a9df86"
  },
  {
    "url": "assets/js/17.8e596a01.js",
    "revision": "9e3e1c01a490a98e676cc01dfa51d8c5"
  },
  {
    "url": "assets/js/18.b8406c59.js",
    "revision": "f6528200aba0fb3284b84da68d755165"
  },
  {
    "url": "assets/js/19.e6d6fed7.js",
    "revision": "2bc0e57954edbfd817f417ec15890a04"
  },
  {
    "url": "assets/js/20.eaa10d15.js",
    "revision": "de2a1e65e67d3109a80094f1251cd741"
  },
  {
    "url": "assets/js/21.69c9f3f0.js",
    "revision": "609223d9e39c4706d74252b5ef181c8b"
  },
  {
    "url": "assets/js/22.d5fd0960.js",
    "revision": "f94345e625836bdf2f8206eb72bd5101"
  },
  {
    "url": "assets/js/23.851e48df.js",
    "revision": "be0eafa7bb3321b8fa2f73274cccd881"
  },
  {
    "url": "assets/js/24.8dff58af.js",
    "revision": "358d3a958df4c6fb1651d170a7fbd02a"
  },
  {
    "url": "assets/js/25.52c7edbe.js",
    "revision": "e138ad1f818fbb1723ac91c428da55d5"
  },
  {
    "url": "assets/js/26.1d7a2ae7.js",
    "revision": "4e8f5b067f0532064f932cfa8a264608"
  },
  {
    "url": "assets/js/27.3f4e84d6.js",
    "revision": "d3088d7a8f2b7d7dea6ad40ed5cc19b4"
  },
  {
    "url": "assets/js/28.d2954f55.js",
    "revision": "b37a0045f29a61927ee21e049ec5f5f7"
  },
  {
    "url": "assets/js/29.87400c37.js",
    "revision": "b634f27d6f0d70564289918321010f01"
  },
  {
    "url": "assets/js/3.b016c114.js",
    "revision": "59fc1e33a6a8ea983fdac60b4f233302"
  },
  {
    "url": "assets/js/30.603a397e.js",
    "revision": "1c30431c1058cbc1aee6e60ff06164a2"
  },
  {
    "url": "assets/js/31.b95fd53e.js",
    "revision": "1911761610091cf687e810f7ba3d35c3"
  },
  {
    "url": "assets/js/32.9334156b.js",
    "revision": "d984effa1f26db45925de9a417992b86"
  },
  {
    "url": "assets/js/33.18756c2c.js",
    "revision": "43efb76bdb064b1cf0b163777c810079"
  },
  {
    "url": "assets/js/34.0beccc0f.js",
    "revision": "4216938596b932e2b9c159af61d91ce0"
  },
  {
    "url": "assets/js/35.57d0977f.js",
    "revision": "746525b923e44519e9c0cb081d4c4ac4"
  },
  {
    "url": "assets/js/36.5ae6152c.js",
    "revision": "bcecdcdb25aad6b57b67ee5520d5613f"
  },
  {
    "url": "assets/js/37.d11a2982.js",
    "revision": "551961761ea04c6409de88357cd604e6"
  },
  {
    "url": "assets/js/38.c50bf3e2.js",
    "revision": "d3cb6d9cdf85ddb9cc0eabef9091551c"
  },
  {
    "url": "assets/js/39.91f20590.js",
    "revision": "389099f54053619648662e5b6ea2a7e9"
  },
  {
    "url": "assets/js/4.be78efaf.js",
    "revision": "44b90c3cfe43a8178cad278d375d160f"
  },
  {
    "url": "assets/js/40.b99b7ad7.js",
    "revision": "6cfd3427a447f4daf5cd4c15c9d83b4a"
  },
  {
    "url": "assets/js/41.908b2921.js",
    "revision": "a4b091048f2ae643fa3360a957224988"
  },
  {
    "url": "assets/js/42.2616b6e2.js",
    "revision": "e8e10c99629ce4e4dac19d84f8e1fb93"
  },
  {
    "url": "assets/js/43.1110aa52.js",
    "revision": "48c36348300438fe5124eb7e7e063b54"
  },
  {
    "url": "assets/js/44.3689a2fc.js",
    "revision": "22cc70190c2e94a460e88f2c4cff3c6d"
  },
  {
    "url": "assets/js/45.6f564c01.js",
    "revision": "edbd2b261d6535ad03ecc5e72fceb0d8"
  },
  {
    "url": "assets/js/46.418a978c.js",
    "revision": "4458f7f0ab635598efbe15925b1a02ba"
  },
  {
    "url": "assets/js/47.f2c23974.js",
    "revision": "68f0cceca51105df8c2cfb355ad5d1b5"
  },
  {
    "url": "assets/js/48.646815ad.js",
    "revision": "dd5ae187f437c9c057c49cf28d81f099"
  },
  {
    "url": "assets/js/49.f2e0c5f0.js",
    "revision": "db32b43fefcae546801a7791a3a4a426"
  },
  {
    "url": "assets/js/5.39633807.js",
    "revision": "c11b0deb53f2f49e67184ee6a3e32427"
  },
  {
    "url": "assets/js/50.7053096a.js",
    "revision": "71e729fc4d39b9d2ec6c8022ccb9b8f4"
  },
  {
    "url": "assets/js/51.79583449.js",
    "revision": "db4438515e4f9f90a0623021554999da"
  },
  {
    "url": "assets/js/52.81a98a81.js",
    "revision": "8fe83534d5703d6295590cf4aa88183d"
  },
  {
    "url": "assets/js/6.81aaa7bc.js",
    "revision": "163b6d2101d0c9807401f0eb1624b6d7"
  },
  {
    "url": "assets/js/7.ed94454d.js",
    "revision": "329ea524e47105dced65a4e13445c29e"
  },
  {
    "url": "assets/js/8.f7977212.js",
    "revision": "e824bc4c03588a415cfa4d8a8a0a7557"
  },
  {
    "url": "assets/js/9.7d8addf3.js",
    "revision": "07e39651f423b531704563e7dd72d881"
  },
  {
    "url": "assets/js/app.589c059b.js",
    "revision": "b865586c5ecc4bcf902387e5042de9de"
  },
  {
    "url": "categories/index.html",
    "revision": "fc8db4e132dd563458b3f8d0228d6b34"
  },
  {
    "url": "countup.html",
    "revision": "d007e9160be8a9844384bed2327fe475"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "abbea3ecaf02ee6c11c5bba832bdfad9"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "81e5af509f9987435a945454bfa3ea90"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "233ae5c75a397b83cc2a8596fb9f1bf1"
  },
  {
    "url": "css/index.html",
    "revision": "cca04c80e454315b574fb18050025207"
  },
  {
    "url": "firstblog.html",
    "revision": "093ebb2c1ed3066800a61c484b55bd2a"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "9eceff5950f3835b096301c51d540e93"
  },
  {
    "url": "html/index.html",
    "revision": "debfa5406523161638fe1f4ee4b8082a"
  },
  {
    "url": "index.html",
    "revision": "ec4f51cd2b35f7189bbab6f0825ccb04"
  },
  {
    "url": "interview/20201127.html",
    "revision": "9c4ceaa61a1fbfa004cc48c0d3748950"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "ad0df4be735c598bd6b6704f24ed047c"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "45741ca89113f40168f846855c3755fe"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "8f02b20a038cdf4e63da87a45b10daee"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "952d5519e698333b7be9a41f4599573f"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "3ba1311b66f80b59dfa8e34596ebedeb"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "97a411b5689cc194e2d8163dc3ff0a73"
  },
  {
    "url": "interview/index.html",
    "revision": "f3a889319f1ec69696c6a4418e90aea3"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "09e8d8ee6176f4ec4679bc48cb0178b4"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "b9f957eb6090e56101829de9a399fef4"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "54f45e44c7d8db197fb1ff7261c0085a"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "b471d8474e4832618cbc849a611e229e"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "522e3dcbf339b1c215d476518617a123"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "2b5e64f1066c08c19c09837861a95663"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "e4c8be03621f5fcf406d7fa2f7ecb7e3"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "824210f3a56851846aa0f66da362cbd3"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "11b3dc9f6b107d87a3b8ac52dc01dd0e"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "e3b5b8153402785be40f09e1e07d9d55"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "939724bd3cb94a8cceb02ed17b497f2b"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "ec3057ab8005aed2dca64a95530a4215"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "d5154cd05d03d50eec21ad4c1ce75ff3"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "66449323eb2d7a5a57049be8e62c70c4"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "650fac1a649a9a219a51663d817328ab"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "f020096dfb8f0730834b22170aa4b746"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "13e63455504df9f24ee66fa3602e879b"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "75bd1ce91abfc6cddb032f77cdfdb449"
  },
  {
    "url": "javascript/index.html",
    "revision": "259a51caf4ab98a7419ce375eca16292"
  },
  {
    "url": "LICENSE.html",
    "revision": "b083e5e458d05ab02a13568955b3aeaa"
  },
  {
    "url": "quanxue.html",
    "revision": "6c27ec1226f47e2d4ad198d0e8186584"
  },
  {
    "url": "tag/index.html",
    "revision": "3d2b7443a5950f23b021f1d6662c63e6"
  },
  {
    "url": "timeline/index.html",
    "revision": "397454521c3503811e82560b56d217d1"
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

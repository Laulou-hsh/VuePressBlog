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
    "revision": "796a59ce391b9096c8926bc1fbc89434"
  },
  {
    "url": "about.html",
    "revision": "044388ef1c6e7e5f3f8b3e10ae941934"
  },
  {
    "url": "assets/css/0.styles.afb3d33c.css",
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
    "url": "assets/js/1.cb36107b.js",
    "revision": "03a3ba95a9a0c8742ab08834249997c2"
  },
  {
    "url": "assets/js/10.baae9bb9.js",
    "revision": "f03247e2fd2b65050598b49314c118e9"
  },
  {
    "url": "assets/js/11.e48f12a3.js",
    "revision": "0f6d982d3e74a69c68a654e899f073e1"
  },
  {
    "url": "assets/js/12.4dbfba83.js",
    "revision": "aa9925bfd43827cf17379f1f8dc7bce2"
  },
  {
    "url": "assets/js/13.cc785578.js",
    "revision": "58966a31ac4766e6e4cf216e9d11fa35"
  },
  {
    "url": "assets/js/14.05e5449c.js",
    "revision": "d5341a7629b582837a6d552990ff7f2e"
  },
  {
    "url": "assets/js/15.56fa8fea.js",
    "revision": "d4a0c1bb03d0958c7dbb0014f87da88d"
  },
  {
    "url": "assets/js/16.3a39b19d.js",
    "revision": "52467ef59075dfbfb8e4882447b29b23"
  },
  {
    "url": "assets/js/17.2350068b.js",
    "revision": "50fcb953cc6c308b8e6596445dccf228"
  },
  {
    "url": "assets/js/18.7a7999ce.js",
    "revision": "d42addecc05b66f03d7440337418b00d"
  },
  {
    "url": "assets/js/19.337d8d8b.js",
    "revision": "0a362855b687ed79b50c28b34acb59e1"
  },
  {
    "url": "assets/js/20.6bd87f59.js",
    "revision": "c0279a03548026d81cc0153e848b4ea7"
  },
  {
    "url": "assets/js/21.661105aa.js",
    "revision": "5a6021e4ddc2695891008af1267fd8a3"
  },
  {
    "url": "assets/js/22.8d67bee4.js",
    "revision": "9f2de1c4182c1bec80bd3b45803abb46"
  },
  {
    "url": "assets/js/23.da42bb13.js",
    "revision": "249825c92057e425e865355297fc7bce"
  },
  {
    "url": "assets/js/24.bac70d0f.js",
    "revision": "0d5a905610e26b4a1ee2883dd82ebc2e"
  },
  {
    "url": "assets/js/25.92094683.js",
    "revision": "45e7cd6b4b2da1aa5a0f18f4c46e8da8"
  },
  {
    "url": "assets/js/26.a8c86af8.js",
    "revision": "6469e1897532f192a270c2e9ab254d8d"
  },
  {
    "url": "assets/js/27.44853df8.js",
    "revision": "ec71e8a7efe1f7b2f50b49b2cddecf6c"
  },
  {
    "url": "assets/js/28.67b873d5.js",
    "revision": "cdc134cc9a9e242f483952b7427b61d1"
  },
  {
    "url": "assets/js/29.04d4c26e.js",
    "revision": "e8d89577f9e2195564d7c66cda8b919f"
  },
  {
    "url": "assets/js/3.9d0aa042.js",
    "revision": "ae914cfa26e9b49a5f779bf080e67cc1"
  },
  {
    "url": "assets/js/30.44c24fdc.js",
    "revision": "148ff5bca0b191caabc8a66f1c57c165"
  },
  {
    "url": "assets/js/31.7df4c8d0.js",
    "revision": "39e9702bf09e736ff5ef0c2753036e6e"
  },
  {
    "url": "assets/js/32.f1a59078.js",
    "revision": "86723e4fcdff6f0e4dd5e997bea70f3f"
  },
  {
    "url": "assets/js/33.9e2981f0.js",
    "revision": "9fd73a4d065d7b67f89ae62e125263bb"
  },
  {
    "url": "assets/js/34.0f29513b.js",
    "revision": "9d713ebea8d275f0c1c3cf40cec66a3b"
  },
  {
    "url": "assets/js/35.a962257b.js",
    "revision": "220e28746f1dcabbeeaa19879beae33c"
  },
  {
    "url": "assets/js/36.3779e163.js",
    "revision": "558052a774c066a7d50c304f0c4eca59"
  },
  {
    "url": "assets/js/37.ad4eee1b.js",
    "revision": "d2750e2dd45c9558cee20f89b285b519"
  },
  {
    "url": "assets/js/38.6110ac71.js",
    "revision": "dece64e7bf37b98626cfaa7fd84511c7"
  },
  {
    "url": "assets/js/39.d375a0cd.js",
    "revision": "6782c9e216826a7abf19dfeb25aa5f81"
  },
  {
    "url": "assets/js/4.4c9566c2.js",
    "revision": "5e25080733e907e6383a2f91a6992b47"
  },
  {
    "url": "assets/js/40.9e92ccf9.js",
    "revision": "b01f779ff6abc5e25313de7d13f65978"
  },
  {
    "url": "assets/js/41.6dd60603.js",
    "revision": "ff3dcc6ec55667a523752bd86673cde7"
  },
  {
    "url": "assets/js/42.b4f4b455.js",
    "revision": "e669c81282546d86ecfb8e9703f60601"
  },
  {
    "url": "assets/js/43.7636b498.js",
    "revision": "b62538df6f6eee12ba976db67617b840"
  },
  {
    "url": "assets/js/44.1710cf86.js",
    "revision": "9e8b8bca9e3012de68dfd4d12ef86b16"
  },
  {
    "url": "assets/js/45.dce5bc8b.js",
    "revision": "00ed38ce1f9431c782735556380be869"
  },
  {
    "url": "assets/js/46.95b0bc6a.js",
    "revision": "974f2849ebec77329b66a57d7eb57e3d"
  },
  {
    "url": "assets/js/47.4cc4592f.js",
    "revision": "f4a71b5cf6595a3aef76efa29a75f237"
  },
  {
    "url": "assets/js/48.e57e9ae4.js",
    "revision": "d22b3e1c0f3260122b31725c715d8dcd"
  },
  {
    "url": "assets/js/49.95f8a3ba.js",
    "revision": "b33f4dc123651d0c60fdb3356f8737a2"
  },
  {
    "url": "assets/js/5.437fdc3b.js",
    "revision": "e6e8afb7d691621ddf203a450eda09cf"
  },
  {
    "url": "assets/js/50.a178a9bd.js",
    "revision": "b68bd4e73a1c123723e481fc415f733a"
  },
  {
    "url": "assets/js/51.5dd29353.js",
    "revision": "ee23a103019b6b7d2d9b56861d55cff0"
  },
  {
    "url": "assets/js/52.f4c7736c.js",
    "revision": "ee5a678d5728b6b8fa66f6041915fc34"
  },
  {
    "url": "assets/js/53.69560126.js",
    "revision": "2db64a9d7cea698e4758ea0c3a928304"
  },
  {
    "url": "assets/js/54.6f6962dc.js",
    "revision": "c118357878d67504b30cd82eecd3be7a"
  },
  {
    "url": "assets/js/6.2d803d38.js",
    "revision": "0cb860dc4d2a6d0ca1ea509c30fbfb80"
  },
  {
    "url": "assets/js/7.1ae0e636.js",
    "revision": "862b504df5dea18840a464a67c711df9"
  },
  {
    "url": "assets/js/8.94c2e6ea.js",
    "revision": "d0a82d36f2ea0b43b367212a5e535e3d"
  },
  {
    "url": "assets/js/9.e3a1248b.js",
    "revision": "c67a1816b7fd066cf5162f28043a3ee1"
  },
  {
    "url": "assets/js/app.ed6f25c6.js",
    "revision": "15933cbd4f1459460f136b567574b689"
  },
  {
    "url": "categories/index.html",
    "revision": "37e8741a50118ae4e300ea1257b67a86"
  },
  {
    "url": "countup.html",
    "revision": "67b4fbb17a59fcb1ac4a865e944a0d1c"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "d013c73cfa5b047385aa1490b77d2367"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "f86d8f20684d3aa80015c5bd42612c57"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "be136fb17bfc98af6aa8e3846ae4dc35"
  },
  {
    "url": "css/index.html",
    "revision": "03cbb14dc3c416c594b659645d2717cc"
  },
  {
    "url": "firstblog.html",
    "revision": "0b2770e86dcf30c5ccaeb27089b621f5"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "0081a236ed4b7f82a7a969cbfe9cdd48"
  },
  {
    "url": "html/index.html",
    "revision": "ec0c55b9508ffa567395b7c6e6be60c5"
  },
  {
    "url": "index.html",
    "revision": "5f449f25e297318394b7c153e63a512b"
  },
  {
    "url": "interview/20201127.html",
    "revision": "f82c1ff2a46cece0fd01f4ee1c683f07"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "95693804b2ee1ae59ce2dfcf2c79e0b4"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "9d564b0f7da676b49316713383d8396d"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "4d27171ff990d1965d2b7eae83dc5d88"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "4e2e84c852df6b47c71f57f6b4777c2d"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "fdf2a02154a89eac63644b15453f9a88"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "0638e71db50878171a71fb2fc0fed64f"
  },
  {
    "url": "interview/index.html",
    "revision": "a387f4621e2c49e2d35739e227d6faed"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "3c3daa058fef533c82c1d33645b046c0"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "5b2c79eeb819c9e0cb6d6e9ed0ff8e9f"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "3ab00eeb98e3e859f6803d96557c3c79"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "f524a8b9e8cf8d4e24091031309df258"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "826366a38471394e659214bd1a33b841"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "0bd19409e71efbae546cbd1f671fc671"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "814012c18e1231ffc8d5b70ec9684758"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "4eb60030695832551ddf54b5d65d9818"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "eb1a74eeae198f88e8a968914f5b113f"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "bd345310d53bf1de4fefee06e025ae21"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "b68eb9027b2d48595fdda144bfb97180"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "bae3ab414a6c796f8524ffb19c9b22b5"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "e388c9739a98d8856d36a33caaf9ef63"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "0abe704eb3df07d6e26437e527842f12"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "3df86a32d25ddcf7c26e4f3a082f06da"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "7878c5796e3cd8edeae1d73bd55e5a0d"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "72843cedc6aa82f7439003469741f790"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "32b6cf32784aae01d1cad32d762c7922"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "0dd083feed6c545a5032699169cefe1d"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "83341108f98d17594f26fa38d40ca7a1"
  },
  {
    "url": "javascript/index.html",
    "revision": "d3c86a83253a6c774d6942ca0b04f7fa"
  },
  {
    "url": "LICENSE.html",
    "revision": "0923b786887fc7e411ed8107eac0855f"
  },
  {
    "url": "quanxue.html",
    "revision": "5477c6a4651484c0fa3e4681bfeaba81"
  },
  {
    "url": "tag/index.html",
    "revision": "a24ffa9b6ffcba557fc4d90338028493"
  },
  {
    "url": "timeline/index.html",
    "revision": "f6bc4686236420d0a9db3dd71378d27e"
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

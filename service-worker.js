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
    "revision": "fb6bf3e449027302b69ff3f212659ea2"
  },
  {
    "url": "about.html",
    "revision": "8f09199b32fc68332ded9940e9210c93"
  },
  {
    "url": "about1.html",
    "revision": "eef03cbf12dce1ef2eb2b21855d0b5c7"
  },
  {
    "url": "about2.html",
    "revision": "331fd4db94a9d15221a7a43efba2a3c9"
  },
  {
    "url": "about3.html",
    "revision": "e5b9217ed16bd0619951dc4b36e1785e"
  },
  {
    "url": "about4.html",
    "revision": "ff6dc268006806585a4ee29e4dc1dc42"
  },
  {
    "url": "assets/css/0.styles.81e4871e.css",
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
    "url": "assets/js/1.4dffb4d8.js",
    "revision": "dcfbc4caba9baa9235d20a8261fb53bb"
  },
  {
    "url": "assets/js/10.d4593701.js",
    "revision": "f4f0eb9e473e963b755fb7b4ef12337a"
  },
  {
    "url": "assets/js/11.e3da55b8.js",
    "revision": "9e2f1d84672c7ac7932829047955fc29"
  },
  {
    "url": "assets/js/12.ab5a2d11.js",
    "revision": "d42c79b424103a04ea32e6cb741ab05c"
  },
  {
    "url": "assets/js/13.6557246e.js",
    "revision": "02a9cae4f88679bc2f3b5eceebc503e2"
  },
  {
    "url": "assets/js/14.19013813.js",
    "revision": "ac3c6ca12b5667b0e8fd7c981fdbd787"
  },
  {
    "url": "assets/js/15.1bcbb4bf.js",
    "revision": "0641a001940f6ef5283615b640efb042"
  },
  {
    "url": "assets/js/16.967218e4.js",
    "revision": "72ebc97bc2bab4a9e8215e6c3ccccef9"
  },
  {
    "url": "assets/js/17.d478e49a.js",
    "revision": "1eec658d79f3d0cb461ee035ff03d27b"
  },
  {
    "url": "assets/js/18.a546aa1d.js",
    "revision": "ab0bdf4e57d2b96dbe4cab6aaca6ff87"
  },
  {
    "url": "assets/js/19.43857163.js",
    "revision": "2a2178916efd680d091d598ce0a7045b"
  },
  {
    "url": "assets/js/20.cc05dc8b.js",
    "revision": "7983428904a1552a02cde16c046f0951"
  },
  {
    "url": "assets/js/21.b71ace96.js",
    "revision": "b030acd144ce23890d0de9e654e69cd4"
  },
  {
    "url": "assets/js/22.e53048a7.js",
    "revision": "c4a0041f696b32ca1f5ff2c84d9a5640"
  },
  {
    "url": "assets/js/23.04ec7e63.js",
    "revision": "5da220d850773807ff78257fadb919c3"
  },
  {
    "url": "assets/js/24.91958403.js",
    "revision": "1a9aeef61deaa08ded447de7fab9346a"
  },
  {
    "url": "assets/js/25.087c8077.js",
    "revision": "2e46d2b5254b48f41baf15f48116a81c"
  },
  {
    "url": "assets/js/26.6de740a8.js",
    "revision": "0d70d868b5cac7c3128efb71a7c2f3b0"
  },
  {
    "url": "assets/js/27.82e58f6b.js",
    "revision": "d458b600d62683abf1be0e664c334b1c"
  },
  {
    "url": "assets/js/28.29b1c4c7.js",
    "revision": "5d50080dc46127b9996279125cd65abb"
  },
  {
    "url": "assets/js/29.d897abab.js",
    "revision": "8eba0b0925fd6f651f26b12b7d63d7e9"
  },
  {
    "url": "assets/js/3.23ed08e6.js",
    "revision": "ba5b648f0c8c6ad97c2b25404cc1a18c"
  },
  {
    "url": "assets/js/30.50720bb1.js",
    "revision": "8375218719ebb55af9893cfba5e02bc1"
  },
  {
    "url": "assets/js/31.a52c8b2c.js",
    "revision": "f934c49f3cb9df88a5d10097925f8865"
  },
  {
    "url": "assets/js/32.7c744e64.js",
    "revision": "9b5259e5422dcfd4b10c8d9c55f5ea91"
  },
  {
    "url": "assets/js/33.10faff20.js",
    "revision": "3a3df4afabcd95656cb2c0f8b9688fe4"
  },
  {
    "url": "assets/js/34.c54931a7.js",
    "revision": "2731b5a39259dfed3ad73cb7a1bf8a4e"
  },
  {
    "url": "assets/js/35.bd413f58.js",
    "revision": "b8a862f35fde114f617eef2dc6a5e74c"
  },
  {
    "url": "assets/js/36.5760fc1a.js",
    "revision": "6ddac7abe95fc58507be832cd01598c9"
  },
  {
    "url": "assets/js/37.f656f077.js",
    "revision": "7df6f494381759b04d4b1dd0e04fbf7f"
  },
  {
    "url": "assets/js/38.8eca8619.js",
    "revision": "d1fcf14bf9a58b353141d7d2742cc824"
  },
  {
    "url": "assets/js/39.13ed6daa.js",
    "revision": "cc6b27b811a5d987338703fca3bd64a0"
  },
  {
    "url": "assets/js/4.b268b139.js",
    "revision": "50fb8503d70e1adf3879b1282215227d"
  },
  {
    "url": "assets/js/40.c645fb17.js",
    "revision": "fa55170df5d76d6172b619c706022735"
  },
  {
    "url": "assets/js/41.e35de175.js",
    "revision": "8b5b1dced65667c389a7a1af5cef13a4"
  },
  {
    "url": "assets/js/42.fbab5b19.js",
    "revision": "50bfae2b8cecf8bbb865210da8a9b793"
  },
  {
    "url": "assets/js/43.91d64556.js",
    "revision": "8e3b68683ed6d94c6f491b3ad8b5ee5a"
  },
  {
    "url": "assets/js/44.fd6be286.js",
    "revision": "c277a9c5448e411f36f47d513aa2efef"
  },
  {
    "url": "assets/js/45.32084ca5.js",
    "revision": "a66c06aebbfc6538211b8fb31a04633c"
  },
  {
    "url": "assets/js/46.f2c59348.js",
    "revision": "261077deae3d7c4320bfe9503e3ce799"
  },
  {
    "url": "assets/js/47.e948ac02.js",
    "revision": "efa22c86da51158a058c7f4fd3d84e7d"
  },
  {
    "url": "assets/js/48.8f4f3a08.js",
    "revision": "2e78316505c5a17ad7dd8bd883e9f460"
  },
  {
    "url": "assets/js/49.5ac566e0.js",
    "revision": "68bf0e21cef2c464d780d3bccb59c667"
  },
  {
    "url": "assets/js/5.59b0a3d7.js",
    "revision": "3dfffb142a669a694641d807dc4775f8"
  },
  {
    "url": "assets/js/50.7e6a9f56.js",
    "revision": "61fddf281e348cb2d2214fca801a0d87"
  },
  {
    "url": "assets/js/51.c889f494.js",
    "revision": "076828bbf3ab5ab64b164b56a9cb5297"
  },
  {
    "url": "assets/js/52.6a0c7733.js",
    "revision": "4fb5e2504ce043880e48892acc48d293"
  },
  {
    "url": "assets/js/53.40fc429b.js",
    "revision": "e9741aacb802409b9c1abe046578b03a"
  },
  {
    "url": "assets/js/6.15669a59.js",
    "revision": "37cb57231c1ae2292ccb9d669e950161"
  },
  {
    "url": "assets/js/7.c66c007e.js",
    "revision": "538352d5d8f4999b0cf08ce0171eab87"
  },
  {
    "url": "assets/js/8.3306edbd.js",
    "revision": "9abd77d6dcae07099b5a400ea911671d"
  },
  {
    "url": "assets/js/9.c1094ba1.js",
    "revision": "cef66ff7747c19e4471a8bd887ee94e0"
  },
  {
    "url": "assets/js/app.39b04e5b.js",
    "revision": "a20218da6c270328e3e7e9ae31ed6a02"
  },
  {
    "url": "categories/index.html",
    "revision": "dba1853f56f5ee4c60a6d9d98b10afe6"
  },
  {
    "url": "countup.html",
    "revision": "49e932b904ce0822de778ab7ed3ca8d2"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "94fd23492cc20140b21d7c8e2cad3619"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "b1894a62ca9ad5fc568e007bc8371de3"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "6465841558213ba8eb7ba52495f09a4a"
  },
  {
    "url": "css/index.html",
    "revision": "a5d6e2de007b3bfc15187bccdadcf4b8"
  },
  {
    "url": "firstblog.html",
    "revision": "afb2302f2fcb16d22824780f72269a2c"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "e7f0f25d39d2091fed38ed0a9e8177e7"
  },
  {
    "url": "html/index.html",
    "revision": "aaf0946113a1af975652329ac3c1ab0a"
  },
  {
    "url": "index.html",
    "revision": "05a1437895073d671c29b273227a6b6f"
  },
  {
    "url": "interview/20201127.html",
    "revision": "e0b833de58a8f5d2c110b148368110ce"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "6d85c46ea59a268064f6152f2a762cfc"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "19d09f80fc86a7015fd0f92c7b2285f8"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "fb8b5e9d30d63c6cf714ed68e5da518c"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "ed5a1487d336bed0b64d36b4e48cc562"
  },
  {
    "url": "interview/index.html",
    "revision": "c16e013fa3808d3f1890ab9006c1449b"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "a6b4b5f41bb159bfc440fb27136e89ff"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "c111b991a672ce7c461e034afa6019f9"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "7cdb44c877a8764569847dbedab3eb60"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "2e8f0e93e55ce82ef7f8e9296e13f97f"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "0d5205131eba24740a3aa400c57c9cc9"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "04a0d77710819e6b0fe29f39fcac0516"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "5bf08ddae7769f6d25840ac3da16ffdd"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "7e3d44dbaa8c68c58a5c5e182e0b81a8"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "534c2d40b21974372ea4ebbd7e59579b"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "da9de0b138659bf5f17888965a6255c6"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "9f00b0a24a469ef0244f76a085aba890"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "c70b51cb9ec03fb8c9f5d28fa1149f1b"
  },
  {
    "url": "javascript/index.html",
    "revision": "b6a384e12d55a9465c395e45c13a74aa"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "623ff31153478901f284d13b341f90b0"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "54f6955597cb18a15893db53b0d35ed2"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "24ba47131b7f8af6a93afe3ac181c97f"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "5153e78ac7855abed0d5965b50f553e1"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "a2b74c46a82d5ca1ddd58310b0f78173"
  },
  {
    "url": "LICENSE.html",
    "revision": "3e4726fe8df581641d6767ccd085cf42"
  },
  {
    "url": "quanxue.html",
    "revision": "0d1e1682cfbfe550a1b02affb7b58423"
  },
  {
    "url": "tag/index.html",
    "revision": "8c3c427a41a20ff3406009add4bab626"
  },
  {
    "url": "timeline/index.html",
    "revision": "71b54b99fb295469f0f856f425c2a7e6"
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

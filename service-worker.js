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
    "revision": "61943ec9ff7d48507f28694cd59ce703"
  },
  {
    "url": "about.html",
    "revision": "893b79ace69f4343e202ae532b7435d8"
  },
  {
    "url": "about1.html",
    "revision": "7cda675e4e196353fe29b9bd4ababb1c"
  },
  {
    "url": "about2.html",
    "revision": "cad43a2ba01689c41e20557092f1a09a"
  },
  {
    "url": "about3.html",
    "revision": "9f3cd17f86f7a143db3674361e7b33a9"
  },
  {
    "url": "about4.html",
    "revision": "7342f5657f59b64d197cd4bd8e8e2d1c"
  },
  {
    "url": "assets/css/0.styles.0bf44808.css",
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
    "url": "assets/js/1.17050fa8.js",
    "revision": "b0c667db8de4d727c667309c721a0471"
  },
  {
    "url": "assets/js/10.c8ea79cb.js",
    "revision": "dc61ebee7328e3805d209c075a568456"
  },
  {
    "url": "assets/js/11.bd28f23d.js",
    "revision": "690825995447ca88b75c6ef51632b349"
  },
  {
    "url": "assets/js/12.c63a403a.js",
    "revision": "4e3ca1c52802732111e29ab83f81f906"
  },
  {
    "url": "assets/js/13.2f7f36d2.js",
    "revision": "08a780b6a96df576799d8820f1f50217"
  },
  {
    "url": "assets/js/14.739cf097.js",
    "revision": "31331167f9ca9402498ba05b54f7896d"
  },
  {
    "url": "assets/js/15.0059f42d.js",
    "revision": "00713506bc0c757e9d9b94469bdb3897"
  },
  {
    "url": "assets/js/16.42c0cb35.js",
    "revision": "96b93a59fcb4b59967a80432f3296713"
  },
  {
    "url": "assets/js/17.3741cc00.js",
    "revision": "f137efca240c068229a011e30a4c78ad"
  },
  {
    "url": "assets/js/18.e59524f4.js",
    "revision": "a024aba4ae37c9f3fd0a4b4666dc70b8"
  },
  {
    "url": "assets/js/19.e187a6b4.js",
    "revision": "2093edef3e92d8844e9817280546ae7e"
  },
  {
    "url": "assets/js/20.7647569e.js",
    "revision": "c2f3b651d5b9bd1ef6cd477976439ee0"
  },
  {
    "url": "assets/js/21.f7ba22d6.js",
    "revision": "c2fb0f64f83140052230299dc54ca24e"
  },
  {
    "url": "assets/js/22.d3bf5b8b.js",
    "revision": "fc1379a4d307e27cf28d75e44fecf129"
  },
  {
    "url": "assets/js/23.d6b6ba4b.js",
    "revision": "963e62efca990d7523bad7afb91acc19"
  },
  {
    "url": "assets/js/24.98c127ca.js",
    "revision": "1f35144a877549e9ad2f16d28edb33fc"
  },
  {
    "url": "assets/js/25.62186573.js",
    "revision": "8972adae4fa2c56d26e5092e8c60ccf5"
  },
  {
    "url": "assets/js/26.842187c3.js",
    "revision": "3bcf48f0007a2ab2f943a36ef60134c4"
  },
  {
    "url": "assets/js/27.3c121db5.js",
    "revision": "9fc40a01c52c3acfa73609ee6fab8690"
  },
  {
    "url": "assets/js/28.70e72ab4.js",
    "revision": "37a9d9f8bbb203dd68eac413ab188e0b"
  },
  {
    "url": "assets/js/29.1609de41.js",
    "revision": "de4e20438395969cb7ed1535dd91aa0d"
  },
  {
    "url": "assets/js/3.b2f8bc9d.js",
    "revision": "2af623b453f6a8f836f94c206c7ff8e0"
  },
  {
    "url": "assets/js/30.72050242.js",
    "revision": "93b10a8b3f9a99ec2591c31836cd1337"
  },
  {
    "url": "assets/js/31.fd589cbd.js",
    "revision": "3d18966bd4ecc0816ca45794d7b9dfb4"
  },
  {
    "url": "assets/js/32.876248b3.js",
    "revision": "c49789888dd0868f3dfd5f0feab76554"
  },
  {
    "url": "assets/js/33.6e8d9d8d.js",
    "revision": "15a94ef9e4ecf41d022eeaf82c3116c5"
  },
  {
    "url": "assets/js/34.bcae3235.js",
    "revision": "420813484fc4229689b1a58bd568348d"
  },
  {
    "url": "assets/js/35.22fb5702.js",
    "revision": "dedbbd3ebc9084f2261d1edff6c2b73b"
  },
  {
    "url": "assets/js/36.ff5ec7cd.js",
    "revision": "c7016b736ea2a21e43d9ef69a3c06895"
  },
  {
    "url": "assets/js/37.a1ca3029.js",
    "revision": "2b7e2256f2e4cc3593b673c67a523c30"
  },
  {
    "url": "assets/js/38.0732d263.js",
    "revision": "5e8c82bb8849b8354f880542add25703"
  },
  {
    "url": "assets/js/39.5f822d0f.js",
    "revision": "ea9c057045e3aed2c6b5812d28eb82dc"
  },
  {
    "url": "assets/js/4.e5f97a2b.js",
    "revision": "c7c3f2a6dcc34c68d1282c1730f805c0"
  },
  {
    "url": "assets/js/40.6999aeb5.js",
    "revision": "3da63f12483c0099ff7e5ec6c590e56b"
  },
  {
    "url": "assets/js/41.2023bb65.js",
    "revision": "45d2cda1d13ea6b93d6c9bd536034d94"
  },
  {
    "url": "assets/js/42.4188ac29.js",
    "revision": "1b3ef857749e5bc023bf3a857579a2c2"
  },
  {
    "url": "assets/js/43.f87a4b01.js",
    "revision": "d88d2213a4bac39cb3bde37d5c5c27b6"
  },
  {
    "url": "assets/js/44.50b78ec4.js",
    "revision": "7c88381a8e47a4dd7255744ee351c1f4"
  },
  {
    "url": "assets/js/45.03541872.js",
    "revision": "e1bf2bee3fa0c7b15479d511aaef3070"
  },
  {
    "url": "assets/js/46.fd5ee8dc.js",
    "revision": "585019a1233b05c74d40dfc6d42ee1bc"
  },
  {
    "url": "assets/js/47.20cbac12.js",
    "revision": "0bd095224c6cf964f413024779d6312a"
  },
  {
    "url": "assets/js/48.d1d732b6.js",
    "revision": "d2c87f5ea8b2d91c09b8a7bfa3deefb1"
  },
  {
    "url": "assets/js/49.7240cad9.js",
    "revision": "eb688573811310c245506d32821638de"
  },
  {
    "url": "assets/js/5.02eb6684.js",
    "revision": "68ee1567d488e78b6e9b6c849aa8d047"
  },
  {
    "url": "assets/js/50.062cb17c.js",
    "revision": "c3ddcb0083853f02992293a9c3964c17"
  },
  {
    "url": "assets/js/51.0d456384.js",
    "revision": "363c128a928b3b0891a8e79e0e520cb7"
  },
  {
    "url": "assets/js/52.36c890b6.js",
    "revision": "5c6027089cfa28d7d075f70bfcc3efeb"
  },
  {
    "url": "assets/js/6.d9004d3e.js",
    "revision": "5309a625930fa97853fe66c29ee94cad"
  },
  {
    "url": "assets/js/7.b7a7b872.js",
    "revision": "63f68824b2af38ff33472cad3c5e758d"
  },
  {
    "url": "assets/js/8.eca93c44.js",
    "revision": "08fa5340221db169a86a2e491e831dbb"
  },
  {
    "url": "assets/js/9.acacabb1.js",
    "revision": "bcb7d55dcde01e0bfdd1c213ead0b381"
  },
  {
    "url": "assets/js/app.5b86bfa1.js",
    "revision": "ae0518103752c42309eae00ed674c265"
  },
  {
    "url": "categories/index.html",
    "revision": "0e2226b912baff470a4829e5c7280da5"
  },
  {
    "url": "countup.html",
    "revision": "2598ab6252c52a08dcb7eb5f19398460"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "61f93bbf767ae930194389903669a073"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "5d9ab4c59466208f8b7518c521bddc72"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "242f088c8259d2c3987076f8e4b1c879"
  },
  {
    "url": "css/index.html",
    "revision": "8ab7e03a023746a2d2003983adfdc3c8"
  },
  {
    "url": "firstblog.html",
    "revision": "d161070ebe076df5f3d0927140ee5a63"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "59a8a84ab9de2fab4d437feb58d80134"
  },
  {
    "url": "html/index.html",
    "revision": "614ed0abc3e1709fa14f600b28876374"
  },
  {
    "url": "index.html",
    "revision": "c84f3a1f8f4e8cfb1ca884defe5203eb"
  },
  {
    "url": "interview/20201127.html",
    "revision": "d421fc27c1e368b642068acd503beddf"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "d942d93341849097223a04f107f8d6e2"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "25620b140f398d5c43f5fd89bc1a2ca6"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "0dccffbe597ecdd4f0ebe0b294d58b4b"
  },
  {
    "url": "interview/index.html",
    "revision": "7a1b488a80dadd41c7cb44a316acbee9"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "3afb164d2b5ee587811b9772b6b25dce"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "092a7512a08a6045b3e4a00768fc8196"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "e28453f1a110780cc8ef36a22a3a4f04"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "b38f079584ddb9d6171699458692e53d"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "e2c1e60dac8c51b13d3c2e16b4b448a7"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "d9ae28454a89dd4200797322bd89f561"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "7360bb27735e2534b2b8344261896ccf"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "2c859153c72618533702e2f56be98f8b"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "7450b63e9edf430ae7b57019271066fd"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "c2eee3b6c6a4c201663748d55f34e719"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "e866fd666c0987f932410a14e4387bfb"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "973c07a9345224c46f6235991afb8ce1"
  },
  {
    "url": "javascript/index.html",
    "revision": "ddc8692929e6bb0a3204fe1ad0b592c8"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "1f88015904606cd394820b7f491685cd"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "db7e8bf220b85a90812fd1d0f3fccaf5"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "6082897a20a7cbdff84f6ed25539cf50"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "67ca2306c8bba95535249281cf965542"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "c7f22ad9e34882e0b04cbf99b3531a80"
  },
  {
    "url": "LICENSE.html",
    "revision": "4b5abf48c8ddbfc7b9d474dc497a4a3e"
  },
  {
    "url": "quanxue.html",
    "revision": "3dd2d398414edae70120333c04e050d3"
  },
  {
    "url": "tag/index.html",
    "revision": "1f499107402eebcb426a7c4caef0d0d4"
  },
  {
    "url": "timeline/index.html",
    "revision": "2fae71413ac7eb704bbaab1968320ca4"
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

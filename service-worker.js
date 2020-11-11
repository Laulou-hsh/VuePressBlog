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
    "revision": "a81df230bc00c2130a25c7de39860885"
  },
  {
    "url": "about.html",
    "revision": "185dad15161165c541b8d798686e365d"
  },
  {
    "url": "about1.html",
    "revision": "b087815dac620580d6d2dfd91e02f17f"
  },
  {
    "url": "about2.html",
    "revision": "843df4646e6037a39434f22cc0664372"
  },
  {
    "url": "about3.html",
    "revision": "2366afe43f5b5728c2dca62de5a1688c"
  },
  {
    "url": "about4.html",
    "revision": "9918c59e74b6d8f17af63e7d1069e010"
  },
  {
    "url": "assets/css/0.styles.d15e9e62.css",
    "revision": "32509fb977b698e56520e303f6bfa292"
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
    "url": "assets/js/1.28e1b7d4.js",
    "revision": "8f5c90ad5f1bad773d54ae89fad95ea2"
  },
  {
    "url": "assets/js/10.a1e0f144.js",
    "revision": "450d96beef99b25813448dad384174ab"
  },
  {
    "url": "assets/js/11.a11fc3aa.js",
    "revision": "5ff4ea613425c55e54718786c28cf208"
  },
  {
    "url": "assets/js/12.f1e2f900.js",
    "revision": "474f21555d1d2685fe543255019581b5"
  },
  {
    "url": "assets/js/13.69620add.js",
    "revision": "937b88dc3c11527010c6cae7656764be"
  },
  {
    "url": "assets/js/14.c74cc75c.js",
    "revision": "d70b9d2703e2c51229822e2bb58aa0a5"
  },
  {
    "url": "assets/js/15.f70f963a.js",
    "revision": "611d13292b4ba943e867182d1b1e78ac"
  },
  {
    "url": "assets/js/16.370e884c.js",
    "revision": "b564ad71812faae1e0b6e31ef6f7cb19"
  },
  {
    "url": "assets/js/17.6102e632.js",
    "revision": "f2bf743cb3377ab26cf06927388c1940"
  },
  {
    "url": "assets/js/18.2137b720.js",
    "revision": "f2b4ad855b88314b0939c59b592f3e66"
  },
  {
    "url": "assets/js/19.6ad350d3.js",
    "revision": "eb71a2870c7382ed742c7f9564628422"
  },
  {
    "url": "assets/js/20.1020591a.js",
    "revision": "d8e2c3d0d49f2b531eb4e755948d7a61"
  },
  {
    "url": "assets/js/21.842f0360.js",
    "revision": "6b551aebcfb171cf63ae03a36b26274b"
  },
  {
    "url": "assets/js/22.d51a0a23.js",
    "revision": "d1d2b0fa22908d2e0af8cf5d9eb96232"
  },
  {
    "url": "assets/js/23.db5c972e.js",
    "revision": "535dc75cb726c4629c9ef2d018953300"
  },
  {
    "url": "assets/js/24.1931aee8.js",
    "revision": "24b56f817a328b2bb3231424d8625632"
  },
  {
    "url": "assets/js/25.dd104540.js",
    "revision": "96d8e231b8a8f3c18cf4d65fe06079a9"
  },
  {
    "url": "assets/js/26.cabeae56.js",
    "revision": "ab68534733b44daaaff840b8e65fc9e3"
  },
  {
    "url": "assets/js/27.387e62ef.js",
    "revision": "40f0cb31eb91efc9c3b3c136ec0666be"
  },
  {
    "url": "assets/js/28.969ff887.js",
    "revision": "dc557a207d4449c4b3caa9edb822a978"
  },
  {
    "url": "assets/js/29.90454564.js",
    "revision": "ef85f3b87c0afe81f19a31bc4f8ebbac"
  },
  {
    "url": "assets/js/3.ca0f69ed.js",
    "revision": "2fe4cee1b98b458205015107d7da6f19"
  },
  {
    "url": "assets/js/30.fec7bde3.js",
    "revision": "9f320e0a8773e64a87a97283e80fa123"
  },
  {
    "url": "assets/js/31.e91183c0.js",
    "revision": "58d29f696b6ceccb13c69ebd7eefcee4"
  },
  {
    "url": "assets/js/32.bed67e2c.js",
    "revision": "ae00d0b0b64c9b9298f965d15939e782"
  },
  {
    "url": "assets/js/33.72faa7e2.js",
    "revision": "5bce38ddfbc4711d7a46d18f83bf4348"
  },
  {
    "url": "assets/js/4.917360a3.js",
    "revision": "8c37056adef565fb24471217ad91f40c"
  },
  {
    "url": "assets/js/5.e74c7020.js",
    "revision": "ff8acbbca4b2c452d2c050c39872ba19"
  },
  {
    "url": "assets/js/6.0421d25c.js",
    "revision": "f2b4614d491455a4bf6ba3e03ae1b5c8"
  },
  {
    "url": "assets/js/7.e6fd46cd.js",
    "revision": "0ee4094de47f7499f9bee1903ff9d72b"
  },
  {
    "url": "assets/js/8.2f8b8100.js",
    "revision": "d94a8c88f36b34afba43cd65a5cc5bf6"
  },
  {
    "url": "assets/js/9.72f98dfd.js",
    "revision": "4476421350996b0679a2de3549c725eb"
  },
  {
    "url": "assets/js/app.ff062b1f.js",
    "revision": "a3ae43185605623841f503b400c6a8ed"
  },
  {
    "url": "categories/index.html",
    "revision": "7a5770c3b9f43c1daf9d16ed5c957b64"
  },
  {
    "url": "countup.html",
    "revision": "0f7ae5c903c5d66d579c79ce3176247e"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "1f9d33558423e3559232ee4e5d776ecd"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "14e6297f5ec8bb89198a983896aa8d34"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "60ced04224314baf440aae0d52a421d6"
  },
  {
    "url": "css/index.html",
    "revision": "e2217c64c4523d3d9bb6292be4f45c02"
  },
  {
    "url": "firstblog.html",
    "revision": "0cde47ae41975a25aaf695375670963e"
  },
  {
    "url": "index.html",
    "revision": "43e18ccf83d34a0686b3b13057b26d4a"
  },
  {
    "url": "javascript/index.html",
    "revision": "64a00bd3b7bbbba6b6c3fe4a4307faf1"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "ea5da22442d777ce36000e5eeb623c74"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "01d0835b0cff89aa3e326f26c185d8f2"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "b400fd2294c0775e8efc243f1ab3ff2a"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "25e0a086e60fca7c3fb632019f028dc2"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "5841fa29270854f6d8eb493cd5262404"
  },
  {
    "url": "LICENSE.html",
    "revision": "ed29625f89e429102717ec8f0ecc5abf"
  },
  {
    "url": "quanxue.html",
    "revision": "fac2f99e53e7853bb4d6886f122aaffd"
  },
  {
    "url": "tag/index.html",
    "revision": "02c540826b6cde352701936e9267c0b5"
  },
  {
    "url": "timeline/index.html",
    "revision": "b1f263eab480d7361854001df6f84ac8"
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

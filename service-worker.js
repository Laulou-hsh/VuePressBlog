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
    "revision": "04dd1d910ab68b07c4b06209612a97de"
  },
  {
    "url": "about.html",
    "revision": "7766918adb2ee9daeed11a12d4821957"
  },
  {
    "url": "about1.html",
    "revision": "f1bdf66ae20521422b328b821ec6031b"
  },
  {
    "url": "about2.html",
    "revision": "ad0cbd27e7e7e4cc7d5721cbec25c6aa"
  },
  {
    "url": "about3.html",
    "revision": "d642761e6f11879002b2d2f523681178"
  },
  {
    "url": "about4.html",
    "revision": "34a011913f01edabffe3b3802887c952"
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
    "url": "assets/js/24.f1fb1654.js",
    "revision": "a313b11ef2db6422bc50d9e63dfc4514"
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
    "url": "assets/js/app.f960082a.js",
    "revision": "bda513974a86de4988008416d835a380"
  },
  {
    "url": "categories/index.html",
    "revision": "a90d4fdb8df4f2993c263b0e8445d4b9"
  },
  {
    "url": "countup.html",
    "revision": "646c7f04c46e43b84523e60399ad5347"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "709103b828118f9280ba50347e39b125"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "66f65b2c50528001dc8bd20366a04fec"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "b702d27d8ea6d7a19f018376635da309"
  },
  {
    "url": "css/index.html",
    "revision": "99c232aaf060c7489f601dba63df5f4c"
  },
  {
    "url": "firstblog.html",
    "revision": "8d46135452235b8d5961f60c216839d5"
  },
  {
    "url": "index.html",
    "revision": "04a65053aab98e865c106535275c6a9c"
  },
  {
    "url": "javascript/index.html",
    "revision": "acf298286e3cbf23ea48f208ce151b8e"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "a1d8006d48cd046df9f8bb8c5d4d248b"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "3a32900342632761cd6215cb479b5568"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "607d7313a499848fa7f5bdcec39b81b9"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "db977e0c9ceaf0b207816e7e80935cf3"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "b317d982b8c46cdc0ce2ebc8e1259cac"
  },
  {
    "url": "LICENSE.html",
    "revision": "bc122413076ea2e17c945fe14b44fc69"
  },
  {
    "url": "quanxue.html",
    "revision": "8c473c2bba899f581f7d852efc300c4d"
  },
  {
    "url": "tag/index.html",
    "revision": "171ca99bc346db8502f054b71317ad16"
  },
  {
    "url": "timeline/index.html",
    "revision": "53d91b5d951c799619f44faafaa77a19"
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

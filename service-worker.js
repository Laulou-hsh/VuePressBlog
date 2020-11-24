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
    "revision": "a07bba28ad0f0069627a728d382d3c2b"
  },
  {
    "url": "about.html",
    "revision": "79c3d3ca7cc057546891cd487db296ec"
  },
  {
    "url": "about1.html",
    "revision": "2a48d06fa9ba14efd0c7ff1fd0e00073"
  },
  {
    "url": "about2.html",
    "revision": "8431bb96260b48b1e909e834bddc7634"
  },
  {
    "url": "about3.html",
    "revision": "109953e43d6c343bac4ecd80c82bc2ee"
  },
  {
    "url": "about4.html",
    "revision": "fa7d88de72051348967abe88e6f22932"
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
    "url": "assets/js/13.35cb245d.js",
    "revision": "32140f9d9307037df13aa23faf7ea40d"
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
    "url": "assets/js/20.fab1a5e3.js",
    "revision": "9d75f19919e2bd87a3f2b4490a07fc73"
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
    "url": "assets/js/app.2f1c933e.js",
    "revision": "94df843b8cafb2f910d89ab29b9ee8cd"
  },
  {
    "url": "categories/index.html",
    "revision": "cf6e35c3e869b6525eaab6c819297309"
  },
  {
    "url": "countup.html",
    "revision": "db0c598cfe04e1abf286292f85780f3f"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "fb1ccb74f5567a551f844da91a4786dd"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "cf41efc13dc27d9abb2d0cc105a4fea6"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "2fc1d3378bad61a9de102a1484b2deef"
  },
  {
    "url": "css/index.html",
    "revision": "79b61fb1df7dfbedea89324d7d141ddd"
  },
  {
    "url": "firstblog.html",
    "revision": "42a342eb244e41de3dcf06b70f1156cc"
  },
  {
    "url": "index.html",
    "revision": "a482f5418aa7ad56b14ee4f78d014d98"
  },
  {
    "url": "javascript/index.html",
    "revision": "eb416e044e422b72660b51d2cd3bfa80"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "60c17ea8d3604590507025c40a968101"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "97422eea289e66f4ec6cf9ae43f670e4"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "6fe1b25cfd65399838227ffcbad2470f"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "0b08fb33d2bec4c90d73a8f1c75ef95f"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "8179e826517c16005028b037d36a7691"
  },
  {
    "url": "LICENSE.html",
    "revision": "031e1bc564538f7b2071ea7fc3327fd1"
  },
  {
    "url": "quanxue.html",
    "revision": "4a6be6b440c119e6ce44d9c3275dda5e"
  },
  {
    "url": "tag/index.html",
    "revision": "d03f5d5fb84b57ae931d073062292ef9"
  },
  {
    "url": "timeline/index.html",
    "revision": "11e3b175783d44d2c1602950be59669c"
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

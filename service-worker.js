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
    "revision": "755a01837bdc637544350566a6e701d0"
  },
  {
    "url": "about.html",
    "revision": "53409af29c1a46e29214eccd85676354"
  },
  {
    "url": "about1.html",
    "revision": "4d7f812c55a2cbbe4141b437e219e0e6"
  },
  {
    "url": "about2.html",
    "revision": "a73b2abb5eafa2819264abd667fe5c31"
  },
  {
    "url": "about3.html",
    "revision": "1efc081b8a9ced04aab9a1b847ba46e5"
  },
  {
    "url": "about4.html",
    "revision": "cc896862b7416a7fb3453d37680e8b21"
  },
  {
    "url": "assets/css/0.styles.b6ef37b4.css",
    "revision": "f7c870c5f2577200e5e5cc1e04a1da40"
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
    "url": "assets/js/1.f518eb26.js",
    "revision": "645f0b6ef967e4472cf224a0423c06db"
  },
  {
    "url": "assets/js/10.92fa95c7.js",
    "revision": "1abff3f7a8949e69294331f77e6aa49d"
  },
  {
    "url": "assets/js/11.aad00604.js",
    "revision": "8ddcb00389bd18f74836a20498d7609d"
  },
  {
    "url": "assets/js/12.1f9b55db.js",
    "revision": "4da1832cf988ed047697cbfbbf042283"
  },
  {
    "url": "assets/js/13.b080a778.js",
    "revision": "5ba107de9988acbd6aeab974ddcca123"
  },
  {
    "url": "assets/js/14.3d2baf27.js",
    "revision": "0b52d64d2f6b3d3cb0f1d2f48fc4047f"
  },
  {
    "url": "assets/js/15.e61e0753.js",
    "revision": "f7b8c323d9d0dabf776f1d6065a40832"
  },
  {
    "url": "assets/js/16.242ce23f.js",
    "revision": "de438751423e776015da99a46dc3d27a"
  },
  {
    "url": "assets/js/17.0e17a8b2.js",
    "revision": "93b75fe79f51efa5394a29b21614d900"
  },
  {
    "url": "assets/js/18.89cd1b10.js",
    "revision": "a921aceab8a5614c4a42192b218e03a2"
  },
  {
    "url": "assets/js/19.d0d2448f.js",
    "revision": "7221a37041b16fa21efb296eb91059d4"
  },
  {
    "url": "assets/js/20.e51bc368.js",
    "revision": "2b3cc6d82b070832ffc6e6aee8d69697"
  },
  {
    "url": "assets/js/21.822e9886.js",
    "revision": "a06564441227cbea22a0b79e80f27ebb"
  },
  {
    "url": "assets/js/22.2dd61883.js",
    "revision": "a5a5ab63b3f2a48ac63c9271e2dc10ff"
  },
  {
    "url": "assets/js/23.518e27a8.js",
    "revision": "3bedec3e5ff8a7fbad205d879b580573"
  },
  {
    "url": "assets/js/24.51de402d.js",
    "revision": "49e05025e4ae8e697575325ca109dbce"
  },
  {
    "url": "assets/js/25.bb0f97d2.js",
    "revision": "1f1dfec1ba55b044fb9dfc9463de58a9"
  },
  {
    "url": "assets/js/26.cc9a37fc.js",
    "revision": "13a7ab5e71f7271a0ba9a27fc94f344f"
  },
  {
    "url": "assets/js/27.22363993.js",
    "revision": "2d17e6e7f4add02badb83702c60264b2"
  },
  {
    "url": "assets/js/28.a8c5dca9.js",
    "revision": "cbdcc00c388d2b446e70821505332397"
  },
  {
    "url": "assets/js/29.8e8e49e5.js",
    "revision": "2252fbcdbbd641b456644dc6178fbe64"
  },
  {
    "url": "assets/js/3.0b8003d7.js",
    "revision": "8433264377ae46bdc48c989fd6b73ded"
  },
  {
    "url": "assets/js/30.45eff82a.js",
    "revision": "f473022e7d748c1f535ce45d7ade58e7"
  },
  {
    "url": "assets/js/31.6f0aa54e.js",
    "revision": "a3b82e6c0620968e9852245f54fc2900"
  },
  {
    "url": "assets/js/32.78ab37c3.js",
    "revision": "c411b50bc46690990166e6bc01cc2d46"
  },
  {
    "url": "assets/js/33.d811f1f5.js",
    "revision": "713815fc63ff9e494f2b432893822a77"
  },
  {
    "url": "assets/js/34.57164aa3.js",
    "revision": "74ccbab9f93493db0b19b2e60d2597e9"
  },
  {
    "url": "assets/js/35.b3928f5b.js",
    "revision": "0fe94e9a4bae95177a6d36b21dbd3137"
  },
  {
    "url": "assets/js/36.f857521c.js",
    "revision": "f65f99d471f1548661313915921e5e1d"
  },
  {
    "url": "assets/js/37.4b49f955.js",
    "revision": "2dbc50853b3ad9cd5476d78140b4487d"
  },
  {
    "url": "assets/js/38.953e4709.js",
    "revision": "77d652fa931d1dcdf453689bfd16d5ce"
  },
  {
    "url": "assets/js/4.f5116347.js",
    "revision": "2e8352ffb11976d4b63e06f36c325391"
  },
  {
    "url": "assets/js/5.aa4e05b7.js",
    "revision": "e2695853264d9f4202849048e886c876"
  },
  {
    "url": "assets/js/6.8c3ba5d7.js",
    "revision": "22b06a9f0078041312cd6d23837beace"
  },
  {
    "url": "assets/js/7.2ad10d84.js",
    "revision": "545109e9ae7b89c4c4ced297d4402bfd"
  },
  {
    "url": "assets/js/8.4fd9b1e6.js",
    "revision": "8db3f0cadfbc86a37b265a8c117a80b8"
  },
  {
    "url": "assets/js/9.681b34e6.js",
    "revision": "44faf22298bddf7efe9bd255b0c11ca1"
  },
  {
    "url": "assets/js/app.190d89d4.js",
    "revision": "1d11fe311b02be72ef1e706311c0d19d"
  },
  {
    "url": "categories/index.html",
    "revision": "b755d704bf44de7999aeab919fdbfc3c"
  },
  {
    "url": "countup.html",
    "revision": "b7da86fb99fecdeb0c79f1951b94dd59"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "c00871a8807243032518d31a4e5ebda1"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "5390ec643ecd59aecd2f4c81dc8ee4f1"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "f61c2c3c1c5870b4d23f6878307a5823"
  },
  {
    "url": "css/index.html",
    "revision": "90ad0fd80bc1b6eee1133a1473f2b922"
  },
  {
    "url": "firstblog.html",
    "revision": "9b585b0886396d484863ffa8b8b5eba8"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "e7cdc8e6d8ff72f634a53750cce1f22d"
  },
  {
    "url": "html/index.html",
    "revision": "fe5e1cec4bf357bf8295059058509ffd"
  },
  {
    "url": "index.html",
    "revision": "dc05f0b8485cb91c3f6edf39a94df64b"
  },
  {
    "url": "interview/20201127.html",
    "revision": "c8152c7b7dbc880ec06ed1abb172ca60"
  },
  {
    "url": "interview/20201201.html",
    "revision": "10fc795f4b5eff9a6412dfbb4731e6f7"
  },
  {
    "url": "interview/index.html",
    "revision": "3ff3686127dbcb16d3abdd9df3fe6a00"
  },
  {
    "url": "javascript/index.html",
    "revision": "7acf61bb147c3a09ae7c94feb0512b11"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "81952518fd7b208cf9f05a4389c5242c"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "03c233cc63a9e086f66707c4b347a4f1"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "471f28ec372924e62f0911c124d71676"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "41f069bb6bbb07e07a7d01a5e02e2959"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "e57df8075388754ac14724a401b27072"
  },
  {
    "url": "LICENSE.html",
    "revision": "9cb9c7877beb3e72cc9b8892af34015d"
  },
  {
    "url": "quanxue.html",
    "revision": "0cbb4109228605d65be7995801d42eb2"
  },
  {
    "url": "tag/index.html",
    "revision": "a181a91814f082b2a51adc85892600d8"
  },
  {
    "url": "timeline/index.html",
    "revision": "e5d4100737023bd420605d79c8dd044b"
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

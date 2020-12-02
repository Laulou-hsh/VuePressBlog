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
    "revision": "5f9610bd0e10e5bb7bee849b46d126de"
  },
  {
    "url": "about.html",
    "revision": "57a32f503107f948435d96ae1b3b2846"
  },
  {
    "url": "about1.html",
    "revision": "8beac7ab9e0c1e93454d2ca08799ab75"
  },
  {
    "url": "about2.html",
    "revision": "06a975ab52dd3a276659ae074dbd1b79"
  },
  {
    "url": "about3.html",
    "revision": "2f33a32cfb5169125c4f4e6e03cbfc1f"
  },
  {
    "url": "about4.html",
    "revision": "4cb414d39f26a77be8091aa94c23edc4"
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
    "url": "assets/js/app.31cd5e2c.js",
    "revision": "177934a53e771cfdbbdaf4b53f1e0782"
  },
  {
    "url": "categories/index.html",
    "revision": "7dd13a48500c00cd3645db8e077c21e8"
  },
  {
    "url": "countup.html",
    "revision": "fce04a6ab7b95bc5962d73187557e363"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "40914fdffeda8451014e39a103037053"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "c071e3c7b17fb047e69fd900b72e6f11"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "435b149c1bb01b0da856eb52689e9e02"
  },
  {
    "url": "css/index.html",
    "revision": "ca6b2c39108d1733a8fe440dd3a30653"
  },
  {
    "url": "firstblog.html",
    "revision": "8ea237dbb947636b29c97ca674718b1a"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "29bce214aeff7abb194360c643c38864"
  },
  {
    "url": "html/index.html",
    "revision": "6f8d45e02383e628ecaab3dea9b2a35c"
  },
  {
    "url": "index.html",
    "revision": "54a494f0c3ddf12a6ff9713893d52f55"
  },
  {
    "url": "interview/20201127.html",
    "revision": "7d7560cd32d053593df3b8e4dc96e0e7"
  },
  {
    "url": "interview/20201201.html",
    "revision": "062b190cb7461d0c2afbe62f228d069f"
  },
  {
    "url": "interview/index.html",
    "revision": "e6dffd71950d4c3256bf93f325bddd89"
  },
  {
    "url": "javascript/index.html",
    "revision": "c3a14ee3f22a717de30394e7fc2de856"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "13676092818eb00f1b5c7c9484bdd169"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "90e5d7b3b71007da204a2d45503d4c5d"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "9f4629cca407e760e61ab6e411db9af0"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "9704f64207c31f1d0396839a755bb5e1"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "99e1aa46efe000d4a77e7090f45daa4f"
  },
  {
    "url": "LICENSE.html",
    "revision": "5bfe8abd644d58037a3316f9c8e11d7b"
  },
  {
    "url": "quanxue.html",
    "revision": "1c87842b9d628b9b62b617ee2fee42bb"
  },
  {
    "url": "tag/index.html",
    "revision": "8e76e066b24918cc3ebecaace64dfe31"
  },
  {
    "url": "timeline/index.html",
    "revision": "980f45f364b609f40440f5c06f0343bd"
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

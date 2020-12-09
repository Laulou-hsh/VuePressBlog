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
    "revision": "3cff21867277ed3e9b5a49075b03a5ac"
  },
  {
    "url": "about.html",
    "revision": "b3d5a0a59f2c8a8c3ebbe7fd9e5da66a"
  },
  {
    "url": "about1.html",
    "revision": "83a9559be3b1bfb1ce1f111aef3b4a7e"
  },
  {
    "url": "about2.html",
    "revision": "76a87af458db329338eabc32af466e26"
  },
  {
    "url": "about3.html",
    "revision": "e65766d070fdd1ab7b15ada166dfedbd"
  },
  {
    "url": "about4.html",
    "revision": "0947cd4db52138cdecb60e86fbd36df6"
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
    "url": "assets/js/27.4d197ae0.js",
    "revision": "58ee911fc53932feb348680a45e9369a"
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
    "url": "assets/js/app.71047860.js",
    "revision": "ce6286e1149b1f06abab2259b0d71568"
  },
  {
    "url": "categories/index.html",
    "revision": "b65f439831d52ab9df50c62e84bb3f89"
  },
  {
    "url": "countup.html",
    "revision": "e566ba1fac85e17c62210dd466825b90"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "82d27999ca845e35ca337240ce307a3e"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "8fae358cfa3052c9b1146d825e35a744"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "37d8ff44600d2a5e6d2e506f6c36e44f"
  },
  {
    "url": "css/index.html",
    "revision": "8b2b1afbf0a3eaf546b3e36102e9c62f"
  },
  {
    "url": "firstblog.html",
    "revision": "dd9bd4346f433d50b5f5e79d6501dee0"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "c93bce6275d73644aed2335e6a92a1f6"
  },
  {
    "url": "html/index.html",
    "revision": "1f14b9f79dbb3d59733ac1285d1c74a0"
  },
  {
    "url": "index.html",
    "revision": "0881484e236b25db9be178335bf418d7"
  },
  {
    "url": "interview/20201127.html",
    "revision": "e183344fd08ca381c8ed64e020d10f53"
  },
  {
    "url": "interview/20201201.html",
    "revision": "13f6015b94477c9cd56a1123369671b6"
  },
  {
    "url": "interview/index.html",
    "revision": "7caef6661172b4c5044dc4e821ef7f55"
  },
  {
    "url": "javascript/index.html",
    "revision": "7484fbf5e96582da97bb72676b14f5d5"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "5bc91b846b098768cfcb0b05de95acf4"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "f3d16eedacf6098cafa4dc272ecebc7b"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "ffd578a4bd470cc09f1bcaffa80dcb21"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "0a3e0a789d8fb2de6f66accf41d43d26"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "adad6747c6ee95d0162cbaab39d85a33"
  },
  {
    "url": "LICENSE.html",
    "revision": "d4b21d8a76aa153a3cb18dfeb4374375"
  },
  {
    "url": "quanxue.html",
    "revision": "72bec6c1eaa6e63a30fff1232ba81663"
  },
  {
    "url": "tag/index.html",
    "revision": "6fb22c826573e8ff752357e2a0dfd7cc"
  },
  {
    "url": "timeline/index.html",
    "revision": "14c36beb292db0a33c235d976b4a8edc"
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

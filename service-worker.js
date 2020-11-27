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
    "revision": "5e1eeb349b521886649d2348aa3f5666"
  },
  {
    "url": "about.html",
    "revision": "df390a3ca30667351c6aa77191c9dc6d"
  },
  {
    "url": "about1.html",
    "revision": "982162cd79c6ec03deb9d27f5c6bd2ab"
  },
  {
    "url": "about2.html",
    "revision": "82f869db89b4718e449e85f4d77f9b99"
  },
  {
    "url": "about3.html",
    "revision": "11b0eab8f7b11e7e225fe8abb21a5974"
  },
  {
    "url": "about4.html",
    "revision": "bd68543470e37083ae8ea1dc52fb8d60"
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
    "url": "assets/js/12.bc05aac9.js",
    "revision": "f97cb84cf0b50ce99460abe278caa0e8"
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
    "url": "assets/js/28.a49a3568.js",
    "revision": "364ed09ebea3c2f547541e0fccf193f8"
  },
  {
    "url": "assets/js/29.4635c34a.js",
    "revision": "cb1f88c6b5ca38491a859c1323d0a9b3"
  },
  {
    "url": "assets/js/3.0b8003d7.js",
    "revision": "8433264377ae46bdc48c989fd6b73ded"
  },
  {
    "url": "assets/js/30.c2ec3dc8.js",
    "revision": "ebb1965f6291d0e57d090693d12abdfc"
  },
  {
    "url": "assets/js/31.727c0fae.js",
    "revision": "3b7d1f4f1434fc19e684e9361af7b47a"
  },
  {
    "url": "assets/js/32.600f2c71.js",
    "revision": "c635a53700cdb841501d7575f0ae056a"
  },
  {
    "url": "assets/js/33.fd28e5c7.js",
    "revision": "713815fc63ff9e494f2b432893822a77"
  },
  {
    "url": "assets/js/34.cea8591c.js",
    "revision": "74ccbab9f93493db0b19b2e60d2597e9"
  },
  {
    "url": "assets/js/35.9533af67.js",
    "revision": "de65795ea5758649fdc2010bde0ce8d8"
  },
  {
    "url": "assets/js/36.b19062cb.js",
    "revision": "807ded20fa4d37c1c2d686af7f3cf1e1"
  },
  {
    "url": "assets/js/37.cb90741d.js",
    "revision": "c3acec78f0a4b389b80859772397b87b"
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
    "url": "assets/js/9.ef8637c6.js",
    "revision": "d16dfd1148cc530f75aa0d920cde8d74"
  },
  {
    "url": "assets/js/app.d38f07c6.js",
    "revision": "a27209286ad758abacb8e0c8b170082b"
  },
  {
    "url": "categories/index.html",
    "revision": "411e849567b631f8b3f776671558830f"
  },
  {
    "url": "countup.html",
    "revision": "31d32a40f072969c27ac6052a4ad132e"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "3e6dbaed772ad1018ff8ac72efc81384"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "c1a69913e1582c88e9f696ea0d7ee40b"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "4538a148ae6a9886ea4daad44b69ff7c"
  },
  {
    "url": "css/index.html",
    "revision": "f7b49c839b7bd1963fca51e6dc08e506"
  },
  {
    "url": "firstblog.html",
    "revision": "aec865da055eae7616047b7038cd30b8"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "269cae782dcb8b8fca5d663b61c916c4"
  },
  {
    "url": "html/index.html",
    "revision": "37de6958c60803cf2a0714e09c0d5e8c"
  },
  {
    "url": "index.html",
    "revision": "12a5a528aef53b4a8c278d37838beb52"
  },
  {
    "url": "interview/20201127.html",
    "revision": "2a773d7bb9903519cfa1670c357d1cd3"
  },
  {
    "url": "interview/index.html",
    "revision": "a6fd823be8e045f6c1fe2010bab2731a"
  },
  {
    "url": "javascript/index.html",
    "revision": "f9ccb1409a40e09ff56b2aebae230368"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "c97d844fc356dafddf5baf9e4e057e52"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "dfbc3715876ff07ce686c75cd19fc824"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "8e9d4424347e86d1f9515c64798262cf"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "26b72ddd4432371f6055d736c8a6296a"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "672aafaaeb34b56d74e46421bae101d1"
  },
  {
    "url": "LICENSE.html",
    "revision": "2dd4e58cd1502fa0888916ba3c1352f0"
  },
  {
    "url": "quanxue.html",
    "revision": "3002ad7e009702f2b48885bed51d712f"
  },
  {
    "url": "tag/index.html",
    "revision": "62b08299e829b7f47425472cf3520270"
  },
  {
    "url": "timeline/index.html",
    "revision": "f98ca5bbf07deea9861e8a4d893c0e7d"
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

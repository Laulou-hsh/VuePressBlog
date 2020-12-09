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
    "revision": "fbb73104691f796ccde04c587d6a0d8c"
  },
  {
    "url": "about.html",
    "revision": "2f37ca0cc2e05745f68f638a5b32bc72"
  },
  {
    "url": "about1.html",
    "revision": "7cafd864ef057cf78ff59bd851ebe649"
  },
  {
    "url": "about2.html",
    "revision": "f2da13da7a829fbb1b1b92e97548df68"
  },
  {
    "url": "about3.html",
    "revision": "7b0e94e60ede01c6130aeb0108b4b064"
  },
  {
    "url": "about4.html",
    "revision": "645d9c3e87b195a8dca5b08bf9702200"
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
    "url": "assets/js/27.d5c6a5be.js",
    "revision": "5fa50078277d92c27036506e0b313a66"
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
    "url": "assets/js/app.7bd77f8c.js",
    "revision": "a5a12b8c980d4623e0348a3d5d718da8"
  },
  {
    "url": "categories/index.html",
    "revision": "3c3523c7f27a3e78469b1d4e8d1dc90e"
  },
  {
    "url": "countup.html",
    "revision": "9e2512b4e7e6353265fbc29e1ce6dac6"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "51d420a5715aa941f5a4a880a70cee78"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "bba9f7fd587d414504374cf31fee5ade"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "d8b7ef56714fc73784b1cc2a61e6acd7"
  },
  {
    "url": "css/index.html",
    "revision": "3e7d301eb889bd6645a7d4e17e652e85"
  },
  {
    "url": "firstblog.html",
    "revision": "54cd66cbe5b8804fb0bcc3a50f5a75d9"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "728a12cea28893d7dac244b6f961caef"
  },
  {
    "url": "html/index.html",
    "revision": "b64c743765c504941169683c6e5b8136"
  },
  {
    "url": "index.html",
    "revision": "0e8e1d5be1cf807244bb6bbf5069d68d"
  },
  {
    "url": "interview/20201127.html",
    "revision": "03a0bac1d66a35eee2e7e26082aa8fce"
  },
  {
    "url": "interview/20201201.html",
    "revision": "e3906ee02b1895d9a7cc3baf8f86cc62"
  },
  {
    "url": "interview/index.html",
    "revision": "54ad1c522e1be18d4ac41f18d03fc541"
  },
  {
    "url": "javascript/index.html",
    "revision": "f00b26ce186c844eaaf9e45018420865"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "713563f8bd70c5654ea03f6dba183cfd"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "95a4dcb90fbbfaf76094c7f4e1dc1885"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "ff5cc7482603fa4c95e6ddaf30fd40e1"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "60533f6a0b86378fe2a67b4aab23dd1a"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "263b79846a45a3d0d3d8596c4cca3f1c"
  },
  {
    "url": "LICENSE.html",
    "revision": "52003c58715fc557a5eaedace4b09125"
  },
  {
    "url": "quanxue.html",
    "revision": "7b3c094f8e481dbbd12a0c1e7d2158df"
  },
  {
    "url": "tag/index.html",
    "revision": "75b0fe15d237410b7d51d2a01ee2bf62"
  },
  {
    "url": "timeline/index.html",
    "revision": "ae7745642081ad189284fbd13c1179fa"
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

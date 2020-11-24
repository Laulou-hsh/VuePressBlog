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
    "revision": "6eafc24e07d8b194a7ad4129b2415c5e"
  },
  {
    "url": "about.html",
    "revision": "df82a6ef0558164a26ce8ec9a6e27372"
  },
  {
    "url": "about1.html",
    "revision": "1bd0296c6de39fa626e58c20b84912bb"
  },
  {
    "url": "about2.html",
    "revision": "3af377445490af54e22e0fa0ff76abc3"
  },
  {
    "url": "about3.html",
    "revision": "6b47c7459f8f5848d0da25b242d5cff8"
  },
  {
    "url": "about4.html",
    "revision": "7489217440923613e529f5db79dce49b"
  },
  {
    "url": "assets/css/0.styles.356477f8.css",
    "revision": "af10af84d6446a1322aa51dc84debbda"
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
    "url": "assets/js/11.f37fc763.js",
    "revision": "6c232d1d6f8960a5f68dcc3e6f84f55e"
  },
  {
    "url": "assets/js/12.584487ae.js",
    "revision": "6852aa416f6f3d9358bcb868d5c3e24f"
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
    "url": "assets/js/27.dd9df146.js",
    "revision": "66f9a899d7ac45607d99542789fede4b"
  },
  {
    "url": "assets/js/28.9f12f94f.js",
    "revision": "1b38a52897d19de0cfecfa199011e47c"
  },
  {
    "url": "assets/js/29.d56ef850.js",
    "revision": "795a6e38d107888a52c46d475db3582e"
  },
  {
    "url": "assets/js/3.0b8003d7.js",
    "revision": "8433264377ae46bdc48c989fd6b73ded"
  },
  {
    "url": "assets/js/30.9cdfdc25.js",
    "revision": "ebb1965f6291d0e57d090693d12abdfc"
  },
  {
    "url": "assets/js/31.edf91f23.js",
    "revision": "a3b82e6c0620968e9852245f54fc2900"
  },
  {
    "url": "assets/js/32.01824577.js",
    "revision": "c635a53700cdb841501d7575f0ae056a"
  },
  {
    "url": "assets/js/33.7fbf78ca.js",
    "revision": "4b568e37d2b53b65ac7890506b862a76"
  },
  {
    "url": "assets/js/34.34a06734.js",
    "revision": "f2aca0b3e32db4de9b36015c0c8e9ea2"
  },
  {
    "url": "assets/js/35.0bb26233.js",
    "revision": "f38c3df8b7a2a5bda62fcfcfe4b35ce2"
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
    "url": "assets/js/9.bbe7c35d.js",
    "revision": "da28101890ce22f0eab8fb7be63155f3"
  },
  {
    "url": "assets/js/app.62cfcefd.js",
    "revision": "b500264168c7c91de360d47fa4ad2604"
  },
  {
    "url": "categories/index.html",
    "revision": "512abf793bc88f5891805a93bf357977"
  },
  {
    "url": "countup.html",
    "revision": "5e2ea07609bcf09e3b703b0b4b5239bf"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "b6fc658e071193b6181f80d7266f23f1"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "9e024d4cc30e4097e6253188c3a5bfa7"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "ff34b3e18ec58f419caafd2e8c51256e"
  },
  {
    "url": "css/index.html",
    "revision": "b5071c918a801be1b94f70b7ad8445c4"
  },
  {
    "url": "firstblog.html",
    "revision": "57fd5139c3d95b086d986594b88917ce"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "42621f32662ba27bbc0fc96a2d4bab00"
  },
  {
    "url": "html/index.html",
    "revision": "defe7fe7b2fd4fbcea8fdc53db85c9d1"
  },
  {
    "url": "index.html",
    "revision": "cb29dc8faa57c58d5db490a6aacf1a3c"
  },
  {
    "url": "javascript/index.html",
    "revision": "6029e1a7316e7e7629e19f2bf7821035"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "c4d34ca75b53dd8aaedad73be27d27d4"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "9a438152ece7f332ea5511b917be8da1"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "c509cc223a1cd6fd6267f400fcb93460"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "42eb1f18dab54f3d82fe3fadf219c54b"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "a6256e8153d9ce812579205c14854342"
  },
  {
    "url": "LICENSE.html",
    "revision": "211c7900fcdae81d84626800ddb8b7b8"
  },
  {
    "url": "quanxue.html",
    "revision": "9bbf92a7788bccfe07973f4136ac00ec"
  },
  {
    "url": "tag/index.html",
    "revision": "b3f8a581774d1d277ab84a33febedb11"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f259fff7ba79f29856dfc21fed8c3ab"
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

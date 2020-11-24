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
    "revision": "e0d17578aa59d698ab7648661a38e2c6"
  },
  {
    "url": "about.html",
    "revision": "c0741e9f65137a70805bc3b11dda8a39"
  },
  {
    "url": "about1.html",
    "revision": "a62d00421e6614083a387a0a3023d16f"
  },
  {
    "url": "about2.html",
    "revision": "130861f11f54f2bdc03995ff35164bfc"
  },
  {
    "url": "about3.html",
    "revision": "bfa547fbb9c04fdfd95c862fd542f484"
  },
  {
    "url": "about4.html",
    "revision": "29b41687aa34ea52479bfd4bdb0d049c"
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
    "url": "assets/js/11.0b6bbeca.js",
    "revision": "21461732c1c8bba59e9534b53f90aaad"
  },
  {
    "url": "assets/js/12.414c3df5.js",
    "revision": "2b175b3904c5898e7f96a327762b633c"
  },
  {
    "url": "assets/js/13.bf0130c5.js",
    "revision": "c83242b5951b03809a2f00094ecfe30f"
  },
  {
    "url": "assets/js/14.189297c7.js",
    "revision": "e563b70c0c484512398a0b85556e404c"
  },
  {
    "url": "assets/js/15.11965b62.js",
    "revision": "698ba89dbb4fed278ac9f388e10eb8ce"
  },
  {
    "url": "assets/js/16.6a74db91.js",
    "revision": "954ce10f5c9090fb26eddfa37bd55595"
  },
  {
    "url": "assets/js/17.b2a0ed0c.js",
    "revision": "488e3fb28bc7aa77a23e0b1d3577f309"
  },
  {
    "url": "assets/js/18.c34b857f.js",
    "revision": "ca6e3bcbb0015440636237550bb4d96d"
  },
  {
    "url": "assets/js/19.a15f2ecd.js",
    "revision": "5c6470582ecaf1d8084f76d01c91db36"
  },
  {
    "url": "assets/js/20.cd7afd62.js",
    "revision": "ee0b350a2d440bb283dc2b9eeb5dde90"
  },
  {
    "url": "assets/js/21.cee6ac40.js",
    "revision": "1199a9a423d5d8ce74dffc50a1788584"
  },
  {
    "url": "assets/js/22.0977d2e8.js",
    "revision": "f08c138d2ab8ab2e31b2ed6bbf5650cf"
  },
  {
    "url": "assets/js/23.cebbb4f6.js",
    "revision": "466e0feb00851aed9964601feec40ffc"
  },
  {
    "url": "assets/js/24.02f0f160.js",
    "revision": "39a84bf81732138abaeb423aeda7429b"
  },
  {
    "url": "assets/js/25.fa166fb7.js",
    "revision": "00c7634aa8961e565f26a90b371ad971"
  },
  {
    "url": "assets/js/26.a58d081b.js",
    "revision": "fdbe77e83ad66629ce869adf2324c7c9"
  },
  {
    "url": "assets/js/27.c7d530c2.js",
    "revision": "e0a3cd7aa49220997ea8ce90337d02a6"
  },
  {
    "url": "assets/js/28.fc1e5fc0.js",
    "revision": "dc557a207d4449c4b3caa9edb822a978"
  },
  {
    "url": "assets/js/29.5bea23c7.js",
    "revision": "6632088bc6cf3de8506e3dc38ac615b6"
  },
  {
    "url": "assets/js/3.ca0f69ed.js",
    "revision": "2fe4cee1b98b458205015107d7da6f19"
  },
  {
    "url": "assets/js/30.68324f70.js",
    "revision": "9f320e0a8773e64a87a97283e80fa123"
  },
  {
    "url": "assets/js/31.7f12e4c1.js",
    "revision": "7388c6759d5c47e181b1e0b1668abf31"
  },
  {
    "url": "assets/js/32.3fe337d9.js",
    "revision": "22c4dd724371913f03a6240fd29ebc7b"
  },
  {
    "url": "assets/js/33.769db1b4.js",
    "revision": "da13fd00c2efcf436280e5ab6ce126ce"
  },
  {
    "url": "assets/js/34.b91319eb.js",
    "revision": "19f7e46e32e0e306202559e44e5c34ec"
  },
  {
    "url": "assets/js/35.5b031676.js",
    "revision": "f45ddb6158d7e340040ef06812441cf1"
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
    "url": "assets/js/9.e77a9f67.js",
    "revision": "7cc5237dcc10592b19d9a771319c58cc"
  },
  {
    "url": "assets/js/app.5719a029.js",
    "revision": "55fc58d41f2fb3ab9ef39ddadb7c2308"
  },
  {
    "url": "categories/index.html",
    "revision": "e6e82abfcbf8f2cfa242769864759eaa"
  },
  {
    "url": "countup.html",
    "revision": "a04d8a233d5e595cb72759ad2b0c3644"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "45de49b5e9d07f924d90427fa69e0c3e"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "3fbac30826a5d51732f959e2a8aa4d15"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "07714693069f972da0a542a8336addd9"
  },
  {
    "url": "css/index.html",
    "revision": "86457643a902dcc6cfed185a64317f90"
  },
  {
    "url": "firstblog.html",
    "revision": "ece537b2676ee20792d861b0bcb59a8b"
  },
  {
    "url": "HTML/html-introdution.html",
    "revision": "57c5e158d3cc93eabf8d57a6e7675972"
  },
  {
    "url": "HTML/index.html",
    "revision": "cb59f0970bfa4c404d39a6397161d642"
  },
  {
    "url": "index.html",
    "revision": "0e1b9f1f3d68d4ef96ece07daec7dadd"
  },
  {
    "url": "javascript/index.html",
    "revision": "c3a66caf38d1c22df7083f2d23371f30"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "7fb28673a17734c988330c6e6f842044"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "1b63928651f91c3a18b89f3359427ff4"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "4e4352f2a206965bd928dc9e736cc8b0"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "7b4dcc4b7ac74f17fd1c1b2e952afcbb"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "903ad5ff34cb9128003c023d2d90d44d"
  },
  {
    "url": "LICENSE.html",
    "revision": "08d34caf3ed36cd44678156d5fc8601b"
  },
  {
    "url": "quanxue.html",
    "revision": "3c4081a2fc019825bdc0587cffb8d856"
  },
  {
    "url": "tag/index.html",
    "revision": "82b4f177e3c5f47d9936cfd23b2d3178"
  },
  {
    "url": "timeline/index.html",
    "revision": "614cccf44ade0a18d6d03a6ebaba3985"
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

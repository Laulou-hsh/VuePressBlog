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
    "revision": "b0b2412dadd65b886458adaaee34632e"
  },
  {
    "url": "about.html",
    "revision": "1a38cb4fa90e4aeae29883ec72a2228e"
  },
  {
    "url": "about1.html",
    "revision": "c63caf2c980e13bc9bb496860eb09f50"
  },
  {
    "url": "about2.html",
    "revision": "7e5fbea10d80dd97ab1d877689e63a5a"
  },
  {
    "url": "about3.html",
    "revision": "8fa6b21241d6c682faebdfe30b6e3ac0"
  },
  {
    "url": "about4.html",
    "revision": "92fef5cb2d2ab609875e9eacefef01c8"
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
    "url": "assets/js/15.5f0f1785.js",
    "revision": "c33887700e06563e72244b474b0ffd25"
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
    "url": "assets/js/22.c77d8079.js",
    "revision": "97636574a80f5e3a276a5c5e29db7abf"
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
    "url": "assets/js/app.771d5768.js",
    "revision": "ebd44fca1f3f0a8b3de74ce4408d8f0a"
  },
  {
    "url": "categories/index.html",
    "revision": "e858fa97148982912e22b5e965d0af17"
  },
  {
    "url": "countup.html",
    "revision": "759239fe65637140a61b66af88359df0"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "6451c3904add674948c29efef7838186"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "7ffd25f302cc7384d065bdd7979aff58"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "f635cd2bee6995c85f4e3759fcda2d33"
  },
  {
    "url": "css/index.html",
    "revision": "f08c8e73ef03270091b3c12186809cb4"
  },
  {
    "url": "firstblog.html",
    "revision": "3ef556ec8360f4fb2fe1c464b7352d33"
  },
  {
    "url": "HTML/html-introdution.html",
    "revision": "8722de82371cf09a4b00f4a337c44763"
  },
  {
    "url": "HTML/index.html",
    "revision": "23ba37885e14eb6d0a4cc9d7dd844f27"
  },
  {
    "url": "index.html",
    "revision": "ad960a33833e8f27193eaedd9902ed8b"
  },
  {
    "url": "javascript/index.html",
    "revision": "5abb144ccb287a223e1b35b1d787413b"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "8fad960508ba9b54c21203defb69d5ba"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "f9426311e387ec39c0aa45b6cca7397f"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "359bd7c96c6152d234b3c887ab49a1d9"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "ab309ec34f69e744a83767507551281e"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "418c47ff1996b1d009b0fdb104096bb1"
  },
  {
    "url": "LICENSE.html",
    "revision": "81fa30315d3bb6b5b95ff87dbb9e0a99"
  },
  {
    "url": "quanxue.html",
    "revision": "7a28cb34fca6ec44deff7c5bba6f66c8"
  },
  {
    "url": "tag/index.html",
    "revision": "b82035f27191dcb5f5ad93fd758bfce4"
  },
  {
    "url": "timeline/index.html",
    "revision": "9703a490957cf9a685c16aab6291ff92"
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

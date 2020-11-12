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
    "revision": "f596902079e35f890bdddcad29a00aa0"
  },
  {
    "url": "about.html",
    "revision": "38354cf185d080f88ecc47f777f35da7"
  },
  {
    "url": "about1.html",
    "revision": "ce6e4312cfe739336da6a002bcc5b638"
  },
  {
    "url": "about2.html",
    "revision": "3111c88d1da75bdb800b8a0f4e5690b1"
  },
  {
    "url": "about3.html",
    "revision": "43b54f1fd3852c33cd04c840d2dbaf35"
  },
  {
    "url": "about4.html",
    "revision": "1c542aa4a29cfbcca0c9800bc67fa102"
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
    "url": "assets/js/11.066cbf04.js",
    "revision": "5b81f0bf7fae73070f9aa435056f2f17"
  },
  {
    "url": "assets/js/12.cd9a9fbd.js",
    "revision": "b5c8aef2cfba4e26c06389879a36e7f9"
  },
  {
    "url": "assets/js/13.fa25b363.js",
    "revision": "1f0a55cffe89a3e5f63d07b044400d62"
  },
  {
    "url": "assets/js/14.25d02a5c.js",
    "revision": "e6d90b630d02f95d6cd1eb9075709479"
  },
  {
    "url": "assets/js/15.8789bd04.js",
    "revision": "e61a2898bc08c869320317a6546e31d2"
  },
  {
    "url": "assets/js/16.6a6455be.js",
    "revision": "e7187677a9128c5abb8fd5278aad1919"
  },
  {
    "url": "assets/js/17.440f4d2e.js",
    "revision": "d4b662e452b6623e778415a0a120d652"
  },
  {
    "url": "assets/js/18.2c974b92.js",
    "revision": "25377d666714f63d7c74c4d007ab8ba2"
  },
  {
    "url": "assets/js/19.ea3119d0.js",
    "revision": "d744b09d625035a540af3724e9526509"
  },
  {
    "url": "assets/js/20.38221215.js",
    "revision": "214557a57b4a7730c207d1cece02c92c"
  },
  {
    "url": "assets/js/21.b6075956.js",
    "revision": "03a8c71b1f4c2a1c520a9ff21e01f186"
  },
  {
    "url": "assets/js/22.24a55414.js",
    "revision": "6f5e32fa9a677ccb0febabdd7c6c7018"
  },
  {
    "url": "assets/js/23.766f4f02.js",
    "revision": "421a55aa7949e8ba27cb014c37d6d890"
  },
  {
    "url": "assets/js/24.e2b6e171.js",
    "revision": "761c16396d9e3cd79bd31619a0b6a1bb"
  },
  {
    "url": "assets/js/25.a45e49b1.js",
    "revision": "50bfb6ce1d4712b5636e66d1c3887828"
  },
  {
    "url": "assets/js/26.162526d8.js",
    "revision": "ad1464d23f4b0a435834f4d151ec87c5"
  },
  {
    "url": "assets/js/27.fbd9fb0d.js",
    "revision": "2f502fea70106ff84c89087c8fb70f24"
  },
  {
    "url": "assets/js/28.516490e0.js",
    "revision": "e3bd5eea4dc721370a0680e923b94dd2"
  },
  {
    "url": "assets/js/29.10c5b676.js",
    "revision": "ef85f3b87c0afe81f19a31bc4f8ebbac"
  },
  {
    "url": "assets/js/3.ca0f69ed.js",
    "revision": "2fe4cee1b98b458205015107d7da6f19"
  },
  {
    "url": "assets/js/30.3533a944.js",
    "revision": "9f320e0a8773e64a87a97283e80fa123"
  },
  {
    "url": "assets/js/31.328ac1b6.js",
    "revision": "7388c6759d5c47e181b1e0b1668abf31"
  },
  {
    "url": "assets/js/32.34b8cf88.js",
    "revision": "2462d86e4e3be33c2d6d9157c4898fc5"
  },
  {
    "url": "assets/js/33.97c3021a.js",
    "revision": "758b4ba8b2317ae0f74860e3784fc5ba"
  },
  {
    "url": "assets/js/34.28d37b4a.js",
    "revision": "6202271b95d9f68abc6af84b82e66092"
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
    "url": "assets/js/9.0e7c652d.js",
    "revision": "3348a55a2ee4efc2a1e9fd4810636584"
  },
  {
    "url": "assets/js/app.8ffed29e.js",
    "revision": "c41522f177b96438dcfc84551c25dacd"
  },
  {
    "url": "categories/index.html",
    "revision": "8f9b58f2b78fcc1ebfbdf4ce1d6ebe91"
  },
  {
    "url": "countup.html",
    "revision": "75bde0b67369ae4de1c50c38e0728846"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "e2d16c2b4b408fba9e618eef68fb72b4"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "992b74287865a53b4bd635d25e7b97d1"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "855a9a1b468297547d4bb25e84197ce5"
  },
  {
    "url": "css/index.html",
    "revision": "2643a7d1d3e126cf08ddca80362ed271"
  },
  {
    "url": "firstblog.html",
    "revision": "5cb53d6a6cf7879a5b30e627b52fca6c"
  },
  {
    "url": "HTML/index.html",
    "revision": "5104192c60a7bbd8b980cf507b962582"
  },
  {
    "url": "index.html",
    "revision": "aab5befe44e5f0bfd0289adb6e54cb60"
  },
  {
    "url": "javascript/index.html",
    "revision": "f4aa21b286d7d7ff74ad171d602506b1"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "b8f08ecc3f79e1bf885a74fb4fbaa118"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "5daf5ce509109b6371ff104308dee4b9"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "ba378d7b401f8bedc220b78bdd88f101"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "cb98eaefe80f78231f02dcfd9d9e3abf"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "eedabdcd3234165ded15166ecff7a0fd"
  },
  {
    "url": "LICENSE.html",
    "revision": "1f738864cc5c11cacc10f4ef993cfc0c"
  },
  {
    "url": "quanxue.html",
    "revision": "0e114f7ab95f231366ab884f9409b596"
  },
  {
    "url": "tag/index.html",
    "revision": "e4c1d895f62981c3cb0c5b64d1a3fa79"
  },
  {
    "url": "timeline/index.html",
    "revision": "331eb5fcb60424e84b2795d331bec99c"
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

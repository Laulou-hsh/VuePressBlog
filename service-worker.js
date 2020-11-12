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
    "revision": "4a6fb2c36855b8850adae513dab1b7d8"
  },
  {
    "url": "about.html",
    "revision": "157ba3078fb05f07780ddd2f880f83a9"
  },
  {
    "url": "about1.html",
    "revision": "6a5090183436ed7e0680dcff72393119"
  },
  {
    "url": "about2.html",
    "revision": "52f2f15275d502e5300ac83291aedf0b"
  },
  {
    "url": "about3.html",
    "revision": "1e88bbafea54ee8e8dac5d7506b758e4"
  },
  {
    "url": "about4.html",
    "revision": "0e2021738dc354303d9bbada5ab15cde"
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
    "url": "assets/js/12.414c3df5.js",
    "revision": "2b175b3904c5898e7f96a327762b633c"
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
    "url": "assets/js/app.32c78b44.js",
    "revision": "629df12fa36b983981d6796bea679796"
  },
  {
    "url": "categories/index.html",
    "revision": "54a4602ebfbeb3d13c3249ef1bc932f7"
  },
  {
    "url": "countup.html",
    "revision": "0a4a92b6d82b0e754c75658c1d584b0e"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "f05b13979f1dc89a2c157d24a845f6bc"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "7a59e3b6a4b9a93d9be863b242e25da5"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "16b1c85a44419775dffca2013c853436"
  },
  {
    "url": "css/index.html",
    "revision": "bddedc15de1ece3e6e3778abb7f314b5"
  },
  {
    "url": "firstblog.html",
    "revision": "2291a8984a44ce7e472341cbd6fc24dd"
  },
  {
    "url": "HTML/index.html",
    "revision": "f21e16efa891e6683f5109d315c1832d"
  },
  {
    "url": "index.html",
    "revision": "dadbebd80c877ffd2b929983bc87d866"
  },
  {
    "url": "javascript/index.html",
    "revision": "04c94598305b9e2959f191f844aa132e"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "45ca5b76b82cb759a2da4d8cc568bc4c"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "8632d2fc20223a907a7860a619a49577"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "b088cbdd8d5785e6493b574b656f8b0f"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "55fb3ce1922b2debd3a6d17c265f6de7"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "64846b0cf96c4797127209c5820c304f"
  },
  {
    "url": "LICENSE.html",
    "revision": "ad4446060d8b681b0216ee8cec4a6dc8"
  },
  {
    "url": "quanxue.html",
    "revision": "65ba75860d2e370acef8cf0b7eb85ebf"
  },
  {
    "url": "tag/index.html",
    "revision": "1b45beb317c5a687a3c5294911728d26"
  },
  {
    "url": "timeline/index.html",
    "revision": "f13bfc51ad8e240ce8227c0aabcd4f94"
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

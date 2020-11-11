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
    "revision": "8f40ce1301fd0049a9c7a0bd01e8b80a"
  },
  {
    "url": "about.html",
    "revision": "ce844a869ce7913230cc1059aee92735"
  },
  {
    "url": "about1.html",
    "revision": "b1aff37c57b2212cfbde9921ea99b6b5"
  },
  {
    "url": "about2.html",
    "revision": "f77da50137959d996a24ac5acbf4a6d0"
  },
  {
    "url": "about3.html",
    "revision": "89556c533dd369fe71a6398c9af33f5d"
  },
  {
    "url": "about4.html",
    "revision": "462b9a1374a8a1839254f020ebf9ede4"
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
    "url": "assets/js/1.ce4c90a1.js",
    "revision": "8f5c90ad5f1bad773d54ae89fad95ea2"
  },
  {
    "url": "assets/js/10.a1e0f144.js",
    "revision": "450d96beef99b25813448dad384174ab"
  },
  {
    "url": "assets/js/11.fbb2617c.js",
    "revision": "f776833d52d8068893f14a3593decdf1"
  },
  {
    "url": "assets/js/12.f1e2f900.js",
    "revision": "474f21555d1d2685fe543255019581b5"
  },
  {
    "url": "assets/js/13.e1b1c37c.js",
    "revision": "a27e09f1429561ea519d37d0eea53cdf"
  },
  {
    "url": "assets/js/14.0b4cca5f.js",
    "revision": "67ae7f14dfc86fe8eb2e6324ab96da90"
  },
  {
    "url": "assets/js/15.28e4a1ef.js",
    "revision": "87efbfca6d1c2491e17460079906ac55"
  },
  {
    "url": "assets/js/16.37d97fc0.js",
    "revision": "16eff6789f780a5d77a6cabd10d58f91"
  },
  {
    "url": "assets/js/17.23d11dad.js",
    "revision": "adc647e9081235c72c00cfb93198ce9c"
  },
  {
    "url": "assets/js/18.2137b720.js",
    "revision": "f2b4ad855b88314b0939c59b592f3e66"
  },
  {
    "url": "assets/js/19.36b171bf.js",
    "revision": "8eb7520824b5d814b009aa7b3e5da56e"
  },
  {
    "url": "assets/js/20.1020591a.js",
    "revision": "d8e2c3d0d49f2b531eb4e755948d7a61"
  },
  {
    "url": "assets/js/21.842f0360.js",
    "revision": "6b551aebcfb171cf63ae03a36b26274b"
  },
  {
    "url": "assets/js/22.d51a0a23.js",
    "revision": "d1d2b0fa22908d2e0af8cf5d9eb96232"
  },
  {
    "url": "assets/js/23.7cbea2a9.js",
    "revision": "d5291581a0357c98fd204de2d4f04160"
  },
  {
    "url": "assets/js/24.39f48177.js",
    "revision": "13c4bc402d0077c1f96573d835423ce2"
  },
  {
    "url": "assets/js/25.47d699bb.js",
    "revision": "654aa4bd77e504e27d4aded44f9e2a5c"
  },
  {
    "url": "assets/js/26.a540a000.js",
    "revision": "badc0bbf0d673bb866c293a9b3496c2f"
  },
  {
    "url": "assets/js/27.508bc705.js",
    "revision": "0a9d7d409c4eaf196a04cd2c1cdb85f2"
  },
  {
    "url": "assets/js/28.dcf13150.js",
    "revision": "dc557a207d4449c4b3caa9edb822a978"
  },
  {
    "url": "assets/js/29.05608c88.js",
    "revision": "ef85f3b87c0afe81f19a31bc4f8ebbac"
  },
  {
    "url": "assets/js/3.fc16ab0a.js",
    "revision": "2fe4cee1b98b458205015107d7da6f19"
  },
  {
    "url": "assets/js/30.d2a1eb8d.js",
    "revision": "dc72e6f76c510f21dfc8d4f93fd2b0b6"
  },
  {
    "url": "assets/js/31.f667ea62.js",
    "revision": "9b7cb20cf0aa73b5476d1fac6cc13241"
  },
  {
    "url": "assets/js/32.be0e8103.js",
    "revision": "486f1b5020665b1af0eb2a3439d1b52a"
  },
  {
    "url": "assets/js/4.a2d76a6e.js",
    "revision": "8c37056adef565fb24471217ad91f40c"
  },
  {
    "url": "assets/js/5.0d30c491.js",
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
    "url": "assets/js/9.0a8c4740.js",
    "revision": "16a55e27da41e539faf1a95595ae1898"
  },
  {
    "url": "assets/js/app.ad6199e2.js",
    "revision": "221386b4b64e210cd01b87448ae9f911"
  },
  {
    "url": "categories/index.html",
    "revision": "d0d9073e6aeafc3364998e354b53f3eb"
  },
  {
    "url": "countup.html",
    "revision": "ff92be3f469f80998f71f9c0e6216d10"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "6706bbd522f1cd762b030d95de0534a2"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "71ade2d5f7615990ac37dfa033723b02"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "88b793f8933e66e235e698b4a8a880ad"
  },
  {
    "url": "css/index.html",
    "revision": "40aaf833149e17e7b5a92f34d3d46e17"
  },
  {
    "url": "index.html",
    "revision": "4d11f516823ef7a0f8509f6c86fd7aec"
  },
  {
    "url": "javascript/index.html",
    "revision": "6f3a35386393dbb6aec113ddcbe22e84"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "4c1509000ee7628e61c7109c1c923820"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "2069a5a5f182d579072035e007c8c42c"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "affa412102480745844b90063b4b049e"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "b2b7eae678250ece557db255b8fdfb41"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "d551318d794340bf8f2de78a371b5a28"
  },
  {
    "url": "LICENSE.html",
    "revision": "af19be6f095ca2984cf902720af7eff4"
  },
  {
    "url": "quanxue.html",
    "revision": "7cb79d4e8697e005f87b0aaef9f7789d"
  },
  {
    "url": "tag/index.html",
    "revision": "e2c65eaf484ac525f84f64b3d3a83f1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b4b01e7bc3783fe708d943cee0c6a0c"
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

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
    "revision": "ce9414e62604f9224d0647f68e619a4a"
  },
  {
    "url": "about.html",
    "revision": "3c474059ac12444b1177e121a60607ea"
  },
  {
    "url": "about1.html",
    "revision": "6685614a7555d82a85c9ab0a5e49e09f"
  },
  {
    "url": "about2.html",
    "revision": "89744287a8b616de6e13883c4613f655"
  },
  {
    "url": "about3.html",
    "revision": "851d93062952c13c796cba64dfa6cb1a"
  },
  {
    "url": "about4.html",
    "revision": "dc07ddbd5b872a2f0a84cca5fc514c45"
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
    "url": "assets/js/11.fbb2617c.js",
    "revision": "f776833d52d8068893f14a3593decdf1"
  },
  {
    "url": "assets/js/12.f1e2f900.js",
    "revision": "474f21555d1d2685fe543255019581b5"
  },
  {
    "url": "assets/js/13.cb10e615.js",
    "revision": "ef646715d0dfc75060659cac062046ca"
  },
  {
    "url": "assets/js/14.c74cc75c.js",
    "revision": "d70b9d2703e2c51229822e2bb58aa0a5"
  },
  {
    "url": "assets/js/15.f70f963a.js",
    "revision": "611d13292b4ba943e867182d1b1e78ac"
  },
  {
    "url": "assets/js/16.370e884c.js",
    "revision": "b564ad71812faae1e0b6e31ef6f7cb19"
  },
  {
    "url": "assets/js/17.6102e632.js",
    "revision": "f2bf743cb3377ab26cf06927388c1940"
  },
  {
    "url": "assets/js/18.2137b720.js",
    "revision": "f2b4ad855b88314b0939c59b592f3e66"
  },
  {
    "url": "assets/js/19.6ad350d3.js",
    "revision": "eb71a2870c7382ed742c7f9564628422"
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
    "url": "assets/js/23.db5c972e.js",
    "revision": "535dc75cb726c4629c9ef2d018953300"
  },
  {
    "url": "assets/js/24.ebdee842.js",
    "revision": "436979993dcda6215a2a1a98e0e6202c"
  },
  {
    "url": "assets/js/25.47d699bb.js",
    "revision": "654aa4bd77e504e27d4aded44f9e2a5c"
  },
  {
    "url": "assets/js/26.0126eca9.js",
    "revision": "d823021a71be2489d4d90fbcd0590dfe"
  },
  {
    "url": "assets/js/27.d1d95e46.js",
    "revision": "2f502fea70106ff84c89087c8fb70f24"
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
    "url": "assets/js/3.ca0f69ed.js",
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
    "url": "assets/js/9.0a8c4740.js",
    "revision": "16a55e27da41e539faf1a95595ae1898"
  },
  {
    "url": "assets/js/app.804fd873.js",
    "revision": "c874132f71746d0bc23c2cb78828b008"
  },
  {
    "url": "categories/index.html",
    "revision": "fa31ac14466bff7dd05b80ec5366ec7b"
  },
  {
    "url": "countup.html",
    "revision": "22a15f6805e675bc90a2acff9f4b0938"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "e13ea5341b232db811a8fbc40a6109dc"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "d75f67ec76f5eae78630c6932afbb1aa"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "b2b1d084aeae0c279fbc6c84b8563c4b"
  },
  {
    "url": "css/index.html",
    "revision": "5bccdfe3e629e54e03af798484842ed5"
  },
  {
    "url": "index.html",
    "revision": "ba22de7e6c28679dda300955b845f96b"
  },
  {
    "url": "javascript/index.html",
    "revision": "bf01402e6e0f1c087f3cdd75d1d9ddd3"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "ed3e5624c9015bfecf6272e4015f5ed5"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "41d48a9fd572bd9871f859b336cd3720"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "d33b96f9fc57d218a78580948ecd8390"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "8cdd4fcd9f5360d58198b3be5bfa7493"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "82155563f45ea8f266a807dc1d564ef1"
  },
  {
    "url": "LICENSE.html",
    "revision": "d2437b902481320f9316f9bb47ed5f70"
  },
  {
    "url": "quanxue.html",
    "revision": "640d9aac8d7cd6199b516dd72dfd6017"
  },
  {
    "url": "tag/index.html",
    "revision": "2680602fedf10bb485c6b873e1be550c"
  },
  {
    "url": "timeline/index.html",
    "revision": "3bae683d79bc758313a3ed215656c2a8"
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

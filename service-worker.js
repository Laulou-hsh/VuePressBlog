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
    "revision": "b2a07c17367ba2b38ec8f6b6d149794c"
  },
  {
    "url": "about.html",
    "revision": "2ca3c036e465fa6993734fa3a7f19d29"
  },
  {
    "url": "about1.html",
    "revision": "6695937f480f792d975339ecdbcf3bcb"
  },
  {
    "url": "about2.html",
    "revision": "90284d0e7a3a5e3253dc37c82fc0188d"
  },
  {
    "url": "about3.html",
    "revision": "2b853c0586f9ab402cfbd10a055f1962"
  },
  {
    "url": "about4.html",
    "revision": "af906955cdc1e2db633d534fa53f7162"
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
    "url": "assets/js/15.28e4a1ef.js",
    "revision": "87efbfca6d1c2491e17460079906ac55"
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
    "url": "assets/js/app.96c3cd4f.js",
    "revision": "b9d34cfb04a7c6af34c6f22ae414e7b1"
  },
  {
    "url": "categories/index.html",
    "revision": "bacefb6208d8ba9f6b3a2cb542790338"
  },
  {
    "url": "countup.html",
    "revision": "bd96ec5f3668de6d76384f8f750f3234"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "04fc045c3db11a56948d2ccb47441e21"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "621a77be9ca3878788b66efcae183d0b"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "fdd73775abcfb74c65c5c49cad064419"
  },
  {
    "url": "css/index.html",
    "revision": "2c564116e4192203dd86650db31a04b2"
  },
  {
    "url": "index.html",
    "revision": "ed8329c360d8e8912c008f338ff0498d"
  },
  {
    "url": "javascript/index.html",
    "revision": "2921bf0ab0f5d23ade22a0a208976d85"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "975156a85ea9869970cdd1b8694860a0"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "41223f744bc02730518cafff5ccc0ced"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "dbcc14240e7ad5a18dfea98fed8d307b"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "b16b6b7b308f209bf7dab3ece3f1c88d"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "a359d37d02ee7eff9a839409799870b7"
  },
  {
    "url": "LICENSE.html",
    "revision": "0f90001ab1ed7287eafb2eae3adbef14"
  },
  {
    "url": "quanxue.html",
    "revision": "acf59d0df7ec11c10ff81d37418919d8"
  },
  {
    "url": "tag/index.html",
    "revision": "3e31685af8fac97c75aedfdb2e82c45e"
  },
  {
    "url": "timeline/index.html",
    "revision": "709909048dc0c39607db7540cc2b0498"
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

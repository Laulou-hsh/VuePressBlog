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
    "revision": "2e192ecfc3067606866e5ee446647d3f"
  },
  {
    "url": "about.html",
    "revision": "f549a53bb340d58b82f0ef780980be13"
  },
  {
    "url": "about1.html",
    "revision": "6ca7ec2cea947673a49bc5e2384bce87"
  },
  {
    "url": "about2.html",
    "revision": "1665098bd70c802743c073f3e3e16cb2"
  },
  {
    "url": "about3.html",
    "revision": "d0d52b92267a8ac82e07d62477e7f49e"
  },
  {
    "url": "about4.html",
    "revision": "4f387fe6213c11091e89f2741e64a88c"
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
    "url": "assets/js/app.250d1c47.js",
    "revision": "04ab391ab165fd2b50f344d2a7e2036d"
  },
  {
    "url": "categories/index.html",
    "revision": "07c311ace06fe552dcc5d4c324f6bd4e"
  },
  {
    "url": "countup.html",
    "revision": "e7a7402c81762a5a04c7d1e8d3181a47"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "f38470bd9c0988730f343ede99a3bb46"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "c061471864e2892c3d5b2a3abb707c25"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "c769e4bfa51f681602373f3f2038ef8d"
  },
  {
    "url": "css/index.html",
    "revision": "e6d3d0eaced8872d2edea8383d3cab5a"
  },
  {
    "url": "firstblog.html",
    "revision": "9051afa2a494d72931e02319fd35b630"
  },
  {
    "url": "HTML/html-introdution.html",
    "revision": "947c66a2efc53c9aea7a166ad9584774"
  },
  {
    "url": "HTML/index.html",
    "revision": "63398903a8b490c0fa3024da62d2a547"
  },
  {
    "url": "index.html",
    "revision": "94c9edaa6884ee6b877ad272aa7ad064"
  },
  {
    "url": "javascript/index.html",
    "revision": "4ce3ffd5ea8ab7c92666ed9ca370538f"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "3c6f0844b465b8ae877739cf4e0b5132"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "307604b35c6a20f384e437e42e9133c0"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "b09afa228e4049a62a07866a80211a99"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "932a12b2f3639d5fd2c4ca7af2b5148e"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "3f0a427bfb12e1aefc0128a28333d894"
  },
  {
    "url": "LICENSE.html",
    "revision": "a1cbab9567cc2d2e730fd23a32d6cb5d"
  },
  {
    "url": "quanxue.html",
    "revision": "964de769311c66cc541750746c4e2c3d"
  },
  {
    "url": "tag/index.html",
    "revision": "9089f80e83515745c39464f2ff76f6e8"
  },
  {
    "url": "timeline/index.html",
    "revision": "e6051245d16152ef1d102fad31002c5f"
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

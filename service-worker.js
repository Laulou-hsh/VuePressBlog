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
    "revision": "69872ae72d0e1e494665d3cf32fabd5c"
  },
  {
    "url": "about.html",
    "revision": "d3bfb4c9cbea964c3dbae2e7af839a30"
  },
  {
    "url": "about1.html",
    "revision": "4f9be0ee78afbcbca2a40d18e7c1a113"
  },
  {
    "url": "about2.html",
    "revision": "f65f4a84c111b4cdc5859d3a56f78de1"
  },
  {
    "url": "about3.html",
    "revision": "a51f3d7ec33d4a518e50ad41b7799c69"
  },
  {
    "url": "about4.html",
    "revision": "452f06e8770d009a56a6e89fbc50bddb"
  },
  {
    "url": "assets/css/0.styles.e549961b.css",
    "revision": "8ca5b69088ff0f598639379dc53fb7c2"
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
    "url": "assets/js/1.2331c582.js",
    "revision": "fa169f14e1d9a387ba9f250a3a56a959"
  },
  {
    "url": "assets/js/10.b791c058.js",
    "revision": "04de279208c7cfd37b38e7ff47e0c6a7"
  },
  {
    "url": "assets/js/11.2efaee25.js",
    "revision": "769ee4f5a02a40ab3012867eaaa80650"
  },
  {
    "url": "assets/js/12.2c53f7db.js",
    "revision": "8113077bef00b8334ed05d08174b5618"
  },
  {
    "url": "assets/js/13.b080f93e.js",
    "revision": "1b89b49e58502a745e748b6d70a62daa"
  },
  {
    "url": "assets/js/14.e4b0a913.js",
    "revision": "25d51c58612f23ca4b7df06d7a220867"
  },
  {
    "url": "assets/js/15.188c6dbe.js",
    "revision": "a36ed73df5e329b1a6759e042a7269a7"
  },
  {
    "url": "assets/js/16.587a1eb1.js",
    "revision": "7fd53cf2f2f6cccddd19ca6b19cd397a"
  },
  {
    "url": "assets/js/17.4832666c.js",
    "revision": "04dc0320f4ef5f90389e9c784baf6632"
  },
  {
    "url": "assets/js/18.5f6be644.js",
    "revision": "7345f38d000044c58c119a5f1d24ed35"
  },
  {
    "url": "assets/js/19.a5655f37.js",
    "revision": "47ab7e8473ef9d31c62d440e743351b3"
  },
  {
    "url": "assets/js/20.1f4bd0ea.js",
    "revision": "80bd0d78418b285b537bab4a50b60782"
  },
  {
    "url": "assets/js/21.f8bd9ac7.js",
    "revision": "862a6376c1f4b656f0fe14f98331344f"
  },
  {
    "url": "assets/js/22.66d80e81.js",
    "revision": "c02206e04599d20c4202df84af197ce0"
  },
  {
    "url": "assets/js/23.15627a02.js",
    "revision": "716f937254ee981b4e5dceab4d85dc22"
  },
  {
    "url": "assets/js/24.288e7dc1.js",
    "revision": "c19ed09ab4828bd5392d05c31f67425c"
  },
  {
    "url": "assets/js/25.e16f92a5.js",
    "revision": "be7d5acd7b47b10bf2b41d38051f79c6"
  },
  {
    "url": "assets/js/26.b9d37691.js",
    "revision": "a2e65df84bfc309714d7c7fd593345ca"
  },
  {
    "url": "assets/js/27.989c1ed5.js",
    "revision": "20be9ba8351c8447d3f495890060c364"
  },
  {
    "url": "assets/js/28.8b90f4f6.js",
    "revision": "7882abc8b602f0f817646e04f69a5847"
  },
  {
    "url": "assets/js/29.5d7fb79b.js",
    "revision": "8b712398f7afb9dff92e9e40fac201e5"
  },
  {
    "url": "assets/js/3.2ea1feed.js",
    "revision": "e910338730e6ee4888d8d8a07bee6d59"
  },
  {
    "url": "assets/js/30.06772176.js",
    "revision": "ccf5bafc015a0ef69412eeb957a83b63"
  },
  {
    "url": "assets/js/31.b68f425a.js",
    "revision": "97ab00c4b4866eb4190a69dcd82c89df"
  },
  {
    "url": "assets/js/32.290f47af.js",
    "revision": "3a799f27ad1e9a835bf163aa1bfb2509"
  },
  {
    "url": "assets/js/33.d867e794.js",
    "revision": "103781c932ee4412e9e9f36ccac91921"
  },
  {
    "url": "assets/js/34.86c8dddb.js",
    "revision": "63d7fcfff17502d5f2d8f8d19ab0a087"
  },
  {
    "url": "assets/js/35.b007ea46.js",
    "revision": "ca8f143fa0c621047cdf56db8e86d131"
  },
  {
    "url": "assets/js/36.b77bb0bb.js",
    "revision": "9f64caa3e419afbc087488a0a6f8a77f"
  },
  {
    "url": "assets/js/37.568f5f2f.js",
    "revision": "1a96110bd4bbfcbf37cc10ea5e46ac0a"
  },
  {
    "url": "assets/js/38.a98af1e2.js",
    "revision": "4971f5528d2973064621cb86c1742441"
  },
  {
    "url": "assets/js/39.50f290ff.js",
    "revision": "9f94b513ea65acccbbde9bd17f22385b"
  },
  {
    "url": "assets/js/4.4fa1f15f.js",
    "revision": "1a05988a65632cb5016a8d7b746d7cb9"
  },
  {
    "url": "assets/js/40.95b24447.js",
    "revision": "fe21b2b835be882a441f3ccf245f574b"
  },
  {
    "url": "assets/js/41.fd88309e.js",
    "revision": "3aa04743691120ec22ed424b731cf3b1"
  },
  {
    "url": "assets/js/42.70d8f852.js",
    "revision": "9fba929c433ee9aedd0bf757334949ba"
  },
  {
    "url": "assets/js/43.d3aea6a0.js",
    "revision": "3324aaa76bf04cbd6f4c8c222b871e22"
  },
  {
    "url": "assets/js/44.37716d4c.js",
    "revision": "2b23e41b44274017242028b9813976d4"
  },
  {
    "url": "assets/js/5.627b4196.js",
    "revision": "49e913b7fd6f96fc1a8686549c1fee0a"
  },
  {
    "url": "assets/js/6.ab2d0cd1.js",
    "revision": "c4e1a352ab7e1d7564466442cbab2ff9"
  },
  {
    "url": "assets/js/7.df8ee334.js",
    "revision": "0209d309bef5fa96e63ad54a8868ed50"
  },
  {
    "url": "assets/js/8.31ba4737.js",
    "revision": "670057f3cc42da424100e056ed25dc5c"
  },
  {
    "url": "assets/js/9.a28fe91a.js",
    "revision": "8665f5066c48e13d66af56998cee1dc9"
  },
  {
    "url": "assets/js/app.61a6d6cd.js",
    "revision": "816c8b5c8bf2441d24d5391445244e26"
  },
  {
    "url": "categories/index.html",
    "revision": "d97f66362cf05ec6814e671a99aaf039"
  },
  {
    "url": "countup.html",
    "revision": "1fb5285c69e798ac8f32fee39db9c3fd"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "612327049c71b03081a51f2969ee1cf8"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "412dab6c066632b1e4efa33b551ea52d"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "1d0f10797e27d7c7da5055d626b36851"
  },
  {
    "url": "css/index.html",
    "revision": "d85e898b4729c4a574b15a881705b87e"
  },
  {
    "url": "firstblog.html",
    "revision": "0902d4333ff2a072618154248b90375d"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "dcb7c9440034750a5b9cb5b5422811a4"
  },
  {
    "url": "html/index.html",
    "revision": "31c50e89452b1d710026d3a716840047"
  },
  {
    "url": "index.html",
    "revision": "af155aaab529287a392e0a856495eb1a"
  },
  {
    "url": "interview/20201127.html",
    "revision": "86bed91161646506d8747d90a506df9a"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "ca285e1a07b19ad950332bdce7d4f7be"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "54fdb6561eee59bd304e24710f0aae44"
  },
  {
    "url": "interview/index.html",
    "revision": "2bf1e0f731c3b26d539dfb29492e5d5b"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "7d6e03fb7c6d7374d68a281efe6cf80f"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "44eeeaa0131b0cd1a7d14d7eb4f3e4cb"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "bf7a55beea45651bc89056421f644fdc"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "abb31adfa10047da80f1433b7c580ec1"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "9aad4d817d14b2ec4f553108edb64cbb"
  },
  {
    "url": "javascript/index.html",
    "revision": "d27bf1ba6e72a75d33de09daa4eb8187"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "6bb768c2da484d325402bd2cc170a836"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "7f9d019170b80dd2ac403ce347c4ac65"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "ab2d04f056904dde12a64f1c32e2441a"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "e3e58eea1e939a879cecc246cb0821e4"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "ef03e5a8b9aedce4a599e3300fdbe0ae"
  },
  {
    "url": "LICENSE.html",
    "revision": "a610a94ebe76b2a93307157de99009d9"
  },
  {
    "url": "quanxue.html",
    "revision": "7f31dc71c3439561533572965edc3789"
  },
  {
    "url": "tag/index.html",
    "revision": "ef8463b5503a86b98152989e6aad6ac5"
  },
  {
    "url": "timeline/index.html",
    "revision": "c8aa8210a25ebe731ed4cf5938cda765"
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

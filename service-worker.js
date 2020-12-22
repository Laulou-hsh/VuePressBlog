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
    "revision": "89efa8829a8df07c183b5c7b82b0aea4"
  },
  {
    "url": "about.html",
    "revision": "799cd6f432180508afea0f44a2c657f8"
  },
  {
    "url": "about1.html",
    "revision": "0d4d02b19ad6f5e0380c907abc70f6b0"
  },
  {
    "url": "about2.html",
    "revision": "3b95ac8a99ed47f59711891c1a426945"
  },
  {
    "url": "about3.html",
    "revision": "edf8cd95a7d40e23ef042cb9952680d6"
  },
  {
    "url": "about4.html",
    "revision": "9ec377d064bee212205177db06bd1db9"
  },
  {
    "url": "assets/css/0.styles.1757e022.css",
    "revision": "3899ba3c03911f8bd6ff9df99ade3ada"
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
    "url": "assets/js/1.87c8bafb.js",
    "revision": "167c414944b50a24060425e0b9923429"
  },
  {
    "url": "assets/js/10.a79446f1.js",
    "revision": "b3b696c12c452403ec36e87680b164e5"
  },
  {
    "url": "assets/js/11.d1f862d8.js",
    "revision": "6ef5d1a79d4f3ea4b148e83f578a6288"
  },
  {
    "url": "assets/js/12.a1250c22.js",
    "revision": "44fc88790fc0c6e3162a2296ad3ba1fd"
  },
  {
    "url": "assets/js/13.a308f889.js",
    "revision": "e1cac4e8cb87b8f31f34897abfcd1613"
  },
  {
    "url": "assets/js/14.bce3472f.js",
    "revision": "30d5e9cefc6b69399cce62b8f5a8f480"
  },
  {
    "url": "assets/js/15.76021b5a.js",
    "revision": "d99c8ba0fa5058eb5e0fb7a3053c79a2"
  },
  {
    "url": "assets/js/16.c9538838.js",
    "revision": "486785eede2243ccb8feb6e548a05f84"
  },
  {
    "url": "assets/js/17.daee6a9a.js",
    "revision": "4271cd30aab61e882aadd6a62a219026"
  },
  {
    "url": "assets/js/18.378d8849.js",
    "revision": "499648ff1bd826b1e2cfc6b407099d95"
  },
  {
    "url": "assets/js/19.9aaa1d7c.js",
    "revision": "1afddf5d7b1a452c9d40946b14cdd813"
  },
  {
    "url": "assets/js/20.de2d20f4.js",
    "revision": "d5768771f8cea6d62d327998b2feea83"
  },
  {
    "url": "assets/js/21.b70e0ee0.js",
    "revision": "33fd39bd1d11d6f5bee3644fd5cdc249"
  },
  {
    "url": "assets/js/22.9f965456.js",
    "revision": "20ed047a3d161b0c90b5d347ed84825a"
  },
  {
    "url": "assets/js/23.41a889b6.js",
    "revision": "f489690a1fef0c0d8abebaf0c045d75e"
  },
  {
    "url": "assets/js/24.3da3dacd.js",
    "revision": "8bfb127f2c2b739726daf602c86bb763"
  },
  {
    "url": "assets/js/25.a02a94f1.js",
    "revision": "8a64c4fb26dde9f74d2e77ed373ef02c"
  },
  {
    "url": "assets/js/26.f2775e23.js",
    "revision": "d0b8bb5be220cc06fd2c6239ba7a7278"
  },
  {
    "url": "assets/js/27.05720916.js",
    "revision": "7ebc31cbc0ff6adbb4fb5d648ed0383f"
  },
  {
    "url": "assets/js/28.00385259.js",
    "revision": "45a260d51c5ef6ba68ec00dab41c7c7e"
  },
  {
    "url": "assets/js/29.273677ba.js",
    "revision": "878d388a56119924c351f3896fd5cb5b"
  },
  {
    "url": "assets/js/3.53739279.js",
    "revision": "c7b68dec42bf59178bd468da1e57a41d"
  },
  {
    "url": "assets/js/30.e883f140.js",
    "revision": "d279a9a94196f1c3f9dd8282739c1889"
  },
  {
    "url": "assets/js/31.3fa912ad.js",
    "revision": "9e98cc8d4ded91ef669ace1df9ede07c"
  },
  {
    "url": "assets/js/32.3ba33c03.js",
    "revision": "d505b04d3c904c73f95743ee3f2a55ed"
  },
  {
    "url": "assets/js/33.8907489b.js",
    "revision": "93d92ea796588146bd7530fd7a44396e"
  },
  {
    "url": "assets/js/34.926bd605.js",
    "revision": "81996720ed76095192dd094985328af8"
  },
  {
    "url": "assets/js/35.fde52a51.js",
    "revision": "5963c52074fbe4649e0aedf58dedfcc9"
  },
  {
    "url": "assets/js/36.dfbcd9fd.js",
    "revision": "92ea6d39a55d0df7003826bedbbc9b41"
  },
  {
    "url": "assets/js/37.37a2dace.js",
    "revision": "90deceaffa3cf9370117f57a1404486e"
  },
  {
    "url": "assets/js/38.82d698ba.js",
    "revision": "9ddf3914d60c472f7be1a74d9c754d2c"
  },
  {
    "url": "assets/js/39.dada5686.js",
    "revision": "1f671643ddf224ce4fe848ec36553e04"
  },
  {
    "url": "assets/js/4.2056a899.js",
    "revision": "ed3e0ee9b3b26bb7ebd0f96106bcb9b9"
  },
  {
    "url": "assets/js/40.4d3e448d.js",
    "revision": "40098b12d21478066fd3191be9fc7261"
  },
  {
    "url": "assets/js/5.d6e67fbd.js",
    "revision": "e2745c388c60107f0cb8486730e4a0e6"
  },
  {
    "url": "assets/js/6.efced9f6.js",
    "revision": "e587b1da1a0f5bf5fdd0a8e90e45ebd6"
  },
  {
    "url": "assets/js/7.f53352ab.js",
    "revision": "42630f95b49414e1d03bc57ac12cb1d1"
  },
  {
    "url": "assets/js/8.c7e55736.js",
    "revision": "be6691fd24be479a07ff2c13fbb51b8e"
  },
  {
    "url": "assets/js/9.109235e2.js",
    "revision": "5b1d90dc72f5d13dd261e1c95a78ae84"
  },
  {
    "url": "assets/js/app.b0106bc6.js",
    "revision": "e28908a6dd662ed7fd2e358d7705b01c"
  },
  {
    "url": "categories/index.html",
    "revision": "7bf4cdb1689222d25ae26a053167e870"
  },
  {
    "url": "countup.html",
    "revision": "6502010c3b4fb4065259667558584238"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "67efbbd3179aaf08c2567d4b3dd58d06"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "75d069ec38f09dc6264ad047d302e0be"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "6cb8d5a122753db1a6330b77be1cefb2"
  },
  {
    "url": "css/index.html",
    "revision": "614f26fdc0a35bb8d811c36ee9f89905"
  },
  {
    "url": "firstblog.html",
    "revision": "b4755bd2e58360f1bf0a6c19f4c5b1c3"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "da058fc28fa997fdfe4e93cbefe6398b"
  },
  {
    "url": "html/index.html",
    "revision": "f2bcde11d6466f1cec82f191db3e4c55"
  },
  {
    "url": "index.html",
    "revision": "7b8161c93129795e8a45850832aca9a9"
  },
  {
    "url": "interview/20201127.html",
    "revision": "aaa1cb38ece63df586bab175912626a3"
  },
  {
    "url": "interview/20201201.html",
    "revision": "872d1378221adc62c0bbf34c076f07e3"
  },
  {
    "url": "interview/index.html",
    "revision": "a0e9c58249ff78c87019c4adde45e9d6"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "8019054ebc07c1130c8938ecbf4001cd"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "599a5c78f66029002a5f71850327805a"
  },
  {
    "url": "javascript/index.html",
    "revision": "640a25810fc9a6367daeab8b66d97d4c"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "c3faec33a125558353e0827545109cdd"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "123acbbd3f7d9182b83b92eb9ea8957f"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "10c9f0359cdfe19b5cde57d0c7f9e4e9"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "1afcde9bf5d07b8ecb1f63e20ceb9735"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "65a16bdff9a6d00b7b929d6e0de3b6c0"
  },
  {
    "url": "LICENSE.html",
    "revision": "56f41859f61abe1e730f6b3fea4b7640"
  },
  {
    "url": "quanxue.html",
    "revision": "a96ce1bdce9b35b625e0c6009fd2188a"
  },
  {
    "url": "tag/index.html",
    "revision": "cf8eecb1c3d692ccbb6afe9f7de40b10"
  },
  {
    "url": "timeline/index.html",
    "revision": "f0455a5943cf9cc25abe1abc12963022"
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

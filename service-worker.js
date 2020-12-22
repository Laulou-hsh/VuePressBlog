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
    "revision": "dcac159db137214b10b4cae0f9ae468e"
  },
  {
    "url": "about.html",
    "revision": "a704745e8860cfb8a3a64ac21767f782"
  },
  {
    "url": "about1.html",
    "revision": "22b754b4c4b5769c44671ce6d6f7aa26"
  },
  {
    "url": "about2.html",
    "revision": "5a22156cdb086abdd64825306492be01"
  },
  {
    "url": "about3.html",
    "revision": "ab8e107a8faa6366a1d5a74819cc3d5e"
  },
  {
    "url": "about4.html",
    "revision": "be0f894b023657e3636bf2ab618dda90"
  },
  {
    "url": "assets/css/0.styles.a8e31d0a.css",
    "revision": "e9de3787e0ed5e382bfd3554403912d5"
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
    "url": "assets/js/11.c8f9997c.js",
    "revision": "339113bfcb90cb3a88def10116c58339"
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
    "url": "assets/js/app.85feb9af.js",
    "revision": "d10341eff3835cfd78c0634ca5fcd1a9"
  },
  {
    "url": "categories/index.html",
    "revision": "e81ad5276063c0167525770e185231d8"
  },
  {
    "url": "countup.html",
    "revision": "9d64674886c7dbc51f5f0a672546c282"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "31df9b273d830f7227594e859504bdb4"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "536299fe62a0e21d04f174a215d64b85"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "93a250a09740bc4fcf73760938b8d684"
  },
  {
    "url": "css/index.html",
    "revision": "b070462caaf4df2fa2b1ea85cc284818"
  },
  {
    "url": "firstblog.html",
    "revision": "3d3f0f470dd433daf5e72707195dbaa9"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "97163be1061755a85dacf1a4e51009df"
  },
  {
    "url": "html/index.html",
    "revision": "52d9ab4dd81204f4dc1d4fe7f0c017cc"
  },
  {
    "url": "index.html",
    "revision": "dbae73593dc1c081043abaf378cf2351"
  },
  {
    "url": "interview/20201127.html",
    "revision": "c0a3d29e25fc12dc4320eb222ba2d58a"
  },
  {
    "url": "interview/20201201.html",
    "revision": "6af67a5862d63d9baf2257243f787339"
  },
  {
    "url": "interview/index.html",
    "revision": "b047f88b9d14e6940bef3dbd08d49076"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "231ae191dced5407f6f96f3273bfaa7b"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "bc145f76c56805dfafdc4071781b80ba"
  },
  {
    "url": "javascript/index.html",
    "revision": "7a5e54efa7af60e2f3d7bb7aa9a11f62"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "23ddd1e0b40b0409bbbb4ac154546ed7"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "9618d13bf47ae476d3354fac8c7818d5"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "c8bfe854e5c50aaf5142176ffdbb2cd3"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "8b446236a616ed87bdf7603b48efe9ae"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "65b77c6c83e6eb03c8854618528c459c"
  },
  {
    "url": "LICENSE.html",
    "revision": "80e592ac7552ae071ac8e348f042bfba"
  },
  {
    "url": "quanxue.html",
    "revision": "f7914d75478ec63a241b331b9cf63fdf"
  },
  {
    "url": "tag/index.html",
    "revision": "4722613b3dfc90c02934eae5eeda8d64"
  },
  {
    "url": "timeline/index.html",
    "revision": "970b2473eee42030fb1cc49cbeb286cf"
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

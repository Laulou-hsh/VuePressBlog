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
    "revision": "f94a7610cf0f931dfae10e5fb988857e"
  },
  {
    "url": "about.html",
    "revision": "414182ad1b2ac51b2cfd4357ec177042"
  },
  {
    "url": "about1.html",
    "revision": "d5ac69cbc6a3aed17dcbae4242ede5b9"
  },
  {
    "url": "about2.html",
    "revision": "f66b0b6735f3f74dcff885b9ecba0cec"
  },
  {
    "url": "about3.html",
    "revision": "d1a6275f0d2da7423436c15789fc75a5"
  },
  {
    "url": "about4.html",
    "revision": "68bf15a3f91fd9a5604840054ada40ef"
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
    "url": "assets/js/12.44ca5829.js",
    "revision": "3492bb6cdd3d15230d8be6daf8370597"
  },
  {
    "url": "assets/js/13.041ce00f.js",
    "revision": "46a95f03f7ff7fe81ddfa057e2b5acf4"
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
    "url": "assets/js/app.d838fcba.js",
    "revision": "728ad679ee89370d36f607f0df507eb8"
  },
  {
    "url": "categories/index.html",
    "revision": "eb6eaf6b3404c00c9649bcd025a65c99"
  },
  {
    "url": "countup.html",
    "revision": "f93ed85c7308c0e525b523ee75ce7820"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "44ec2f701a7af419d2c20c4f4bf539e1"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "41a44868d2dec0b0c2dadf405dcab642"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "37826cf786fe86d68941101b2a2f70b4"
  },
  {
    "url": "css/index.html",
    "revision": "62538849e3814907f17a49150f33c2fd"
  },
  {
    "url": "firstblog.html",
    "revision": "a79d3c198687f9c89baeb4c8d03257fb"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "e8e9e540fa9aedb1de852301dc94a0e7"
  },
  {
    "url": "html/index.html",
    "revision": "1d66e84b3798bcfc8bc5c5b31a478abc"
  },
  {
    "url": "index.html",
    "revision": "671ca1e6fcdf17a13344ba4b7d259e41"
  },
  {
    "url": "interview/20201127.html",
    "revision": "25ab0cfb0ff8c4e08092a64eb7423d4f"
  },
  {
    "url": "interview/20201201.html",
    "revision": "cc0388ac762e036b6308d38c376dc1f0"
  },
  {
    "url": "interview/index.html",
    "revision": "0e22ac6de42e407104e7e38a4774ee44"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "4c585792c1a06e43acd6380164b5eeed"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "f105b88b4273d827701d8dc410ca15f3"
  },
  {
    "url": "javascript/index.html",
    "revision": "a1890c1360e18a9fbe619351726a1f7d"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "78ad7e9e3e53dd2b0899410cbab1b728"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "a95813d36bca3e0477f397b01d6e20d2"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "60fbab41176b205f81c1cf29b66584a9"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "d9b5597bfe2183763a210b4052e79e5c"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "ff678aba5b5908ee94e8a1f4b5b60948"
  },
  {
    "url": "LICENSE.html",
    "revision": "c843d4644d96b142c227d16ca00af4dd"
  },
  {
    "url": "quanxue.html",
    "revision": "be773a7dde7846555ff911e71409501f"
  },
  {
    "url": "tag/index.html",
    "revision": "99d5f869e1045e610f3f8e611782f2cb"
  },
  {
    "url": "timeline/index.html",
    "revision": "e14adf868bae25d11c2876c1b684b841"
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

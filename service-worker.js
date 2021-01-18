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
    "revision": "7af9e2e2e268a1ad02336dcf1797a02b"
  },
  {
    "url": "about.html",
    "revision": "3f4b9f38b5bcb66dd407830bfb60ec3f"
  },
  {
    "url": "about1.html",
    "revision": "19174eb6d0dc6cb470f508aae39ec347"
  },
  {
    "url": "about2.html",
    "revision": "539d172f191757bc846fec86d98fab5a"
  },
  {
    "url": "about3.html",
    "revision": "f20908cc6839848b4283c0f75339ddd6"
  },
  {
    "url": "about4.html",
    "revision": "3987cb28b8ce4131ab8992bf609f0fc8"
  },
  {
    "url": "assets/css/0.styles.8ca68fdf.css",
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
    "url": "assets/js/1.33198c77.js",
    "revision": "cb4f6ef9f0ce4f4ba6c192355ad4abcd"
  },
  {
    "url": "assets/js/10.6de22768.js",
    "revision": "68feeffe5043b28dc58027c3241c1f12"
  },
  {
    "url": "assets/js/11.dd75c634.js",
    "revision": "fc385bd3cadea45e8d36638bfcb226ff"
  },
  {
    "url": "assets/js/12.bb6a3c62.js",
    "revision": "59665195cfbb01ec4e7ba6b5972831b7"
  },
  {
    "url": "assets/js/13.916455b6.js",
    "revision": "baa59aae13bf461af542cbd2bae51de5"
  },
  {
    "url": "assets/js/14.8cb3edc6.js",
    "revision": "f36e770b0fcdb5decc2c6a2ca2cd3506"
  },
  {
    "url": "assets/js/15.9f457a08.js",
    "revision": "09fa4b09496b761e2235bee385d43aaa"
  },
  {
    "url": "assets/js/16.a528c671.js",
    "revision": "6ef150a563a66605fe26abc2e4a84eb6"
  },
  {
    "url": "assets/js/17.fc1efc7a.js",
    "revision": "e52c026c945f42f3e07477258168ef14"
  },
  {
    "url": "assets/js/18.a0f15d0b.js",
    "revision": "be7856d211ad54965c78fc77f94b4132"
  },
  {
    "url": "assets/js/19.d4042487.js",
    "revision": "40c75758a7fc89f1a6801d849406ee15"
  },
  {
    "url": "assets/js/20.09e3e24c.js",
    "revision": "25fe5e49f9e933d033f1cc6ef62edc07"
  },
  {
    "url": "assets/js/21.7b0e6b5f.js",
    "revision": "4a2a5d97bd8bc4e460e17515288ccaf8"
  },
  {
    "url": "assets/js/22.2c3c0e9c.js",
    "revision": "0c655847b408714851ab690f730642be"
  },
  {
    "url": "assets/js/23.4029e76c.js",
    "revision": "5cb4cb3043cc2df9551084e68a95307a"
  },
  {
    "url": "assets/js/24.e732736e.js",
    "revision": "81c5ef73248b1464b9d4e406bdb47222"
  },
  {
    "url": "assets/js/25.eaa00304.js",
    "revision": "01193ea44de96eca34755fa417c6a342"
  },
  {
    "url": "assets/js/26.4b7b6c50.js",
    "revision": "dd45ccbe2d518cb6c83f9e26cc2b2e10"
  },
  {
    "url": "assets/js/27.28bbe05e.js",
    "revision": "13c2d60d99be1564f21c7dbd188158f6"
  },
  {
    "url": "assets/js/28.3eab24d9.js",
    "revision": "70df0a27f4df479fbc99b38d9f25b751"
  },
  {
    "url": "assets/js/29.fd1fb810.js",
    "revision": "7a15ce8d5c232cadac44951a5491a624"
  },
  {
    "url": "assets/js/3.c3cb1ba9.js",
    "revision": "5480c75d62dc3c84e67ecc5549a4adf3"
  },
  {
    "url": "assets/js/30.9d1694ae.js",
    "revision": "a89e72dcf14b2ac47c24d756ef1e1b81"
  },
  {
    "url": "assets/js/31.4ea92e19.js",
    "revision": "52ae177dea406c87983b93958f57b13c"
  },
  {
    "url": "assets/js/32.82574548.js",
    "revision": "7beb991b5c283726c560dbcbdd8000a9"
  },
  {
    "url": "assets/js/33.a3fe8396.js",
    "revision": "dbe00bcad7556bf6b92590812708f85b"
  },
  {
    "url": "assets/js/34.75a86137.js",
    "revision": "b155cfbd71cc816d01fb829acf5797ff"
  },
  {
    "url": "assets/js/35.b783318e.js",
    "revision": "a097da2982b0d4c41745bdca939f03cd"
  },
  {
    "url": "assets/js/36.c3a48709.js",
    "revision": "128b10d810b871d5a594a99e1e794d64"
  },
  {
    "url": "assets/js/37.c16e53fd.js",
    "revision": "d2ad187f2759fe9e461d82642d05f804"
  },
  {
    "url": "assets/js/38.6af8b8bb.js",
    "revision": "a3bdb7ee5e526d342721cb231771d51d"
  },
  {
    "url": "assets/js/39.5d2dd2f5.js",
    "revision": "dab0b68175ecb61fbe9a0f70b6e6a943"
  },
  {
    "url": "assets/js/4.e443a06a.js",
    "revision": "12681cafb1d38eeb48918d3d1f063d9e"
  },
  {
    "url": "assets/js/40.08ed5564.js",
    "revision": "435748c26c02cfa82cd1db3af5aa5495"
  },
  {
    "url": "assets/js/41.696214e4.js",
    "revision": "c06881164a0c385b1fe7916c73eaacf4"
  },
  {
    "url": "assets/js/42.657a48cf.js",
    "revision": "159b6bf813b74c86d2ff456396f9d7bb"
  },
  {
    "url": "assets/js/43.488aab46.js",
    "revision": "4eac11f662e1ead95d276f0b70b1a060"
  },
  {
    "url": "assets/js/5.a5b6eeab.js",
    "revision": "b41d092211a5b7b46911a2af24d143e1"
  },
  {
    "url": "assets/js/6.20ead6f2.js",
    "revision": "fdd56130ea9b336d31faa43d15d4b547"
  },
  {
    "url": "assets/js/7.dd4100fd.js",
    "revision": "38c2524d43112de35b258a0df388fbb8"
  },
  {
    "url": "assets/js/8.2599e2b8.js",
    "revision": "8fda1ab1845e7536af873af35c649ad7"
  },
  {
    "url": "assets/js/9.c07faa79.js",
    "revision": "b47f876b3b40817d09b556ab2ce10f92"
  },
  {
    "url": "assets/js/app.e8526f42.js",
    "revision": "6411c9bb31a2563ce6a1e06ca4290b38"
  },
  {
    "url": "categories/index.html",
    "revision": "085ec8942e375940f3df3e6f7f1638c0"
  },
  {
    "url": "countup.html",
    "revision": "79860a3a74b39b8bea3a114286233299"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "f9b60b3248ca0913f9b9264e7f309afb"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "edeea34ebe5bec562d6d278cc5c00b20"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "6a61919edff2d0a22b30e9da69879e12"
  },
  {
    "url": "css/index.html",
    "revision": "1d5a363df30bfd63580829ef65adeb8b"
  },
  {
    "url": "firstblog.html",
    "revision": "97017c4ea1bceebe8e91c5188383fec7"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "1a06dc844103c2f79f385dcf480986a5"
  },
  {
    "url": "html/index.html",
    "revision": "5009e93fe7095c4c63ccf40053eced3d"
  },
  {
    "url": "index.html",
    "revision": "cddfc636ecfb314b138e1aaeae8de2af"
  },
  {
    "url": "interview/20201127.html",
    "revision": "c10eec8dc8621d3444eda4525c58c1c5"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "3696e973b8ca072a158678292732de7c"
  },
  {
    "url": "interview/index.html",
    "revision": "9cf1b2fc309a94575253b0a73ad4a2d9"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "e0b423defb3dcf5710639da77b910ead"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "7ce96114d18d4bbd0630cfead078be8f"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "ae05224fbb7b9d3560e3d495fdb1031a"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "76e124e70ad3197e06e6dd7ae9fda6ea"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "ecf5b82cba67e8c7949e66774c3b16bb"
  },
  {
    "url": "javascript/index.html",
    "revision": "5bc2556fa5c14b5a6b78e7885ef945bb"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "c9ab2fd92dcb078e90281f1ed5ed4db7"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "f870ccbaa167c28c4b0726f3fa60721b"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "06e4b627a4b2a0c361441b8c20d1023a"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "b5dcfb523884cdc7d4e19ce80932a758"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "2523922e3933c855bbedd8b1c72cee3f"
  },
  {
    "url": "LICENSE.html",
    "revision": "087e0d5423f4d1a5b79a7215ab6e86e3"
  },
  {
    "url": "quanxue.html",
    "revision": "74fa618905e86a94171c3ef966c68fa3"
  },
  {
    "url": "tag/index.html",
    "revision": "abe45c8ef77983cccff73256d6d98515"
  },
  {
    "url": "timeline/index.html",
    "revision": "c8da3457048d0252e1ab2bd430ce937e"
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

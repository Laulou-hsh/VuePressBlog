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
    "revision": "8f2e9155681023f85624628ca26a650c"
  },
  {
    "url": "about.html",
    "revision": "15ac96bf4f1579ee18eaef01c540b898"
  },
  {
    "url": "about1.html",
    "revision": "d1691b54b5dd89a8d1d509de61b27bab"
  },
  {
    "url": "about2.html",
    "revision": "ed63e15c5a4118b94c53f4b7b7b57931"
  },
  {
    "url": "about3.html",
    "revision": "4506edfbd363b49934bc988893f16a1e"
  },
  {
    "url": "about4.html",
    "revision": "a9948d8382aa04a911094cbf9d068e13"
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
    "url": "assets/js/11.97c8595f.js",
    "revision": "96f5df005867b93027b735f96e510a80"
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
    "url": "assets/js/14.a374e10e.js",
    "revision": "f4ca20e6b8c434c31d1b2080b1d62880"
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
    "url": "assets/js/app.c91444df.js",
    "revision": "a566ca9dd5c22bff9789ab40c160720d"
  },
  {
    "url": "categories/index.html",
    "revision": "06b0c1e2a3a851a2598b200a7d5af3fd"
  },
  {
    "url": "countup.html",
    "revision": "3b86d9839463461174ae409c370e4a02"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "09b19992384ee573f29e6f94a8981808"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "c4f4f34b5a6fd1456ef846e0ffe52fd9"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "743b1aad4ccc5088da254c4c7a03acbb"
  },
  {
    "url": "css/index.html",
    "revision": "dc78a970fd994d86189326d4c7224083"
  },
  {
    "url": "firstblog.html",
    "revision": "62318799d8f059d885052c6293deb906"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "046e99c892a50c6e5cac80e583aed779"
  },
  {
    "url": "html/index.html",
    "revision": "777baaacd0be414b57c72f178699c104"
  },
  {
    "url": "index.html",
    "revision": "488b1558297743da710593373ae4a81c"
  },
  {
    "url": "interview/20201127.html",
    "revision": "b845148be2701fe57bc60dcef14e832a"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "80d8df59a4d8cd61b2d6f00ab38b27c6"
  },
  {
    "url": "interview/index.html",
    "revision": "efea319c441cf8c73787bc701c7d92db"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "109d037a02ee3c501428491540cfe48e"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "4daa628566f8c3cd1b5e605897f938c1"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "dea3cbb6a6364257dff2f2fe18af96a8"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "fc8f40d5cbbe68c3dd2d0a7b9e35098e"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "f753b79ce4809001d378cbe5b6dbb6dc"
  },
  {
    "url": "javascript/index.html",
    "revision": "dc4a0da962e783c89c487e016aeb577d"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "b83b8d90c0d2afb792fe827677f9882b"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "710c1a589d5b46ee36b6838e06c1e425"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "25d28931bfc6ee99ad98baa851c84e47"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "5c1bd2c7945fc7eec2639806690ae902"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "27df00bf9638a87775e606686dc86be5"
  },
  {
    "url": "LICENSE.html",
    "revision": "f4470e0ec0e3fd88eebadc55f32dcae4"
  },
  {
    "url": "quanxue.html",
    "revision": "a048efff8672d0ca4681af81041c6a11"
  },
  {
    "url": "tag/index.html",
    "revision": "4717bd45f0e5ab409378f9f1dd39b4fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "eebc9ecf2286a90433c05f79adca3ab7"
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

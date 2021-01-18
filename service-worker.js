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
    "revision": "6e2d495bf7b98fb838c441eabe4cd1b8"
  },
  {
    "url": "about.html",
    "revision": "9a0808a6aedb1c989b02f2acf2ab545f"
  },
  {
    "url": "about1.html",
    "revision": "9ddf3e75223f758708cc7d9efbcf4dfa"
  },
  {
    "url": "about2.html",
    "revision": "b61951e66fce67c774989c7af715f0d4"
  },
  {
    "url": "about3.html",
    "revision": "b257a9f6ae1814ef86a009a9d29bce72"
  },
  {
    "url": "about4.html",
    "revision": "350462d895b7320add22693bc2348c79"
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
    "url": "assets/js/app.3f7c1007.js",
    "revision": "b6123219c417b301b84e01979a9188a3"
  },
  {
    "url": "categories/index.html",
    "revision": "bd3a65264de8ab3d842e43b606a75ae4"
  },
  {
    "url": "countup.html",
    "revision": "c3fd6a0a16ae5d9e67ee5466e95cf3ec"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "38ae37a85214398fe7430871a0aebdd6"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "6c55412e97f333a6af14ba618744521a"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "e379e2a22527a10739ef6ace3c4f07a5"
  },
  {
    "url": "css/index.html",
    "revision": "0055e35a0225f85ee24e4e3492c32f42"
  },
  {
    "url": "firstblog.html",
    "revision": "ec98010e841bd4670204d8e59bea7fec"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "2a6165049e5a600aa335af73512aebc4"
  },
  {
    "url": "html/index.html",
    "revision": "685509fd2ec8cc162f6454c46acd5bc9"
  },
  {
    "url": "index.html",
    "revision": "ffdfa528b4b49878c65ccb1be7bff3dc"
  },
  {
    "url": "interview/20201127.html",
    "revision": "80bde0d4522fcb92dc0dd1913ddbc1c9"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "60e3117f7990ad3f7056b524c2384e89"
  },
  {
    "url": "interview/index.html",
    "revision": "da55b191ee9bba14969ed35ac35bd542"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "1007077b8fac54fb29a11d8aa65af533"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "15246903bb411f6b5050a59128cea3a1"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "1f205079ed93865be74e03d787041cc7"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "fb852df1a72fbeca8510419bbc33e61d"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "d0f3f408f6e849623bda96e3da54da79"
  },
  {
    "url": "javascript/index.html",
    "revision": "be49baef62e969fd5a0f4763501b5152"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "92fb0b47c189007a219bf21a6a463457"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "059b71872f35439bc0e99069ba04a0d0"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "3c0492b170ca3774b34938a46eaa5da4"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "1892f8327b13620f5c6405f2da49c174"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "079c14d464ffccea022e13e7dc875d52"
  },
  {
    "url": "LICENSE.html",
    "revision": "3f4f3a2e9058f944013a53f863365336"
  },
  {
    "url": "quanxue.html",
    "revision": "2bdafbee54232f9465fed6f66d00a6b7"
  },
  {
    "url": "tag/index.html",
    "revision": "5097b1b9a93da7605c7dd5c89c5e7222"
  },
  {
    "url": "timeline/index.html",
    "revision": "a76f1972194b1e6b26bd1f324e6ca91e"
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

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
    "revision": "9fded2cd1ca108f0d63498c02b00926d"
  },
  {
    "url": "about.html",
    "revision": "88101825b633bbee2bdc2014c73f31c1"
  },
  {
    "url": "about1.html",
    "revision": "a06b3fbbdd9df5f224a9b1ec9dc452ca"
  },
  {
    "url": "about2.html",
    "revision": "ac5ddfb2d440e1fbd732fcff9e7a945d"
  },
  {
    "url": "about3.html",
    "revision": "e3ebd3f452c350a9c1068e3ed822af00"
  },
  {
    "url": "about4.html",
    "revision": "11ef43e19e7562c3a4136b97d158182b"
  },
  {
    "url": "assets/css/0.styles.c38d2f89.css",
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
    "url": "assets/js/1.35759f10.js",
    "revision": "241325ff8f8ff70c6175f20edbdcbbdf"
  },
  {
    "url": "assets/js/10.f4aa2df8.js",
    "revision": "abe311f7d0f0f362484da0fca68d73fb"
  },
  {
    "url": "assets/js/11.b3760db6.js",
    "revision": "c7a0df25e51fa96912e8f7d71c6c597a"
  },
  {
    "url": "assets/js/12.79ef8892.js",
    "revision": "7e909da790d144231e56f48b952d89e9"
  },
  {
    "url": "assets/js/13.e8c3f15d.js",
    "revision": "98240b05c985a5cd6c3ebd073aeff4b1"
  },
  {
    "url": "assets/js/14.331ce7ef.js",
    "revision": "c8edeb0849f9243dc202e393ce802fb2"
  },
  {
    "url": "assets/js/15.d6a20bea.js",
    "revision": "6d58cd656205f673a949637f94e036dc"
  },
  {
    "url": "assets/js/16.df6ca8e3.js",
    "revision": "6f7c34d38844dd2ee637c1551b0cda1a"
  },
  {
    "url": "assets/js/17.8a0c33d2.js",
    "revision": "24f0349c1df8d2d65951b14af7ea88f3"
  },
  {
    "url": "assets/js/18.4937f31a.js",
    "revision": "99cb73d0ef576444fe5cc83fdcdf275d"
  },
  {
    "url": "assets/js/19.fc6aeb56.js",
    "revision": "1f93135273d22c9c4df808e5dd18f086"
  },
  {
    "url": "assets/js/20.7a7c5616.js",
    "revision": "58ac9f415a3e4ad9ae09a44ee1b93d41"
  },
  {
    "url": "assets/js/21.6a0eeba6.js",
    "revision": "a5986676e90eee0ad4110808ad8ce364"
  },
  {
    "url": "assets/js/22.acbf2a2b.js",
    "revision": "61220a849fe16dce6431845cf936305f"
  },
  {
    "url": "assets/js/23.f89333b9.js",
    "revision": "087e774c4023b3f7d7fead6123685d60"
  },
  {
    "url": "assets/js/24.fd9f64d2.js",
    "revision": "3cf9a4fbc590617f799b94230e48181f"
  },
  {
    "url": "assets/js/25.808419ca.js",
    "revision": "e72eb0325e0256b04c49b9db473711ce"
  },
  {
    "url": "assets/js/26.670f6a92.js",
    "revision": "c460725b4b8789ee3ddd1e4f66ae0621"
  },
  {
    "url": "assets/js/27.367b5b76.js",
    "revision": "ea659339315c87ef13e3f1d57855cdec"
  },
  {
    "url": "assets/js/28.fd52fe8d.js",
    "revision": "2a4ebe1c15c4c413200eaab2a3afeafd"
  },
  {
    "url": "assets/js/29.836c01c1.js",
    "revision": "f31acd781bf7a389c5b7c76774e8c5dc"
  },
  {
    "url": "assets/js/3.f892f6d1.js",
    "revision": "6674701402aacaba6d53155d301b1886"
  },
  {
    "url": "assets/js/30.18d4451b.js",
    "revision": "dd3593c2e299a0fc7ebe1c89be56eaa5"
  },
  {
    "url": "assets/js/31.cf2d8027.js",
    "revision": "c90cf774e9dabb595448516c9ef5da09"
  },
  {
    "url": "assets/js/32.b0fc5432.js",
    "revision": "7a50faa4a8ee9fa34cc237380d4dc3e5"
  },
  {
    "url": "assets/js/33.d5311f3b.js",
    "revision": "93b47160e97a3a9395ed196102dc01d4"
  },
  {
    "url": "assets/js/34.4e94e483.js",
    "revision": "061dded16162ecb5a09f34999552a641"
  },
  {
    "url": "assets/js/35.9797e3b0.js",
    "revision": "a91f97912d5ce0439ce36174b1e865d2"
  },
  {
    "url": "assets/js/36.84f3af2c.js",
    "revision": "762d5ae316b3a2ffdc971bf0ca256107"
  },
  {
    "url": "assets/js/37.7bfe23e0.js",
    "revision": "7decb067b16bb1c79d6c20963ecef105"
  },
  {
    "url": "assets/js/38.77d8213f.js",
    "revision": "f569fc3dadc7a64b334ad5add06eb303"
  },
  {
    "url": "assets/js/39.558efd14.js",
    "revision": "96ef0d4a9d7850aa38068d764c3e8dbb"
  },
  {
    "url": "assets/js/4.5bf5ee32.js",
    "revision": "7a1344fa1eedb9d475aeb399efece239"
  },
  {
    "url": "assets/js/40.297e01c6.js",
    "revision": "bf9154e6d08270e2007848eec91de451"
  },
  {
    "url": "assets/js/41.ae102437.js",
    "revision": "ae54f537f9c0c060c239cae235577490"
  },
  {
    "url": "assets/js/5.b22ab83b.js",
    "revision": "42da501bf6e6a5a45e2cc2c464c8a7e2"
  },
  {
    "url": "assets/js/6.35808d75.js",
    "revision": "0259e27b32ff1a84724a03f0626bc482"
  },
  {
    "url": "assets/js/7.37567c61.js",
    "revision": "b05673a0b7927d7f694ae1690d228c6f"
  },
  {
    "url": "assets/js/8.06347a57.js",
    "revision": "661157d6f86bba11b5aa470b056e868e"
  },
  {
    "url": "assets/js/9.7fe0256a.js",
    "revision": "5395da8b9f2232129a1cdb8b949f66b7"
  },
  {
    "url": "assets/js/app.24793fa2.js",
    "revision": "e2d71e331211e4df49513b3ca0f0122a"
  },
  {
    "url": "categories/index.html",
    "revision": "0ae76ebd47631dee94ed3ba7a0996144"
  },
  {
    "url": "countup.html",
    "revision": "d3023975ca89b208f53b224fa17af3c0"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "f46fc5959967b9ee929b3ad854627dce"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "c2b8a7ad82ce6b860b2d7461450857da"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "02370aed136d105297567d0f74fc39c7"
  },
  {
    "url": "css/index.html",
    "revision": "082eb8aace413c21de9c6504420a7e85"
  },
  {
    "url": "firstblog.html",
    "revision": "cbfa4488d8032f2f7f367757a17075c9"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "e2f4446e89ba1e971f90075cfbf326c0"
  },
  {
    "url": "html/index.html",
    "revision": "980dea0400414971668638df3b787c99"
  },
  {
    "url": "index.html",
    "revision": "638f892ded8725f6fdd36c8600f7ff80"
  },
  {
    "url": "interview/20201127.html",
    "revision": "9137fefc4f6165bf671c23a52660c3d1"
  },
  {
    "url": "interview/20201201.html",
    "revision": "3a8f884ad0832c2ebaffb97e38f33ead"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "263de64f01fa8a24cafb36992b603b6e"
  },
  {
    "url": "interview/index.html",
    "revision": "8ce4851aa88d4a3fcd1720d38d33008f"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "b472da8cfae83fd59b042b2383c3a285"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "110c2464ff3de8d34b9807143a5f8bf5"
  },
  {
    "url": "javascript/index.html",
    "revision": "25121abc9fe5ae3353e05d7bc71a8a07"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "033d2e455d6a593c9cbcdcc2ca0d5524"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "f349364d2e1a454ac52c7b9acda877a9"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "a2798042dc52a88aacad1f70e891caf6"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "8e532cf75cd8ea975de00a0d7ccb2e77"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "31e729b3aaa788a336bccb826a1fc2cd"
  },
  {
    "url": "LICENSE.html",
    "revision": "76a3e383a2332e75c3785ae8dfada7d5"
  },
  {
    "url": "quanxue.html",
    "revision": "14ec316f708c5c8e88e6b5d116e69ec1"
  },
  {
    "url": "tag/index.html",
    "revision": "1b1353c20235ba1f964e3b41109bb05a"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ef39d6b2071da8dd19f913cbc1f39a8"
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

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
    "revision": "2e613a66e6ed2cfde8a6cc232d65926e"
  },
  {
    "url": "about.html",
    "revision": "9c95fff41bbd1db8888d4187fb45c49f"
  },
  {
    "url": "about1.html",
    "revision": "341c5bad2f4a5a85b69b9ed552316e2c"
  },
  {
    "url": "about2.html",
    "revision": "3144195131ded199c48750aff8c169c5"
  },
  {
    "url": "about3.html",
    "revision": "b32e2a4ad9ab91b54fd4c8b974d1bea8"
  },
  {
    "url": "about4.html",
    "revision": "09e835ce6b2131d210abd88d300955bc"
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
    "url": "assets/js/13.46994e44.js",
    "revision": "1d74e9249069330a478e8dbbb96afc27"
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
    "url": "assets/js/31.3c051478.js",
    "revision": "6e0c1b091b3b448bde42b6c6b9b54a65"
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
    "url": "assets/js/app.ab1dfabf.js",
    "revision": "19c1890ee6a5d13a08e498a96019e0a2"
  },
  {
    "url": "categories/index.html",
    "revision": "3f6fa2f8d085cca46d9ee681884fdcbe"
  },
  {
    "url": "countup.html",
    "revision": "05e6c26c5fb860430e2c87e3b8e2a0c9"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "ffe0f6e5f12d349511555279daa70ffe"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "ce69771941484ca7c01edc05cc582895"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "cf8fd6bf80700c122e1b5e036bf9b878"
  },
  {
    "url": "css/index.html",
    "revision": "c9760af7ff46b1ea63f8a69e27118c61"
  },
  {
    "url": "firstblog.html",
    "revision": "a2430245697f5ca35b2f85111afaf483"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "92aab1aaad489126ba3a0c3e51802be0"
  },
  {
    "url": "html/index.html",
    "revision": "eaddab86c1598d0094516012477a45c6"
  },
  {
    "url": "index.html",
    "revision": "8cee519a10da9a632c3f8e69a9a87f1a"
  },
  {
    "url": "interview/20201127.html",
    "revision": "478ec101127a54bdc73d23ecf0589cb1"
  },
  {
    "url": "interview/20201201.html",
    "revision": "ae7e525155860748b52c360d1e5a20d0"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "281fa88b9c9a376c05690f1a9ff3db83"
  },
  {
    "url": "interview/index.html",
    "revision": "4269600500d3fe8ffe9606f5d6c93cd3"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "f28b7775c5eb1840af9cf9f0d890d387"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "d328a12aa517231496c515cba2941749"
  },
  {
    "url": "javascript/index.html",
    "revision": "5cb1087c5b761aa6b96895cc62650e0f"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "3916c3596e1e40dd48447543c26b66bd"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "2c00fb6243f46b66ba587e55fca30a25"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "3fe6bc1307f7862217687fdbe003f9bf"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "f5ae20e0213c25f218e8ed9b1ae0928c"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "a2449d9d1f4990b03991945fc1f08ef0"
  },
  {
    "url": "LICENSE.html",
    "revision": "27342826d085cfb7e9ceed564d073554"
  },
  {
    "url": "quanxue.html",
    "revision": "3b1afdfe571ffea4de665ecd5e8b1405"
  },
  {
    "url": "tag/index.html",
    "revision": "5efb8c6af915c6b27be71e5cedb0b176"
  },
  {
    "url": "timeline/index.html",
    "revision": "442ba29c23fa048ea0dd78c4fa7df317"
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

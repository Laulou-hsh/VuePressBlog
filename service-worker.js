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
    "revision": "6e39fa27a38fc764b89b42a18e2dc791"
  },
  {
    "url": "about.html",
    "revision": "816c05ae51a2efbc9efaa55d5f255531"
  },
  {
    "url": "about1.html",
    "revision": "a9236b536bdaad0006d4ea28fa75c1da"
  },
  {
    "url": "about2.html",
    "revision": "5e609debfc5d4ca1fa220739a25dc451"
  },
  {
    "url": "about3.html",
    "revision": "24e766146e474aa7a5ab67cabedbaad6"
  },
  {
    "url": "about4.html",
    "revision": "cc24336ed8cd79b1d10821805d5077e5"
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
    "url": "assets/js/22.462a148b.js",
    "revision": "daa974121c080c82ea4b7f266001e00e"
  },
  {
    "url": "assets/js/23.e8626964.js",
    "revision": "bba5f6fb7f5bb81cc397360c9dd12be4"
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
    "url": "assets/js/app.31c1e688.js",
    "revision": "bf508c103f0b6fd6dd5409a8eb825f23"
  },
  {
    "url": "categories/index.html",
    "revision": "fe616ba54a0eade926a85772ca517b74"
  },
  {
    "url": "countup.html",
    "revision": "3be0ecd02cdfb1656a7ba5c218e6eaed"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "20de356ee682e63601b70abdaf99cba1"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "a5724da70fcb11646d1b8da77989335f"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "10d8c1f3729b7ae7d4a94e3ea67e55ee"
  },
  {
    "url": "css/index.html",
    "revision": "789055d5599d65b478385a94733770f2"
  },
  {
    "url": "firstblog.html",
    "revision": "10c6aa9348cef3818ced271d12812fa2"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "5142a523d41960a137dac852a9c99ed5"
  },
  {
    "url": "html/index.html",
    "revision": "ef1bf075c8a43c1600ffc990c07587a4"
  },
  {
    "url": "index.html",
    "revision": "ffd7a7ecc01a1b49ab7d12e15f9d23a1"
  },
  {
    "url": "interview/20201127.html",
    "revision": "175929bf076ab5a6f3b7a0454e697139"
  },
  {
    "url": "interview/20201201.html",
    "revision": "2c46d8daec1654eb3d528215006aa001"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "d71f8157b8a8f53e25080039bc108397"
  },
  {
    "url": "interview/index.html",
    "revision": "74aaaa93a6635feb8fc6ccedaaa9853c"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "93701f2d68967c5c2e1ee03e550c3189"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "180bb22220415cfa76c83bda69aaac6a"
  },
  {
    "url": "javascript/index.html",
    "revision": "54e52d5db4cb3813e4e79d4b3fe8ad9e"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "006301b66ad3dc8994cdcd9aa22224b3"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "5fb002aaf359d017bef8b387ad965bc1"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "f8a067d561e8f836bf629813ac16234b"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "27e35927baac4a2778a0bf8d32e0177e"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "6fa55fe018102ba1e804481b90a0bab4"
  },
  {
    "url": "LICENSE.html",
    "revision": "30e5442edb60407f45cf9695c108bee1"
  },
  {
    "url": "quanxue.html",
    "revision": "9a0bf9a8124b5c08338683ce7f18ae79"
  },
  {
    "url": "tag/index.html",
    "revision": "8ae233f0b37e119d8bf3a6f967919edb"
  },
  {
    "url": "timeline/index.html",
    "revision": "88a68301b612df0d8651335b97b52e40"
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

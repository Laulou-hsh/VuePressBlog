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
    "revision": "fb1589a43fb855ec142f0520d931b06a"
  },
  {
    "url": "about.html",
    "revision": "acdf14b4ea65cace44d040908e666d16"
  },
  {
    "url": "about1.html",
    "revision": "aed91e1e2dcfb6108acbe6d4c9bdf60a"
  },
  {
    "url": "about2.html",
    "revision": "bcc7124321175542bcd643cf74c58591"
  },
  {
    "url": "about3.html",
    "revision": "792eeff7610cdf6728ee1410d6b1a8f1"
  },
  {
    "url": "about4.html",
    "revision": "1e94937bc472656114e09e58a4086453"
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
    "url": "assets/js/13.52b4f1b1.js",
    "revision": "a326214b56bc32d4e67b6b8ebcecc39d"
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
    "url": "assets/js/app.da7c0427.js",
    "revision": "1cc457dbd300207b3d2979434a32fa62"
  },
  {
    "url": "categories/index.html",
    "revision": "61f9a7314fea0ee0d5cf498f11c5bc29"
  },
  {
    "url": "countup.html",
    "revision": "744d1fb50e28dd2aa201465fee898d49"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "74622af6dc6074c68e9e4b86f6722bf9"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "09b47b9870dbb3e9fc17db468cdeb76a"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "b57f6af42dd7b03e3eb9d3d3cf6ae1a0"
  },
  {
    "url": "css/index.html",
    "revision": "72e6f1792c4130d9220b483181238961"
  },
  {
    "url": "firstblog.html",
    "revision": "1ce0e47c9e07e93e956160053d014635"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "cdccb6b803cb38418c3f250a27325b4a"
  },
  {
    "url": "html/index.html",
    "revision": "bb6de59311208101d187512b1a6a47a1"
  },
  {
    "url": "index.html",
    "revision": "5ac0a47d8b881b5699ba8b9b53b3e3ea"
  },
  {
    "url": "interview/20201127.html",
    "revision": "e113a6efd7fdb04fbe760df8a4d61f99"
  },
  {
    "url": "interview/20201201.html",
    "revision": "cf9a6508b30e056578095387b532d168"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "4706093810917cfa5a3dc8cf21235c4d"
  },
  {
    "url": "interview/index.html",
    "revision": "504d7e9f31a8f394e07352fd16f6b675"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "4079af627b25dbe3f31e1d477ebc28df"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "bbbb171cc22b65b840755e4726e9e120"
  },
  {
    "url": "javascript/index.html",
    "revision": "35f1f26324261a98a7b0f07a5f1ef0d8"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "9a872152679e78ff82e637484251f476"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "0214897d06fca43dd22d3785354736bb"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "b078ae066a2acc17134c919f07535f8c"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "e0aa0c7de4794c42f830349bc6ef7487"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "2fae1679170a28d6075984fc596a530f"
  },
  {
    "url": "LICENSE.html",
    "revision": "544218009f6d2559192505a69cc32487"
  },
  {
    "url": "quanxue.html",
    "revision": "3796b587f0d5c40e76c5eea2d2fde648"
  },
  {
    "url": "tag/index.html",
    "revision": "8130d867b6eececf7c3f0460b5fc7c89"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e0cf75021c40fa28c7696549295f72c"
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

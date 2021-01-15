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
    "revision": "ad510e2d000032de5ee58d1f04525844"
  },
  {
    "url": "about.html",
    "revision": "071c0a8e63f35c4b9b5229283318bebe"
  },
  {
    "url": "about1.html",
    "revision": "c85c5d6edc8dff9953b85f86959f97ba"
  },
  {
    "url": "about2.html",
    "revision": "0ee911655547c6bc7fe389cffef14286"
  },
  {
    "url": "about3.html",
    "revision": "e94e031b4f082c19f1a52073e515c33d"
  },
  {
    "url": "about4.html",
    "revision": "970df7c4d3d31955c50e636235f4c739"
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
    "url": "assets/js/13.0e5aba2d.js",
    "revision": "df775ae6b50c4ff8f229f89c6f4de9ae"
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
    "url": "assets/js/app.6a6c3497.js",
    "revision": "cb3dc22b00b41b11c1c3fcd43318b66f"
  },
  {
    "url": "categories/index.html",
    "revision": "3730fff8cd3f9cf846ea0a8d44456ef1"
  },
  {
    "url": "countup.html",
    "revision": "0f51ab4d8b6a0621076ccc457377a822"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "f131458e28168798ea69e41d1218ad30"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "cb60cf688e08480a9949ae53fa374493"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "42f5a6127303396152652fa21389917d"
  },
  {
    "url": "css/index.html",
    "revision": "af22abb21d153f2a421c37f7402bbb4c"
  },
  {
    "url": "firstblog.html",
    "revision": "711a583629b7b348dfeef7834b19e7e3"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "9910faf8997754f1a585c7ae19e75249"
  },
  {
    "url": "html/index.html",
    "revision": "0137fe204dbb268c547b6175404da46b"
  },
  {
    "url": "index.html",
    "revision": "36ee699eb7a71b596405ae5770655efb"
  },
  {
    "url": "interview/20201127.html",
    "revision": "1bddc4bdf3ed6eabaef6dcdfc32a02a8"
  },
  {
    "url": "interview/20201201.html",
    "revision": "334678b10f611541c9a2c0b942f2c692"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "421070f18f2117675fa45322993070ae"
  },
  {
    "url": "interview/index.html",
    "revision": "5b5f1c61b5361e40a8576a5caf3dc2d9"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "075c38c229715e8042b2f48222f6c791"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "3726d0ae780a01cd7f4ab2d1f3576ead"
  },
  {
    "url": "javascript/index.html",
    "revision": "2dd3da8b5aad4142463ed2728d313c70"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "c203a45ed4d259c85a9a4ab87bba32f4"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "1b238fa45aa89e93e6ef3d271c23ff35"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "9007a90f40b5a7b82bb40722137c8e0b"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "76d76a8c837ddea2a70c112e470b6a96"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "abfe25c1f2cfe6df1dd7fe3d58960148"
  },
  {
    "url": "LICENSE.html",
    "revision": "7285a243bfb97a7f0383fc31d9c3ade9"
  },
  {
    "url": "quanxue.html",
    "revision": "4207dadc4e6eebdb6bc7a509aeb90c50"
  },
  {
    "url": "tag/index.html",
    "revision": "918458470e94904181eb22ef8e3b0b00"
  },
  {
    "url": "timeline/index.html",
    "revision": "703a31adad4a12aa18e267f7f2ba9342"
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

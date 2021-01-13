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
    "revision": "cef40a600a6a1fb30e86978e12e51d09"
  },
  {
    "url": "about.html",
    "revision": "38c4ec1d17c9be386ce30806e81b157e"
  },
  {
    "url": "about1.html",
    "revision": "d2a5c782a3bd11a3b38e225e45805eef"
  },
  {
    "url": "about2.html",
    "revision": "cc3e80678051ff5671499005f667b121"
  },
  {
    "url": "about3.html",
    "revision": "21150a4b2e3f9e6ee04250e3dfe668a1"
  },
  {
    "url": "about4.html",
    "revision": "da3893eab9778f76f810ab165afa6e62"
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
    "url": "assets/js/11.d9cd70f9.js",
    "revision": "2de0623892a24c32390c66550d4323fc"
  },
  {
    "url": "assets/js/12.79ef8892.js",
    "revision": "7e909da790d144231e56f48b952d89e9"
  },
  {
    "url": "assets/js/13.ed76a0ad.js",
    "revision": "5074cac340733c96440717a479f963c5"
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
    "url": "assets/js/20.def8c706.js",
    "revision": "41594bc69bccac61e141ca1f62dc04c8"
  },
  {
    "url": "assets/js/21.73d1b57f.js",
    "revision": "5c4e81bb9d617563a532a4227db231b3"
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
    "url": "assets/js/31.f06d1398.js",
    "revision": "6b498138583a3e3528fe7a944c04e14b"
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
    "url": "assets/js/app.eb28d18c.js",
    "revision": "b96329e8f59d58bafe7496b0c44d681a"
  },
  {
    "url": "categories/index.html",
    "revision": "e6406fb4faeae33c585231cefc4788ec"
  },
  {
    "url": "countup.html",
    "revision": "8321eeefb3536d30ec7fd95148f348d2"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "46182424683614f4c4c9afece8626e77"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "bc4ae704f403c49f332b82eab375384b"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "9447c49be0f005a758d7ff7b9c28bbee"
  },
  {
    "url": "css/index.html",
    "revision": "bd7f1d24ac97aa18de2b95eae399d8e7"
  },
  {
    "url": "firstblog.html",
    "revision": "8001a6112550b385b11e22ef32990a04"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "04d1dda25a24b7a499f40db8bf5188da"
  },
  {
    "url": "html/index.html",
    "revision": "de396db719d1e1a72b7f656d52a87d51"
  },
  {
    "url": "index.html",
    "revision": "490f2933b112f4c743944af89be6944f"
  },
  {
    "url": "interview/20201127.html",
    "revision": "90dd0b95f83191de05823bf6bb2a28da"
  },
  {
    "url": "interview/20201201.html",
    "revision": "20fcb25d6cbed1e13aba1be93f78e1a4"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "6af92f57b3af662b869ff5c59ce55c66"
  },
  {
    "url": "interview/index.html",
    "revision": "c2adbc76da79ff3ac87bbad1f2e376b8"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "b97e7827ba435c283d927acdae945d30"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "834e6b33370332a454937b9f9244d5bf"
  },
  {
    "url": "javascript/index.html",
    "revision": "29e6fdd7055973d5629856a633431b90"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "00c7fe32aa2320801cf1a0e4cb18cdc5"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "ac1a3f610c23a1b072bb0037374a12cd"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "45a94448de67453478b772a3bb09f262"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "e14fc648278a9aaafcc5a752acbb9109"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "afd0da4edc06e58601b4d6dac80d2d6c"
  },
  {
    "url": "LICENSE.html",
    "revision": "7afd57f5feb950da71ce9ecc8135faf3"
  },
  {
    "url": "quanxue.html",
    "revision": "87b64b2f859fe0b89d7b56d53a7af450"
  },
  {
    "url": "tag/index.html",
    "revision": "09c24c83de8d8ec5d69f14d85731725a"
  },
  {
    "url": "timeline/index.html",
    "revision": "3b9b762c957ad07dbfd8f6a071353e72"
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

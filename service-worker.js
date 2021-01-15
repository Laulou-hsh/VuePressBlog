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
    "revision": "b09741ed9396fd9b0860311b7ad59a48"
  },
  {
    "url": "about.html",
    "revision": "a6760b10b33ac7ede8f874b3007db566"
  },
  {
    "url": "about1.html",
    "revision": "3c4fed34c7d6f279b0ad9be3edb9ba0b"
  },
  {
    "url": "about2.html",
    "revision": "39d2121a5356f05c386a0723337a5815"
  },
  {
    "url": "about3.html",
    "revision": "d34f55a9665725a344ad142208232753"
  },
  {
    "url": "about4.html",
    "revision": "e96e39d1680d2634f841ff28d793e9c6"
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
    "url": "assets/js/30.ac81c560.js",
    "revision": "24b1f0723769a4869ce1a76f7b595bd2"
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
    "url": "assets/js/app.87c467a8.js",
    "revision": "14c40235569c3ba5e802e23580ab28d3"
  },
  {
    "url": "categories/index.html",
    "revision": "670a3fc212686c000208969e09dbced2"
  },
  {
    "url": "countup.html",
    "revision": "944c23b9ebc644fd9baa3d0645ad29a0"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "55baebbcdd0f2afeff438d9c931cc75b"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "e4f0fe51adfb7855096edd9bb030cf35"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "1a42107f38bc0e394b81bfa41233e1df"
  },
  {
    "url": "css/index.html",
    "revision": "03715c0219835494cddd550d76853d39"
  },
  {
    "url": "firstblog.html",
    "revision": "7b17a6feb8e54083d1234a28fd3ffa2c"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "1655e2be9179f0d3d4ca22c063dba6af"
  },
  {
    "url": "html/index.html",
    "revision": "e3769759253731831ca09f29653e21d5"
  },
  {
    "url": "index.html",
    "revision": "d2009f992a17e7376de300d0044ddef0"
  },
  {
    "url": "interview/20201127.html",
    "revision": "58709a833a9a948a81d69387c3e35189"
  },
  {
    "url": "interview/20201201.html",
    "revision": "bfc48d153e62bcd994849abdc5ffc6cb"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "cad89b663c9953aacdfa87c45361615b"
  },
  {
    "url": "interview/index.html",
    "revision": "58754a08262cfb05e36ec0a0c3f7782d"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "377c82a24830d12ab683f5314fddef31"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "b1e4ec96d283ee53158668c92420ddb5"
  },
  {
    "url": "javascript/index.html",
    "revision": "4c3da2d355096aad74dc11bed51d4ea8"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "68fc87c1b2992bfae3bc52d8794582e3"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "ebb43fcff3e5cf4c0439f380c587893d"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "0b8bd6f9087e0e37c4b17bbb85d7f8df"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "30a0f0216a75d920fc8fe6c12d21d95a"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "3336c32def9eb84e693e75031e6cdf41"
  },
  {
    "url": "LICENSE.html",
    "revision": "5712ac968d710757de8350a3f8795539"
  },
  {
    "url": "quanxue.html",
    "revision": "0646f28ebd7e142bd207dc5f4c269ae9"
  },
  {
    "url": "tag/index.html",
    "revision": "51c8a8cbc0f6943f78c495cd040531f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "3118b08d214af9f69546aa1353c18e99"
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

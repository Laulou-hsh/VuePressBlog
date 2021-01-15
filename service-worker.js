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
    "revision": "92a5820c7128fccb3f6fafd263f07fde"
  },
  {
    "url": "about.html",
    "revision": "405591ccc1bda6620858a3277ee9000f"
  },
  {
    "url": "about1.html",
    "revision": "95c4c20a20a1e317b6c1b16fcf885faf"
  },
  {
    "url": "about2.html",
    "revision": "222756eacbe2d7ad57b970fef7d4d329"
  },
  {
    "url": "about3.html",
    "revision": "3751cbd401ea7117174a5689f8d3c625"
  },
  {
    "url": "about4.html",
    "revision": "fd0a6fa7aaa9de9936bd5b3ea6663b71"
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
    "url": "assets/js/13.df61fac7.js",
    "revision": "2c9f4cba27b70706624e50f2ab410b60"
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
    "url": "assets/js/app.9a713f05.js",
    "revision": "107bdb917d48a53ad6ea7d57537192fd"
  },
  {
    "url": "categories/index.html",
    "revision": "4f5326abce0fa74849cd621dd0e536f5"
  },
  {
    "url": "countup.html",
    "revision": "7483e1739925ba9c2edcacefa0aa1e95"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "ebdab98f2d3fdef494e33fc9bc8c18f5"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "80e0f612d1958402e9d416690cfb5fe1"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "f3aa8cc616175834975c7a83ecae5e6d"
  },
  {
    "url": "css/index.html",
    "revision": "78a6fcca4d3de06a3d20fc1011577bec"
  },
  {
    "url": "firstblog.html",
    "revision": "fdb01da3b234e03fd02d1dbe8438b002"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "125bca16bbf33bbd41c635bcea7cd396"
  },
  {
    "url": "html/index.html",
    "revision": "a4d55c70f6b9a0c9f16d25b89243e0cd"
  },
  {
    "url": "index.html",
    "revision": "61618bf5ac6c2cc131228af3c760d1c2"
  },
  {
    "url": "interview/20201127.html",
    "revision": "392e254d8bb4d06baa7ceec99e3d7b98"
  },
  {
    "url": "interview/20201201.html",
    "revision": "1278bf82239dd2753f6ec287dcab75d5"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "2ed512787b4d9ad7c59b24e95935e257"
  },
  {
    "url": "interview/index.html",
    "revision": "2be3791cc485f572f4cc5c5693599cc3"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "3236abc6cdbcc3ceb9ff5352c218ef7a"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "3d471093b568190527310a143eefdbc8"
  },
  {
    "url": "javascript/index.html",
    "revision": "2e56738c5d19785c78c335ca1c07211f"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "6cc877375f7b625a25aa00c88afc628c"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "74203e62be740b3f8bdefd4e35918031"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "5aa53228b28ae4fb4a624162c0416986"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "f8dd0d6db7777a02026957e9f2c02779"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "b7b7ac9cf277ebc1b6557fdced12fa83"
  },
  {
    "url": "LICENSE.html",
    "revision": "6659e7f7b6bec4858f4ef22ac78120be"
  },
  {
    "url": "quanxue.html",
    "revision": "d716d2da8af1edeb775cb27657f497fc"
  },
  {
    "url": "tag/index.html",
    "revision": "c1f05a73f49727e935ce1e1fee1d0a50"
  },
  {
    "url": "timeline/index.html",
    "revision": "1453b9909fd019c0dce0a7695d40e87b"
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

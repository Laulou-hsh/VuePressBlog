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
    "revision": "ff25fa6f470e7ae6a28aa21bd2662a87"
  },
  {
    "url": "about.html",
    "revision": "32386e87d5e6fac6e8956507c2678ea7"
  },
  {
    "url": "about1.html",
    "revision": "5bed6cde81d8aa24f34f83c15cbabbcf"
  },
  {
    "url": "about2.html",
    "revision": "95274b88beb2e897be6caba73321aa23"
  },
  {
    "url": "about3.html",
    "revision": "73caa97e09859b5f2f1c7fcb18fe51c5"
  },
  {
    "url": "about4.html",
    "revision": "9f5d9a249c36eddcf54d8a726c2ba554"
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
    "url": "assets/js/11.2b9b7583.js",
    "revision": "6cd0857dedea769a4032954887ae45ed"
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
    "url": "assets/js/app.b7075bb0.js",
    "revision": "0f98316987eb70943a5a4f1e9d282972"
  },
  {
    "url": "categories/index.html",
    "revision": "2679d8f5198c4713865b077412d22b28"
  },
  {
    "url": "countup.html",
    "revision": "fe1ec0a92ab82431ed0ac288ef4c79b0"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "c92ef2effdc0cad336da93a9d13e623e"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "352a025a732ff5baa63fd83570e27c44"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "e2ec486b8f7ae73e2e20af798671d511"
  },
  {
    "url": "css/index.html",
    "revision": "142712b8a02e0f1692802921d40b8b64"
  },
  {
    "url": "firstblog.html",
    "revision": "67c11bfcab03af08a7737bcaa6bdae10"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "4ed87677d9b303f7f27e4c2011f4b587"
  },
  {
    "url": "html/index.html",
    "revision": "a72f801740608efc8bbdc6374c5afbed"
  },
  {
    "url": "index.html",
    "revision": "371fe6d5e70babac1596a8c2bd09b485"
  },
  {
    "url": "interview/20201127.html",
    "revision": "6ac521d806808998f0f295e10fdbbd8d"
  },
  {
    "url": "interview/20201201.html",
    "revision": "d09203649f44190adef7c0303ccc5492"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "446001b8e1e52527ec7a7a5049211fef"
  },
  {
    "url": "interview/index.html",
    "revision": "17a1ed361dfe02d567f03424af17d14f"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "5acd046c1e20cff7c81c79be860dd600"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "15ebe858f0f946f2b13dae819bb153e3"
  },
  {
    "url": "javascript/index.html",
    "revision": "8aee6496cd1315c79403a5ca5345bcea"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "9b3c01ec223cd89a667984571bdabf59"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "d08c4a00804263157a65d154390a0415"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "37d7efc6c5b1d7202d00ffe55f7a2ef7"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "e7a557f42cbcb89c1d93c2a2758d09ab"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "adf4f356a4e0a048cd7ce6bcef527971"
  },
  {
    "url": "LICENSE.html",
    "revision": "8387abf3ff115bb323e9b43e6f275a87"
  },
  {
    "url": "quanxue.html",
    "revision": "0a90ec0c1b60f7201c12fd4f84ef25ff"
  },
  {
    "url": "tag/index.html",
    "revision": "a2e05a12acce0bbd4540d74ba2002bf5"
  },
  {
    "url": "timeline/index.html",
    "revision": "08d90021ab32116d9aaca81e1fb09c97"
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

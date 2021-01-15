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
    "revision": "a9884b24453dc99d2b1d23816d2f4d26"
  },
  {
    "url": "about.html",
    "revision": "a4c1b9c5dd8a70c1a02a5d693eff02fb"
  },
  {
    "url": "about1.html",
    "revision": "2a39e3594c6072986d77926a2f0f5e07"
  },
  {
    "url": "about2.html",
    "revision": "e23812b94c482159159a33846a39bcf7"
  },
  {
    "url": "about3.html",
    "revision": "7376ce933fec511383c679cbea40dfe4"
  },
  {
    "url": "about4.html",
    "revision": "1eda20b6efa13f2b65905d2c255fe6e6"
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
    "url": "assets/js/30.cba124ae.js",
    "revision": "7225d7aa8fc2cc7539b8d6b4d9b1ae9f"
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
    "url": "assets/js/app.d03fbe81.js",
    "revision": "9e67c5a7fe7fc138eabe8361d7ce4281"
  },
  {
    "url": "categories/index.html",
    "revision": "5e5c8295f1fd08812e63fadf316ce621"
  },
  {
    "url": "countup.html",
    "revision": "464e3c75746f1f967ae80aa2ff2e2753"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "22c75acd949308a080219d22b3b22fda"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "68adc61cdb9a70e02e38c1c9e3d655fa"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "75b42d21d5f05baebd057839e292b949"
  },
  {
    "url": "css/index.html",
    "revision": "40b6f76b0f6532587b9ad5c519728549"
  },
  {
    "url": "firstblog.html",
    "revision": "cb6468c65727341f05998dff0720b224"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "cbb547520a74b00dd6a867f1e666c034"
  },
  {
    "url": "html/index.html",
    "revision": "15efb608880772fe6e37d43b652350eb"
  },
  {
    "url": "index.html",
    "revision": "0c7df8dbaeea68ae793803a067b968ae"
  },
  {
    "url": "interview/20201127.html",
    "revision": "ce1079c39bec86cd5e86edf149469288"
  },
  {
    "url": "interview/20201201.html",
    "revision": "f8ad454f543815438b1685aaa89f9319"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "df7d5d07b3100c094b58bb395b1667ff"
  },
  {
    "url": "interview/index.html",
    "revision": "a9d92f58db7f5b3531169002f93978db"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "37e41faf97d5257c7e69b716da7d01bc"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "405a96aa915445cc56d9265fec90e284"
  },
  {
    "url": "javascript/index.html",
    "revision": "8a42700f63d10e8fcf5c4dd2dafd0b77"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "1046cf106a279c03667bf2d92f01436a"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "8465f70e551986a81bda5f79c99cf451"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "845e9a4e48d641fd0087653663e16a4d"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "33098d39da2ab2a2625764cf6c43a900"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "d4ea8abec3430009ccf226f97165984f"
  },
  {
    "url": "LICENSE.html",
    "revision": "b96b86b7d80a937be97549f338750f42"
  },
  {
    "url": "quanxue.html",
    "revision": "71451f89b0626b0970ebb6ded28be4e1"
  },
  {
    "url": "tag/index.html",
    "revision": "d126bb6adecef43a9b247d3944d926b7"
  },
  {
    "url": "timeline/index.html",
    "revision": "931b77666a5b4ece82ef6ee6cc0c68ee"
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

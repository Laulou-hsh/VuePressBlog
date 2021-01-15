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
    "revision": "2ac87b87b637df7076dbceb3b3c6c2de"
  },
  {
    "url": "about.html",
    "revision": "ad966ea7514c6a4aee364dc5dd553131"
  },
  {
    "url": "about1.html",
    "revision": "2b09ef47d78e0c567796cfd1833f3429"
  },
  {
    "url": "about2.html",
    "revision": "ca5c97f2bb2201e3158ad4b4e5e30889"
  },
  {
    "url": "about3.html",
    "revision": "81deff9e4e25aacf71ae0a9388b18243"
  },
  {
    "url": "about4.html",
    "revision": "773fb5444665acd7ed8883fa741dfcb7"
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
    "url": "assets/js/30.5d417f89.js",
    "revision": "b5c2fc14c4163adeeb8fcfb507d920a0"
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
    "url": "assets/js/app.535087e6.js",
    "revision": "c2dced2966376a3375ac3f0d032edbc2"
  },
  {
    "url": "categories/index.html",
    "revision": "9c292c48664c23a7f1c6e1ac70dc3ae9"
  },
  {
    "url": "countup.html",
    "revision": "ce2807dd78e507e26ab0faee9f829b0d"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "7244b7ad1bc7bee611824f27eda10bf6"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "7eb6d658247ea91a6397439d6b652b15"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "a67f0d5e825a6b97bf30ba9abdb521ea"
  },
  {
    "url": "css/index.html",
    "revision": "21c33a2b709446927dfd502254ddf362"
  },
  {
    "url": "firstblog.html",
    "revision": "1c6c40f0e45f4352655942197d3e915c"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "7dc8dec79f770ef4ba77a8895c9b3b59"
  },
  {
    "url": "html/index.html",
    "revision": "dc77cbf422e1c264cd34d9fe33ac0c26"
  },
  {
    "url": "index.html",
    "revision": "685375127fb71e32b73739bcce7f3993"
  },
  {
    "url": "interview/20201127.html",
    "revision": "b69641a53c4a7472229700a8536434d2"
  },
  {
    "url": "interview/20201201.html",
    "revision": "a2e0d7f8e949dc836b2d3b384423dd70"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "2c7e0222775d563eb66e65a774f11891"
  },
  {
    "url": "interview/index.html",
    "revision": "509b0a2fa524f7c738941398228cfa28"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "42cc29f7cc650822b2b89d765fdc4345"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "20bbdba85418273ae828cc31adfa14b7"
  },
  {
    "url": "javascript/index.html",
    "revision": "ce415101ffe58611998c676abd21c89b"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "8e169ab37999053e0a92e1298147e81d"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "772b97268051be4f219c3841f7d4f29d"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "04f8be05aa625153c5fbd93b99b63ffe"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "197914da27c3240f81ca60391b01cbde"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "82e41cc6b42e320915a8c57ef11a8564"
  },
  {
    "url": "LICENSE.html",
    "revision": "1b527a4f38e014e148b6886b6145dbe7"
  },
  {
    "url": "quanxue.html",
    "revision": "730d714033839709c6f37aee8ccbd0dd"
  },
  {
    "url": "tag/index.html",
    "revision": "13eb27f0580b25268c78a483325b107a"
  },
  {
    "url": "timeline/index.html",
    "revision": "fbb13a98cbb93d1045ec0923343a1977"
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

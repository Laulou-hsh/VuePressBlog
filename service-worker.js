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
    "revision": "308b128804f67ab98eebaaaed78be3f5"
  },
  {
    "url": "about.html",
    "revision": "9afa23323758bc5daa31bf39524f00a1"
  },
  {
    "url": "about1.html",
    "revision": "279f9f78fd8df00878d884b93755abfd"
  },
  {
    "url": "about2.html",
    "revision": "d28f375f19bc8588502c7e998c5e3d5a"
  },
  {
    "url": "about3.html",
    "revision": "8423918a71563383a5ea8cf11cfcbacc"
  },
  {
    "url": "about4.html",
    "revision": "7f08e20c6bd14951d64660c264bf502a"
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
    "url": "assets/js/13.01e4dbcf.js",
    "revision": "0a938ccb2ddda7027eb4d4b36b209a67"
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
    "url": "assets/js/app.0423f120.js",
    "revision": "53799cf533143b4a0c15ede3a2258b11"
  },
  {
    "url": "categories/index.html",
    "revision": "f14f660392e94e87474b5032080b1801"
  },
  {
    "url": "countup.html",
    "revision": "c5f15916839915e7fc4dfc6be31d662e"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "1aef4b08da57751e72622cd82f147cc1"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "9f67fd3380d4bc5f0001560f14ace0c0"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "5a075f36099968746020f2cb24a88c0d"
  },
  {
    "url": "css/index.html",
    "revision": "e6ec3a3f3f4dfe84b77bf1e3a6141fd3"
  },
  {
    "url": "firstblog.html",
    "revision": "9b6ea19b5d010f373678dee0ec9bef90"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "f5d1dd622061a206ada33c2b33a91d77"
  },
  {
    "url": "html/index.html",
    "revision": "a8b2f3346bc0a64f3dfd9b4e22ef1ca8"
  },
  {
    "url": "index.html",
    "revision": "4e2898452a769d9704d3d355fd7584d0"
  },
  {
    "url": "interview/20201127.html",
    "revision": "5b4e8931fb87373c36de29889c59cb05"
  },
  {
    "url": "interview/20201201.html",
    "revision": "2ac86f5fc8b6e3f895b627658ab09314"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "70998047c2bf063ccb7e234e4269b37e"
  },
  {
    "url": "interview/index.html",
    "revision": "69ad8fbee4fcf730c3c32dca510efaf8"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "ebf9f29667c293853da960f2e218c853"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "f779ec16cc5d5825a034a2f804fc4908"
  },
  {
    "url": "javascript/index.html",
    "revision": "cfe9d29067d3b96fa91ebb456781dc45"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "b06791c9c96c3ba89f669ca67e38b68d"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "c473024e33d8dfc2c922fc2af87cf382"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "72a048d2dc4d1b6bc5fa9ff34a00acc0"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "1ab0bd3cb1220dc27b7f1b817de4801f"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "d6db838b8429e36abd080dcb6325b7c0"
  },
  {
    "url": "LICENSE.html",
    "revision": "5fd91eaacd65a38b48835edd03007e7e"
  },
  {
    "url": "quanxue.html",
    "revision": "ff2b7517ee0555eee91f99c583f440ae"
  },
  {
    "url": "tag/index.html",
    "revision": "77b09c61ed103b8b088d56b3c37e94db"
  },
  {
    "url": "timeline/index.html",
    "revision": "b8b66336e63d22cadf179d60c8efa3e0"
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

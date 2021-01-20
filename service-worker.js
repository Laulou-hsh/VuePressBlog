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
    "revision": "d9498f42f8453ed4194fe4b26608635d"
  },
  {
    "url": "about.html",
    "revision": "8b5816e64c4a167357730dcfa2076afb"
  },
  {
    "url": "about1.html",
    "revision": "de2979c0996fc01e90b33b7ad0b45ea7"
  },
  {
    "url": "about2.html",
    "revision": "87f2df390a2a5ff9e9790565a80f99f6"
  },
  {
    "url": "about3.html",
    "revision": "cd2f9ff39ade8ab812d2aae98dda701e"
  },
  {
    "url": "about4.html",
    "revision": "149edf7f635cf68e504e3fead9170b47"
  },
  {
    "url": "assets/css/0.styles.54b04217.css",
    "revision": "8ca5b69088ff0f598639379dc53fb7c2"
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
    "url": "assets/js/1.9963d889.js",
    "revision": "0a81aa5117226f2c395727816db88621"
  },
  {
    "url": "assets/js/10.b50a428a.js",
    "revision": "73f5c7c9870f86978ca823318b8df02f"
  },
  {
    "url": "assets/js/11.7539951c.js",
    "revision": "5e46833fb1cfe6b4bef051cd645842d1"
  },
  {
    "url": "assets/js/12.eceb907e.js",
    "revision": "7340090432961d664548332fc5819e31"
  },
  {
    "url": "assets/js/13.d6df43c7.js",
    "revision": "7b6d1c51bf18e447cefa144ceb4b238e"
  },
  {
    "url": "assets/js/14.aad87f48.js",
    "revision": "534ca8975d6f6a58fbcf96276597d783"
  },
  {
    "url": "assets/js/15.d0670304.js",
    "revision": "f3cf57a043748fabd011df511fae83f3"
  },
  {
    "url": "assets/js/16.41bc7646.js",
    "revision": "6a7874abe16cd88ed03bb918693be08b"
  },
  {
    "url": "assets/js/17.8520c5f0.js",
    "revision": "5cdaeb1b93845d22057ec394c6fe6a11"
  },
  {
    "url": "assets/js/18.7d6570b1.js",
    "revision": "b84053ff57ad5ac90b127d18eb38d29b"
  },
  {
    "url": "assets/js/19.ff29467d.js",
    "revision": "18da29c8a14b2c9a62aa0231f35991e6"
  },
  {
    "url": "assets/js/20.57912b53.js",
    "revision": "e3540b8ebf30f69d12e5876ff8d69012"
  },
  {
    "url": "assets/js/21.060047e3.js",
    "revision": "0d24583a379001caf2e57074713e925d"
  },
  {
    "url": "assets/js/22.ccf1fcd4.js",
    "revision": "1af493a33dcfe2bf447672d145950e7e"
  },
  {
    "url": "assets/js/23.64181120.js",
    "revision": "5f761aebedc4818dffb33fd8983d2318"
  },
  {
    "url": "assets/js/24.af258897.js",
    "revision": "c5d53d50c1cf98f7164df7d3fe9c3e68"
  },
  {
    "url": "assets/js/25.7ef67f2b.js",
    "revision": "efdbabd58b5db26f707ffdf8e168c3c0"
  },
  {
    "url": "assets/js/26.8e8db492.js",
    "revision": "ee32d8b08b87ef035823322a8a94a258"
  },
  {
    "url": "assets/js/27.941b7f7b.js",
    "revision": "4e5f34b1e3eee2500f68af3625148c9e"
  },
  {
    "url": "assets/js/28.e414a7cb.js",
    "revision": "dffc05475a215b0dfba69b81aa12be27"
  },
  {
    "url": "assets/js/29.398c749f.js",
    "revision": "082196a0cbe986207b43fcfc2bb166a5"
  },
  {
    "url": "assets/js/3.dc070e23.js",
    "revision": "b4fc9f7b700e46a25e3973b02382f472"
  },
  {
    "url": "assets/js/30.9af0f9f8.js",
    "revision": "987e0be6ef8c105c0a0c2546b075ffdf"
  },
  {
    "url": "assets/js/31.9d385561.js",
    "revision": "2d7960aee29d2912567867e9be14e3e4"
  },
  {
    "url": "assets/js/32.17416cf3.js",
    "revision": "68c5073126360d4751d1c35c9096bada"
  },
  {
    "url": "assets/js/33.0a3ff252.js",
    "revision": "7309480a93f110c3e73f316a5ae7bf05"
  },
  {
    "url": "assets/js/34.50f1433d.js",
    "revision": "e8ae2b2bb7f5c7b9fef66d29fb7bb5bb"
  },
  {
    "url": "assets/js/35.2e2b1090.js",
    "revision": "8c3020831dca8ae3d7c6395cd88416cd"
  },
  {
    "url": "assets/js/36.c96d9b54.js",
    "revision": "45bfa6b69d11861045adfacb27b797a4"
  },
  {
    "url": "assets/js/37.16e9491a.js",
    "revision": "659dd20ac01315c3ff1e61d0ebbc2018"
  },
  {
    "url": "assets/js/38.26d9f7b7.js",
    "revision": "535e4d1fb5bcc9cb310ace6db96f5255"
  },
  {
    "url": "assets/js/39.8e9e0a4c.js",
    "revision": "3ac48e663e724d1af54c37cc0614abb2"
  },
  {
    "url": "assets/js/4.f58688df.js",
    "revision": "fabe34c6837f832dddc1e3ad1d2e4c0a"
  },
  {
    "url": "assets/js/40.71d8cfe4.js",
    "revision": "cb6e61fb321a726681fbf8f0dda771c9"
  },
  {
    "url": "assets/js/41.cf2f5f30.js",
    "revision": "2d7401c0e6393662c36740b948adca07"
  },
  {
    "url": "assets/js/42.b0c0043f.js",
    "revision": "674f59f7c50c71db03a7fc9be868e303"
  },
  {
    "url": "assets/js/43.74605a42.js",
    "revision": "8a70afa7ef4060c8aeea6c015b81667e"
  },
  {
    "url": "assets/js/44.e0b73eae.js",
    "revision": "602113855f883524cf70c16d31f5a2ea"
  },
  {
    "url": "assets/js/45.aaf34ec7.js",
    "revision": "486272c2ffc00a498f059ec01e250048"
  },
  {
    "url": "assets/js/5.5b5f27c4.js",
    "revision": "140a0ba6315ebe1f53aea8db6c24e984"
  },
  {
    "url": "assets/js/6.091c98da.js",
    "revision": "a16b9039056c46e1b2762bfbf17de845"
  },
  {
    "url": "assets/js/7.5642e99e.js",
    "revision": "9244e11d1703f76c5cccef2005ad466d"
  },
  {
    "url": "assets/js/8.1c7b13d1.js",
    "revision": "63dd7341dae7c1736f60e5e653a1a15f"
  },
  {
    "url": "assets/js/9.e305e520.js",
    "revision": "65b8d32fc44442d61d15a9c81887d4d9"
  },
  {
    "url": "assets/js/app.31edd3a6.js",
    "revision": "070a58ca154623609f029bb74affc1cc"
  },
  {
    "url": "categories/index.html",
    "revision": "05e66020b4d8867affef59a92d6385b2"
  },
  {
    "url": "countup.html",
    "revision": "9d07ead04eaf03ff983c560cb50eb540"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "902b3ff87f9e377ed361f103ee8c6d91"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "71b6dc8f9178c576d5bed54f9fea1fb8"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "fd4de1fc31cce830712adeb08b63e513"
  },
  {
    "url": "css/index.html",
    "revision": "171ebae9470657bfdc72a1aeebab696a"
  },
  {
    "url": "firstblog.html",
    "revision": "d9fdb6c55452265355fd34a1df01b792"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "222cdfd08847a1f25339f6d685c140c0"
  },
  {
    "url": "html/index.html",
    "revision": "197c880374448ec0b047459e909596eb"
  },
  {
    "url": "index.html",
    "revision": "59416fcb9eb25540c24de1ca6e0c259b"
  },
  {
    "url": "interview/20201127.html",
    "revision": "50cd8f67d4cb0b92ebc46d82dd704446"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "934de66a7319b659b6b767ca8b5a280b"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "66377f22525ce2e1409baf661d0760e9"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "4a675feb2878205053895e3c6565462a"
  },
  {
    "url": "interview/index.html",
    "revision": "575ffdd48fc3e17814cd6e82cc84ee27"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "854728f016bca78be7bb01d78c325f58"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "6bfd54fb1cbd3d1fc6ccebb483b434ad"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "8865a00ede2e299b6f9f5045a8d86bc1"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "e27d5101287ba83e017c56c0f8f1708a"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "80c6f7f7942f25a499e213cc1ee42cd4"
  },
  {
    "url": "javascript/index.html",
    "revision": "95298c684c7d9ad576530567658cf2bb"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "d1f1eaaa40c6810958579e3c33ced5f7"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "2308d1f44ce198f95efd9747d5c6c7ae"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "45718f4d074871c3dbbcab2671a95024"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "d489b01f5534cffa59bf903c58f4581d"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "47f07717ab5d667e63fbe110cf320b0c"
  },
  {
    "url": "LICENSE.html",
    "revision": "e599cf10f73dcc858d790540a007aa3b"
  },
  {
    "url": "quanxue.html",
    "revision": "8aa2a2ef8ff1873e5a331040d2ff1788"
  },
  {
    "url": "tag/index.html",
    "revision": "31461481499342e85aab37962d431a2b"
  },
  {
    "url": "timeline/index.html",
    "revision": "d60a15dd12b6446c53d9a3d9b3158d8e"
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

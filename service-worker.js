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
    "revision": "c04042510183fc3b69ff2a2a3a7303d3"
  },
  {
    "url": "about.html",
    "revision": "66454277d6455fd598b2583ff95c97ca"
  },
  {
    "url": "about1.html",
    "revision": "d017088616f91218500bb6712922e18a"
  },
  {
    "url": "about2.html",
    "revision": "b9c9e576d3df4e64c4c765bf6f6ff50e"
  },
  {
    "url": "about3.html",
    "revision": "e77b62847bedd8ba6b66c5141a18753e"
  },
  {
    "url": "about4.html",
    "revision": "81e80251feb6db2ce1d5aca947da5eb7"
  },
  {
    "url": "assets/css/0.styles.6516f46b.css",
    "revision": "ef7e273c0eaa4b4057379041ad202f2e"
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
    "url": "assets/js/1.9e43b041.js",
    "revision": "7e483b497a878a6f11954aea6f25e54c"
  },
  {
    "url": "assets/js/10.2c03e28f.js",
    "revision": "fef0ae468110a071e0b0b6d3d24f3aa2"
  },
  {
    "url": "assets/js/11.c7941105.js",
    "revision": "00b7a40e88b4d883a31baf1485f04121"
  },
  {
    "url": "assets/js/12.6bc37225.js",
    "revision": "a34e6dda5a04f7a14ad510d6313e74d0"
  },
  {
    "url": "assets/js/13.c14a8a0e.js",
    "revision": "a8f1b33113717a5f26838034749abd7d"
  },
  {
    "url": "assets/js/14.83d26705.js",
    "revision": "fc8e85db5de1650f59bddb435332e590"
  },
  {
    "url": "assets/js/15.94195f61.js",
    "revision": "b051c1fa2f783ed6b0719106b2f9efc7"
  },
  {
    "url": "assets/js/16.17b25e62.js",
    "revision": "818d4f2a6f4df14ccf4ada70045eb482"
  },
  {
    "url": "assets/js/17.5752c525.js",
    "revision": "5d5c8ee5db40c2c6c5fce6e12b3397ed"
  },
  {
    "url": "assets/js/18.550a71f8.js",
    "revision": "371cd12c9ac548731df9c646b61edeca"
  },
  {
    "url": "assets/js/19.549f1b3c.js",
    "revision": "a3083a594ab7e0445c76173b7974dd49"
  },
  {
    "url": "assets/js/20.6706d2be.js",
    "revision": "8de27cc012005eed3da6bb11e60b1ebb"
  },
  {
    "url": "assets/js/21.5de4fbd3.js",
    "revision": "90f764e69636aad66f49b6e7fdeed64a"
  },
  {
    "url": "assets/js/22.a78c5310.js",
    "revision": "ca02af9f715f8f75e5b2a99655a641a7"
  },
  {
    "url": "assets/js/23.76d9e54e.js",
    "revision": "9a17409b0e8aa046aaec018117519152"
  },
  {
    "url": "assets/js/24.b3f694b8.js",
    "revision": "618a3b9510b31ca34cb9bcbe3b8a32cc"
  },
  {
    "url": "assets/js/25.72ce07ea.js",
    "revision": "ccc7b4758bcd9c643c7d33891e658b17"
  },
  {
    "url": "assets/js/26.b68f148a.js",
    "revision": "7635080b5ed5e86f2ee385bb6156d86a"
  },
  {
    "url": "assets/js/27.c46e6c99.js",
    "revision": "fbb47efa0c65d820436d70918951ebca"
  },
  {
    "url": "assets/js/28.e5226d70.js",
    "revision": "aeb1ac7dff049edd87c020393b2b501a"
  },
  {
    "url": "assets/js/29.1e3899dc.js",
    "revision": "aad39f9910c650b8909395434cb68c2d"
  },
  {
    "url": "assets/js/3.97d419cf.js",
    "revision": "e5328219aadb0e99a1702f38447d134d"
  },
  {
    "url": "assets/js/30.b93751ae.js",
    "revision": "900ef07383bdaa0eac33736922023685"
  },
  {
    "url": "assets/js/31.e30bd897.js",
    "revision": "35f28375e8809c9e804183989af39856"
  },
  {
    "url": "assets/js/32.52fb1a7d.js",
    "revision": "7931cf3a43f518327bbb0f1a2b624890"
  },
  {
    "url": "assets/js/33.9f44cdc3.js",
    "revision": "edd361e2cac81dd32076b48456bd30dd"
  },
  {
    "url": "assets/js/34.8e241ac6.js",
    "revision": "8195102adebfc40eac78307ca929d9c1"
  },
  {
    "url": "assets/js/35.5790d842.js",
    "revision": "eab59c6cd760a7f3e910de839d3ff1e3"
  },
  {
    "url": "assets/js/36.48109351.js",
    "revision": "d0abad15bcba99ef365780fbf85e603a"
  },
  {
    "url": "assets/js/37.66a08089.js",
    "revision": "4376c9d2da7317c798a6721c319518bc"
  },
  {
    "url": "assets/js/38.b2715e94.js",
    "revision": "4f7f73da31aaa9dd7e9c338f93393cce"
  },
  {
    "url": "assets/js/39.05eaa3f6.js",
    "revision": "339b47d947955ae6cb28a2904f6218f5"
  },
  {
    "url": "assets/js/4.edff1d20.js",
    "revision": "de98993007060480451496b745ac8dae"
  },
  {
    "url": "assets/js/40.639b654c.js",
    "revision": "8f96f7af2ab26201f8bf3da89a520ce2"
  },
  {
    "url": "assets/js/41.0daba8ef.js",
    "revision": "f1ccf3761bb4bb91e54d1e6a5dabd070"
  },
  {
    "url": "assets/js/42.d5e8e738.js",
    "revision": "1999190d502fc0c98d77022bd134fb73"
  },
  {
    "url": "assets/js/43.f014084b.js",
    "revision": "f31093cdce9fcbf343ed1b145cf8614a"
  },
  {
    "url": "assets/js/44.148966d5.js",
    "revision": "347363b496441e370b612115c67d0fd9"
  },
  {
    "url": "assets/js/45.a7f09ffe.js",
    "revision": "03aa470b43a274bbc52bd54ecf3d4e77"
  },
  {
    "url": "assets/js/46.6cc88b4d.js",
    "revision": "53e4e483d36423b10c3cee36e89dd6f0"
  },
  {
    "url": "assets/js/47.e50e3141.js",
    "revision": "1cb5118e025356b93730cc7a5442f933"
  },
  {
    "url": "assets/js/5.a1f37b2b.js",
    "revision": "216633a09c215a68a9f29e77670c0b72"
  },
  {
    "url": "assets/js/6.34cab058.js",
    "revision": "6977e4521586efbcc3da0f59994b7982"
  },
  {
    "url": "assets/js/7.243b55ae.js",
    "revision": "fde4c932337715cd4fa7d166402d32d7"
  },
  {
    "url": "assets/js/8.8a4b59f8.js",
    "revision": "ce148f5650a17026cd09586e52818a5e"
  },
  {
    "url": "assets/js/9.8e1c11fe.js",
    "revision": "ca6a712bb5eb4a13f8249c9befcabdfd"
  },
  {
    "url": "assets/js/app.3ad0fe80.js",
    "revision": "35b9faf597b69fce9cc252e4ff1f35a7"
  },
  {
    "url": "categories/index.html",
    "revision": "495bb0a48b3f586e55106b023913531f"
  },
  {
    "url": "countup.html",
    "revision": "b923968c99422621b8623acacbb24e26"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "4df501bf5f8a83d2084f839816d798c9"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "165e65157738e9c06ac9a6fb2139263e"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "7fcc9ffcadaf36bbe57fc9a61b1f8174"
  },
  {
    "url": "css/index.html",
    "revision": "e046db04650f51eeb6dd3f6e60a226d4"
  },
  {
    "url": "firstblog.html",
    "revision": "16d8e472cf39504188edf032b4361d5e"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "e4aa0702b5efc244c354289b35d5617b"
  },
  {
    "url": "html/index.html",
    "revision": "c430f711e7731c18c0cb692504892523"
  },
  {
    "url": "index.html",
    "revision": "6a3160a978bab58a8bd689c3e0691781"
  },
  {
    "url": "interview/20201127.html",
    "revision": "516cf53d8b0a9a4f6b04a01460076923"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "3fa7df1db9891ce9b09373e3d90d202b"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "1befd358d3196acddff99f951f791df3"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "ed50f70eb2625b308e9eaea3aa14ea91"
  },
  {
    "url": "interview/index.html",
    "revision": "3005a1fd9c12048108156d9b2ac01b75"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "449208b8a597df487240236c31ff2f84"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "57e38e7a09075d73d0ed5a6a512b6852"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "cc14546df92f11a0aecd8d288756f742"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "ae0d312fda60635e890152bd1e53c032"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "a1d626475858504dd663ad9009d02af4"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "93a3a48723a035ebd542da2ec7cbecf1"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "ac22116f1c0be8cfa1c32b8e75a23158"
  },
  {
    "url": "javascript/index.html",
    "revision": "1bf25d09d13c67810558cec5cd428248"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "a2b4d6c9aa35bd00e784c9bb9edbf057"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "5c5693e6adc2d0bc6d210598827c92f6"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "777a5b80b564c4330581bb5a92006793"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "6cc6b4ba269e8500b2d1aeecc1fc5be2"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "07c07491e6cb55874a2824a18db16781"
  },
  {
    "url": "LICENSE.html",
    "revision": "a25f66181844a27f98b4e5fc155c2e78"
  },
  {
    "url": "quanxue.html",
    "revision": "78016476ff31f8be093badf3c10d03b1"
  },
  {
    "url": "tag/index.html",
    "revision": "d1c45725d177f7835a350946dcd56d6f"
  },
  {
    "url": "timeline/index.html",
    "revision": "b2d263c537a681013aef1d6d3af33606"
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

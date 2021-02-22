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
    "revision": "7000b24bb7f45811afece9be57e89748"
  },
  {
    "url": "about.html",
    "revision": "7ea39c4988c87bb262f48670157e7aca"
  },
  {
    "url": "about1.html",
    "revision": "b832cfa50d3a16bf177aeb5c55aef8a6"
  },
  {
    "url": "about2.html",
    "revision": "6900e589c880bc80eafd9d06187c2fdd"
  },
  {
    "url": "about3.html",
    "revision": "c935e90e6b9f01f69cb71e831871c28f"
  },
  {
    "url": "about4.html",
    "revision": "295e5d10bd5f678201ec2520f53f05d6"
  },
  {
    "url": "assets/css/0.styles.4b3d9abc.css",
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
    "url": "assets/js/1.b29fcbfa.js",
    "revision": "610ac344dfa8caf56921ccbaafb22b52"
  },
  {
    "url": "assets/js/10.c32beba5.js",
    "revision": "3452022fa3b2e0ce0b40f2849f39876e"
  },
  {
    "url": "assets/js/11.08d3596a.js",
    "revision": "55a6e706c880dab95aeec1e3aa6a610d"
  },
  {
    "url": "assets/js/12.6fd9f06f.js",
    "revision": "6aa25af34fea9a308656e25c84ae8ca9"
  },
  {
    "url": "assets/js/13.90b7c5e1.js",
    "revision": "2259c1f138083232d9afd40ac35b7711"
  },
  {
    "url": "assets/js/14.c9f86bc2.js",
    "revision": "b62557bbff50232aefb7bd781524a406"
  },
  {
    "url": "assets/js/15.e9623c90.js",
    "revision": "87e98cacf629faa47dab441bda24f153"
  },
  {
    "url": "assets/js/16.a02f8421.js",
    "revision": "6ac5267f46b1b1761f5f12794aa26403"
  },
  {
    "url": "assets/js/17.99f4ca32.js",
    "revision": "a0e227204807ba02561c4f103c0d7c4c"
  },
  {
    "url": "assets/js/18.30862ea7.js",
    "revision": "7ea343c9ce5b73780065b68603e497cd"
  },
  {
    "url": "assets/js/19.31f042dd.js",
    "revision": "b38cfdaf0f8d818ae15a1c1d69349f92"
  },
  {
    "url": "assets/js/20.f2a04599.js",
    "revision": "27305f92bf082f40c8c85aa988d31511"
  },
  {
    "url": "assets/js/21.3c4afa50.js",
    "revision": "0809e6e2a1f8021fc4fde713f77a5cb1"
  },
  {
    "url": "assets/js/22.5762a032.js",
    "revision": "21d4aa72a6d60472f8b4b830bca9854a"
  },
  {
    "url": "assets/js/23.6bdfb5ac.js",
    "revision": "1cda47cfd64c7d6783f5f4af65c7ac6b"
  },
  {
    "url": "assets/js/24.1653b403.js",
    "revision": "c7b0bcc71b6aa36b4a9b304d2e9a5a84"
  },
  {
    "url": "assets/js/25.2aeaaea7.js",
    "revision": "0c9d70f769fbf27b20e2ec4c13450dbf"
  },
  {
    "url": "assets/js/26.dd17376a.js",
    "revision": "c01d43437e884ac309f890e010b598af"
  },
  {
    "url": "assets/js/27.1b7d3033.js",
    "revision": "1b28807a738d96664f171e4d916478ed"
  },
  {
    "url": "assets/js/28.19b2180c.js",
    "revision": "f4f1d120ae8ba3c831c1041a20d3663d"
  },
  {
    "url": "assets/js/29.6eb876e6.js",
    "revision": "73dce319ae5c195f1656581fc762543a"
  },
  {
    "url": "assets/js/3.c1321f15.js",
    "revision": "a953ede9ecb07b8e96c7ac7fd08921b1"
  },
  {
    "url": "assets/js/30.63e8e025.js",
    "revision": "12b48b40abd4899ad48284f7b1a59173"
  },
  {
    "url": "assets/js/31.8ea71845.js",
    "revision": "53753a55fd7e48e1719cb18832dc327a"
  },
  {
    "url": "assets/js/32.d18ba2ec.js",
    "revision": "b868b0c9da091e35f89e073b37bb91d2"
  },
  {
    "url": "assets/js/33.8b37780a.js",
    "revision": "dfc10573527567856ada7d7089a9e0a4"
  },
  {
    "url": "assets/js/34.1d536349.js",
    "revision": "6935e8982e7c9037551e5378560b1b62"
  },
  {
    "url": "assets/js/35.3972112a.js",
    "revision": "5954a26f5a7b10f5015a303f34226e7c"
  },
  {
    "url": "assets/js/36.7910d2b5.js",
    "revision": "db33bcfe2ffb26f5c7c809e332ecda3b"
  },
  {
    "url": "assets/js/37.8164f421.js",
    "revision": "70be784dd8782b86070d2e7702cd8027"
  },
  {
    "url": "assets/js/38.1dcfec7c.js",
    "revision": "79f78e035ddd562afa893f8010041503"
  },
  {
    "url": "assets/js/39.46a19b90.js",
    "revision": "78cc0f0d3f15fcb27b6040ab15ba7742"
  },
  {
    "url": "assets/js/4.f0806ae2.js",
    "revision": "f0a4201ba2a44c9db22d2980fea87706"
  },
  {
    "url": "assets/js/40.5558acd0.js",
    "revision": "70b7ef4520db415293cc1578dec3aad8"
  },
  {
    "url": "assets/js/41.fac3bd29.js",
    "revision": "0b3a9d7d29be868133178043154299a2"
  },
  {
    "url": "assets/js/42.18b865a5.js",
    "revision": "f11c219429f57c3fddbcf8ec123588b6"
  },
  {
    "url": "assets/js/43.d42dd96e.js",
    "revision": "16a5f30ad3051d94e444294075812100"
  },
  {
    "url": "assets/js/44.0382a425.js",
    "revision": "e065725005dbe71119a415eec0f46c69"
  },
  {
    "url": "assets/js/45.2594154c.js",
    "revision": "04e062b36ccd776b59ebd02c3138a5d3"
  },
  {
    "url": "assets/js/46.7193845d.js",
    "revision": "c79ee4f33d723632507abc21bb1a0845"
  },
  {
    "url": "assets/js/47.cb54da87.js",
    "revision": "2ec49eb9798175899402803cbd336f1f"
  },
  {
    "url": "assets/js/48.18264d59.js",
    "revision": "b293123730c685236fb9b7f61aca1ffb"
  },
  {
    "url": "assets/js/49.0a51605a.js",
    "revision": "4d657d0448be555afd880234294b8bd4"
  },
  {
    "url": "assets/js/5.50368250.js",
    "revision": "16159c4573d73b1db6d603d56a508579"
  },
  {
    "url": "assets/js/50.e550cb0f.js",
    "revision": "6d935bc29883d4dff8f31f6fc6c43528"
  },
  {
    "url": "assets/js/6.a2dea5b7.js",
    "revision": "fd52b165742bc99820a35d5f555367e9"
  },
  {
    "url": "assets/js/7.0cbe1231.js",
    "revision": "15557e7c2dc1c82b5d17d0a34e183697"
  },
  {
    "url": "assets/js/8.cc507c58.js",
    "revision": "def04bf751546a5e28bd84e72b1b2e63"
  },
  {
    "url": "assets/js/9.3f7712f5.js",
    "revision": "3ba665857a05e452e812bf53f92c8f3a"
  },
  {
    "url": "assets/js/app.b416fdc8.js",
    "revision": "f056f6e6dc719c10baab487c32e616ba"
  },
  {
    "url": "categories/index.html",
    "revision": "c9d2629dc8e8fc0c0870d21cde5f084f"
  },
  {
    "url": "countup.html",
    "revision": "3ae198779a0510e7e6275ee4abeebbc7"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "ad53e12298510a32144439467fcda468"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "5495eecc68836df4b81063b429af9908"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "ca540e6384113d96424306001470b9c8"
  },
  {
    "url": "css/index.html",
    "revision": "6b2661a8ea43d8b986292faa5a89c8b6"
  },
  {
    "url": "firstblog.html",
    "revision": "611cd6bec12b25488b451ff057988d42"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "4f3f02d5447708cb64d41f2ed7b1f6e4"
  },
  {
    "url": "html/index.html",
    "revision": "c6a7eae440ac1b99d2a3209ed0c51fa3"
  },
  {
    "url": "index.html",
    "revision": "70e6c36a0dd9ce8a3db0c9c3ca40618e"
  },
  {
    "url": "interview/20201127.html",
    "revision": "c7aee0c458455feb956aae4749b02ef7"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "58c4fd2c81dedfd0cd0937a781c4d11f"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "ee53eeea15944de056aaa7077523224d"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "fc98604e0f89a285123f5d9b9807572d"
  },
  {
    "url": "interview/index.html",
    "revision": "88a295a00f723b04aac59b8c6e9411ec"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "eb8f4db2207e63c63a81a8d0fb99b54a"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "97b66a4a10e9d5abe23521bd5c352300"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "cd84ec7d96ee5229754d5cfeffe07c8d"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "ebba92fdfb0c65197028bbabc9eb3ea5"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "2a14455b6d5c51ee04ef6df0bfaafd06"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "dc6ee7f0c8c798621ee10113d95159fc"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "7ced92b2c302a4bf52b36723f6f81b8b"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "3a1ea27c8d15fac91ef1af4c962887f4"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "c87417dc4f4ecc3c92dfb759889495ed"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "406088c2a155c856097d3501299aeaf9"
  },
  {
    "url": "javascript/index.html",
    "revision": "68da2b198ba4c0ea73df8ed9ca7f9385"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "2d2b246ce065ac807966051f957a0821"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "3d9e907aacee5f8ad71b53a8262da72b"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "35c8f532345cf4d6cd4eff87c5c7145e"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "22d8a79aab35ef873234a2ddec466403"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "07ced9259f8bfd63fac63a42c67468a9"
  },
  {
    "url": "LICENSE.html",
    "revision": "37deeb6a65aa5703e848a2ed01a48417"
  },
  {
    "url": "quanxue.html",
    "revision": "ecc554cac43083f54b0a850fd526c22d"
  },
  {
    "url": "tag/index.html",
    "revision": "4f5d64484a83bf7728be08ef6c1cd4c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "04080769fb5c1135a760e8962f131274"
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

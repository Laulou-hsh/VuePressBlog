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
    "revision": "01937237cb5cfc421d45750cfe20809e"
  },
  {
    "url": "about.html",
    "revision": "02faaa28fae89b2a9b88e18fe6be4282"
  },
  {
    "url": "about1.html",
    "revision": "6273a824a92845578434183df828cc46"
  },
  {
    "url": "about2.html",
    "revision": "59c03810983d26cc8380fd1b15d314d7"
  },
  {
    "url": "about3.html",
    "revision": "88004566faf94d63a4e20ff221113ddc"
  },
  {
    "url": "about4.html",
    "revision": "f9bebde839cfd6e562f6821c78ad4d86"
  },
  {
    "url": "assets/css/0.styles.83e65403.css",
    "revision": "81034de187b8700a3f1e5fca3014ae53"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bubbleSort/bubbleSort.gif",
    "revision": "b7d216a5b292cf3a5412bbc7fbb56a9e"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/img20210302/matchAll.png",
    "revision": "34221e8670c3cca10de7bc7b582ed8cc"
  },
  {
    "url": "assets/img/img20210302/promiseallSettled.png",
    "revision": "be06d9dcfce414c7509fba9c4684928d"
  },
  {
    "url": "assets/img/img20210302/promiseany.png",
    "revision": "6c2fccce297ee0767ed0551105ae903b"
  },
  {
    "url": "assets/img/img20210302/shuzifengefu.png",
    "revision": "0a1496e66753e2bf4bfbe8b639d71fa2"
  },
  {
    "url": "assets/img/img20210302/zhengze01.png",
    "revision": "a3f357dcba75729c1222d459be3854cb"
  },
  {
    "url": "assets/img/img20210302/zhengze02.png",
    "revision": "494e0422bb0f0967d36aedaf202e4dc0"
  },
  {
    "url": "assets/img/img20210302/zhengze03.png",
    "revision": "c42d93882eb3c3def6c2944280a82edc"
  },
  {
    "url": "assets/img/img20210302/zhengze04.png",
    "revision": "cdb4c8c14fe2733cb2d877bdab8b46bd"
  },
  {
    "url": "assets/img/selectionSort/selectionSort.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "assets/js/1.5d24b8a9.js",
    "revision": "be759db4adb4605b14a093c880998543"
  },
  {
    "url": "assets/js/10.fecedd4b.js",
    "revision": "5af57a5cae4c57151cd3fab575f630e0"
  },
  {
    "url": "assets/js/11.60425131.js",
    "revision": "52148b0c1801b9f5c94febf0803faee8"
  },
  {
    "url": "assets/js/12.709fc219.js",
    "revision": "01f4181822835ea5079ccf49392bf608"
  },
  {
    "url": "assets/js/13.d1e1f04c.js",
    "revision": "c80496b2e5389c6254a1c78e31426da9"
  },
  {
    "url": "assets/js/14.5ba1bdc1.js",
    "revision": "bd7c06483a265167d7f6828295bc2196"
  },
  {
    "url": "assets/js/15.817ddba7.js",
    "revision": "209de209441611578e1406bdc74aa23b"
  },
  {
    "url": "assets/js/16.efc4998c.js",
    "revision": "cc052ff602a34202333d9e8344c49a23"
  },
  {
    "url": "assets/js/17.5307453a.js",
    "revision": "b318875465ddd3815692ee140daf5e7e"
  },
  {
    "url": "assets/js/18.c2a60a2c.js",
    "revision": "d3228d622a5deba0a4b40b834a2dba65"
  },
  {
    "url": "assets/js/19.a16c46ad.js",
    "revision": "f1208ca8374bc8905f1d3d609563367e"
  },
  {
    "url": "assets/js/20.49790e6b.js",
    "revision": "ec2349305ba4cac4fde9f4a29d8fe006"
  },
  {
    "url": "assets/js/21.876b03ca.js",
    "revision": "520a5d42c8fc1e7f553100c090e9a1f7"
  },
  {
    "url": "assets/js/22.df5dacce.js",
    "revision": "5ab57c9c23c84f317bbe6df0b8390993"
  },
  {
    "url": "assets/js/23.84e90040.js",
    "revision": "5ceacc9ff9cd6cb65229ea71643f324f"
  },
  {
    "url": "assets/js/24.6ed2a6f2.js",
    "revision": "736554bd96d95ec89cf6d58550c1db9d"
  },
  {
    "url": "assets/js/25.7a58c863.js",
    "revision": "4bab14273e0e2189f766a10e5a4e4463"
  },
  {
    "url": "assets/js/26.f30c61d6.js",
    "revision": "2bcfc2e7df05bc6d02c4f4f8b9ed9b29"
  },
  {
    "url": "assets/js/27.78361d22.js",
    "revision": "60c0656c3844321e6324a7e1f4264f03"
  },
  {
    "url": "assets/js/28.8abb9178.js",
    "revision": "62c03193d903f191ed974f50f64d544c"
  },
  {
    "url": "assets/js/29.eb456e66.js",
    "revision": "2b97d22b710cf62594ca308e14885cbb"
  },
  {
    "url": "assets/js/3.9c5c104a.js",
    "revision": "d7142ff2461346c9c73014c4707bb320"
  },
  {
    "url": "assets/js/30.4b26a5fa.js",
    "revision": "72a53ca9dc7ea00b94294ee59ac24feb"
  },
  {
    "url": "assets/js/31.5d7b2449.js",
    "revision": "9b5d3f35e721f58dadac12c4609f612f"
  },
  {
    "url": "assets/js/32.c3f047ab.js",
    "revision": "d94c190817888716dbec73fb02311568"
  },
  {
    "url": "assets/js/33.f8072020.js",
    "revision": "29dab77d1ea509d40616aa2b779d14e3"
  },
  {
    "url": "assets/js/34.1027c13d.js",
    "revision": "000a1b96ef77be4fe68fc3b3915e3610"
  },
  {
    "url": "assets/js/35.23c4ba7d.js",
    "revision": "c81f4409eb06d1a915a29ae482d231f2"
  },
  {
    "url": "assets/js/36.96238ae4.js",
    "revision": "fb658d0cbdbba79102a59ccedda4a5e3"
  },
  {
    "url": "assets/js/37.0433e0f1.js",
    "revision": "19c56c55fb8cd903b9da9683ec9e82bd"
  },
  {
    "url": "assets/js/38.e2da4885.js",
    "revision": "96c809b900bc7754d446a9811d2c85ca"
  },
  {
    "url": "assets/js/39.4e059444.js",
    "revision": "1ef19ca873ae3c59edbd78646864f9d8"
  },
  {
    "url": "assets/js/4.834c407e.js",
    "revision": "18650fb5732883440d075c048293753c"
  },
  {
    "url": "assets/js/40.ca98a97f.js",
    "revision": "0e61cb56df0c21b7a4bb4898a041bb89"
  },
  {
    "url": "assets/js/41.4259abac.js",
    "revision": "1affdfb2cd133cb8a7ceb1c468cf1f74"
  },
  {
    "url": "assets/js/42.4bbdb9e1.js",
    "revision": "30f118e1a38aafd47f9832862a45986c"
  },
  {
    "url": "assets/js/43.c1ddb988.js",
    "revision": "8b8e00b828d0d137ddce5c968fa95769"
  },
  {
    "url": "assets/js/44.fd756093.js",
    "revision": "1a6e1be9f947a6f2d5b9cc9b21194707"
  },
  {
    "url": "assets/js/45.8a342773.js",
    "revision": "84286a33082def0f48638d25f8919ee6"
  },
  {
    "url": "assets/js/46.22dd2f3d.js",
    "revision": "4ba30bbceb439b1de9cc8fbfab1eba63"
  },
  {
    "url": "assets/js/47.ad7f2ff5.js",
    "revision": "50bece55b819ea95e15f22fc29ffb078"
  },
  {
    "url": "assets/js/48.ba300aaf.js",
    "revision": "6634aafb964c011d27efed1b86109914"
  },
  {
    "url": "assets/js/49.c84348ee.js",
    "revision": "3e99ed77d28b2792cb80af80d614f9ac"
  },
  {
    "url": "assets/js/5.8de64b0d.js",
    "revision": "6c8a20431080a8174c7aefccda5228eb"
  },
  {
    "url": "assets/js/50.dbb45fe2.js",
    "revision": "234db3f660f1569cf8e2888d3a1a5d6e"
  },
  {
    "url": "assets/js/51.9f39c682.js",
    "revision": "75f6668a550508bb6565148b686076d2"
  },
  {
    "url": "assets/js/52.e4c9ae8c.js",
    "revision": "b9439432b44abf88143d3858b72f7fd3"
  },
  {
    "url": "assets/js/53.237b856d.js",
    "revision": "f78daf840de4bbd2f5279a4bcbdbe39b"
  },
  {
    "url": "assets/js/54.a6607d0a.js",
    "revision": "c1a30df49a1606435b6cd3f7ecc89b3e"
  },
  {
    "url": "assets/js/55.adea4b7a.js",
    "revision": "44ec83c6e3d7e2cd2a95861a8d784f50"
  },
  {
    "url": "assets/js/56.6f1c2365.js",
    "revision": "17a0f337791f4504edc3d1a28475c15e"
  },
  {
    "url": "assets/js/57.9a451610.js",
    "revision": "7c9fda37ffb3a4e66ecf93e7e19cf539"
  },
  {
    "url": "assets/js/58.e9d9c398.js",
    "revision": "3e9aa5bbea61c512dbdcd71ceb94cbe9"
  },
  {
    "url": "assets/js/6.e9a33e42.js",
    "revision": "94dfd65d0aebd4043f244c02eba3b195"
  },
  {
    "url": "assets/js/7.e7747aa2.js",
    "revision": "93aa5226c3dda841bdee00dfee147d68"
  },
  {
    "url": "assets/js/8.5ab4a050.js",
    "revision": "161d79649a42e82cdcb637594f13df02"
  },
  {
    "url": "assets/js/9.168b55df.js",
    "revision": "7a0a80ee325351f6ec7fb5ddf2298e9d"
  },
  {
    "url": "assets/js/app.f92ae794.js",
    "revision": "aa39c86a213b23443559d058a94d6d8a"
  },
  {
    "url": "categories/index.html",
    "revision": "08923670ee929bd0fa3754c610e8c5f8"
  },
  {
    "url": "countup.html",
    "revision": "cd173c7bd7b363f6b88d855f265d0606"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "8322682982f416ca64164f81d0471c59"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "18c6e0c5a9ab7bbd3dc1cccb4c8c9b91"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "8c518aba0c337a9f515a6cd1602fdf1b"
  },
  {
    "url": "css/index.html",
    "revision": "df8f43086baf8a78f0191fb65b4a00c4"
  },
  {
    "url": "firstblog.html",
    "revision": "39d81568667e334d460d2db56395e9fd"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "e12b6f9846590641e0190ec7c6f9a509"
  },
  {
    "url": "html/index.html",
    "revision": "10611d680ca2f3eda22f46d16e5a5b8b"
  },
  {
    "url": "index.html",
    "revision": "689a598f22810c70ce2b9d5b90422f2a"
  },
  {
    "url": "interview/20201127.html",
    "revision": "c439322d52609258c89d3c21afda6bcd"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "d235489f28d1e83e9c099be1d302fe16"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "ae1a974d7a0a980ddba1608f4ec98859"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "ad35f0bea97a3851b39653090059dc4e"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "f40502fd435dd8e1a8bc1af571317fb6"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "110231489ac9201dd2bae9fc76bc2427"
  },
  {
    "url": "interview/index.html",
    "revision": "1d0e76697e333dbcbd1da3866ba4f8ce"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "5b0a85accd66bd49f4c0b9443b2fdb17"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "92a1c97d566bc033ffb4595aedc3a1cb"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "f5a512fe793386678a95b6eb8558a967"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "8071ad2e3bf29ff534ea916ea0be6037"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "2e85c77aa057d25090a99c995c7931a4"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "16b3ec8c4ba3fd990035ac01ad977277"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "0ec5ed8790bd5d275bf5ac613582e1e8"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "a1956a0bea0177bf185d3a29f156e0fa"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "516c904d3ec161eed5934e7435ce6a7d"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "c1e36c2c24128b52634196e56c601ab8"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "362e6625be1d7ee39b8c19a4708ca705"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "9d1f1eb8cb1b9bca5fb77ac930e5c612"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "be08d5804e5965728ecff57ac9f86f56"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "c1a48397f8616850d300db6d5f0470eb"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "3e00c9e81259ef22e6ef1b089bfc68ef"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "747bc06cd3a6462b7d74d1ec5ac04d23"
  },
  {
    "url": "javascript/index.html",
    "revision": "4507d61284cbac9f212d38248dacc740"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "15babf82bb04db970f850e20a3ffb0f1"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "48a39ca5c009856e028bfbdd2b023d14"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "35278d776ffbd97a8f1910bc0088f97f"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "ea9255e64db4fe5b80b50e78479ac117"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "f7a21c5b37a937462d44185c1547cc5d"
  },
  {
    "url": "LICENSE.html",
    "revision": "04af55bd4a8eba9f86f776ba7cb8ac54"
  },
  {
    "url": "quanxue.html",
    "revision": "cc7e3524129abb2c09e35656e894462a"
  },
  {
    "url": "tag/index.html",
    "revision": "9c58367af1b2eac7605975ff1e8dfce1"
  },
  {
    "url": "timeline/index.html",
    "revision": "b07ba480c28ffff839295d517acd436a"
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

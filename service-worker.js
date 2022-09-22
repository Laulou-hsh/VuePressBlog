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
    "revision": "448ea592efd74fce081e62830451dc01"
  },
  {
    "url": "about.html",
    "revision": "e868a7858b83ffff73e349bdcbabb236"
  },
  {
    "url": "assets/css/0.styles.71d81c8a.css",
    "revision": "74968c1abf7e1c163119469a70d9f395"
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
    "url": "assets/img/insertionSort/insertionSort.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "assets/img/selectionSort/selectionSort.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "assets/img/备案图标.png",
    "revision": "d0289dc0a46fc5b15b3363ffa78cf6c7"
  },
  {
    "url": "assets/js/1.de137006.js",
    "revision": "3ab897887cfcb5b46c61c940ff87b6cc"
  },
  {
    "url": "assets/js/10.2d4cd542.js",
    "revision": "0506b70d37eccdc407f07e006665891d"
  },
  {
    "url": "assets/js/11.ce754263.js",
    "revision": "f0689ace1548dcd69268622d966158b7"
  },
  {
    "url": "assets/js/12.3e9fe470.js",
    "revision": "78e711e7eef94e0226f51c0f52fd5a3d"
  },
  {
    "url": "assets/js/13.679c51ab.js",
    "revision": "74ef4fb549e3f536f373aa7a61a22ed4"
  },
  {
    "url": "assets/js/14.94f0fe31.js",
    "revision": "c4724fb0844f45af45fe05c084f652bb"
  },
  {
    "url": "assets/js/15.c2ac0d2e.js",
    "revision": "5b84603d91faf134751e312f242f5e5d"
  },
  {
    "url": "assets/js/16.13a7beff.js",
    "revision": "7e13607e0df893e66803a1d7e93884ac"
  },
  {
    "url": "assets/js/17.c822e8ce.js",
    "revision": "710001bb7c37712340d26512d8acef7d"
  },
  {
    "url": "assets/js/18.f2702675.js",
    "revision": "c8a166a04cc22aac2ec0770a65df6d19"
  },
  {
    "url": "assets/js/19.73a1c766.js",
    "revision": "3402937602f0ef582031a390ca495c9b"
  },
  {
    "url": "assets/js/20.e30ef6a5.js",
    "revision": "723745bfa160a13454baf3f3f7b5da90"
  },
  {
    "url": "assets/js/21.7b97ee81.js",
    "revision": "6d3689f72ad9581d58aa37872ea62d73"
  },
  {
    "url": "assets/js/22.c8171090.js",
    "revision": "9d2303fe33493df039b6101651991ba7"
  },
  {
    "url": "assets/js/23.b33a6a29.js",
    "revision": "3e23ade648f0eab7b005836bdeb59808"
  },
  {
    "url": "assets/js/24.f7b31caf.js",
    "revision": "054400017f0530eebd1d741b63c7f935"
  },
  {
    "url": "assets/js/25.45d16287.js",
    "revision": "7d47b0cd0bad1af6612c26c02e109ddd"
  },
  {
    "url": "assets/js/26.0a061f76.js",
    "revision": "ba4609cdd76e0fef8f2b716113944e83"
  },
  {
    "url": "assets/js/27.6772d558.js",
    "revision": "39c6fdaa165a0764ab29750bec92d9d7"
  },
  {
    "url": "assets/js/28.eae6e7fc.js",
    "revision": "19b32dd09c314e26cb57fd7fd2f611aa"
  },
  {
    "url": "assets/js/29.a737061a.js",
    "revision": "ce1ada0d1a60ec97fbec7ac9aa1bcb02"
  },
  {
    "url": "assets/js/3.29deada4.js",
    "revision": "2286020f6eb0d191268ee63583900554"
  },
  {
    "url": "assets/js/30.4b7cc475.js",
    "revision": "b73340c35d6c56bb9baf03f131574c70"
  },
  {
    "url": "assets/js/31.7543562c.js",
    "revision": "74a31bba8d8b63492332d1dc289c6692"
  },
  {
    "url": "assets/js/32.d503e9ef.js",
    "revision": "2b1e1e77580c87c6b38aa3ad091742d3"
  },
  {
    "url": "assets/js/33.c79bbfe7.js",
    "revision": "edc3f396decfbb4430fdcdf5b88df4d8"
  },
  {
    "url": "assets/js/34.e732b2d8.js",
    "revision": "a37fb98ce78f0c662fb805423a1444b8"
  },
  {
    "url": "assets/js/35.003e676d.js",
    "revision": "1da3d295911b3b88795426c65a5a742b"
  },
  {
    "url": "assets/js/36.aebf911d.js",
    "revision": "aa0a86b07b28e3786c70e9e82463b1e6"
  },
  {
    "url": "assets/js/37.1d2533a7.js",
    "revision": "a7a9641f9b614e64618c51c7880bdec3"
  },
  {
    "url": "assets/js/38.11ca82f1.js",
    "revision": "44ad6bcb4a9d8eee914e4ac26d015e6f"
  },
  {
    "url": "assets/js/39.f8609eea.js",
    "revision": "23c16d4a33a1f361eff27e9935b68196"
  },
  {
    "url": "assets/js/4.5c70fa61.js",
    "revision": "34816285e78196d0ccd2643402ba3c15"
  },
  {
    "url": "assets/js/40.b03a0a3a.js",
    "revision": "87e30474f3ed2f5739efc213f7a467cc"
  },
  {
    "url": "assets/js/41.6439a57c.js",
    "revision": "657308d0ceb6aba86111c91538c83394"
  },
  {
    "url": "assets/js/42.58073edd.js",
    "revision": "945b69417a87dbbd4b1979fb0fcf3fd4"
  },
  {
    "url": "assets/js/43.714168f5.js",
    "revision": "5e8b1f51d376be08b3a155b91d1208a8"
  },
  {
    "url": "assets/js/44.a18c279a.js",
    "revision": "dd043805ed465a64d3e612ff77c7277d"
  },
  {
    "url": "assets/js/45.b083a887.js",
    "revision": "9e11133dfa8c0ff6ea9be7dd81402bc2"
  },
  {
    "url": "assets/js/46.edebee87.js",
    "revision": "809300e781ac78e82506b8bb890f03bb"
  },
  {
    "url": "assets/js/47.02b7bfba.js",
    "revision": "ce862c5d4c92d0313fbc3aac1b387345"
  },
  {
    "url": "assets/js/48.53760d8e.js",
    "revision": "ae67c278f4f66f5ccfc78920e4811d9d"
  },
  {
    "url": "assets/js/49.4a4a59cd.js",
    "revision": "ae6396e3447034de76d360fd7dfc8118"
  },
  {
    "url": "assets/js/5.ec8ee23e.js",
    "revision": "bdc46b3d5b8e26e9e9fd488748283083"
  },
  {
    "url": "assets/js/50.8e250da8.js",
    "revision": "35ca7989d554073d96a4866b247f5172"
  },
  {
    "url": "assets/js/51.e9f34744.js",
    "revision": "c296b29ff8eabe0b7f3b0e99f1c84b84"
  },
  {
    "url": "assets/js/52.7bf8cb22.js",
    "revision": "c7377fecb29e4185c2ed2da54d650bcb"
  },
  {
    "url": "assets/js/53.4a322129.js",
    "revision": "50fdebc172f5d449d9c92db45d857b21"
  },
  {
    "url": "assets/js/54.6aa017fb.js",
    "revision": "77143a0c3604eaac1772a255f309a4bd"
  },
  {
    "url": "assets/js/55.4fc552c1.js",
    "revision": "3fabf2536fd6cdedd0a83b209b320c55"
  },
  {
    "url": "assets/js/56.c96de400.js",
    "revision": "3a13ca23a95d3be052370331a806683d"
  },
  {
    "url": "assets/js/57.a410e19b.js",
    "revision": "fa0c2f2e9925d07cd1c9efb0e71bcd62"
  },
  {
    "url": "assets/js/58.c74660e5.js",
    "revision": "5136637ea9d6efd2995e1b52a1a900eb"
  },
  {
    "url": "assets/js/59.4f8bbc04.js",
    "revision": "140a69a5581de93c4d46a48ab8d8281d"
  },
  {
    "url": "assets/js/6.39a557ed.js",
    "revision": "0dd9cd4c0d2f7bb86ec71529d38bb5c5"
  },
  {
    "url": "assets/js/60.69dea85c.js",
    "revision": "8dc2f98fdfa1eb337099177683256d70"
  },
  {
    "url": "assets/js/7.f7000fac.js",
    "revision": "a61dcae9f1ffeedf2ceafeecca9cc9ad"
  },
  {
    "url": "assets/js/8.64139f82.js",
    "revision": "7628cac53b6bebf9b71e02da00e2e01d"
  },
  {
    "url": "assets/js/9.ce53868b.js",
    "revision": "61cdd6c46afbab77b77e7edb1ae16963"
  },
  {
    "url": "assets/js/app.7db0b560.js",
    "revision": "4ed3ff60d55b138564578d7187744c0d"
  },
  {
    "url": "categories/index.html",
    "revision": "41f36a363c729da2c2a7ecbd33fd4b8d"
  },
  {
    "url": "countup.html",
    "revision": "0ba52bd3e246e281127b6b0d85a6999e"
  },
  {
    "url": "css/20210803.html",
    "revision": "553b6bc9de78b3aeb6b70adbe20016a5"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "dd9a50ec1bce229a98a993fa1e14ad7e"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "ff71294b8f20269f633bbdda30936bd4"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "8e56c39e3e217f28924d0ae3d80fbfdc"
  },
  {
    "url": "css/index.html",
    "revision": "8daf80f34e29f06d983a3afd9841fb43"
  },
  {
    "url": "firstblog.html",
    "revision": "cda8f05f8121fa0550541d5b4a39a769"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "16e840b58f9b86907f67d32dd6c0804d"
  },
  {
    "url": "html/index.html",
    "revision": "9b2f4d5307608d7472591eca8c1c59d8"
  },
  {
    "url": "index.html",
    "revision": "8548ddab39b16f8645efb71f9ecf0869"
  },
  {
    "url": "interview/20201127.html",
    "revision": "3d53db158161c2a22cbf3f249ba54594"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "8f26b615e9e9c3faeb64d56fbda40e41"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "2f68e1475814221124ee1ee469fc13cc"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "5bc9512c627b89d08f2374202aafee45"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "1cc507a9294e5b69ca28a8d9a59dff7b"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "1548bbc0df6dcf8d09804660afd36aa5"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "517abf85085b3925d2a7411757ff20d8"
  },
  {
    "url": "interview/index.html",
    "revision": "713dbff9da7d1b5fea0222b12d770a7f"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "43700f350fcf487dbf89b5ce89325908"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "ad54f758e9e766f720cd567f5df62cf9"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "e1820ede36fa32db93a68372c1706bfc"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "372bb7c923ce4a16fbbb1f30a7cf9b14"
  },
  {
    "url": "interview/TypeScript/20210903.html",
    "revision": "d09aa187ff5e4f15e78007185f009753"
  },
  {
    "url": "interview/TypeScript/index.html",
    "revision": "24e40559f079f81b47b0b57c2c0a98b8"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "5996374112e2955977b1d94cb532ec11"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "aa6b7486776d4d16a3497f2604a7f178"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "9cdde555d5cddf6e50000f40e100eef9"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "d5f9614fb7b10bcbcaa6c18979964e72"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "97ea46aa1cce6522b010d7ef0b8f329f"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "59f9856cea9d7a939edf47df6c14d9f4"
  },
  {
    "url": "javascript/algorithm/03_insertionSort.html",
    "revision": "5513289a096b5f2bf605d4e014fa4e1f"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "bd420141e882ac6b24b201cc30b1b7a0"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "4af25fe40f17eb9cdde4d00d7c173d66"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "b9773a8da2e0c04417aa68e0b5c87b8d"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "2c647962147080757101977f38a34c4a"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "2a767eb06d2cac84c58a4aeec32835c3"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "f2a758a15b0ef5a2d5eed7392b3788b8"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "394c1ec61b3da48a56b7a77ea9be9031"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "022fc54e88c921ea1ab5538306911f7d"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "a7d2b9414d9a7b9d1f3aaa2ee7e341d9"
  },
  {
    "url": "javascript/DailyNote/20210823.html",
    "revision": "bf4bde51d236a0e1c27873fe21fcb02c"
  },
  {
    "url": "javascript/DailyNote/20211011.html",
    "revision": "9ac452e8a075d7214b91006703d53335"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "db89471216e853609279f779273623f7"
  },
  {
    "url": "javascript/index.html",
    "revision": "7eadb35563b8e4ee0230622e894989a4"
  },
  {
    "url": "LICENSE.html",
    "revision": "a5769189821312ba40aa60de8000ab31"
  },
  {
    "url": "quanxue.html",
    "revision": "2e7a522a74b3509e9ec237a9662e708d"
  },
  {
    "url": "tag/index.html",
    "revision": "435f64112504d51728e927a528ee141a"
  },
  {
    "url": "timeline/index.html",
    "revision": "aae7d6d8ebac08b4684cbe81ebde0601"
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

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
    "revision": "fe84fa4e61b4cb5f4669f95f909b289a"
  },
  {
    "url": "about.html",
    "revision": "92a2a202bb082884e5b7a49fc0024fa7"
  },
  {
    "url": "assets/css/0.styles.1c04ec70.css",
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
    "url": "assets/img/selectionSort/selectionSort.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "assets/img/备案图标.png",
    "revision": "d0289dc0a46fc5b15b3363ffa78cf6c7"
  },
  {
    "url": "assets/js/1.85044ded.js",
    "revision": "3e6223a734433da411ded501908fec24"
  },
  {
    "url": "assets/js/10.2685ab67.js",
    "revision": "a97a4d9d43a663090cb6d388cc7f245f"
  },
  {
    "url": "assets/js/11.005138fc.js",
    "revision": "0f1ad4fd8ce1e8a754dd298a2f835282"
  },
  {
    "url": "assets/js/12.e9652214.js",
    "revision": "c6cfbc2ef4d076b4ec8a14bb04b764b1"
  },
  {
    "url": "assets/js/13.5e990e3a.js",
    "revision": "92c07f15bc8c43c2f9b4bffb026883fd"
  },
  {
    "url": "assets/js/14.534918f3.js",
    "revision": "af2b5404e8545ecc243a71083637ef0e"
  },
  {
    "url": "assets/js/15.96c2c1bf.js",
    "revision": "1283c81123c80715e5f12184ee400cab"
  },
  {
    "url": "assets/js/16.353d0911.js",
    "revision": "2d9c69cb660cc07a9ad12e48733b6f8c"
  },
  {
    "url": "assets/js/17.73a98bc9.js",
    "revision": "61bf99736f4c4b6b6d0c4c1550c7a3c7"
  },
  {
    "url": "assets/js/18.e481aac9.js",
    "revision": "51e8aa6dba6b4afa63387a5998788123"
  },
  {
    "url": "assets/js/19.e1064ea3.js",
    "revision": "06605e741e478ac2b5da5e3d36d573e7"
  },
  {
    "url": "assets/js/20.ea586591.js",
    "revision": "268fb087647fc0033317d2ec5734ed5d"
  },
  {
    "url": "assets/js/21.3f9ff4bd.js",
    "revision": "d1ba62042774fc0485aff073e3e6e006"
  },
  {
    "url": "assets/js/22.2d189ac9.js",
    "revision": "d4b42f29e121c80a86ebfc668e511c3b"
  },
  {
    "url": "assets/js/23.64f837cc.js",
    "revision": "84f9d4015bb0d18e191794c119e4d9e6"
  },
  {
    "url": "assets/js/24.60329c4a.js",
    "revision": "adaf234ee321e710f3b7e71bc2fce853"
  },
  {
    "url": "assets/js/25.a5cadb03.js",
    "revision": "e797cf2d238cb5a54e663550e0191817"
  },
  {
    "url": "assets/js/26.245284b2.js",
    "revision": "6efcd1344a7ec088c2438c6ca703801a"
  },
  {
    "url": "assets/js/27.acc3fb37.js",
    "revision": "76c2dcc1c88a599663b74e6b5d826f97"
  },
  {
    "url": "assets/js/28.b499d667.js",
    "revision": "4db9b6115f0dc9e1e6b3de9483335804"
  },
  {
    "url": "assets/js/29.200dc41e.js",
    "revision": "df8eb03e66d7c085aa75ee87891fceac"
  },
  {
    "url": "assets/js/3.11b6805e.js",
    "revision": "66b539ec71da18228fb09608c309b290"
  },
  {
    "url": "assets/js/30.47db257c.js",
    "revision": "ec495bafb781e117a6c888e875097882"
  },
  {
    "url": "assets/js/31.6b4fdc54.js",
    "revision": "ec418371a98eb8401c5d727106da5f23"
  },
  {
    "url": "assets/js/32.bfc49d04.js",
    "revision": "1d5130748c376f9a4e30b45674c183fb"
  },
  {
    "url": "assets/js/33.6435521b.js",
    "revision": "4fd7b714d0ff36e9ac39b3cd2045d761"
  },
  {
    "url": "assets/js/34.bd023672.js",
    "revision": "4d2ee5e9b7837fca38894d534fd75ca1"
  },
  {
    "url": "assets/js/35.25ffb41d.js",
    "revision": "b4b6be5dc4f9401b4b2b7d4ac6555eb4"
  },
  {
    "url": "assets/js/36.08d639c3.js",
    "revision": "360c9a042d859ac826816a00b045bd13"
  },
  {
    "url": "assets/js/37.80f21469.js",
    "revision": "73936e61264dc1acaabea469312f8e7c"
  },
  {
    "url": "assets/js/38.6668914c.js",
    "revision": "661feadcd7c6d018b8868ca2b0f0e594"
  },
  {
    "url": "assets/js/39.85907c9a.js",
    "revision": "e2be50fc93c5a95b44be777529e24dc0"
  },
  {
    "url": "assets/js/4.227b65c2.js",
    "revision": "92047e1822c91dea4525ed7362945554"
  },
  {
    "url": "assets/js/40.a04f9411.js",
    "revision": "e24220059c7341619a59a1537e760c1b"
  },
  {
    "url": "assets/js/41.a073eb54.js",
    "revision": "7df0d2b439115f27b084713f92cfd8c9"
  },
  {
    "url": "assets/js/42.87e358b4.js",
    "revision": "3ea5129f5ac3cd81103d373d9eb76f12"
  },
  {
    "url": "assets/js/43.f0a229df.js",
    "revision": "ee023c51080a96e9acb82c799e9310ba"
  },
  {
    "url": "assets/js/44.f134069b.js",
    "revision": "32715229fb7cfa55026b03b27c1c2781"
  },
  {
    "url": "assets/js/45.ae8e43f3.js",
    "revision": "4fd9c85c3f61dc3d95979fc67e6cb620"
  },
  {
    "url": "assets/js/46.944cadc9.js",
    "revision": "fb4eac15ff93a98b1ae4274d360e78aa"
  },
  {
    "url": "assets/js/47.c5598a1b.js",
    "revision": "17f3215def8b33de9b37e13608e602e4"
  },
  {
    "url": "assets/js/48.77d4a451.js",
    "revision": "20efe3ac9d7211c44ec12f53e5e03d71"
  },
  {
    "url": "assets/js/49.a6ed7a97.js",
    "revision": "c080bf4417fbd75e3c1d08c6f9f58d71"
  },
  {
    "url": "assets/js/5.3fb6ce39.js",
    "revision": "a9a9533f93a46ec302a88c4159ab388c"
  },
  {
    "url": "assets/js/50.faf01ec0.js",
    "revision": "d5421143952d788020313d294161eaa3"
  },
  {
    "url": "assets/js/51.c83369de.js",
    "revision": "a96684d4782a9ab39cb56825664ea269"
  },
  {
    "url": "assets/js/52.7f7998d0.js",
    "revision": "76c7bc7366dd726efbbfb6e4a8633901"
  },
  {
    "url": "assets/js/53.9bf5157c.js",
    "revision": "96c550f77b4c1e7bafb9ee7b0d54dcd3"
  },
  {
    "url": "assets/js/54.298228b8.js",
    "revision": "b057528d60966aacb6099389fa25e624"
  },
  {
    "url": "assets/js/55.ed89c0e8.js",
    "revision": "bb463d22e80763e227430926dd70bc25"
  },
  {
    "url": "assets/js/56.6928ce4d.js",
    "revision": "73edb4afb5db5937142d51bb2c3a43a7"
  },
  {
    "url": "assets/js/6.99da751f.js",
    "revision": "8a1b49b3b18f9e27e4326ea75be013b7"
  },
  {
    "url": "assets/js/7.c4c8f3d2.js",
    "revision": "99586de0e6bee0c17da3b4f9de473e1a"
  },
  {
    "url": "assets/js/8.d3ae59ed.js",
    "revision": "6086e57b4ee090e902a1b328114a14f0"
  },
  {
    "url": "assets/js/9.e050d2c0.js",
    "revision": "18aae821067faf2afb1621437fd35d8a"
  },
  {
    "url": "assets/js/app.f4a70564.js",
    "revision": "112ebf31c806580b4c5fbc4ea60f6eb2"
  },
  {
    "url": "categories/index.html",
    "revision": "dfda51417db4018d36d95cd16af1ad74"
  },
  {
    "url": "countup.html",
    "revision": "5f2262783c981922509d4870d462bb97"
  },
  {
    "url": "css/20210803.html",
    "revision": "4f6b11aed852e5888c3b7ef0c6c429c7"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "ed9923f21b187bd6b93ddfe90a579567"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "019903f1ad8e91fec3faec956deec5a3"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "231a885a5db78b385bada35d819a0765"
  },
  {
    "url": "css/index.html",
    "revision": "68753e51ea559dd30fb1c41d4ced111f"
  },
  {
    "url": "firstblog.html",
    "revision": "bf3b1059376f02352e3b42e6c5dacef7"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "726a1860991ec294b9c600f76511dd54"
  },
  {
    "url": "html/index.html",
    "revision": "16e8038dc9b384ebb86be71f4ff51246"
  },
  {
    "url": "index.html",
    "revision": "d363e7c35efb8339b69821625f8dbf05"
  },
  {
    "url": "interview/20201127.html",
    "revision": "7217786412d7de6bc14d1b1c1c0999ef"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "515f15dedfa76268d88545b8fdeb9149"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "1a817635fd102e499dc5aff39b509bbf"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "a92875e636c2d4d471cdfe1d4d8bb925"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "8eaae72e2b3b0dd7345d71a6b33107d4"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "0e89030f58ce51291ca824c7f9d966e6"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "8eac6adaedc3b1b8956a0c2d96bcd25b"
  },
  {
    "url": "interview/index.html",
    "revision": "70128e5feea8eda792800f32f617175c"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "a71ecaa3b848e54c17b3dde35a613021"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "3bda24f729911af9b56fc3b7a778a8b1"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "2b1a828abea16d54f2d08918304f80a1"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "d54e7c4a8f9247814b27243295ec9994"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "4518b129d8323c1c228eb468153b3f4d"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "5a858dd29547e506e5f55f5a6d0d657f"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "74d5bc8d563bc5ac0c035f130c39e6c1"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "daeb7e5d815af9afb8bc7b435393db20"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "fa6fe7d116ce6c2275f6ecc839819168"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "972dc524c9cc13c947f457e8f90f2203"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "dc4733575fffcf8a18311faa0f04d9b1"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "bfd0f41f901e9a055c8b9b655d8480e9"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "621125227335e8d0806475d94fbf981e"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "3ee5f0a701da5e9f8acac72e4ec2e66a"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "477b5be8e5ceb82ed1600e19fd7f18bc"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "914f737d17f7d5cbbdb0e873df7c7c21"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "d16525fb7fdeddb1c8877ec8cb9da102"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "49ccf00b9ad34c438a09e9551c59c21a"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "bcb71a82286ece791a3d6ea02bacdede"
  },
  {
    "url": "javascript/DailyNote/20210823.html",
    "revision": "1bd30d3eaedb781ff95423995d59aba9"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "ab33c0062fda7348869dface2c55ebf7"
  },
  {
    "url": "javascript/index.html",
    "revision": "02ce3af2218764171a8de6e16fbd5af0"
  },
  {
    "url": "LICENSE.html",
    "revision": "da59a735e95a211d300e36067ab9d2ec"
  },
  {
    "url": "quanxue.html",
    "revision": "5fbefba4425cb982e60e9555a9175bdd"
  },
  {
    "url": "tag/index.html",
    "revision": "dc4f93e587f2a0c371d521005ceb5744"
  },
  {
    "url": "timeline/index.html",
    "revision": "19dfab15f8c2a855b56e82cb22537a17"
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

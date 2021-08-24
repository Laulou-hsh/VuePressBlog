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
    "revision": "c233fb290183274a21e39937c1a8f64a"
  },
  {
    "url": "about.html",
    "revision": "018ff27395fa2ba634207f2ff4e22f7c"
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
    "url": "assets/js/11.44e5067c.js",
    "revision": "5d61bf1c5b24c1aa3bd0b37c4d69b2a5"
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
    "url": "assets/js/42.eb402f80.js",
    "revision": "572a4e59f9b157a37c42abaa89da2cc6"
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
    "url": "assets/js/app.ca9ce5e3.js",
    "revision": "f3dd417db2ed007a0b7b20b549289272"
  },
  {
    "url": "categories/index.html",
    "revision": "0e19f16501b244cfcf1df15309fbf719"
  },
  {
    "url": "countup.html",
    "revision": "bdf85eca562c3a36ed384310b4fe152c"
  },
  {
    "url": "css/20210803.html",
    "revision": "fc292050eb3616bccddd5d29d0c7b170"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "f179223f90625c90c8d316d56a839a11"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "a881c399d8dd2dd1515250285ec11639"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "1608a78e1757d74a2cffb45fa66597ef"
  },
  {
    "url": "css/index.html",
    "revision": "f2668d133e46328dd398c10a11aca255"
  },
  {
    "url": "firstblog.html",
    "revision": "b298067702177db275359aaaf39da2d8"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "2b67527495e3ddf7000328dfc5cdbaac"
  },
  {
    "url": "html/index.html",
    "revision": "3bf104dd0a610d9b99de832085a26612"
  },
  {
    "url": "index.html",
    "revision": "22d8659af33d5bbe3591e34c286b33a2"
  },
  {
    "url": "interview/20201127.html",
    "revision": "59b510ec1a6bd72c2a0e2376448c9c5c"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "26093a6c3e2c37620ae6752da964937e"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "aa1932eedb5d90c268fd663dfdc90bd0"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "1c2bbd4ed8a5dd523fa5481d41d7039e"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "ed0c9e8593f9a1cb50e5718955a99efb"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "ea2e966c0f3aee1bb273bcd78974dc22"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "f2ed0baf1280266997b78705a8a0d799"
  },
  {
    "url": "interview/index.html",
    "revision": "c245943a99dc14a4d895a475133b558a"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "6287c74477ba4c04cc35323f80cd43da"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "556e59728b9804ccbd7af7a9dc4f3b6e"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "883b40292ef4b51e24280054fc3275a4"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "b0af9e9574270ee397610bc656b550f2"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "eb5b64baa6b95fb279ca461b69557c10"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "ab917ec16ccfa375ad3f842c9294e9fc"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "e71b1d891ec3afaeffcdaea4a8aa0839"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "eff70dfa3e087858b3c2843994820da2"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "5c09cf193f06cc44229085764557a86e"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "a6d1f7b91146cbc3bc8ede0432fa2ad5"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "26c8e4c399c67be248739c7ef7d7aade"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "eb5e28918fa13657dc7b89450ef50163"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "fc52435b742d956e618e86e46a282a0d"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "8a7677f30a8f0bd21b5a2303230460a5"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "e115b87a40b03409051b32cdab028b6e"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "81a3dca6fb3549d834d684ef36fd89a8"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "eac15a2acd46eb9c04b7dda720938b01"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "1e43618cbfda05a30422bb71a25b499b"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "ad48c0e03f94bd35db41128677a1a51a"
  },
  {
    "url": "javascript/DailyNote/20210823.html",
    "revision": "9d087a79a610b7e9eb43881474414bd8"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "3b5cc83a00c466d9ce8b2bd8b300086a"
  },
  {
    "url": "javascript/index.html",
    "revision": "e21e634d1754d97cfb7c2d3e618d7dfb"
  },
  {
    "url": "LICENSE.html",
    "revision": "2283795507588fd18b23786e15c7c3e1"
  },
  {
    "url": "quanxue.html",
    "revision": "2543308c018c5739427afa6b2e67777f"
  },
  {
    "url": "tag/index.html",
    "revision": "a936dad93b744603d7d1b4082ec65cac"
  },
  {
    "url": "timeline/index.html",
    "revision": "388dcbbb76834d29327a85841aefca75"
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

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
    "revision": "13deb2f3a99e23588ed6a835cf82fb83"
  },
  {
    "url": "about.html",
    "revision": "36372794eec468417cfcf2416b1e748d"
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
    "url": "assets/js/37.82c33860.js",
    "revision": "e1b64636636124e42916ddb11e6b8d38"
  },
  {
    "url": "assets/js/38.3ade883c.js",
    "revision": "289efb7e3ce46f543fd53eefae8ee4a9"
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
    "url": "assets/js/app.cda089e5.js",
    "revision": "0737b01dcadd3107dc739de2a4aff350"
  },
  {
    "url": "categories/index.html",
    "revision": "a05134613efeaf9d2d6ba362bf4a1a03"
  },
  {
    "url": "countup.html",
    "revision": "171f846e9bf31e93347f0acffe720130"
  },
  {
    "url": "css/20210803.html",
    "revision": "61eb23e018c234bff2cf8d703b2ec9f0"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "cc20f034b9bd69e30aab3b6e68838b20"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "ea915154dec574879773c96d46a4dc40"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "8a5a4af0d50267694ae46e91d6f01eee"
  },
  {
    "url": "css/index.html",
    "revision": "90a9d386830a5d920b522e91b72d002f"
  },
  {
    "url": "firstblog.html",
    "revision": "afd383bddaa7703855d4f77e1023b072"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "78746ea91056bf08d328d44940806830"
  },
  {
    "url": "html/index.html",
    "revision": "e558c9d6e9d1a844cc1c25fbaf2e1c48"
  },
  {
    "url": "index.html",
    "revision": "84804cae434e9d60854485c29ad97fd1"
  },
  {
    "url": "interview/20201127.html",
    "revision": "00597f28acbe57665fe6e8d8e1b67c8f"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "797965e75921f581bec5a9a2aa1f9bf6"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "4db4aa379319a374c7c8b82ac8287a76"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "4e6f24705c469780c589f940005b2153"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "f6d4aa0c2c6be3cf4cae9de9d40e2978"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "42af440e7869fa42befa5271c2943329"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "859f68a4c508dea874cce308538bf8f8"
  },
  {
    "url": "interview/index.html",
    "revision": "b9767b42dd75fb9dce5a7e3cb74f9c12"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "df86635a35afc26c486922855c803b2b"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "c6113340de4d32f4bd624902c8f52a76"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "64b5f88fd90dabf949e7f32074446d96"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "907279d603fe03b6f2da2eee5e945d3e"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "119af910f45ad437008ea5a38c9a4502"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "5a8fe6308c5d91fe2273ce3491ee3b2c"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "94998487c8d817d11560a847ec6998a4"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "fe720e9b15478af1f60962cc0b7a99b8"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "4d75160fa28c70ae27c29ccd18e9292f"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "cabd3a578177ca9a62b4103d03acdfbb"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "3b30fcefea883dbfaddba8a264397b1b"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "cc8896d8fe3d8166083b13384c657c80"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "c9dbb5cf7ca35278fb32bf3aa14c9269"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "6017a2485ea4e46310d991ff99cd5e15"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "c56e49754525cda8dd8d3142ceca2aec"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "9928404fb46c804125ea6a82fe65d6f8"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "10d4f61e5284d1857dc8609142eeff5e"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "0e570b23f1cdaa2969618769f2df1115"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "dc0479d9c25d0c329f9dd30a3230b9be"
  },
  {
    "url": "javascript/DailyNote/20210823.html",
    "revision": "3339e59069ca5e82442c1cc326ee3f03"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "bce3d4ba1a9f2a015e672363ba16c67a"
  },
  {
    "url": "javascript/index.html",
    "revision": "8b94c44eb418a85c6d29fe3224679af6"
  },
  {
    "url": "LICENSE.html",
    "revision": "1e857b21538c0f09958ba1cfbacc028c"
  },
  {
    "url": "quanxue.html",
    "revision": "02e1c4f03ee99790be1119897854fc7c"
  },
  {
    "url": "tag/index.html",
    "revision": "ecc0be3fbff5808ee46d3aa110d3b334"
  },
  {
    "url": "timeline/index.html",
    "revision": "2434be0e78703da9fca0e8010348d3cf"
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

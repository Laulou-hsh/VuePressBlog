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
    "revision": "eaa0573f23f626be475f1f453ac84c75"
  },
  {
    "url": "about.html",
    "revision": "379b3dd6f17d7bd678bbdec3c6cbadea"
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
    "url": "assets/js/app.e11b464b.js",
    "revision": "61be8b6d99151ff053c5f6c302980815"
  },
  {
    "url": "categories/index.html",
    "revision": "98a28f187a576695be412269e24a4485"
  },
  {
    "url": "countup.html",
    "revision": "d54e4801a6f1cfc76e6943ce6a91d754"
  },
  {
    "url": "css/20210803.html",
    "revision": "b7fcd12d4a0ebdebfa39ba0cad6e5fe2"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "5762462739aefba6a3d8d3e94b62d38a"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "57c7823d83946c35eb5f15fb618e4d5a"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "1f4a2a9c478ef4bbc93ef52fb4b74522"
  },
  {
    "url": "css/index.html",
    "revision": "baaa1101def07790d9c11d50c01514ad"
  },
  {
    "url": "firstblog.html",
    "revision": "b1824123337acd894bb6cbcc409b1f9b"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "4a6ed04c5cb2458dacde02605f9dba41"
  },
  {
    "url": "html/index.html",
    "revision": "d5f0a2d583935a60a1b6476ed96b2314"
  },
  {
    "url": "index.html",
    "revision": "a1a665d17b73f35be730008f8776d141"
  },
  {
    "url": "interview/20201127.html",
    "revision": "f2f1d9ac0cff643dbc59b74805aed217"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "02d96a0923972a9841e7c8cfcb892de4"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "e15a8d0d91bcc78d4e1201ebfe5ac87e"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "9d2e2d5a38297e15ce6a0dfc8ddecd15"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "6b9fbea21e79349700aed97060146291"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "90dd74a56a1654ae9a9ee1aebfdd5d9d"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "e4d71d9ae1e6af1ee554a01b5e0c5afb"
  },
  {
    "url": "interview/index.html",
    "revision": "d8791a9e78615ee5e18c0408da1e4be2"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "d3802f530f0660879def98a48d7356df"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "996d37a2bdc3d864a5f3cbb5eecdc4df"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "e032c3a31b23f4f185f3faa7bcc04d41"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "78dff8a3bedd7910cf71edb9a2974644"
  },
  {
    "url": "interview/TypeScript/20210903.html",
    "revision": "cc3ed57cd4ea4fac2ecbe81ba645270a"
  },
  {
    "url": "interview/TypeScript/index.html",
    "revision": "cc6670b51e0a23209f16dd278db2224e"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "eea545926f58617708c2477e0b0deb8d"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "6ebc329a3ac73857c12dae0b59c22710"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "e0afdc021c787c804c830760e63b0de5"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "81aa5fb08a0912bb1581db482913f63f"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "18b1781050695cf296cc490f1943ebc7"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "138670a7d597e2407e394328e6e176fc"
  },
  {
    "url": "javascript/algorithm/03_insertionSort.html",
    "revision": "939168ad080e9bfc6fd916e451bc8678"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "de723cbdafa3c8698d7f38b78b5ce2fb"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "0474c5c1073eb408614dfa5587e8a09e"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "c6d07624d871905017a16bde2e960a13"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "aa03240eafc32dd35b331cd5092aadb1"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "a12c80d5d863670e26f877406205a1de"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "ce607de4224a1f77e760875ce8df32c5"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "8cd52000e40f0e4ff8564dce4e76909b"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "1288b6d640a0d1ab58a5cf3c78be8dfe"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "557c02a8806d90a55cbc0962fd03bb57"
  },
  {
    "url": "javascript/DailyNote/20210823.html",
    "revision": "a268c4cc1cfcc0aa2e2ad0fdbadc0163"
  },
  {
    "url": "javascript/DailyNote/20211011.html",
    "revision": "74e47b316b432c1950339758d94ad8d6"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "83203092a65900e25fbbcab325fbd694"
  },
  {
    "url": "javascript/index.html",
    "revision": "1ae8931e1396279082fef23d154560cd"
  },
  {
    "url": "LICENSE.html",
    "revision": "cf7417caefebff359fdce8a7bd0dcdf9"
  },
  {
    "url": "quanxue.html",
    "revision": "e0f03e702bcd78cda009d302f0271deb"
  },
  {
    "url": "tag/index.html",
    "revision": "8b49cc167ed2d18b16a482d71f86274b"
  },
  {
    "url": "timeline/index.html",
    "revision": "d0eb515f8a43668be6066490c42efa1c"
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

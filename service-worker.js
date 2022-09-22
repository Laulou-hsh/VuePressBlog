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
    "revision": "9a22d440e6a49a4d3e51b5e6c7df1f8e"
  },
  {
    "url": "about.html",
    "revision": "6006847590c4a255ddc7d5fc3ade8ce0"
  },
  {
    "url": "assets/css/0.styles.59fdb54f.css",
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
    "url": "assets/js/1.555dab7b.js",
    "revision": "5db8bccee6a222dead88fbf8f3711b21"
  },
  {
    "url": "assets/js/10.14e2b0a2.js",
    "revision": "7ab3edaad125ba850e87e2fd66823880"
  },
  {
    "url": "assets/js/11.0e19a792.js",
    "revision": "dcb299a205b416d9ab45bfc559349b37"
  },
  {
    "url": "assets/js/12.c1c81c95.js",
    "revision": "19e2e650033d7a76b253df750af24fbd"
  },
  {
    "url": "assets/js/13.fb2dedac.js",
    "revision": "8f3a16b5fc7193cf2f06856d2cca22ca"
  },
  {
    "url": "assets/js/14.1a401d2d.js",
    "revision": "52d920f7d9b9ea0a4959cc2a23fc658d"
  },
  {
    "url": "assets/js/15.9ad18de0.js",
    "revision": "f3cbe14d3c534a85a78a22f207e20c4e"
  },
  {
    "url": "assets/js/16.9bafe04c.js",
    "revision": "2a6a1bd80790dfa19181e5a3de26fb3d"
  },
  {
    "url": "assets/js/17.930700ad.js",
    "revision": "beaefd1dbec7ba6b85c5f9b8fed23dc3"
  },
  {
    "url": "assets/js/18.6aff595e.js",
    "revision": "eda28c4e27dc1130f6668ae1b38de5b1"
  },
  {
    "url": "assets/js/19.e2fce9a8.js",
    "revision": "f823f5331b0f549a037accafa9fda7ab"
  },
  {
    "url": "assets/js/20.553e35f8.js",
    "revision": "224fd2c95697d64f59c495ec5db2e556"
  },
  {
    "url": "assets/js/21.77ad092c.js",
    "revision": "9a36cf5237c167718134f44f002c359d"
  },
  {
    "url": "assets/js/22.0cc45fd0.js",
    "revision": "02970efdc2be5a70c80a453491707bb6"
  },
  {
    "url": "assets/js/23.6e56126e.js",
    "revision": "8cc2992b69121b69a74a032ca699cbbc"
  },
  {
    "url": "assets/js/24.7a8d14a0.js",
    "revision": "bc4bf23cd33e6b728f0198d14ac26344"
  },
  {
    "url": "assets/js/25.8cf5c4ae.js",
    "revision": "c0a09e42a1497f5303383db2ec3941c8"
  },
  {
    "url": "assets/js/26.0ac1ca10.js",
    "revision": "c0d8c7ac63bf2e57d0671847e1d2186a"
  },
  {
    "url": "assets/js/27.75b9694c.js",
    "revision": "f26b7a257cb53742c0cb14af6cc14b1e"
  },
  {
    "url": "assets/js/28.828caeb3.js",
    "revision": "d6adb6dd50c54b313796b96cfb082488"
  },
  {
    "url": "assets/js/29.29cf1724.js",
    "revision": "683628271a74ec1ecf090ced12aaaf95"
  },
  {
    "url": "assets/js/3.857047c9.js",
    "revision": "cc45438305360bae6441899f05d5f917"
  },
  {
    "url": "assets/js/30.388fa3f1.js",
    "revision": "69cceb2cbab341c0a294a81bbac6cc63"
  },
  {
    "url": "assets/js/31.404b90bf.js",
    "revision": "eeab8e6d331b9f89e4dd2556e3377de9"
  },
  {
    "url": "assets/js/32.0a46e3d5.js",
    "revision": "84898bafbbdb1dff502d32baa92a3ef9"
  },
  {
    "url": "assets/js/33.a7649c9b.js",
    "revision": "12849c7a492e4c5dc8120499fcdac672"
  },
  {
    "url": "assets/js/34.e6625f67.js",
    "revision": "c84b05a5f19380a506978aa6a847a50f"
  },
  {
    "url": "assets/js/35.5e759b59.js",
    "revision": "35061824e8597315b005e64621c50913"
  },
  {
    "url": "assets/js/36.075cd53a.js",
    "revision": "7257364bbb813fd540802e8311f0ed8c"
  },
  {
    "url": "assets/js/37.ace3c3bc.js",
    "revision": "886df3a8a481ea477f43e09868830411"
  },
  {
    "url": "assets/js/38.fd17bbeb.js",
    "revision": "b43593a2aa65e02e05169369fda274e0"
  },
  {
    "url": "assets/js/39.ddc4a502.js",
    "revision": "77e5d19097ddd8de961bfea34900e0e4"
  },
  {
    "url": "assets/js/4.9051bf9b.js",
    "revision": "bff2a1c66489febe2b4f7e1b68f84af4"
  },
  {
    "url": "assets/js/40.f2c47b97.js",
    "revision": "12e305b278798b7fccecfcdcd6147a1d"
  },
  {
    "url": "assets/js/41.ded861c8.js",
    "revision": "78d12a2ee4b7db0268d8c3beffefbeda"
  },
  {
    "url": "assets/js/42.724e88c7.js",
    "revision": "674a12b76012f62253ee4bada7203e8f"
  },
  {
    "url": "assets/js/43.544d89fd.js",
    "revision": "01d6d0586b58e1586aea1f108fc4fbdf"
  },
  {
    "url": "assets/js/44.26f14748.js",
    "revision": "c076607d8a4c3df80945185c29b8e117"
  },
  {
    "url": "assets/js/45.8dc12b82.js",
    "revision": "bef37a267c30e80dd82f44e0dd1d02aa"
  },
  {
    "url": "assets/js/46.89283609.js",
    "revision": "873d2c74123cad9efb33736ba4a90053"
  },
  {
    "url": "assets/js/47.bf003fac.js",
    "revision": "5a60e5450c02eb313731623955d8a890"
  },
  {
    "url": "assets/js/48.4fe299e0.js",
    "revision": "68f73a1cbd39293305894d9d063f80e8"
  },
  {
    "url": "assets/js/49.1ddc8f88.js",
    "revision": "1eac2f0e6592a28968eeb63a878d3768"
  },
  {
    "url": "assets/js/5.957f4380.js",
    "revision": "9d5ca5f5a075944ce865174c8dc453e7"
  },
  {
    "url": "assets/js/50.6f44e98c.js",
    "revision": "7f14585ee3df666c7b039a7dc78e8479"
  },
  {
    "url": "assets/js/51.0bb9ebd4.js",
    "revision": "1227a860f0db331731ae78ce9894153d"
  },
  {
    "url": "assets/js/52.99387066.js",
    "revision": "b720794982cb6029947129414e46df83"
  },
  {
    "url": "assets/js/53.b764e03a.js",
    "revision": "3882a7a1349e430cfa063ac9ee6b6341"
  },
  {
    "url": "assets/js/54.b0b7e170.js",
    "revision": "9fa7eb94f559dc17926674e03f23bf25"
  },
  {
    "url": "assets/js/55.8ffd520a.js",
    "revision": "6b72efe8cbedc461a3047c298b0824d7"
  },
  {
    "url": "assets/js/56.15c995a1.js",
    "revision": "f683c50ea171b4fd03a9a839d7c35bdb"
  },
  {
    "url": "assets/js/57.f55cebee.js",
    "revision": "d35d23ca81950d7a41b15e98d3d4ab54"
  },
  {
    "url": "assets/js/58.511104f5.js",
    "revision": "d9d73d7934efb05417a11423771a5cc6"
  },
  {
    "url": "assets/js/59.3ae56404.js",
    "revision": "90dc92c17c92de4c4a56ef0c4209a61f"
  },
  {
    "url": "assets/js/6.77ad91e3.js",
    "revision": "30206d7da668448e17700263359d976c"
  },
  {
    "url": "assets/js/60.b344d597.js",
    "revision": "e1fa836f744f986a64c4065b053a959e"
  },
  {
    "url": "assets/js/61.05a8d642.js",
    "revision": "b5175b557e069b317a9d453ff63d84a1"
  },
  {
    "url": "assets/js/7.08879808.js",
    "revision": "89e7b8c197529bda1274a5345685764c"
  },
  {
    "url": "assets/js/8.98718c10.js",
    "revision": "203e354c6292661a696d0d3873bcdfba"
  },
  {
    "url": "assets/js/9.66a2c392.js",
    "revision": "3ecd415a763aaefb28acc7ab2b5bd5f1"
  },
  {
    "url": "assets/js/app.e8e17445.js",
    "revision": "cde8a26058e8a099533ccf0b188f5c64"
  },
  {
    "url": "categories/index.html",
    "revision": "1831790481f9edf8f09ae7427b33b68d"
  },
  {
    "url": "countup.html",
    "revision": "70f77052f7925337b916f2aa98016c37"
  },
  {
    "url": "css/20210803.html",
    "revision": "492853048ffcff7a213f6ac2ecbfc09b"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "e3e87d70b63a81ec806d657371db219b"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "345c9b2062255e61cbde3ae7e1344412"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "4823895ed74eacd3cfea6830625d2599"
  },
  {
    "url": "css/index.html",
    "revision": "b538fc22924d70cb3fff32ec9548ce72"
  },
  {
    "url": "firstblog.html",
    "revision": "66e91d948f8e6e318ccdf16cfcf38637"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "60fb14a4cd9de87bda763ebeb5c8f702"
  },
  {
    "url": "html/index.html",
    "revision": "7311fe0dc330b494cdb21c67c0af22fc"
  },
  {
    "url": "index.html",
    "revision": "c00286454280f4e46b569e77350aec06"
  },
  {
    "url": "interview/20201127.html",
    "revision": "9e6d942639b2e8702f07ea1621eff009"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "d6ac003140fc12613758af0c127c5511"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "05f0b0288ce11bd582320e56be84f8f3"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "d9aaafee8a4f49759b4233644e4c62f5"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "f4125f1b5eb871ba6e70b3af4d39648a"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "bfd10be7af8cc7ab684eb29ea8cce1f3"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "a71bfc73bb9910c8bbf336cc1611c869"
  },
  {
    "url": "interview/index.html",
    "revision": "f73cbf8819f88cc217ca8341497a53cf"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "a346382536d28cdd80ea5e2da737ef95"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "db975450393711023a148e494c68abd3"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "133f475f78b8dc98ba00b2337b9789f0"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "00f61ee5d1a23ce9ece94b2aee7a23b6"
  },
  {
    "url": "interview/TypeScript/20210903.html",
    "revision": "8c3b0706c456a0a26d56545009cf7137"
  },
  {
    "url": "interview/TypeScript/index.html",
    "revision": "37dd5bf754eec8b67d62e8a187422989"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "77ecb248259bf288edb502ba9d0486fa"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "dc7a5d87f4ead52cd6a5cc48e902896d"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "f3be547a7e7bf0bd8d6d8f25835690cb"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "f4ed5eac43a12c0292ec4adbc5e5bec7"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "c42b3481e7667db0c3969beb05cf8679"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "1d0fa23de1a8d26b0aa80d6effea38c7"
  },
  {
    "url": "javascript/algorithm/03_insertionSort.html",
    "revision": "92bb1156f9a7e39ed5518385e65e4b62"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "fba89b50bf32ca81b7e9f2fc8cbf0bdb"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "c6daed9cba693bd157a24bfee3706e26"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "d61b24bda42345819779aeae83b51bf8"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "d008e6f7a9d01b8536f73cb874cd67a0"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "477fd054ab76f3b2f3fe433523f0d71d"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "b0cad4892461a759c6d593d12038ca6e"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "a35f72688c40cf93ccde3715374f1577"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "71ee537ecd8805b3a146fa35d33fb4e9"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "522be7886b717080215618923dae1bab"
  },
  {
    "url": "javascript/DailyNote/20210823.html",
    "revision": "5a43ee1f0eb64bc9c1d00a0d34bcf5c6"
  },
  {
    "url": "javascript/DailyNote/20211011.html",
    "revision": "3ff72434165420783f3ea7e551f1adcf"
  },
  {
    "url": "javascript/DailyNote/20220922.html",
    "revision": "7419ccd4f11d79e558a442848f71153d"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "0a77bae1efa5dc988b4fe6129603cccf"
  },
  {
    "url": "javascript/index.html",
    "revision": "1db5d7f46b9aa40f2bdd3245dcb584e0"
  },
  {
    "url": "LICENSE.html",
    "revision": "3409c6f399716cdd7a911f45f4141121"
  },
  {
    "url": "quanxue.html",
    "revision": "0784c41b02582ff6f4c9b7ffe198d033"
  },
  {
    "url": "tag/index.html",
    "revision": "0aa97f1f0ea2462a06e93a8410e23908"
  },
  {
    "url": "timeline/index.html",
    "revision": "d3a05c031b91ec6978e61d0c4567f660"
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

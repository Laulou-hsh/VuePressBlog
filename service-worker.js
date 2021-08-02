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
    "revision": "9b74d5247a0db691f44ddee8aaeeec4b"
  },
  {
    "url": "about.html",
    "revision": "547a4419f9e55bb12c111e987d932600"
  },
  {
    "url": "assets/css/0.styles.a0338b37.css",
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
    "url": "assets/js/1.2301fa1c.js",
    "revision": "36937f9a3db04c9a3c00f6f60bbb0df5"
  },
  {
    "url": "assets/js/10.c3e2b1a3.js",
    "revision": "ab002072f7cbe3e2a2e71a5e7edf5be7"
  },
  {
    "url": "assets/js/11.c34e9a35.js",
    "revision": "f40a84dead4e2dc9669bf7896161ba5d"
  },
  {
    "url": "assets/js/12.8448fc60.js",
    "revision": "c4f805f4ba77c18c73162488bb174c2e"
  },
  {
    "url": "assets/js/13.6363d20b.js",
    "revision": "cc8db06d9c52ba098a19cdf101cfba05"
  },
  {
    "url": "assets/js/14.d2bf16af.js",
    "revision": "095032ae38f772cea74bdc1b3e6431d2"
  },
  {
    "url": "assets/js/15.1ffeb8a2.js",
    "revision": "63f28bf8c23a338f7ec04c0c3db8aed1"
  },
  {
    "url": "assets/js/16.d9991b79.js",
    "revision": "e58f765aaf7ebf00da05cc0e8e2e090b"
  },
  {
    "url": "assets/js/17.bdfe269f.js",
    "revision": "f3eeded1924da544f41e13e11ec06cbb"
  },
  {
    "url": "assets/js/18.ebd6323a.js",
    "revision": "595b6ef85839eea86b3f52885fe31919"
  },
  {
    "url": "assets/js/19.7a5b3d47.js",
    "revision": "60fae59b0796da9305fa9d6b15bd2eb8"
  },
  {
    "url": "assets/js/20.2722826a.js",
    "revision": "f6507544879f23b07eaaad0436c9a03c"
  },
  {
    "url": "assets/js/21.ca039e3d.js",
    "revision": "926a982054ce74b158ee8811ddda66e4"
  },
  {
    "url": "assets/js/22.f9587ec5.js",
    "revision": "1d5ad1053d4952c1d7e9b5eeda0655b8"
  },
  {
    "url": "assets/js/23.254889d3.js",
    "revision": "e5bd0c1368f54ac751d2d676eee426a8"
  },
  {
    "url": "assets/js/24.d49c05fe.js",
    "revision": "3a501b8d81b0792234072aac8eb0e9fe"
  },
  {
    "url": "assets/js/25.92b9e569.js",
    "revision": "a6a580725911ed3d37175c87c4bf6310"
  },
  {
    "url": "assets/js/26.47af033c.js",
    "revision": "73aa14dbbb972a55660214d64b4c63f8"
  },
  {
    "url": "assets/js/27.526846ec.js",
    "revision": "44d022c65801dc7b2ccd06747cfd3304"
  },
  {
    "url": "assets/js/28.f95107b9.js",
    "revision": "3fd4ba08f93dd0985bf6b7d4aabead22"
  },
  {
    "url": "assets/js/29.9ef6c4af.js",
    "revision": "8b365aad6e9292af5439cd03bfa3993d"
  },
  {
    "url": "assets/js/3.ca789934.js",
    "revision": "3a01d644fba1eed3059d4beab1adbd2b"
  },
  {
    "url": "assets/js/30.fe620bb4.js",
    "revision": "65e57b4354c10549f67270261463a592"
  },
  {
    "url": "assets/js/31.20de6502.js",
    "revision": "e5edb3367c91ed75294e6cc3bf92cd8c"
  },
  {
    "url": "assets/js/32.1b5bf695.js",
    "revision": "496d8fd8a52f55adc67ffa3158c0cee0"
  },
  {
    "url": "assets/js/33.09e5724a.js",
    "revision": "8afa4091348b83d81ab1c3d38d7eabf6"
  },
  {
    "url": "assets/js/34.d3bfe4ee.js",
    "revision": "4bb5daa2e00d5a8e61c7472bd29f0bf2"
  },
  {
    "url": "assets/js/35.702d0d51.js",
    "revision": "1b6ee2f6d698fd9d1ec5adbeee0ef78b"
  },
  {
    "url": "assets/js/36.7646fe75.js",
    "revision": "05f6047b222db8c06508f57c3d05c8cf"
  },
  {
    "url": "assets/js/37.6a786e77.js",
    "revision": "5dde1ad1c325f0386964ad1863a66265"
  },
  {
    "url": "assets/js/38.ed019211.js",
    "revision": "bae25910f6ef714c5e263711f9fa1969"
  },
  {
    "url": "assets/js/39.03cec8ad.js",
    "revision": "04140370c15eaa5bfada56a7f9fb97d0"
  },
  {
    "url": "assets/js/4.62791cf3.js",
    "revision": "3b8a3d2da5e6c2edb6115b818d808c0e"
  },
  {
    "url": "assets/js/40.52646ef4.js",
    "revision": "4e594fde0c11590889d9fb1ee343966c"
  },
  {
    "url": "assets/js/41.4e581f30.js",
    "revision": "009c68d57a404e433e73cea47deeab3b"
  },
  {
    "url": "assets/js/42.2584ae27.js",
    "revision": "3c36849ef2a92c8be459f3688ed733c0"
  },
  {
    "url": "assets/js/43.c4505b72.js",
    "revision": "42f3ac31eff5ac56b442e78947d600de"
  },
  {
    "url": "assets/js/44.bc9e23b5.js",
    "revision": "ab91c922bd9691d0443b96956b722e3d"
  },
  {
    "url": "assets/js/45.d0465f27.js",
    "revision": "b136ab4c448eb0d491fccfa1ecb24dfd"
  },
  {
    "url": "assets/js/46.66ec2d8c.js",
    "revision": "959a272aa330b88bf95356dbcf5a1efb"
  },
  {
    "url": "assets/js/47.7b342736.js",
    "revision": "4cdb90d50a825122c3e5dad65c0d59d6"
  },
  {
    "url": "assets/js/48.659b1e8c.js",
    "revision": "21ee681223e5e71e3444d1308ece2f96"
  },
  {
    "url": "assets/js/49.3ff4b8d4.js",
    "revision": "cbe7bbf9f73e6befad5c52769e059bf2"
  },
  {
    "url": "assets/js/5.269958df.js",
    "revision": "56649e4006cbac7dd9a5642364e2c0d0"
  },
  {
    "url": "assets/js/50.34e86b51.js",
    "revision": "0423b7f89694cd8d2c6de66226f9e859"
  },
  {
    "url": "assets/js/51.1e0f65e4.js",
    "revision": "f41a08af7d9ebb4d5ede95d735c8925f"
  },
  {
    "url": "assets/js/52.832e2a29.js",
    "revision": "06bf0db18f51532a542b86b1e9f73147"
  },
  {
    "url": "assets/js/53.e3b94b11.js",
    "revision": "9ace22942469d6de3f3f5fe30b6ae96d"
  },
  {
    "url": "assets/js/54.1ce586b7.js",
    "revision": "99d8d0694d4a6e2bd70f7910a4df74d1"
  },
  {
    "url": "assets/js/55.3bde2f9a.js",
    "revision": "0607839ca796c5fe8ff3c1b67658c98d"
  },
  {
    "url": "assets/js/6.d3fbdfb0.js",
    "revision": "ec8083f5aef2979025eb19c3d4b68606"
  },
  {
    "url": "assets/js/7.36b93e2c.js",
    "revision": "e5a5186d2f4c38a72f3714caf0b465ed"
  },
  {
    "url": "assets/js/8.062ae001.js",
    "revision": "939c0559bb713618871d8af5998a0142"
  },
  {
    "url": "assets/js/9.b460c3a8.js",
    "revision": "362d34be0c8546f8e777a8878b0ef96f"
  },
  {
    "url": "assets/js/app.ec1a32e7.js",
    "revision": "d8a31a5754f3a69690b2954e25492624"
  },
  {
    "url": "categories/index.html",
    "revision": "44f28ab9d96124a701e4bb631fde65cd"
  },
  {
    "url": "countup.html",
    "revision": "b67df2ff041d535901de7f8291f856f9"
  },
  {
    "url": "css/20210803.html",
    "revision": "9d173fa9c0cda0ec4cf7c490a9099b78"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "3d52bcd98eabfe2ae3613a82a1c91b0c"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "42fcb758a8e60827e902fe26e5a50404"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "03665ed1a076e12082046dd724270403"
  },
  {
    "url": "css/index.html",
    "revision": "5bf6f796976eb541febee1bf362a2243"
  },
  {
    "url": "firstblog.html",
    "revision": "500f61adc5812cb3108faf48564968ed"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "f92b9afb38f2f699480b7146325e560b"
  },
  {
    "url": "html/index.html",
    "revision": "777ddcbe87c836327edb50bba9cfb884"
  },
  {
    "url": "index.html",
    "revision": "0e53b6406e75fa5b73848ca0c455bc2c"
  },
  {
    "url": "interview/20201127.html",
    "revision": "d5a14038c818aad612deb754fc53d2f7"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "8e6f2402eae5d12681821abcb6fa2c0c"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "34933374591e3c0df8723d8b35608295"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "11ac16a5b65094b36bb07c1b07b1a072"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "e7928e5f3e353b8ff613e1bda659fc77"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "58dcef1bd8d31ff8c3e890c8c8545aa2"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "12b1a8cf9ae9bdbbbd657e8e75cc7c5c"
  },
  {
    "url": "interview/index.html",
    "revision": "2505268ab1c8667a85a078e462a9dd2a"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "86148aec52ef652a8aa9e743d56f36c1"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "6ef2fa268cdde601bcb05e9abea9df22"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "9cd86309ba7d0da965d545125c54258d"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "fdc65b72bfacd4facde4347fa0eb8ea7"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "7c9eebfb60adb12bbe444b28d30cad2a"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "6653bd338f774183bdaf6796b9a0aaaf"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "0908acddabcc54b4334d81f9afa54f45"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "fd754fc134e4689900ec8575a6e68a43"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "e85313496a3db20d9f5db443179bcdad"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "ec38fe2a31305d0d31317587b5fa8bae"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "f65156590cfb4e8314f263ba0dfdd132"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "afe6a860837edd17ce5800c34530a801"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "fee368345a9518b0bbd6555dfe16525c"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "7a682bc59244df573ae95acc628f9aed"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "d2cb49c23443b2e387147e7f1c04d9e9"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "1d832240e86f888dac25ef2caacd912e"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "f559d0803f422e7ea3e60da4372eb3d0"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "4bdb67611f296b2d2422e20c67e4782b"
  },
  {
    "url": "javascript/DailyNote/20210703.html",
    "revision": "ae4802d010113ced4abf49d3ce9b2db2"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "c07bb72f86508ac9e49a85bca4a260a3"
  },
  {
    "url": "javascript/index.html",
    "revision": "0a5667a29279cc27a37cdb0da6ce4c90"
  },
  {
    "url": "LICENSE.html",
    "revision": "f0f64bcef38e8aac7e0aaa2a1c3c70b1"
  },
  {
    "url": "quanxue.html",
    "revision": "b8353964f3f7037d1be8f6295712d4ec"
  },
  {
    "url": "tag/index.html",
    "revision": "f76458f827b323abc388c8d6a6bcffe9"
  },
  {
    "url": "timeline/index.html",
    "revision": "94f0690b16d0a4f8eee946dbab874cc8"
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

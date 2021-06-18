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
    "revision": "126ed8486625fe940675b685d6468294"
  },
  {
    "url": "about.html",
    "revision": "d2bda73d92c6e7f6b54c314238e31524"
  },
  {
    "url": "assets/css/0.styles.97f3ccc5.css",
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
    "url": "assets/js/1.44c5f9f9.js",
    "revision": "773f7d8d2b1367d50f0551976b837209"
  },
  {
    "url": "assets/js/10.90249a55.js",
    "revision": "e7ff2cd729563cd4b798f9c07d4f7a97"
  },
  {
    "url": "assets/js/11.8ae0c9a6.js",
    "revision": "fae53e47f3d4477e423e08d3afa3a747"
  },
  {
    "url": "assets/js/12.27b44057.js",
    "revision": "5d72ca8dcb4168351b7aff7c83380bb8"
  },
  {
    "url": "assets/js/13.0a478474.js",
    "revision": "79223e3409088f6a2aa029707e4dee65"
  },
  {
    "url": "assets/js/14.6c0d93f9.js",
    "revision": "ebd823d7aa14862ec5ae2b8117462ea8"
  },
  {
    "url": "assets/js/15.dab7638f.js",
    "revision": "b1cdf1fe7ea62addf89d11acc2f69ebd"
  },
  {
    "url": "assets/js/16.2cf2142e.js",
    "revision": "9a610fac2a15a5cb67d0e41b339af1c0"
  },
  {
    "url": "assets/js/17.5752f1f6.js",
    "revision": "8f0cf73e636da27405f021533c017fce"
  },
  {
    "url": "assets/js/18.494caca7.js",
    "revision": "449d442dc06064120a79fb4d176c394b"
  },
  {
    "url": "assets/js/19.d9d73c9b.js",
    "revision": "f87e936fe48c31950fda4cfd743909a0"
  },
  {
    "url": "assets/js/20.9ba6d00d.js",
    "revision": "83f6ac62200e9aca407eec146b80056f"
  },
  {
    "url": "assets/js/21.e2635230.js",
    "revision": "9c2d290c70dce264040cca57a9be91b1"
  },
  {
    "url": "assets/js/22.7119748a.js",
    "revision": "2ab1b42ef65e303bfc3f2e3d89a88bd3"
  },
  {
    "url": "assets/js/23.e2ae441b.js",
    "revision": "076a8c7c0f11408c66c005e19d33da19"
  },
  {
    "url": "assets/js/24.a95d6702.js",
    "revision": "017af0c2a153a7349a6cc7662aac3d07"
  },
  {
    "url": "assets/js/25.04739e87.js",
    "revision": "8724ccb73e382efcaf6f42ac436b4511"
  },
  {
    "url": "assets/js/26.3ebb7b00.js",
    "revision": "d795dd71e9471d64b3f7c2b641fd2a47"
  },
  {
    "url": "assets/js/27.22c48070.js",
    "revision": "ffff8b2727db14b3b831b6cc5de598f4"
  },
  {
    "url": "assets/js/28.39c193be.js",
    "revision": "24501b2d1019fe4a8c247fdec1641904"
  },
  {
    "url": "assets/js/29.7fd68d86.js",
    "revision": "2977ac6e2ee90832d494d67a9ee2975b"
  },
  {
    "url": "assets/js/3.4bab2ecf.js",
    "revision": "b5529634d80976a2bd408608c37edbbe"
  },
  {
    "url": "assets/js/30.aa8852f2.js",
    "revision": "39887014b5a96ab16607ab5bde9e226d"
  },
  {
    "url": "assets/js/31.a56e7bec.js",
    "revision": "925f09fbda1ff5f0b876b71bb23918ec"
  },
  {
    "url": "assets/js/32.d452c690.js",
    "revision": "0162c387637fd5585d3845fb9fc1da91"
  },
  {
    "url": "assets/js/33.d32a5cf5.js",
    "revision": "d0dc091c2d5711443b386b78a709b0c5"
  },
  {
    "url": "assets/js/34.8075f6eb.js",
    "revision": "874ae7cbe28a0047da13a2380b5bbf3e"
  },
  {
    "url": "assets/js/35.40b8f0e8.js",
    "revision": "7c14780adad0a25666be9562587ee194"
  },
  {
    "url": "assets/js/36.05053a67.js",
    "revision": "45ea1feabb5f2f116e65141ecc65069d"
  },
  {
    "url": "assets/js/37.c08a0aae.js",
    "revision": "a983491d00d9e4ec522eac095cefc13c"
  },
  {
    "url": "assets/js/38.f911f18b.js",
    "revision": "51736bd8195e2be5048e516d736f7bf8"
  },
  {
    "url": "assets/js/39.e96fd14e.js",
    "revision": "38170d5099d7d8a0a39ba82f909cd467"
  },
  {
    "url": "assets/js/4.075d9a7b.js",
    "revision": "b5683374410f725b8f5ddaae8ad450ce"
  },
  {
    "url": "assets/js/40.9a063014.js",
    "revision": "012cabf5177b7d64164ae2609f386c63"
  },
  {
    "url": "assets/js/41.3819719d.js",
    "revision": "f47483d16545802de3f48db78eaec8e4"
  },
  {
    "url": "assets/js/42.88f32546.js",
    "revision": "8aa4070a921bd558c87fb3d34a067bfc"
  },
  {
    "url": "assets/js/43.c9eaab7f.js",
    "revision": "bd065d803b56bd10868bfd7070c101c0"
  },
  {
    "url": "assets/js/44.23d50170.js",
    "revision": "1b4be1c027a36fe737ddb13058ca3620"
  },
  {
    "url": "assets/js/45.0f7538dd.js",
    "revision": "e3ac7d49f962e74d8d0f82ac9c3eb595"
  },
  {
    "url": "assets/js/46.6703d8df.js",
    "revision": "d47ac83429dffaecf46bc3fa0ef4abfd"
  },
  {
    "url": "assets/js/47.ed9306de.js",
    "revision": "664f1c046ce83f8131ebd06a025b7b7d"
  },
  {
    "url": "assets/js/48.99de1fbe.js",
    "revision": "295d3c7328e1c9a0ed73a3d45332b235"
  },
  {
    "url": "assets/js/49.faaf4df2.js",
    "revision": "00d005aab08359e5aa1536861a4b7e5c"
  },
  {
    "url": "assets/js/5.578e0fb1.js",
    "revision": "734689fce72e9cee97fd597bd9d91f91"
  },
  {
    "url": "assets/js/50.8f66ae15.js",
    "revision": "0218ce0152e1c1c8f121cb3bd6c0f279"
  },
  {
    "url": "assets/js/51.8a8d6eeb.js",
    "revision": "0709e781e77157b0e84ff57c69e8a744"
  },
  {
    "url": "assets/js/52.08c7ded2.js",
    "revision": "d7f6dd5a25e1b66418b3c6ad72aab5b3"
  },
  {
    "url": "assets/js/53.60e26313.js",
    "revision": "d9203e758c6cf67a57bf3e1d6545a8c0"
  },
  {
    "url": "assets/js/6.22deb319.js",
    "revision": "f62989c482feb2eee83cfbac8c1b7835"
  },
  {
    "url": "assets/js/7.b5430a37.js",
    "revision": "10ce9a856c53e37ae21d9ea8c596ae74"
  },
  {
    "url": "assets/js/8.bf94a756.js",
    "revision": "4dc45db6e14cd056e914e8d0ec1d4e88"
  },
  {
    "url": "assets/js/9.e8fdf86c.js",
    "revision": "cb2e85ec76c4c4263cb9454d5f7d72a4"
  },
  {
    "url": "assets/js/app.b96b5969.js",
    "revision": "67718ae2a74747cafe96751a720bda68"
  },
  {
    "url": "categories/index.html",
    "revision": "04d9e08b62a6447ecd3f2067dcf5de28"
  },
  {
    "url": "countup.html",
    "revision": "fc1e643fdb35e05201c969e670e14d05"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "64ea6c341378f106ed97cf1b08648e07"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "1d4973a1d06b9f2c6fabcf83e9bddd55"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "ef72bbfdb98a275b357c4cdb35326977"
  },
  {
    "url": "css/index.html",
    "revision": "cd5ff122ba1a967efae1e7ed602d6d6c"
  },
  {
    "url": "firstblog.html",
    "revision": "03113efd3c8e802970f56f809110a762"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "509ba12fa575eac7ebaa00f7bc7dfb17"
  },
  {
    "url": "html/index.html",
    "revision": "39731763a18230b2f9590bb49f6a9a90"
  },
  {
    "url": "index.html",
    "revision": "7989b4ad0e739347073ba7f306d053e9"
  },
  {
    "url": "interview/20201127.html",
    "revision": "92f1ad08ca6eaa6afa677521e8156eb2"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "6bc58f5033420016d138c8774c2ab8bb"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "541548816735f39e6167d60e32cddb89"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "353d9c9f4c38717ef7afbf65db6f78ad"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "f80ed1e038da43925295eb2c05849739"
  },
  {
    "url": "interview/ES6/20210613.html",
    "revision": "540db06f6b94366d2f80bb07ab1bf5f2"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "7a2a4ab483665fec838ad2a32a842dba"
  },
  {
    "url": "interview/index.html",
    "revision": "cc908b81624f174dad832b804b3848e0"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "0451f3c8c478b47b14aabd5949950410"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "14600dace7f7e31d14847742f5ad783c"
  },
  {
    "url": "interview/Nodejs/20210605.html",
    "revision": "4eb6ae404bf643af308f544a2bf70665"
  },
  {
    "url": "interview/Nodejs/index.html",
    "revision": "f0add1e89fe7f14c14cc69df66434a59"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "8ae3a86fbc12a45d0289aac2c29b0a50"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "20b2b772a95774d0e10d09309bed73eb"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "404b8d08f2ebc24d63f7b422cb73a70a"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "a037be7e63770ba5bae1abc94699dfde"
  },
  {
    "url": "javascript/algorithm/01_bubbleSort.html",
    "revision": "c166847b0df65a99b1e0053889b495c9"
  },
  {
    "url": "javascript/algorithm/02_selectionSort.html",
    "revision": "d7f9732f6d589fd0c62ff11948d81750"
  },
  {
    "url": "javascript/algorithm/index.html",
    "revision": "8edcb13912754bba9a9631ee71ed3cc9"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "3260df05d903ab5c593e1add735ac49f"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "9bc6f1216589db3f6b0206242625cfc8"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "380ee5e646ced84d814eaf1a6127586c"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "ad6d5163eef335addc2c9419ba23d3f3"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "9613560bd84b384385ef4382e5dc1c36"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "a40814f280a44536fbbdfaf5650c90f8"
  },
  {
    "url": "javascript/DailyNote/20210618.html",
    "revision": "ea973a9401ba87203a9daa1a9a5641ae"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "822cd9dde51f1b460413e6eb7c98f839"
  },
  {
    "url": "javascript/index.html",
    "revision": "6c5243676020bb18c11112ca17b824be"
  },
  {
    "url": "LICENSE.html",
    "revision": "46e6d6bede28a6ff856c06e75dd2b76e"
  },
  {
    "url": "quanxue.html",
    "revision": "ee9985ed6e13ad85d5a05a0e3735ee8e"
  },
  {
    "url": "tag/index.html",
    "revision": "b313e82ad2225c70586d61451969ba23"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba17529c2c8f70d042b4388f5fd64cb6"
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

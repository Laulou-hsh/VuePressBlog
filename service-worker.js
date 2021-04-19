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
    "revision": "ab4c85948fa9d620d4f757f806bdf22c"
  },
  {
    "url": "about.html",
    "revision": "eef552520e8d520ee93812297d63562b"
  },
  {
    "url": "about1.html",
    "revision": "036df937e5bbd17f704ae7888325bf0b"
  },
  {
    "url": "about2.html",
    "revision": "e417a64ce203a4fa00e9fc8aa5662476"
  },
  {
    "url": "about3.html",
    "revision": "4e360b1f0779d09944d6dacdc397f471"
  },
  {
    "url": "about4.html",
    "revision": "2e6f0a896122a7c6923302e331ae8126"
  },
  {
    "url": "assets/css/0.styles.db1aed5e.css",
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
    "url": "assets/js/1.e361d9d2.js",
    "revision": "73eebea0d58d40ff9bb5c38aa7c3b5a3"
  },
  {
    "url": "assets/js/10.257786ce.js",
    "revision": "98eac2bc2ef0cf90f46ce2e5fac1b1e0"
  },
  {
    "url": "assets/js/11.01b548ba.js",
    "revision": "691202e2eade5d9f22e19627ce1a6592"
  },
  {
    "url": "assets/js/12.f8bab9e6.js",
    "revision": "4c5dfa1df27ff7b68f1f50b9173c7f0d"
  },
  {
    "url": "assets/js/13.8fe335c8.js",
    "revision": "7ed336650ccfeb9bcb451a0c804cadda"
  },
  {
    "url": "assets/js/14.901eaa31.js",
    "revision": "50e353dc53eba471690edc81129a54a7"
  },
  {
    "url": "assets/js/15.0daaaef4.js",
    "revision": "66637f1ae3b381185f0762151698ad90"
  },
  {
    "url": "assets/js/16.8b2cb8ec.js",
    "revision": "63e3fe25c09d69e749e922eec58a2234"
  },
  {
    "url": "assets/js/17.0fc559d7.js",
    "revision": "71f97a320f6e94956815c84613fc96d6"
  },
  {
    "url": "assets/js/18.e7c22cad.js",
    "revision": "a882566e03947f7cc3ff544167038d0d"
  },
  {
    "url": "assets/js/19.14498346.js",
    "revision": "fc0b17b11d7ca1c57569c69c27509c1a"
  },
  {
    "url": "assets/js/20.f6a8b95b.js",
    "revision": "469df0cec6ef54c208b15c92f0bbed39"
  },
  {
    "url": "assets/js/21.595fdea8.js",
    "revision": "9ffd25af5ca12307fe6111d5ffa0a208"
  },
  {
    "url": "assets/js/22.77b77295.js",
    "revision": "2fec15c5139575d480d9ef9d1268ee39"
  },
  {
    "url": "assets/js/23.e9207c46.js",
    "revision": "136832f10f96c513fb8541d309f330d6"
  },
  {
    "url": "assets/js/24.d29c7ff6.js",
    "revision": "f5734d9b04193dd0526e515dc2de977a"
  },
  {
    "url": "assets/js/25.7bf6ee10.js",
    "revision": "42ecdc08ed9b03796eb9204b35d67aae"
  },
  {
    "url": "assets/js/26.30df686b.js",
    "revision": "0663ff9f981d578ec9d24d9b838dd581"
  },
  {
    "url": "assets/js/27.f0bdea9e.js",
    "revision": "c8509bdf60a17ac36b362f0973d3d10b"
  },
  {
    "url": "assets/js/28.5a9459e4.js",
    "revision": "fdbbc3e71cbf7ab4ceedd3520b31f360"
  },
  {
    "url": "assets/js/29.7bc0776c.js",
    "revision": "91fc38513544718924a4cb86344811d1"
  },
  {
    "url": "assets/js/3.e2def05a.js",
    "revision": "a53422bc97035d4dfa95cad387438482"
  },
  {
    "url": "assets/js/30.768a3b66.js",
    "revision": "2416d2510eafe9fc6f4882b62c5f1607"
  },
  {
    "url": "assets/js/31.1fbd8b0e.js",
    "revision": "c9db060ddfb464ec26017fedfe2c5aff"
  },
  {
    "url": "assets/js/32.ffb8485e.js",
    "revision": "902685ced8a23f850485909945859c2f"
  },
  {
    "url": "assets/js/33.138867cf.js",
    "revision": "1fdca617ca1d9c1f2ceb5dff0e1842c4"
  },
  {
    "url": "assets/js/34.2c315aa4.js",
    "revision": "1ae3791a6b08803e61bcd30a9e360746"
  },
  {
    "url": "assets/js/35.39128a44.js",
    "revision": "8731aa7a1de1c3bd3c283d7cebcb6344"
  },
  {
    "url": "assets/js/36.8fa01946.js",
    "revision": "106724c4abe2658d7996d229ef5fc5ae"
  },
  {
    "url": "assets/js/37.62402892.js",
    "revision": "13a311d14ac9b9be7dcf2a7411997201"
  },
  {
    "url": "assets/js/38.df89629a.js",
    "revision": "d326e49b489a5d6a5d14de3a598733b5"
  },
  {
    "url": "assets/js/39.e914944a.js",
    "revision": "53fe6d2fbdc3d221767fd086be216924"
  },
  {
    "url": "assets/js/4.6a572417.js",
    "revision": "f5bbee294eb47e5412e32f728afd9081"
  },
  {
    "url": "assets/js/40.b06d9958.js",
    "revision": "9369627e5f028067bd2e38945343ef14"
  },
  {
    "url": "assets/js/41.43d0fc62.js",
    "revision": "1b208d0a29ee9a283ad1ee1a4f5d1cd3"
  },
  {
    "url": "assets/js/42.1239d02f.js",
    "revision": "4132c960b4503018d9eb6c790e425051"
  },
  {
    "url": "assets/js/43.59fe52df.js",
    "revision": "c70ea87c44220b2796769e08fa617ef2"
  },
  {
    "url": "assets/js/44.784b0123.js",
    "revision": "72d8e4eeb5e2ee902ee2a0bf9ae71416"
  },
  {
    "url": "assets/js/45.bb74a28e.js",
    "revision": "b568657bbe92b797b0ca5678d216deff"
  },
  {
    "url": "assets/js/46.56a89519.js",
    "revision": "7eb3bf01ddc7802d4f9a6808bf89cc86"
  },
  {
    "url": "assets/js/47.e86f986f.js",
    "revision": "443a57c1db3e649a97a07b2b2e18472a"
  },
  {
    "url": "assets/js/48.f893e65d.js",
    "revision": "98afb2c124ad14bf30c1be2b945fd78c"
  },
  {
    "url": "assets/js/49.7fe938fc.js",
    "revision": "da997952e9036506857126e8f08b1d6c"
  },
  {
    "url": "assets/js/5.f8e0d01f.js",
    "revision": "cd229ac7f40081101ba51a6d936f8784"
  },
  {
    "url": "assets/js/50.cc78f904.js",
    "revision": "01d9f3d3bedddb2b295eb53947a45965"
  },
  {
    "url": "assets/js/51.08189850.js",
    "revision": "51bebde6fe50f116e370159e0cc83a20"
  },
  {
    "url": "assets/js/52.f3a6804f.js",
    "revision": "f377eed8258d9b2cf10cc7ca412850ce"
  },
  {
    "url": "assets/js/53.aeb8710a.js",
    "revision": "26ee7b80203de5f7cce78096e8eff9a7"
  },
  {
    "url": "assets/js/54.59c5883a.js",
    "revision": "380de9bd266d96aaeeec501299788b0e"
  },
  {
    "url": "assets/js/6.f6ac3ead.js",
    "revision": "4fb28fe678de5d14c9a48a757f75d255"
  },
  {
    "url": "assets/js/7.748df18a.js",
    "revision": "71688f0ff2f83c79507b83b0ff3831ba"
  },
  {
    "url": "assets/js/8.416301b2.js",
    "revision": "8aa7f11a3678f54ec6131558cd0a3016"
  },
  {
    "url": "assets/js/9.03ffe5fb.js",
    "revision": "3792d4cd6d1f4c0f41727b4eba54994b"
  },
  {
    "url": "assets/js/app.4f468fc9.js",
    "revision": "fcd41d0e6587de94e4b5485efce71c91"
  },
  {
    "url": "categories/index.html",
    "revision": "88783ae8ab752b4709051792a229210b"
  },
  {
    "url": "countup.html",
    "revision": "2e9bea43580cda566f518aca3145a8cc"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "f845d9e1bd629830b99009b09cfb0d9b"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "f7a89ee7612c91b06db506194a27b48d"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "09aea41ddb475c15ffcacd787d21687b"
  },
  {
    "url": "css/index.html",
    "revision": "899efb88c1ae04d2efd39942e3477e75"
  },
  {
    "url": "firstblog.html",
    "revision": "72c2bbb77d2ccafbc3ce185886fd4db7"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "339ca1dca56476174c37d6171d67f884"
  },
  {
    "url": "html/index.html",
    "revision": "002666b5512fa6e3f65146e3646369a5"
  },
  {
    "url": "index.html",
    "revision": "55b6cedfcc57dce94c4bec4b7fd0b6e9"
  },
  {
    "url": "interview/20201127.html",
    "revision": "6ce11b0bea76f810497f8f0da3a0ecf7"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "4d45d0aba519d9ccd68dbcbe4938b2ed"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "27ea3e906a1112ad08235db6ce32fc91"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "2621a8bf7f413e9da5ee3d4c3a7ab714"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "10fb01e061a24607e487248a078e5b9e"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "4b5d47d5c8a41e29050844e8bcec1563"
  },
  {
    "url": "interview/index.html",
    "revision": "fe8f2368682c2b71228dff0f08c9f22c"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "a1cda9d32371c6205c43204a4293f5a6"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "59adc2b6863539a5b127fd4246374094"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "5daf5618aa2cc6ce3ae899298da38547"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "88e0c5bf26aa2d46f92ff97e91595739"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "6ea3d7ef0aff7f7e20b7ff7b6fa7297b"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "ccbd8c4c72d361b5bfd81265b528467c"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "310812b144914df9d21a832f3edff83d"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "d4fe1468581a96e592cf95ae17dc84b9"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "d919f0633c142463e8166d25a3915a60"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "17d4b1142201312a4d019f0d8cf03011"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "b9904f22ecc9c3470eb2ac30802f5c81"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "db65c69a1f547b337a35cdb6f79ca40a"
  },
  {
    "url": "javascript/index.html",
    "revision": "42417e9434a169db92eada4afcf05613"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "dda2e46773c30964df65865429c6c002"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "b671728f8416da09d3f503959a133ebe"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "cccf2edb1988e670827f8df3b75e0681"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "bec13ad535c459ec0e03c55989bebdd1"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "3767b74ed8c08164597f0cdbb2230818"
  },
  {
    "url": "LICENSE.html",
    "revision": "5fba4a2cb23ff026f508942f0fff1bba"
  },
  {
    "url": "quanxue.html",
    "revision": "e77b943a34d273affe4348397043bec3"
  },
  {
    "url": "tag/index.html",
    "revision": "8c7465bfb37d67706f69dcf36a2b0795"
  },
  {
    "url": "timeline/index.html",
    "revision": "d54e940469ef3901c417cd9e4f2bc40c"
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

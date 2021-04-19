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
    "revision": "74d4106784601c0192aabc63abf32724"
  },
  {
    "url": "about.html",
    "revision": "515677d31aae490e0f0344a8f3934297"
  },
  {
    "url": "about1.html",
    "revision": "c147628e4f2ac9a9291e0414dc5d0af2"
  },
  {
    "url": "about2.html",
    "revision": "06c8569989226dc3380c1528285480f9"
  },
  {
    "url": "about3.html",
    "revision": "e756532ef7b3e8825fcdf5c3c5c174b4"
  },
  {
    "url": "about4.html",
    "revision": "eab43cf9a1243893e055eaa21985a775"
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
    "url": "assets/js/17.d11f9b73.js",
    "revision": "1045793061613d07b80bf5670c047761"
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
    "url": "assets/js/app.38191065.js",
    "revision": "d8d3ca7dd423a2f3f41d9e55b51febea"
  },
  {
    "url": "categories/index.html",
    "revision": "675dc2889f1dae36fee615cfea370172"
  },
  {
    "url": "countup.html",
    "revision": "72562286156e807e54c0e23fd19f805e"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "73f9242997c7fe1d81c06b6e85493079"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "2ce8d9b61fb55c98debc47df44d05417"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "b37c1091503a25bf8ea74ade01f47fb1"
  },
  {
    "url": "css/index.html",
    "revision": "cdd5c181b98cd7fdb9c28146f08f31ff"
  },
  {
    "url": "firstblog.html",
    "revision": "8ad7f176b26687edaf1e8b04f7b20976"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "78b7bcf0acbda4a20d52c76d4b791ec2"
  },
  {
    "url": "html/index.html",
    "revision": "770f544135fd07b6e2f4df11b7404d35"
  },
  {
    "url": "index.html",
    "revision": "63d11b1163eb7d7b035034ae93dda984"
  },
  {
    "url": "interview/20201127.html",
    "revision": "df9e1d99e4b17534a82f84b7cbfccfef"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "3d03bd3be4f6d8fb3b0be0fc6c740c20"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "1a24cf5aa528c0fed0ba12416b01d5de"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "54725a98e8eca11c4fa89e2f6000da71"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "ef0d3c4423dce22489e9609ef98a5f41"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "650decc6786c6102ef5b3e46c4e49022"
  },
  {
    "url": "interview/index.html",
    "revision": "86a6425b88ea55715fdca90cc1591de8"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "2930dfa1fd393ead6b4f15fdafa9002c"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "d23ab796ae7494da3ebd34c6ea5ab316"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "dd0ad9f7e75a1578d47636ff0ec36bbe"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "ecc1020912aa749d42ddb93345ed1a2d"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "fcf0d58e618698624dcb3dc593547314"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "084b61e75158b96b3e43e87bb0d02ee3"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "82e16066f0bb5202b52861d7391d0a92"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "f7ee434e963b07a8a20e053586b40094"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "bc8665bbac01666062e8890851af7a40"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "889553be232251bb31277b17bfa07542"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "ee8c257d8d54d1221ab6bd6e6e6aa899"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "a25f76cae05797512f4031b447390403"
  },
  {
    "url": "javascript/index.html",
    "revision": "a052e4df76f6381d67bec6160e238a7a"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "a0b33f1ec427de2b87dc2c11d60ea15c"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "2b4ed99bf15c8547b33208f16be25c1f"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "bd756a95c8d14fe31a66d426a94d1ec1"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "6883c89ebfb65b3a1e7e1746223842f1"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "fd6d957e404a059b90e6177ffd976441"
  },
  {
    "url": "LICENSE.html",
    "revision": "9a4713b2d6091f38545399078a66e1e4"
  },
  {
    "url": "quanxue.html",
    "revision": "3b7d9c6478c37b2ad68161aac71fef59"
  },
  {
    "url": "tag/index.html",
    "revision": "1e612f927ac5dd19b697a83f00e29358"
  },
  {
    "url": "timeline/index.html",
    "revision": "560fcdb2f4662d6d182eeb53d7c29166"
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

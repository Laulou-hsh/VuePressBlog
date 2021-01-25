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
    "revision": "a6d489532ec5c8429f0d94e890fe5a5d"
  },
  {
    "url": "about.html",
    "revision": "a995272eb10d7cdc98e2e7a21f291f45"
  },
  {
    "url": "about1.html",
    "revision": "f32d0c3b5b0d42fb9f6c8e93ea2533c4"
  },
  {
    "url": "about2.html",
    "revision": "be0e217186541a1025edbd2a6254593a"
  },
  {
    "url": "about3.html",
    "revision": "b17f31ea97c1940786d5015dccdc6a8c"
  },
  {
    "url": "about4.html",
    "revision": "82e35f4680a112463223e7f89220b36f"
  },
  {
    "url": "assets/css/0.styles.3ebc5427.css",
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
    "url": "assets/js/1.9f6344dd.js",
    "revision": "d28379b171b3459fdd20a91f5f582916"
  },
  {
    "url": "assets/js/10.fc2a33a7.js",
    "revision": "e53bc7865edec4b2ebbd7c1f675bdf22"
  },
  {
    "url": "assets/js/11.d066e5ed.js",
    "revision": "498e7abef3e3f9bd0ecc567805f70194"
  },
  {
    "url": "assets/js/12.31b07542.js",
    "revision": "7feb6fcd1d973f5449a03c9782551ee5"
  },
  {
    "url": "assets/js/13.ca54b4df.js",
    "revision": "2766d5867b9380ed76d95c8a406629ab"
  },
  {
    "url": "assets/js/14.6e1dea0d.js",
    "revision": "c7e052996c3347e48de49f92f246cdef"
  },
  {
    "url": "assets/js/15.c78b9068.js",
    "revision": "1aa7b21099203d2ea91337f08674c4b5"
  },
  {
    "url": "assets/js/16.ffb1945f.js",
    "revision": "fe4894a0f799ffa283da5e748ed7fb3f"
  },
  {
    "url": "assets/js/17.ec607686.js",
    "revision": "d3717d6d0f153d2a51faa63542d4e402"
  },
  {
    "url": "assets/js/18.84dd574f.js",
    "revision": "1151b8a7fad74b2f95ee30177949dd8b"
  },
  {
    "url": "assets/js/19.e194e65f.js",
    "revision": "9564d96d684c46046a00c564439c33b7"
  },
  {
    "url": "assets/js/20.c6f1740e.js",
    "revision": "35dd871fbf47db6e23a16698bfc36649"
  },
  {
    "url": "assets/js/21.8e0278c7.js",
    "revision": "11db7b6df98eab8a98ec396502b9d47b"
  },
  {
    "url": "assets/js/22.99286dcb.js",
    "revision": "ba8366f9796da65b1c4c822f0f45e579"
  },
  {
    "url": "assets/js/23.481f7e1f.js",
    "revision": "5799bf4cb60b4e4fdcbcfc3e3b21a89b"
  },
  {
    "url": "assets/js/24.d996ceb8.js",
    "revision": "323085a1e89ee90b5c364ea03247f05d"
  },
  {
    "url": "assets/js/25.0a95b736.js",
    "revision": "cff30c42a6a0a0bdeadb96e1c844fc2e"
  },
  {
    "url": "assets/js/26.6e04e9d4.js",
    "revision": "46eff0df585135d6c13c221e37a7ad06"
  },
  {
    "url": "assets/js/27.34bd8356.js",
    "revision": "c1e59c2aa3ec93a757e97b0cd99ab5aa"
  },
  {
    "url": "assets/js/28.70c97945.js",
    "revision": "a7b1ece0f63bf47352d62094f48297f4"
  },
  {
    "url": "assets/js/29.b6685811.js",
    "revision": "f9104203d610fe47dbeddb6c8b9fdfde"
  },
  {
    "url": "assets/js/3.a312cd84.js",
    "revision": "02d00d391a0a8b1fa5c83cd5c8f17da2"
  },
  {
    "url": "assets/js/30.2652c086.js",
    "revision": "486457852f45413b937b5069e3af0cc9"
  },
  {
    "url": "assets/js/31.535880b5.js",
    "revision": "9c54602e460d24fa388caef961fe864e"
  },
  {
    "url": "assets/js/32.0f602ef8.js",
    "revision": "29f8fdb48dda08a83822a0540c09dfb0"
  },
  {
    "url": "assets/js/33.c848a0a3.js",
    "revision": "bfc89e4e2e208dc8fa9702c534d7b61a"
  },
  {
    "url": "assets/js/34.3fca9134.js",
    "revision": "bea3b0fc1fc78868a96205c31d8336f3"
  },
  {
    "url": "assets/js/35.4ea871b4.js",
    "revision": "52487a74deb1da48bf9499710c41d6c9"
  },
  {
    "url": "assets/js/36.84e91f77.js",
    "revision": "4a0db5daac58668cf9b6cbd58fd443c2"
  },
  {
    "url": "assets/js/37.d337bba9.js",
    "revision": "0815bc3298c51f1d38fbd39f53809dc0"
  },
  {
    "url": "assets/js/38.820033ac.js",
    "revision": "1e0768bdd43935d37c2ca13ebc0321ef"
  },
  {
    "url": "assets/js/39.e5f29dec.js",
    "revision": "e1e466c932ee669a27fe7ccdc2931d8b"
  },
  {
    "url": "assets/js/4.4ad9a20e.js",
    "revision": "c82dc460fbdaf87abb0c7ba03b0280e9"
  },
  {
    "url": "assets/js/40.ad2d33ac.js",
    "revision": "d242d8a8b6811ed6ed4b8239eb394dc9"
  },
  {
    "url": "assets/js/41.c1b725c6.js",
    "revision": "d4adc876c43c3e29efc71cbfab1802c5"
  },
  {
    "url": "assets/js/42.903f304c.js",
    "revision": "226ff1ccf08d226955b15f13ee74b9bf"
  },
  {
    "url": "assets/js/43.4f37b35f.js",
    "revision": "ce18a5594cad1cf75958b3dded799b05"
  },
  {
    "url": "assets/js/44.81d06a28.js",
    "revision": "171d36f831698eb0b7cc6643f5171f51"
  },
  {
    "url": "assets/js/45.fbd1a7c7.js",
    "revision": "c56527dfc8e45202836c0a030a04aea9"
  },
  {
    "url": "assets/js/46.db78dc23.js",
    "revision": "2595dac72d74cc7b37a2fda40b3582e9"
  },
  {
    "url": "assets/js/5.29952d56.js",
    "revision": "546691c068a8e0a4f0b46fed76aaaf85"
  },
  {
    "url": "assets/js/6.e2c91a2c.js",
    "revision": "9d0526c2c2bdd537f36841b4cf466599"
  },
  {
    "url": "assets/js/7.f4d6833d.js",
    "revision": "c7da938d25a70df8d472d1ffab0e5e64"
  },
  {
    "url": "assets/js/8.2e245545.js",
    "revision": "b35839e5c1c0e46acdddd56c98e9a66d"
  },
  {
    "url": "assets/js/9.bd36e097.js",
    "revision": "6d4008341976b8876e0bbb80aafedbb0"
  },
  {
    "url": "assets/js/app.cbfd9169.js",
    "revision": "572b95ac7e92777c1079431a1f8853eb"
  },
  {
    "url": "categories/index.html",
    "revision": "74329f7e9ea97b36ccc12ff6c5dc907f"
  },
  {
    "url": "countup.html",
    "revision": "c0ad191c348166b5050a8c92256042b3"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "245cd8ed0d213dc872d3be53d4f3465e"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "a573da8471d2f130cc498f5f003f1997"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "b2cb701a63f5a60866d9ca3722448ad4"
  },
  {
    "url": "css/index.html",
    "revision": "c4720dcfaca462afea0f96b04d1df2c3"
  },
  {
    "url": "firstblog.html",
    "revision": "37a541da07ce19f45bea979d6b435813"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "beb1fca34f8749b9a2a3818de5dc8329"
  },
  {
    "url": "html/index.html",
    "revision": "5f85c532336b2395846567afd5ca89a2"
  },
  {
    "url": "index.html",
    "revision": "cbe0cffe54e779b7d679f57a328ca67c"
  },
  {
    "url": "interview/20201127.html",
    "revision": "fc0b068b1601316b4ad228a382391484"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "ce0344bbe0b0fb873479fa346236f004"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "ded8ba58dd48a5ba359a2e1fd98e3e36"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "18c91327ebb3e489827980648da56cfc"
  },
  {
    "url": "interview/index.html",
    "revision": "a886818a22286475935544d59d37732b"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "deea99d1e99a504d964aa6685ef412e9"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "ce36927a7791cfbd382ba51105382a34"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "335c05e825ba90730457d647c71261d8"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "77b77234f5cad82ce84038abdcd3ac7c"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "6dc9d31b59ed3a6424dcdaca9c9d03f5"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "d426e2c92dccd4b996831df9586a56af"
  },
  {
    "url": "javascript/index.html",
    "revision": "d96bae173fdfd26475c00bedd6381ffa"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "eb19ae48169000a0562c9b065afd5cb0"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "046f1ae332550d0f5021da7536c8c8dc"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "6e1dd57f201c72b57fbbc9e9e26df6c6"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "3c6784e243c7bbf9f4d24dd898b9cb0f"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "adc0c8fc386e6b6616725acd36052239"
  },
  {
    "url": "LICENSE.html",
    "revision": "8f32726aadf2277dbac40afcbbf4f2bf"
  },
  {
    "url": "quanxue.html",
    "revision": "fed672b8918ac3cf11f8eab4816d8d9e"
  },
  {
    "url": "tag/index.html",
    "revision": "4828a0991c394ba85a9cfb3080b7c74e"
  },
  {
    "url": "timeline/index.html",
    "revision": "67248580eff0a76747ac3d289172cc34"
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

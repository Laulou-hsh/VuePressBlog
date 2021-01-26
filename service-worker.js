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
    "revision": "2142f423ae073b320d879b325abde08a"
  },
  {
    "url": "about.html",
    "revision": "98fa4bc92f54684d798c9460cf31af77"
  },
  {
    "url": "about1.html",
    "revision": "0ed7bc0900b0b6a15d6fc0f383066fec"
  },
  {
    "url": "about2.html",
    "revision": "e8931ac2f83a83f38a58e14114566bf7"
  },
  {
    "url": "about3.html",
    "revision": "225ab6fda5de80ed0aace35b12b91985"
  },
  {
    "url": "about4.html",
    "revision": "e6f114a1db8636027519430ff0e89031"
  },
  {
    "url": "assets/css/0.styles.6516f46b.css",
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
    "url": "assets/js/1.9e43b041.js",
    "revision": "7e483b497a878a6f11954aea6f25e54c"
  },
  {
    "url": "assets/js/10.2c03e28f.js",
    "revision": "fef0ae468110a071e0b0b6d3d24f3aa2"
  },
  {
    "url": "assets/js/11.c7941105.js",
    "revision": "00b7a40e88b4d883a31baf1485f04121"
  },
  {
    "url": "assets/js/12.6bc37225.js",
    "revision": "a34e6dda5a04f7a14ad510d6313e74d0"
  },
  {
    "url": "assets/js/13.c14a8a0e.js",
    "revision": "a8f1b33113717a5f26838034749abd7d"
  },
  {
    "url": "assets/js/14.83d26705.js",
    "revision": "fc8e85db5de1650f59bddb435332e590"
  },
  {
    "url": "assets/js/15.94195f61.js",
    "revision": "b051c1fa2f783ed6b0719106b2f9efc7"
  },
  {
    "url": "assets/js/16.17b25e62.js",
    "revision": "818d4f2a6f4df14ccf4ada70045eb482"
  },
  {
    "url": "assets/js/17.5752c525.js",
    "revision": "5d5c8ee5db40c2c6c5fce6e12b3397ed"
  },
  {
    "url": "assets/js/18.d4c73f08.js",
    "revision": "25dbfb2104db347bded6c033132241f8"
  },
  {
    "url": "assets/js/19.549f1b3c.js",
    "revision": "a3083a594ab7e0445c76173b7974dd49"
  },
  {
    "url": "assets/js/20.6706d2be.js",
    "revision": "8de27cc012005eed3da6bb11e60b1ebb"
  },
  {
    "url": "assets/js/21.5de4fbd3.js",
    "revision": "90f764e69636aad66f49b6e7fdeed64a"
  },
  {
    "url": "assets/js/22.a78c5310.js",
    "revision": "ca02af9f715f8f75e5b2a99655a641a7"
  },
  {
    "url": "assets/js/23.76d9e54e.js",
    "revision": "9a17409b0e8aa046aaec018117519152"
  },
  {
    "url": "assets/js/24.b3f694b8.js",
    "revision": "618a3b9510b31ca34cb9bcbe3b8a32cc"
  },
  {
    "url": "assets/js/25.72ce07ea.js",
    "revision": "ccc7b4758bcd9c643c7d33891e658b17"
  },
  {
    "url": "assets/js/26.b68f148a.js",
    "revision": "7635080b5ed5e86f2ee385bb6156d86a"
  },
  {
    "url": "assets/js/27.c46e6c99.js",
    "revision": "fbb47efa0c65d820436d70918951ebca"
  },
  {
    "url": "assets/js/28.e5226d70.js",
    "revision": "aeb1ac7dff049edd87c020393b2b501a"
  },
  {
    "url": "assets/js/29.1e3899dc.js",
    "revision": "aad39f9910c650b8909395434cb68c2d"
  },
  {
    "url": "assets/js/3.97d419cf.js",
    "revision": "e5328219aadb0e99a1702f38447d134d"
  },
  {
    "url": "assets/js/30.b93751ae.js",
    "revision": "900ef07383bdaa0eac33736922023685"
  },
  {
    "url": "assets/js/31.e30bd897.js",
    "revision": "35f28375e8809c9e804183989af39856"
  },
  {
    "url": "assets/js/32.52fb1a7d.js",
    "revision": "7931cf3a43f518327bbb0f1a2b624890"
  },
  {
    "url": "assets/js/33.9f44cdc3.js",
    "revision": "edd361e2cac81dd32076b48456bd30dd"
  },
  {
    "url": "assets/js/34.8e241ac6.js",
    "revision": "8195102adebfc40eac78307ca929d9c1"
  },
  {
    "url": "assets/js/35.5790d842.js",
    "revision": "eab59c6cd760a7f3e910de839d3ff1e3"
  },
  {
    "url": "assets/js/36.48109351.js",
    "revision": "d0abad15bcba99ef365780fbf85e603a"
  },
  {
    "url": "assets/js/37.66a08089.js",
    "revision": "4376c9d2da7317c798a6721c319518bc"
  },
  {
    "url": "assets/js/38.b2715e94.js",
    "revision": "4f7f73da31aaa9dd7e9c338f93393cce"
  },
  {
    "url": "assets/js/39.05eaa3f6.js",
    "revision": "339b47d947955ae6cb28a2904f6218f5"
  },
  {
    "url": "assets/js/4.edff1d20.js",
    "revision": "de98993007060480451496b745ac8dae"
  },
  {
    "url": "assets/js/40.639b654c.js",
    "revision": "8f96f7af2ab26201f8bf3da89a520ce2"
  },
  {
    "url": "assets/js/41.0daba8ef.js",
    "revision": "f1ccf3761bb4bb91e54d1e6a5dabd070"
  },
  {
    "url": "assets/js/42.d5e8e738.js",
    "revision": "1999190d502fc0c98d77022bd134fb73"
  },
  {
    "url": "assets/js/43.f014084b.js",
    "revision": "f31093cdce9fcbf343ed1b145cf8614a"
  },
  {
    "url": "assets/js/44.148966d5.js",
    "revision": "347363b496441e370b612115c67d0fd9"
  },
  {
    "url": "assets/js/45.a7f09ffe.js",
    "revision": "03aa470b43a274bbc52bd54ecf3d4e77"
  },
  {
    "url": "assets/js/46.6cc88b4d.js",
    "revision": "53e4e483d36423b10c3cee36e89dd6f0"
  },
  {
    "url": "assets/js/47.e50e3141.js",
    "revision": "1cb5118e025356b93730cc7a5442f933"
  },
  {
    "url": "assets/js/5.a1f37b2b.js",
    "revision": "216633a09c215a68a9f29e77670c0b72"
  },
  {
    "url": "assets/js/6.34cab058.js",
    "revision": "6977e4521586efbcc3da0f59994b7982"
  },
  {
    "url": "assets/js/7.243b55ae.js",
    "revision": "fde4c932337715cd4fa7d166402d32d7"
  },
  {
    "url": "assets/js/8.8a4b59f8.js",
    "revision": "ce148f5650a17026cd09586e52818a5e"
  },
  {
    "url": "assets/js/9.8e1c11fe.js",
    "revision": "ca6a712bb5eb4a13f8249c9befcabdfd"
  },
  {
    "url": "assets/js/app.9ad39839.js",
    "revision": "9438f80fd3a1d0919ceac07781406911"
  },
  {
    "url": "categories/index.html",
    "revision": "b4af70202899712395bc29f730d0f332"
  },
  {
    "url": "countup.html",
    "revision": "ecde9307511d04536e7afd23d82f1ef0"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "ac3fd78d9a7b32acd37e6b77af7d8108"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "2965c8368333756121f07c670cf86331"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "e5505b60c3f8d51a3f8fa4fe6c7d17b3"
  },
  {
    "url": "css/index.html",
    "revision": "d7cf0553db26db8d637ab99ff7e252ed"
  },
  {
    "url": "firstblog.html",
    "revision": "31c58db5c445050c3ebc5802d2f9257e"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "739a2badb8dd50f2a4dad3d5e8239dd9"
  },
  {
    "url": "html/index.html",
    "revision": "1824054f917aaf9953d962fd5670b8d3"
  },
  {
    "url": "index.html",
    "revision": "a65afe5591f581f0a06feb18a8bc8f76"
  },
  {
    "url": "interview/20201127.html",
    "revision": "6ed11cc5ed878acef70effea0771cdad"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "95274902fc7bdaea3a94af3aefafb436"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "ef783406df665b9fb863293fee196be9"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "770ea8dd243502536a32cd621f542f00"
  },
  {
    "url": "interview/index.html",
    "revision": "e7e70383b0006adc641e9b49dac6f748"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "56eb501bfacc8b3d37d055cca3b14784"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "36aaa3c1289e4313650f1b3e59fd9409"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "a788250ab9f767b24c0a6a2e786be44c"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "3a85a9802d5313d12f0922b371ca4b66"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "d0c5743d6c6c41d47ea55212f0451b86"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "ae9a911d89d358a20779fc32874589de"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "ef426f000a21d7b342b076aa008ecd08"
  },
  {
    "url": "javascript/index.html",
    "revision": "c06642191060673bcd3bbf151071b4a6"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "1e603c5abd57f3ccac2db2d156245af1"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "b64b01a7913a079560f1ca4a52149fc8"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "d29ff2de946aa39b6b3597bb29cd21de"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "337b3313bd32d58024a8392d797b511f"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "cbed4963f8200a02466f2d86d3235f95"
  },
  {
    "url": "LICENSE.html",
    "revision": "d7040e1f86a993d3817688f50ecb36ce"
  },
  {
    "url": "quanxue.html",
    "revision": "5dd979d6db113ee8612e6f948d0f0b5f"
  },
  {
    "url": "tag/index.html",
    "revision": "cf29446f12c3f7927a881c57388680fb"
  },
  {
    "url": "timeline/index.html",
    "revision": "216e1928db1d45f7affb3e7f143f905f"
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

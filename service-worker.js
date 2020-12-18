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
    "revision": "25df96c8fa85fcdafba32bd2579aa35c"
  },
  {
    "url": "about.html",
    "revision": "1ad1a1087c4ad7c2d6de6831cc310c28"
  },
  {
    "url": "about1.html",
    "revision": "f8bd4f7ec701abe65b66ac888040524c"
  },
  {
    "url": "about2.html",
    "revision": "bc55395c243c159e4427b4d76d46bf3c"
  },
  {
    "url": "about3.html",
    "revision": "ea98c15609b343061cec3d4520147e65"
  },
  {
    "url": "about4.html",
    "revision": "9f9fcd83a9aa260602c1e1f18c6621aa"
  },
  {
    "url": "assets/css/0.styles.36e98540.css",
    "revision": "cb02015428ee8ec41752065d2b7a277f"
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
    "url": "assets/js/1.8dbe1aef.js",
    "revision": "9c66939acd02c1b24b9cc13112dd584c"
  },
  {
    "url": "assets/js/10.87d79ebe.js",
    "revision": "26fb109570e6e82145f8a5ebbf3f2daf"
  },
  {
    "url": "assets/js/11.1495853a.js",
    "revision": "5aafc3f227abb2af9a0613a3d556e59b"
  },
  {
    "url": "assets/js/12.485e1071.js",
    "revision": "27f91d8792a71f47bf6b1ad7dbcd2efb"
  },
  {
    "url": "assets/js/13.7a746c0d.js",
    "revision": "89d3fbfbec3d4d56828ff88e0001de0a"
  },
  {
    "url": "assets/js/14.baef8acf.js",
    "revision": "115edd56b4901b2bedd67850e30a0b84"
  },
  {
    "url": "assets/js/15.9a220570.js",
    "revision": "809386482313fc8de34c24446b801e51"
  },
  {
    "url": "assets/js/16.bd187074.js",
    "revision": "ca1fd517037b78a07cc93b427b8470f2"
  },
  {
    "url": "assets/js/17.005dbdaa.js",
    "revision": "a1ac1ca83c1feb8540b77044e2b15de0"
  },
  {
    "url": "assets/js/18.730a0312.js",
    "revision": "cb848f3402d07d9367d79f7b22a3afce"
  },
  {
    "url": "assets/js/19.e25c6dc8.js",
    "revision": "bcdd5ce3c23956322e5d79a58e91a7e6"
  },
  {
    "url": "assets/js/20.b2893aaa.js",
    "revision": "20bd3f9ff926f1baf10a7d0fa8e9c0a5"
  },
  {
    "url": "assets/js/21.9f4fbcf8.js",
    "revision": "f736a60a411bc1fd44608846eeabe649"
  },
  {
    "url": "assets/js/22.5340cd16.js",
    "revision": "6350de4e8259851860a5b698dfc69e05"
  },
  {
    "url": "assets/js/23.055642a8.js",
    "revision": "1f9f76da80bdac232494b4293c6e0eb5"
  },
  {
    "url": "assets/js/24.93821da0.js",
    "revision": "162316fbbacd0c311a6cd506126b852e"
  },
  {
    "url": "assets/js/25.b1502463.js",
    "revision": "f855b55e6709196c829e91d27733df67"
  },
  {
    "url": "assets/js/26.93405b1e.js",
    "revision": "d87acc28f83fe79d4b7e2630f3482197"
  },
  {
    "url": "assets/js/27.f01445d6.js",
    "revision": "e8d33c376e759e39694ca13d3cf2a2a2"
  },
  {
    "url": "assets/js/28.53acefef.js",
    "revision": "e513a8f7a7fd684a6c0e63d839d5ca5a"
  },
  {
    "url": "assets/js/29.87d8a66d.js",
    "revision": "9183a1cd7f11fed161b6d3dbc53580d6"
  },
  {
    "url": "assets/js/3.4006f6c2.js",
    "revision": "fbce117e6c4738d2f951a45a64f90e36"
  },
  {
    "url": "assets/js/30.f3b67dc0.js",
    "revision": "52fbb06a6ef4ec7fd77bd57e73168152"
  },
  {
    "url": "assets/js/31.7a5c0ccf.js",
    "revision": "d3a31291dbcff069f34e263bb97e2b01"
  },
  {
    "url": "assets/js/32.414d7832.js",
    "revision": "0edd2ba22da8ecb5a6db37afb7b8e750"
  },
  {
    "url": "assets/js/33.2c4ed1e7.js",
    "revision": "7e5575ccbada0491cb9e398e305e9b22"
  },
  {
    "url": "assets/js/34.2b72624c.js",
    "revision": "024ebc9442596c30761bc6ab610970bd"
  },
  {
    "url": "assets/js/35.efc74f8a.js",
    "revision": "e8b152b2aa1c02981380bda4475b4ec1"
  },
  {
    "url": "assets/js/36.2c4871f0.js",
    "revision": "fc2261e3e773b16e5ff321ffcd1166ec"
  },
  {
    "url": "assets/js/37.9cc5ce24.js",
    "revision": "d3d5164553a7dd351b0795264db9f5f8"
  },
  {
    "url": "assets/js/38.215f5b49.js",
    "revision": "eaf55809995945e48d524a1d4a73a72d"
  },
  {
    "url": "assets/js/4.19ac287c.js",
    "revision": "d1f4acb139ae7e77c4fa52886a0ba2ad"
  },
  {
    "url": "assets/js/5.e2003ef3.js",
    "revision": "1bd62d80764a51519f09ccdb7e93d470"
  },
  {
    "url": "assets/js/6.ebb0a988.js",
    "revision": "9a99fb99ad2dd040b7a4479b580becf2"
  },
  {
    "url": "assets/js/7.aa2a4c10.js",
    "revision": "714fcc439c78fdeadae2417e20e3a4b0"
  },
  {
    "url": "assets/js/8.99849604.js",
    "revision": "1bb887576d75d03d68b4b28ec0040176"
  },
  {
    "url": "assets/js/9.ec83d5f4.js",
    "revision": "9818a6b1d169cdffefec5e3261191254"
  },
  {
    "url": "assets/js/app.cf571b50.js",
    "revision": "3cc7b7658115c8aae905aeaef7126754"
  },
  {
    "url": "categories/index.html",
    "revision": "e8320709f459ceb0cd76864d63d2e2be"
  },
  {
    "url": "countup.html",
    "revision": "8f2f31f1d1d16bc3adc26c0de466506a"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "b1a7cb762722d24f14a645f398f04fbd"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "a0844b2333677e3f3be78412e76fcfd0"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "205a0f70419ddd7fb0702138bfe10347"
  },
  {
    "url": "css/index.html",
    "revision": "80a0eea091070515e44bc5f82120855a"
  },
  {
    "url": "firstblog.html",
    "revision": "05dd45732035026cb9100d2d3a1a0627"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "5521b0155680b90de8a073dd6e90bc16"
  },
  {
    "url": "html/index.html",
    "revision": "b8cdeebe1c36a4a6c9d4f2fa3ae8fcbe"
  },
  {
    "url": "index.html",
    "revision": "113637a147f8739fcee56f516ccedda4"
  },
  {
    "url": "interview/20201127.html",
    "revision": "1b86694477888448379ee47fc1ad94ba"
  },
  {
    "url": "interview/20201201.html",
    "revision": "fbdd8a18c125235cc66aabbf2229a2b2"
  },
  {
    "url": "interview/index.html",
    "revision": "bc2eecc6e6ec872cb8dca9e2803b412f"
  },
  {
    "url": "javascript/index.html",
    "revision": "ba87c61f569b54d8bb272fda9b3e6896"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "876a0b2849bd7bb2f733c710d06f27a8"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "38f1d8b843304405b1a43ae109bb638c"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "18b87d86c510689e1c364f7a50d80300"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "39ea35fabda6634275317e046e92d362"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "55be1dc2385061a1968cb7b4e8f5a2ca"
  },
  {
    "url": "LICENSE.html",
    "revision": "2247346313bdf4a6d71ce0a3dc5d07f0"
  },
  {
    "url": "quanxue.html",
    "revision": "94ad204cfc678658467670c69c00eb23"
  },
  {
    "url": "tag/index.html",
    "revision": "2f8f1e7054b29a5152cd4e2d62218a94"
  },
  {
    "url": "timeline/index.html",
    "revision": "1c6bb50cbcad29c97edca751252d3776"
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

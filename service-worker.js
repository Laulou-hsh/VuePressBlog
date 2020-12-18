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
    "revision": "5934543d1ddcb41bbaad40093e613e30"
  },
  {
    "url": "about.html",
    "revision": "91709e8eabe8d846206605ba76fe1619"
  },
  {
    "url": "about1.html",
    "revision": "67ae54b2f50201fa547ef9da2121aac7"
  },
  {
    "url": "about2.html",
    "revision": "747f4dc3597f31ef5263ea12aa529776"
  },
  {
    "url": "about3.html",
    "revision": "d3cffdc698d74a52d1e7616fd50b4846"
  },
  {
    "url": "about4.html",
    "revision": "b4b2cb32f16dfc3086aabde9d65ea598"
  },
  {
    "url": "assets/css/0.styles.3d339956.css",
    "revision": "b51fc9fe033ec3c2ce4aa73a8adb1ed5"
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
    "url": "assets/js/12.f35b0c1d.js",
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
    "url": "assets/js/app.49697f7c.js",
    "revision": "e65154fe0640619b84190909fb6808cf"
  },
  {
    "url": "categories/index.html",
    "revision": "1949f3851cda714f706dd9f9afe6341d"
  },
  {
    "url": "countup.html",
    "revision": "550603d095dcf737e5ce6157b01f4f85"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "43593ca695fe403facda365aaa4fd99e"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "907c8631bfb552cf754497cdf7c8d1ba"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "9869753fc9538662f46fa20ef865e1a2"
  },
  {
    "url": "css/index.html",
    "revision": "23b90cc12a16115b68fd3a9964bacebb"
  },
  {
    "url": "firstblog.html",
    "revision": "165ceb6d8c72fc50009e7e9a284df2ae"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "d111e93a99021ac9d8540093e724f272"
  },
  {
    "url": "html/index.html",
    "revision": "25c052e108909da0d9f5a06887db9fec"
  },
  {
    "url": "index.html",
    "revision": "c0357446cb6d778f271513669d07b59d"
  },
  {
    "url": "interview/20201127.html",
    "revision": "252792b5decf33b2cde8afd8f4f9a20c"
  },
  {
    "url": "interview/20201201.html",
    "revision": "12264ef0d7691c9773f3e43d2213426f"
  },
  {
    "url": "interview/index.html",
    "revision": "a4ed7376287b1ca1973edfd3dbd06f9a"
  },
  {
    "url": "javascript/index.html",
    "revision": "6c9cd841ecf70f6e543c28098acc2732"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "540848433d49f0069dd8239e30e550ae"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "292018c2332194c1589403c20a992e7d"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "5545de99b4f012029389f49d22af9889"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "a40a56b8cda3fd22a1057630b57f7eb4"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "e9f4f0769372a8862e202180f70786af"
  },
  {
    "url": "LICENSE.html",
    "revision": "60350455909dc670af9c6fb34e951894"
  },
  {
    "url": "quanxue.html",
    "revision": "04ad68bf3b0e39b8a2e8487cf57b73b2"
  },
  {
    "url": "tag/index.html",
    "revision": "74996831cf54ce8cd9f13428e755bc35"
  },
  {
    "url": "timeline/index.html",
    "revision": "366c0a3e24ef4222a3ea16dd515fc061"
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

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
    "revision": "d816048121dc22a6f83a02c58d49259e"
  },
  {
    "url": "about.html",
    "revision": "5947d508947e8b0fac5a3d15d88eca72"
  },
  {
    "url": "about1.html",
    "revision": "c8ac6f1f613b2828291651d0c25aaf4d"
  },
  {
    "url": "about2.html",
    "revision": "2849ac5981cd9f975dc2d31e02cb08e1"
  },
  {
    "url": "about3.html",
    "revision": "7ae9f58b2d1278e083a3c4318e373012"
  },
  {
    "url": "about4.html",
    "revision": "96d0f337229759dddbb5d640ff07db30"
  },
  {
    "url": "assets/css/0.styles.7bda04e4.css",
    "revision": "3899ba3c03911f8bd6ff9df99ade3ada"
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
    "url": "assets/js/12.985ab601.js",
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
    "url": "assets/js/app.de5837bf.js",
    "revision": "aa7889783b3ca3d2834880d333cede42"
  },
  {
    "url": "categories/index.html",
    "revision": "627ea789d689d3c9a0f663e03c7c859d"
  },
  {
    "url": "countup.html",
    "revision": "2a9eaeb8b339780d299982856e43f815"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "5e7de1aa5c59565308470bb10611274e"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "39b3cbe533f8341ae9fceb55fdd1d994"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "148e24099d5190461fdd40bd540da8f0"
  },
  {
    "url": "css/index.html",
    "revision": "af6039ee2e0eb9a986bfd4c4c377df86"
  },
  {
    "url": "firstblog.html",
    "revision": "e4f95f558f926907b881af7b3c9ca747"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "8558c35a0754753c5c2082b325246f46"
  },
  {
    "url": "html/index.html",
    "revision": "c12f3cf539f03a5985d24932efee0d18"
  },
  {
    "url": "index.html",
    "revision": "0048a995fdb7289183fd7f0befaa80bb"
  },
  {
    "url": "interview/20201127.html",
    "revision": "5140daa562141a25fdcb6de2810069fb"
  },
  {
    "url": "interview/20201201.html",
    "revision": "b7c40ce8dbe79e44d06fc0c7ba839eb8"
  },
  {
    "url": "interview/index.html",
    "revision": "80ac2e25d8cd741838adf9a443074cf7"
  },
  {
    "url": "javascript/index.html",
    "revision": "7ad383c3726f9b2288eb90fd5ce2147e"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "130ec16cd4158bf9c5d5b6ffc89ac487"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "5356dda184552d4613d6ef6ddbd9282c"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "b2d637f31cc079d22cb5cbb901d6bd48"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "e21e9ccdcc08a7271424f4692d1406e3"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "1c42c969ba4192485fb70609bf2cb115"
  },
  {
    "url": "LICENSE.html",
    "revision": "f7cf61addbd662fc8c6ea81f7dabc19e"
  },
  {
    "url": "quanxue.html",
    "revision": "0a2e462298ed7a37f4e741903457163a"
  },
  {
    "url": "tag/index.html",
    "revision": "2a8fbe2fd35d44569cdc49481a85f7a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "f0004836ad42e985ef8afa29d659e39b"
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

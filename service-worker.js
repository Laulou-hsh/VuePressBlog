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
    "revision": "43c591b7cd8ed1b73b46ef4361053810"
  },
  {
    "url": "about.html",
    "revision": "1796e257581f15c9b35a75c680fd0362"
  },
  {
    "url": "about1.html",
    "revision": "e70a357754765248f6948963bcc22796"
  },
  {
    "url": "about2.html",
    "revision": "44c255e153bef5d4529e058dc73da834"
  },
  {
    "url": "about3.html",
    "revision": "c937b3b93a93cbf55f77fdc6fdc52374"
  },
  {
    "url": "about4.html",
    "revision": "134e4462b22a2736da596917eb60c8e2"
  },
  {
    "url": "assets/css/0.styles.ebe4a39e.css",
    "revision": "8ca5b69088ff0f598639379dc53fb7c2"
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
    "url": "assets/js/1.7734dc7f.js",
    "revision": "10444f2ec51eff059889d4a685bb65c2"
  },
  {
    "url": "assets/js/10.9123958b.js",
    "revision": "321bbb53d0e7fefa38ff32129beef31b"
  },
  {
    "url": "assets/js/11.c5030435.js",
    "revision": "4a39b663a8e22c1db84ae4627e81c45c"
  },
  {
    "url": "assets/js/12.1874744f.js",
    "revision": "a4433613009bcc83f208bad98f7ac81e"
  },
  {
    "url": "assets/js/13.68cec802.js",
    "revision": "9a2e7548de1227a496d4ae3214eba836"
  },
  {
    "url": "assets/js/14.3d3a35f3.js",
    "revision": "13eeed52b4cc0c5be49b9465dd200899"
  },
  {
    "url": "assets/js/15.57eae731.js",
    "revision": "c34b0dd679a212ba9a62c02cb747c935"
  },
  {
    "url": "assets/js/16.d4547d1a.js",
    "revision": "8e6e955890dc485997743042429ff954"
  },
  {
    "url": "assets/js/17.8a3af0f8.js",
    "revision": "96da0f4d417896112455b65deefdef2a"
  },
  {
    "url": "assets/js/18.7717b8f1.js",
    "revision": "63bff2e1639baecacd43134d7e7f5c43"
  },
  {
    "url": "assets/js/19.667dec3a.js",
    "revision": "14ae2147d0e3b01c5b930703a43c9096"
  },
  {
    "url": "assets/js/20.e232ffe8.js",
    "revision": "4edbc7022ebb3fc20e61d10dd88efc1b"
  },
  {
    "url": "assets/js/21.ed756e10.js",
    "revision": "c1ed43725046446f4bce84dd3fdbcd4c"
  },
  {
    "url": "assets/js/22.c32640cf.js",
    "revision": "8595d7d1fbc283dc7afdf7c9cff86573"
  },
  {
    "url": "assets/js/23.ce5f5f52.js",
    "revision": "dc5ea071a419f863d16cf2a80f582734"
  },
  {
    "url": "assets/js/24.8e4f97a2.js",
    "revision": "6832bfc83c29b1e3bb78430b7278d02a"
  },
  {
    "url": "assets/js/25.1c1345bc.js",
    "revision": "b1a7b68fc4280749f6e421ef6dadcc81"
  },
  {
    "url": "assets/js/26.bce05bbd.js",
    "revision": "ab2bc5cc347e3e377c3bedc8c2e0a88a"
  },
  {
    "url": "assets/js/27.05074b0f.js",
    "revision": "c816aba63cd53fb56d2ba3ee26e9a12d"
  },
  {
    "url": "assets/js/28.19a098be.js",
    "revision": "77240c8951e3bcb144679e17cc20d3d0"
  },
  {
    "url": "assets/js/29.7d1770d1.js",
    "revision": "0f675e4a8ee06fd4935b53c460db4e5e"
  },
  {
    "url": "assets/js/3.66df8d72.js",
    "revision": "e880ab6bd54c190b3e0819afc3bbeb4c"
  },
  {
    "url": "assets/js/30.ff69dbf4.js",
    "revision": "5147ad24525fedd147fc203f8a678204"
  },
  {
    "url": "assets/js/31.8f92dac9.js",
    "revision": "453e867f0c13c204fa9da6bf87637874"
  },
  {
    "url": "assets/js/32.7755c058.js",
    "revision": "d3a84e2339b02f3d3f509988355b037a"
  },
  {
    "url": "assets/js/33.a63b40bd.js",
    "revision": "1d561ceb9a4ac5af99d3e6058b1bd7b1"
  },
  {
    "url": "assets/js/34.7abc0163.js",
    "revision": "536708451419d9f852ab5de65b6c3d4b"
  },
  {
    "url": "assets/js/35.098a6cd5.js",
    "revision": "49c8a6256a05859d45cfee1d305935ea"
  },
  {
    "url": "assets/js/36.bd851484.js",
    "revision": "fba176feac081f327dab8ca6c409e86f"
  },
  {
    "url": "assets/js/37.4474b6c6.js",
    "revision": "0a55491209c1176be0be94985de81580"
  },
  {
    "url": "assets/js/38.987e85c0.js",
    "revision": "398c7b048b620fd9c7289c970a4c32d6"
  },
  {
    "url": "assets/js/39.403b6a84.js",
    "revision": "f2c8ccf561774c6c932ed62ff1574abf"
  },
  {
    "url": "assets/js/4.47969228.js",
    "revision": "1e556835da602462c1cc7e9aed2fb344"
  },
  {
    "url": "assets/js/40.3694069a.js",
    "revision": "e321c1744620078ffb416fc19bbb1249"
  },
  {
    "url": "assets/js/41.f430abcd.js",
    "revision": "d53c6fc76aa3d65ed8660cc6b1bed7ee"
  },
  {
    "url": "assets/js/42.a43a369f.js",
    "revision": "ed5143dfa2c064397b93e8ab5ae8ec62"
  },
  {
    "url": "assets/js/5.694fe766.js",
    "revision": "6eb7602a74edc0deb277485537e463e3"
  },
  {
    "url": "assets/js/6.4625006b.js",
    "revision": "8ae62da20929117093d459fbaf4afcc9"
  },
  {
    "url": "assets/js/7.2b6a7af0.js",
    "revision": "445040cb90a702dfb3e63c26eb39ee94"
  },
  {
    "url": "assets/js/8.c2f297d7.js",
    "revision": "91301128ac07f74c43146cafdb3c6eca"
  },
  {
    "url": "assets/js/9.77156499.js",
    "revision": "f6b528ffa7b55053a88c85177beaf16a"
  },
  {
    "url": "assets/js/app.286bcac3.js",
    "revision": "8fe76c1bd84c23d0f17f1087e31f6acd"
  },
  {
    "url": "categories/index.html",
    "revision": "ead1bd00cc2187609de93168ef03f873"
  },
  {
    "url": "countup.html",
    "revision": "5a7f2168732df40fcc35a192206af7ac"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "0b20225070aa9044b4add2e159986ae2"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "892b109fd35846069ee5e595854ae050"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "b9e651c34a3f8ed4e425572143918a1e"
  },
  {
    "url": "css/index.html",
    "revision": "f5181fa835d2d5cfba059b2a81286039"
  },
  {
    "url": "firstblog.html",
    "revision": "d186b29e4fc72ee8d0009edf13e6c4af"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "54b6f05f914c15bf1b504a67eeea8526"
  },
  {
    "url": "html/index.html",
    "revision": "d81f1e74dc4a792640474c812929e10d"
  },
  {
    "url": "index.html",
    "revision": "8f11060d28e55fb008b9dcfb4e1eecf0"
  },
  {
    "url": "interview/20201127.html",
    "revision": "fe5cee2b612d7a4d83a8d02796908c3a"
  },
  {
    "url": "interview/20201201.html",
    "revision": "1acf38382922b982ccac6dbb1e33fc49"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "c25ea6396957b8cccd7dbc549bbb09b9"
  },
  {
    "url": "interview/index.html",
    "revision": "fb93ea99d068b7d5526c9ab1cc07d5ee"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "9ebe708c953f09cb2a4751ef2369cb9c"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "464aac94cc30b49be35d731ddfa81232"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "8b8826e9c4fd94559fb32a0057fa6974"
  },
  {
    "url": "javascript/index.html",
    "revision": "0f3f8e3283e8d9ac72543a1007079950"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "21db7ff0b44ebd8c7b0e365a2d9060ec"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "a24e79356c4605866af44c6400ded4fb"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "8b37fb56f46fb3ff9fd0bc6e8f928b34"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "f63f69ebebaa835393483d5849774725"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "b46cda6cc8cf0d8a4c092b7706b06c91"
  },
  {
    "url": "LICENSE.html",
    "revision": "f9258dcdc212d6e714a700b7bfec8598"
  },
  {
    "url": "quanxue.html",
    "revision": "19b00af126478d9b9bcab8adb270fe69"
  },
  {
    "url": "tag/index.html",
    "revision": "0909da5a9f9557123b0900c24193fe2d"
  },
  {
    "url": "timeline/index.html",
    "revision": "2c38235605db454f74640c386b3430be"
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

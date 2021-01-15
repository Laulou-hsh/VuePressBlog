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
    "revision": "f402bd0fcdd0065a044d981474eb0fd4"
  },
  {
    "url": "about.html",
    "revision": "793e3eef2b1b1aa1c1976e947f895f02"
  },
  {
    "url": "about1.html",
    "revision": "3fb709edc0f6563214060418712cc5c4"
  },
  {
    "url": "about2.html",
    "revision": "82eb1303fa57f5b804feae307d55a2ca"
  },
  {
    "url": "about3.html",
    "revision": "17dc046f7319577ecba92abda9eacfa2"
  },
  {
    "url": "about4.html",
    "revision": "036c886f85df041e8824396b3f45da74"
  },
  {
    "url": "assets/css/0.styles.32a75f48.css",
    "revision": "e9de3787e0ed5e382bfd3554403912d5"
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
    "url": "assets/js/11.7e8fe9c3.js",
    "revision": "cb1518a74afba7b9a228c63d7bc6b4ee"
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
    "url": "assets/js/16.94b5a2a0.js",
    "revision": "45836ed8bc79bc590685d990684c80ef"
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
    "url": "assets/js/app.14c31fec.js",
    "revision": "4cd7292cf88deb026623eec2e43efa6e"
  },
  {
    "url": "categories/index.html",
    "revision": "80641a730253597cf9f9fd055305b954"
  },
  {
    "url": "countup.html",
    "revision": "717eef49ab13e69e1c4998e9edd54d75"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "3ad46c5306f2c6e6e1e289b5cdfa175f"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "61c20d27dac8065cf27240b6f427c1b9"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "c4e4e9cd7df0ab794f405ec21eacaa31"
  },
  {
    "url": "css/index.html",
    "revision": "7053d176f337f39f8669ba52e7972b7a"
  },
  {
    "url": "firstblog.html",
    "revision": "bf7e8ffa6bfc9f79803cdc69c3fbe7eb"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "66069714b80feccdf1acb71337903409"
  },
  {
    "url": "html/index.html",
    "revision": "6a9e9cbc9af6886125387bb02b49af9a"
  },
  {
    "url": "index.html",
    "revision": "649f3b8a37e0a4105cc38a6498333c97"
  },
  {
    "url": "interview/20201127.html",
    "revision": "5249d23d957c8a2817bbc5ea9822295b"
  },
  {
    "url": "interview/20201201.html",
    "revision": "1b4b82f0daba5d22182e93b951971e8e"
  },
  {
    "url": "interview/20210112/20210112.html",
    "revision": "888023477fe170f13aff38bee2c877f4"
  },
  {
    "url": "interview/index.html",
    "revision": "a32bace7cbaef545a115ec3adf1d9f19"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "c9a186d7e8c912ffc2e1e5f860134958"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "08b5832b99f3d9cb32946ee6d15f3c97"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "c301878d432a8e95b5c54bf063bcd264"
  },
  {
    "url": "javascript/index.html",
    "revision": "93db5a3f824fa5c35b2b44a98fafd14d"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "636e6035513c5d7619c5699d25b29c62"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "54ef12342431f436b85b4f7ae44ee23a"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "81a54a94c26e8ac8e043d1937c4e8b65"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "3f9a181f76613a077ce23dcd06b50289"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "a4c4e3d7560b8c541ae414d34304806a"
  },
  {
    "url": "LICENSE.html",
    "revision": "b18a666a915f680cbbf4d4f775467c80"
  },
  {
    "url": "quanxue.html",
    "revision": "88e93f100af8f638fada60ab3993ef39"
  },
  {
    "url": "tag/index.html",
    "revision": "631df478c46148b1f8875e9719f935c0"
  },
  {
    "url": "timeline/index.html",
    "revision": "e84c8c01bf1fa0a4fc5152a3f1c8ab43"
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

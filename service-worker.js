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
    "revision": "2eedeb8c319c42bee15900b812ab3c0b"
  },
  {
    "url": "about.html",
    "revision": "c2511419f24bd66add01cd9ede9aac14"
  },
  {
    "url": "about1.html",
    "revision": "8688bb79be1738a7647b54942dd2efd8"
  },
  {
    "url": "about2.html",
    "revision": "737832df314827e994043a727feac98d"
  },
  {
    "url": "about3.html",
    "revision": "30a1b4d3233489c25b2ea62d8e925cc3"
  },
  {
    "url": "about4.html",
    "revision": "00ce81446d2a51abd33fff170abbc2e3"
  },
  {
    "url": "assets/css/0.styles.222e03b3.css",
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
    "url": "assets/js/1.b31a6dde.js",
    "revision": "2590d1cc7cf31eb3975c3b90bb123329"
  },
  {
    "url": "assets/js/10.004717d3.js",
    "revision": "375e1793d2df887f1c7aa778ec1fe590"
  },
  {
    "url": "assets/js/11.d1e889fc.js",
    "revision": "7f4ba88ee4864031dfb3969c21f2dbb3"
  },
  {
    "url": "assets/js/12.7c2943a7.js",
    "revision": "e782f222e2f0696aec173f9a8edf6eec"
  },
  {
    "url": "assets/js/13.c67001c8.js",
    "revision": "7090c14b9dc52a2128163a5015759989"
  },
  {
    "url": "assets/js/14.72d465bc.js",
    "revision": "61f29247f440923c6543d478c5089974"
  },
  {
    "url": "assets/js/15.76479fb4.js",
    "revision": "35605addf1a2facb08f7442fe9402c98"
  },
  {
    "url": "assets/js/16.c3d2a0df.js",
    "revision": "2858662901cf1f74f4ea7d2b65aac7e2"
  },
  {
    "url": "assets/js/17.1c10be50.js",
    "revision": "c20cf0b9a8d037dc9d4a5fbf410025de"
  },
  {
    "url": "assets/js/18.5122164e.js",
    "revision": "5feed3e4395bae120215da1f88ede743"
  },
  {
    "url": "assets/js/19.8f07675d.js",
    "revision": "45cb190e5161551117fdd6477e8a335f"
  },
  {
    "url": "assets/js/20.e90980a7.js",
    "revision": "a472015372854bfaf69758412b75466f"
  },
  {
    "url": "assets/js/21.bed5c904.js",
    "revision": "61cade07cf16c0bf4c622eda0ce203ba"
  },
  {
    "url": "assets/js/22.ea2d9b85.js",
    "revision": "5b7f5c994524932f5deb41ccaafb6bf8"
  },
  {
    "url": "assets/js/23.8ec392e7.js",
    "revision": "7447c0432493671ac2f0d51317e42198"
  },
  {
    "url": "assets/js/24.fd5d5fa4.js",
    "revision": "b0240b5951eb355b6990699f65cc4142"
  },
  {
    "url": "assets/js/25.f39a0df5.js",
    "revision": "55fa06e6c4dc02fb0dc7ccaa75e20d2a"
  },
  {
    "url": "assets/js/26.0b15dc34.js",
    "revision": "7b52d5e73d6786439ae1923f02e40a0b"
  },
  {
    "url": "assets/js/27.8e9f6806.js",
    "revision": "eb26393994e5b5ebb2b355df308758d2"
  },
  {
    "url": "assets/js/28.d355d705.js",
    "revision": "157a42708d260aab3d68bc5517332324"
  },
  {
    "url": "assets/js/29.479fb8ae.js",
    "revision": "594088fd3db8550c29218fd6ab5e5a25"
  },
  {
    "url": "assets/js/3.aab3ab63.js",
    "revision": "5e97d9b207ecb863500f6654076c30d7"
  },
  {
    "url": "assets/js/30.fbd9340d.js",
    "revision": "ed0c57f36b66b9a12958419abfe2cab1"
  },
  {
    "url": "assets/js/31.7d014fd7.js",
    "revision": "34718f8e1ff2b00a6e1ae61ea62ee05b"
  },
  {
    "url": "assets/js/32.3c92df10.js",
    "revision": "61330d6cff5afab4ec73d9ce4feae118"
  },
  {
    "url": "assets/js/33.4364adae.js",
    "revision": "cb3093c6ed00639eaa9f91c8b0d94c5d"
  },
  {
    "url": "assets/js/34.98bcb999.js",
    "revision": "5bdc74432fa909ed60db22f1a66ee91c"
  },
  {
    "url": "assets/js/35.1b06e951.js",
    "revision": "441acb49564512784920ef97a14c8b48"
  },
  {
    "url": "assets/js/36.e850ce5b.js",
    "revision": "6d2eddba2920e34c1e4531e45d7dfaff"
  },
  {
    "url": "assets/js/37.cfafe8f5.js",
    "revision": "67f046fcc93a8e73fcca0c04283db65c"
  },
  {
    "url": "assets/js/38.469602af.js",
    "revision": "ee49515b5a627a3f7180d49896cb04e6"
  },
  {
    "url": "assets/js/39.41ca38a4.js",
    "revision": "ed5e5aa090e5ebcbf6e15911d2de9bc4"
  },
  {
    "url": "assets/js/4.38b0c50e.js",
    "revision": "3ca1d3fee52aff4d4a3cb7fd72cc190b"
  },
  {
    "url": "assets/js/40.df73d1dc.js",
    "revision": "99b72eed1250790672a13ee82302996b"
  },
  {
    "url": "assets/js/41.5eda8834.js",
    "revision": "b5bba79d1bc33685a162eeacbd8467f0"
  },
  {
    "url": "assets/js/42.3c1459fc.js",
    "revision": "1da32827d52992cf6114744fc6907c62"
  },
  {
    "url": "assets/js/43.6b17f0d3.js",
    "revision": "9b2a1df233f71b6eb4031aa11ba9e4df"
  },
  {
    "url": "assets/js/44.30a0f22a.js",
    "revision": "ee21a00bfab8c5044fa85c4b1caffe36"
  },
  {
    "url": "assets/js/45.775ac3ab.js",
    "revision": "0fb55049a4c5887f70d2d96ce70fbf59"
  },
  {
    "url": "assets/js/46.caacaf35.js",
    "revision": "03de495d70909cdc2d23e444ac636229"
  },
  {
    "url": "assets/js/47.3a146b4f.js",
    "revision": "c79db09efa4987af837cfa84d2e1b5f6"
  },
  {
    "url": "assets/js/48.901f8b0c.js",
    "revision": "515e58262e6194b189496cdc9ee2500f"
  },
  {
    "url": "assets/js/49.d6695b48.js",
    "revision": "72a08f6fcf21477caed24c96228acb78"
  },
  {
    "url": "assets/js/5.a6eda664.js",
    "revision": "301a586d84d13f54e01ce6a4465f52a4"
  },
  {
    "url": "assets/js/50.0fd8ef66.js",
    "revision": "5ee817ff1ee2033054a161b5282110b8"
  },
  {
    "url": "assets/js/51.70c104c3.js",
    "revision": "197a91148c969e8e6abbe0f4bb83c7c0"
  },
  {
    "url": "assets/js/52.a1941195.js",
    "revision": "c1ef26a34b2f8c2a38f8cd439a8d5513"
  },
  {
    "url": "assets/js/53.13804bf4.js",
    "revision": "c3c80127f4b8e141e34c935440538a03"
  },
  {
    "url": "assets/js/54.ea21c324.js",
    "revision": "68a71e104eb656a4aaff280871392442"
  },
  {
    "url": "assets/js/55.de161f3f.js",
    "revision": "085af0945b69fc0195a0ccf366da5840"
  },
  {
    "url": "assets/js/6.97385d2c.js",
    "revision": "487fd26df025c353e4089a0b4bca09c6"
  },
  {
    "url": "assets/js/7.d86596ec.js",
    "revision": "ca520b5539f03b4f6448adc6387e3e8f"
  },
  {
    "url": "assets/js/8.65a31c92.js",
    "revision": "74a13b8c9a5ed6a42be09fb470cb033e"
  },
  {
    "url": "assets/js/9.c763928b.js",
    "revision": "7139279746f2c577e690ed76dc282261"
  },
  {
    "url": "assets/js/app.224be71d.js",
    "revision": "0f4e9ad5b88beba0d46df6a493a5cd49"
  },
  {
    "url": "categories/index.html",
    "revision": "f6173b412fc88f9ad633233e61c04ae0"
  },
  {
    "url": "countup.html",
    "revision": "590d1772fe19484d46829c3b7521f478"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "86551adda1c7bfca47d483b8cf5de84b"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "be388f92755a4c8b0e2a0b1b56cab76d"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "02b65f23d68cdd2b4718bce2db1f8d42"
  },
  {
    "url": "css/index.html",
    "revision": "2105b2810f576d8b0ec55130fc60ed9b"
  },
  {
    "url": "firstblog.html",
    "revision": "5d700a08bd21775a57b46315ad78ba07"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "b60c6589ccd9e3f9990ade790260db25"
  },
  {
    "url": "html/index.html",
    "revision": "52868727a7412a7e2cb41b01d03b86ac"
  },
  {
    "url": "index.html",
    "revision": "ca61c180f9c94fd6c2dc79298441bd94"
  },
  {
    "url": "interview/20201127.html",
    "revision": "2d42a805262aa326a73ad18f56c503b7"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "65fbcb1928780c784eb8281216e4d0e4"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "cd2938fcf041cf18efec2892848dfe8e"
  },
  {
    "url": "interview/ES6/20210325.html",
    "revision": "3d10399ba4ac2330d09d1ca3fb56dc9d"
  },
  {
    "url": "interview/ES6/20210419.html",
    "revision": "b30103604859bab752f30d998f1eb6a9"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "fb82b0acaa19724aeb4269e0699e09f6"
  },
  {
    "url": "interview/index.html",
    "revision": "870fb56e92c84f6cc507dd23a825be53"
  },
  {
    "url": "interview/JavaScript/20210222.html",
    "revision": "fc9c88fbb58805603f65728d96921d7b"
  },
  {
    "url": "interview/JavaScript/index.html",
    "revision": "0581c4e9035016daed7b7d65a7e1e6bc"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "f31809548488750455dfa8d41e1d6e1d"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "5badb4de762e61dcb7158d97aaad89b7"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "ead11bf4aa50eefea9011d5269fb5122"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "195801b090a2309e02bd35a6bd19798f"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "c0f6ecebb3105fd62add395f320b299d"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "5b11c5c902d29a29c17377473b319516"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "1e1d2537762ef2ed1a9bf891494f4c56"
  },
  {
    "url": "javascript/DailyNote/20210302.html",
    "revision": "2fbafab2ff6d46e7cbe3d9898497a35e"
  },
  {
    "url": "javascript/DailyNote/20210316.html",
    "revision": "df889ae4de7a957f1a7bb2c02547fe4a"
  },
  {
    "url": "javascript/DailyNote/20210423.html",
    "revision": "90fedb042ba0441cbb5470b22a2eeceb"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "94718f1b2bc57261c663e1d7e1c80d79"
  },
  {
    "url": "javascript/index.html",
    "revision": "81f1f8a21c3339aedf266a0a5b5a4550"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "c23e0be3062bd3791fc5953553fd30b0"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "7efb184c0ac281b2dc539fad29504142"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "bbd594c649021520007f2b6fe319093a"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "d68378e1aa70c4e3c605e34c95ec0361"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "579c90a31c5b0bd8de104f83deecca27"
  },
  {
    "url": "LICENSE.html",
    "revision": "3f10b4a43327155195e9eaa0a506186a"
  },
  {
    "url": "quanxue.html",
    "revision": "3f974c1f84cd670f77fea6b83d9bb5a4"
  },
  {
    "url": "tag/index.html",
    "revision": "b2bf488092958c98be0f1cb5dd4feb71"
  },
  {
    "url": "timeline/index.html",
    "revision": "ad55225f5e146ae203167dda54f0a886"
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

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
    "revision": "fa62cc484fa9d470ba85a219fa14b29a"
  },
  {
    "url": "about.html",
    "revision": "3dc90e369625c060c768fb963fe83ab8"
  },
  {
    "url": "about1.html",
    "revision": "bc6a3f3f07bddc78d89aad0865f21e91"
  },
  {
    "url": "about2.html",
    "revision": "4770dd0c960d76955d12494b743ae1bc"
  },
  {
    "url": "about3.html",
    "revision": "3c13ae59c37e33a8d19f57b9e3144478"
  },
  {
    "url": "about4.html",
    "revision": "bb61acec9597ab8162cd22ab958fc050"
  },
  {
    "url": "assets/css/0.styles.d3ac07e4.css",
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
    "url": "assets/js/1.7fdf66b8.js",
    "revision": "5ac6fbf9166ce3517d88f20b73accc3c"
  },
  {
    "url": "assets/js/10.82b42985.js",
    "revision": "2af8c5065f4d6e767f3438c2b7ce3830"
  },
  {
    "url": "assets/js/11.d77a05f0.js",
    "revision": "177e63f9efbe35eb3a2284d4809a24e7"
  },
  {
    "url": "assets/js/12.7c1880c6.js",
    "revision": "0f5887771d85119a449c7f4ed914c089"
  },
  {
    "url": "assets/js/13.5030396f.js",
    "revision": "888b702c1aca76d117890b29fbd842ee"
  },
  {
    "url": "assets/js/14.234e624f.js",
    "revision": "3f5cc9e72736055001e7117d8d6021f1"
  },
  {
    "url": "assets/js/15.2ab3f984.js",
    "revision": "8061e394f497733331d3d2fe6faa1515"
  },
  {
    "url": "assets/js/16.8460bd03.js",
    "revision": "4960d45c165ee2238b848cf511c836f1"
  },
  {
    "url": "assets/js/17.f8f1df02.js",
    "revision": "fa958843cb372327dd012b794efc8202"
  },
  {
    "url": "assets/js/18.7cc89085.js",
    "revision": "79570100f3c8b263fd93c9bf163e0388"
  },
  {
    "url": "assets/js/19.b46cb0ca.js",
    "revision": "8f0a5a51c0368770ffe52e12d4950434"
  },
  {
    "url": "assets/js/20.95f997ac.js",
    "revision": "96cdc75c95136948d1de22267e95acab"
  },
  {
    "url": "assets/js/21.c5822fe6.js",
    "revision": "647388795e88ce7d3c810fbd3a102d51"
  },
  {
    "url": "assets/js/22.5dd82c5d.js",
    "revision": "382a26d4d3c6770db5abe3f382895cc4"
  },
  {
    "url": "assets/js/23.8ca8a093.js",
    "revision": "c5c7dbfbb6d52f617deb4ca74d2a9ac5"
  },
  {
    "url": "assets/js/24.7b397fb9.js",
    "revision": "a243c802652c79736ddee2fbc2bc779f"
  },
  {
    "url": "assets/js/25.16bbeb14.js",
    "revision": "013235e8d3a3acb71e14b5b492f495f2"
  },
  {
    "url": "assets/js/26.7d8dc216.js",
    "revision": "7098c8304b953a77da8138f2bad482bb"
  },
  {
    "url": "assets/js/27.e58c7e7d.js",
    "revision": "a80544a57b373a4c47c4a0c0de20d0cb"
  },
  {
    "url": "assets/js/28.05ce4ba8.js",
    "revision": "9fdc15e0a3f5ce0a709ab1c53f5eafb7"
  },
  {
    "url": "assets/js/29.5a50246e.js",
    "revision": "bd4e24eded8ff00a712a68c4c504be0b"
  },
  {
    "url": "assets/js/3.877a96a5.js",
    "revision": "80393dfaa22a74bf04d0f21ed62261bd"
  },
  {
    "url": "assets/js/30.f2a968ee.js",
    "revision": "607e697157bd96a8206d383719ed7884"
  },
  {
    "url": "assets/js/31.d9279de7.js",
    "revision": "8d6ce02d575fb2371de22ec628b4f0c2"
  },
  {
    "url": "assets/js/32.0a8fc65f.js",
    "revision": "ae147d6a051139df42c57f750285fd88"
  },
  {
    "url": "assets/js/33.37304f84.js",
    "revision": "5876fe04f393523f7aff45e66506e844"
  },
  {
    "url": "assets/js/34.4dbb3bf9.js",
    "revision": "ede1fba01468780fba63f3e62605d97a"
  },
  {
    "url": "assets/js/35.c0d54294.js",
    "revision": "48c29dedc501995e5322772e0a1073f7"
  },
  {
    "url": "assets/js/36.19807c7b.js",
    "revision": "ab3834963302271933323f2f87dab17d"
  },
  {
    "url": "assets/js/37.71f84238.js",
    "revision": "375fd4799a160e94c68c1b70b3fac058"
  },
  {
    "url": "assets/js/38.c0d2e79d.js",
    "revision": "640eebc6cf3b19de62551ab98181b0b1"
  },
  {
    "url": "assets/js/39.4d3b55c1.js",
    "revision": "3d40f00703bc1b62a3cacd25be021d2e"
  },
  {
    "url": "assets/js/4.0a4890cd.js",
    "revision": "91c4503cacd56b9eb71e10d9c448202b"
  },
  {
    "url": "assets/js/40.d84982b3.js",
    "revision": "4187561a312005751cf20ec75dded0e9"
  },
  {
    "url": "assets/js/41.189f9c3a.js",
    "revision": "2bc6ab57fe52feef38f69f31775c4f9b"
  },
  {
    "url": "assets/js/42.3c48bc54.js",
    "revision": "2ff38b5a49748e1310ca8ecaf7729a9f"
  },
  {
    "url": "assets/js/43.b9a6a78e.js",
    "revision": "a62f6317e96b3439e0cc2bc57bf29d70"
  },
  {
    "url": "assets/js/44.03c7a32d.js",
    "revision": "59424df95d0fb0c1c96cb9893efb74ef"
  },
  {
    "url": "assets/js/45.8f0268f0.js",
    "revision": "ba31f2449275e4b9a8db730ce4fdb990"
  },
  {
    "url": "assets/js/46.cce9e412.js",
    "revision": "0d522b8e8a12994d7497fda022f82194"
  },
  {
    "url": "assets/js/47.cd621a7b.js",
    "revision": "c90998c01ed59efe354afbdd4cb09b56"
  },
  {
    "url": "assets/js/48.3a038b79.js",
    "revision": "0d549b24dcd80c92a3cae48704f86d4e"
  },
  {
    "url": "assets/js/5.62469db9.js",
    "revision": "83779a9c1af1cd9d16454e6adebc8668"
  },
  {
    "url": "assets/js/6.1f78184e.js",
    "revision": "2b98e209051d9665f72067ffeb72f1bd"
  },
  {
    "url": "assets/js/7.93fe58c6.js",
    "revision": "35e923f10791d0a3244ea01ac5b21abc"
  },
  {
    "url": "assets/js/8.eebb5dc6.js",
    "revision": "5ab18de678320f8f4d62ac038320d7d7"
  },
  {
    "url": "assets/js/9.49630fd9.js",
    "revision": "da30e1719180b9f5791aaa888b6216eb"
  },
  {
    "url": "assets/js/app.1c9d54bb.js",
    "revision": "a012a370427c73022e9a8d382b18da58"
  },
  {
    "url": "categories/index.html",
    "revision": "9693b25b47ab12e894c8d1d255d16482"
  },
  {
    "url": "countup.html",
    "revision": "978c6d1a9a9cfe499d94bf553c857a57"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "ab346bcc34faa07e46c3b7ee3a7e0780"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "12bfc9a5e4c078d57b648a91d0264df1"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "03a2e403f48d016ce0cd9bf2085c1188"
  },
  {
    "url": "css/index.html",
    "revision": "c7db74fca80d17270894438b970cf4cd"
  },
  {
    "url": "firstblog.html",
    "revision": "7726ab0a2c24e0dbd72e10fcc0945ff3"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "e9ce2e66bbac07624248d058b42c36bc"
  },
  {
    "url": "html/index.html",
    "revision": "755f5e5e758320ec816fd8bd57c10c87"
  },
  {
    "url": "index.html",
    "revision": "a065d6eeea6a1bf16426c40406e9e58f"
  },
  {
    "url": "interview/20201127.html",
    "revision": "1f32130170abc926b51bb8544d367548"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "166116ffb5797574f4d5d00032e4c246"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "21996e373493b6ee52246da081b75c32"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "f0118fa5de2895ddf858179a58acc106"
  },
  {
    "url": "interview/index.html",
    "revision": "4f47b27bd331a5520b7d86178cca2180"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "efafa2e20e71b8fd3d013a45792c8b43"
  },
  {
    "url": "interview/VueSeries/20210125.html",
    "revision": "b9f6372568987691e04c382db11d0a84"
  },
  {
    "url": "interview/VueSeries/20210126.html",
    "revision": "3251704150d1593353c6a48a0559e3f4"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "94c98581268136efa5f619c4290827c0"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "08670bcbac6f60d8cade24cdf4bde958"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "a9749f09efdfd339caacbdad9202bea5"
  },
  {
    "url": "javascript/DailyNote/20210220.html",
    "revision": "467a8fd2fdc5de894ea3ab6fe8775322"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "d92d82e965a0d6e946b67cde591e6b8a"
  },
  {
    "url": "javascript/index.html",
    "revision": "6f63e2e69ef925f6e59426f3d6a247d9"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "00cb1a77c685ca0edd258554d6cead80"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "eac33528892f288ff025e5f194d4112d"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "5d3d7cedd22f06abeb3d51e6c3ded719"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "2f31569b00231796cc01327b659b4f5e"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "2b11f62bf5364fd338266c36b52cf5f5"
  },
  {
    "url": "LICENSE.html",
    "revision": "6ff7a6f4dae461f13c79d3a879455205"
  },
  {
    "url": "quanxue.html",
    "revision": "62119f9903550fc8556bf72369df9a0f"
  },
  {
    "url": "tag/index.html",
    "revision": "d2268e74cedc05565df2f702139a9b80"
  },
  {
    "url": "timeline/index.html",
    "revision": "2989980ea40f3b1eb6a3c09c8f87a9cd"
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

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
    "revision": "1b8ba25638241c008d938ab9d8681b52"
  },
  {
    "url": "about.html",
    "revision": "b123a28ad2a834a9a048c49b5efd75b8"
  },
  {
    "url": "about1.html",
    "revision": "81de339203eaaf31de91ea99ae44b6b6"
  },
  {
    "url": "about2.html",
    "revision": "f16a91d3d41d8691a7d4e7bbe0ea9630"
  },
  {
    "url": "about3.html",
    "revision": "6723cd37ea62ee09591870eec3d6ae3c"
  },
  {
    "url": "about4.html",
    "revision": "bc5bce7678465d2bc6ede1a4404ed4d0"
  },
  {
    "url": "assets/css/0.styles.2cb21395.css",
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
    "url": "assets/js/1.9963d889.js",
    "revision": "0a81aa5117226f2c395727816db88621"
  },
  {
    "url": "assets/js/10.b50a428a.js",
    "revision": "73f5c7c9870f86978ca823318b8df02f"
  },
  {
    "url": "assets/js/11.c6df953b.js",
    "revision": "6bde4d310193ed391e9a49baaaeb8a10"
  },
  {
    "url": "assets/js/12.eceb907e.js",
    "revision": "7340090432961d664548332fc5819e31"
  },
  {
    "url": "assets/js/13.d6df43c7.js",
    "revision": "7b6d1c51bf18e447cefa144ceb4b238e"
  },
  {
    "url": "assets/js/14.aad87f48.js",
    "revision": "534ca8975d6f6a58fbcf96276597d783"
  },
  {
    "url": "assets/js/15.d0670304.js",
    "revision": "f3cf57a043748fabd011df511fae83f3"
  },
  {
    "url": "assets/js/16.41bc7646.js",
    "revision": "6a7874abe16cd88ed03bb918693be08b"
  },
  {
    "url": "assets/js/17.8520c5f0.js",
    "revision": "5cdaeb1b93845d22057ec394c6fe6a11"
  },
  {
    "url": "assets/js/18.7d6570b1.js",
    "revision": "b84053ff57ad5ac90b127d18eb38d29b"
  },
  {
    "url": "assets/js/19.ff29467d.js",
    "revision": "18da29c8a14b2c9a62aa0231f35991e6"
  },
  {
    "url": "assets/js/20.57912b53.js",
    "revision": "e3540b8ebf30f69d12e5876ff8d69012"
  },
  {
    "url": "assets/js/21.060047e3.js",
    "revision": "0d24583a379001caf2e57074713e925d"
  },
  {
    "url": "assets/js/22.ccf1fcd4.js",
    "revision": "1af493a33dcfe2bf447672d145950e7e"
  },
  {
    "url": "assets/js/23.64181120.js",
    "revision": "5f761aebedc4818dffb33fd8983d2318"
  },
  {
    "url": "assets/js/24.af258897.js",
    "revision": "c5d53d50c1cf98f7164df7d3fe9c3e68"
  },
  {
    "url": "assets/js/25.7ef67f2b.js",
    "revision": "efdbabd58b5db26f707ffdf8e168c3c0"
  },
  {
    "url": "assets/js/26.8e8db492.js",
    "revision": "ee32d8b08b87ef035823322a8a94a258"
  },
  {
    "url": "assets/js/27.941b7f7b.js",
    "revision": "4e5f34b1e3eee2500f68af3625148c9e"
  },
  {
    "url": "assets/js/28.e414a7cb.js",
    "revision": "dffc05475a215b0dfba69b81aa12be27"
  },
  {
    "url": "assets/js/29.398c749f.js",
    "revision": "082196a0cbe986207b43fcfc2bb166a5"
  },
  {
    "url": "assets/js/3.dc070e23.js",
    "revision": "b4fc9f7b700e46a25e3973b02382f472"
  },
  {
    "url": "assets/js/30.9af0f9f8.js",
    "revision": "987e0be6ef8c105c0a0c2546b075ffdf"
  },
  {
    "url": "assets/js/31.9d385561.js",
    "revision": "2d7960aee29d2912567867e9be14e3e4"
  },
  {
    "url": "assets/js/32.17416cf3.js",
    "revision": "68c5073126360d4751d1c35c9096bada"
  },
  {
    "url": "assets/js/33.0a3ff252.js",
    "revision": "7309480a93f110c3e73f316a5ae7bf05"
  },
  {
    "url": "assets/js/34.50f1433d.js",
    "revision": "e8ae2b2bb7f5c7b9fef66d29fb7bb5bb"
  },
  {
    "url": "assets/js/35.2e2b1090.js",
    "revision": "8c3020831dca8ae3d7c6395cd88416cd"
  },
  {
    "url": "assets/js/36.c96d9b54.js",
    "revision": "45bfa6b69d11861045adfacb27b797a4"
  },
  {
    "url": "assets/js/37.16e9491a.js",
    "revision": "659dd20ac01315c3ff1e61d0ebbc2018"
  },
  {
    "url": "assets/js/38.26d9f7b7.js",
    "revision": "535e4d1fb5bcc9cb310ace6db96f5255"
  },
  {
    "url": "assets/js/39.8e9e0a4c.js",
    "revision": "3ac48e663e724d1af54c37cc0614abb2"
  },
  {
    "url": "assets/js/4.f58688df.js",
    "revision": "fabe34c6837f832dddc1e3ad1d2e4c0a"
  },
  {
    "url": "assets/js/40.71d8cfe4.js",
    "revision": "cb6e61fb321a726681fbf8f0dda771c9"
  },
  {
    "url": "assets/js/41.cf2f5f30.js",
    "revision": "2d7401c0e6393662c36740b948adca07"
  },
  {
    "url": "assets/js/42.b0c0043f.js",
    "revision": "674f59f7c50c71db03a7fc9be868e303"
  },
  {
    "url": "assets/js/43.74605a42.js",
    "revision": "8a70afa7ef4060c8aeea6c015b81667e"
  },
  {
    "url": "assets/js/44.e0b73eae.js",
    "revision": "602113855f883524cf70c16d31f5a2ea"
  },
  {
    "url": "assets/js/45.aaf34ec7.js",
    "revision": "486272c2ffc00a498f059ec01e250048"
  },
  {
    "url": "assets/js/5.5b5f27c4.js",
    "revision": "140a0ba6315ebe1f53aea8db6c24e984"
  },
  {
    "url": "assets/js/6.091c98da.js",
    "revision": "a16b9039056c46e1b2762bfbf17de845"
  },
  {
    "url": "assets/js/7.5642e99e.js",
    "revision": "9244e11d1703f76c5cccef2005ad466d"
  },
  {
    "url": "assets/js/8.1c7b13d1.js",
    "revision": "63dd7341dae7c1736f60e5e653a1a15f"
  },
  {
    "url": "assets/js/9.e305e520.js",
    "revision": "65b8d32fc44442d61d15a9c81887d4d9"
  },
  {
    "url": "assets/js/app.d505fc54.js",
    "revision": "2a87df6ea4da2cf2d2abbcc70e76486b"
  },
  {
    "url": "categories/index.html",
    "revision": "7c7c7f9a4c98b87b42709f03fecde65c"
  },
  {
    "url": "countup.html",
    "revision": "6bee866228ff0c57ab4c4bcec24ee08f"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "f36768bbc4f0345c16a53903f59d15e8"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "f2c33cd48223de8f94ed03fa0e69c942"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "7e7ad7411de33021f5d27ea4fd898900"
  },
  {
    "url": "css/index.html",
    "revision": "ce9c3a682988cae2fcc5f5c46b5bd3b6"
  },
  {
    "url": "firstblog.html",
    "revision": "c9d453853f387678e0ad3c1c1cfab91d"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "38ca32e791d665ba214ce5f6185dad04"
  },
  {
    "url": "html/index.html",
    "revision": "5afb31a017fdffbf9af4b144e2fb1ce3"
  },
  {
    "url": "index.html",
    "revision": "03731d1106d49355212ede63ad41b5d9"
  },
  {
    "url": "interview/20201127.html",
    "revision": "67cf25b1606a9f78554b8e37e91017ea"
  },
  {
    "url": "interview/ES6/20210112.html",
    "revision": "13966be2f1162c9e18d67183163da212"
  },
  {
    "url": "interview/ES6/20210120.html",
    "revision": "b81cd301e9a494715cff605c5349337e"
  },
  {
    "url": "interview/ES6/index.html",
    "revision": "4f42a2f2bafae9583e9f98ed564f7144"
  },
  {
    "url": "interview/index.html",
    "revision": "e483f28668181a59f0a464dbd3250aaf"
  },
  {
    "url": "interview/VueSeries/20201201.html",
    "revision": "21520383349eba7253f0bccbc5e6193c"
  },
  {
    "url": "interview/VueSeries/index.html",
    "revision": "1f686165d8d39c838415197b2d32a40c"
  },
  {
    "url": "javascript/DailyNote/20201223.html",
    "revision": "e701640247060750dd5610e8da696a69"
  },
  {
    "url": "javascript/DailyNote/20210115.html",
    "revision": "4c329b73de937cb806dfcaa664be02a4"
  },
  {
    "url": "javascript/DailyNote/index.html",
    "revision": "7f58d585de9e64e50d9aea38c68d1c02"
  },
  {
    "url": "javascript/index.html",
    "revision": "e6d162d02ff178b5b266b12eaa003cfa"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "3c6098c29a59ac6723ee0732be64ccd2"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "389e9606d4254a392c36f356acbf99f5"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "9c9690f1927498f8ab835deea4f0a538"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "b922d63f6e417bd7272e03aab9e94d14"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "ee0815c73bb16b7a4fcf766251a88fbc"
  },
  {
    "url": "LICENSE.html",
    "revision": "9a252eff21799114fe3060105fa09374"
  },
  {
    "url": "quanxue.html",
    "revision": "f54aaaed28cdfe0cc8a20fd2010e5dd7"
  },
  {
    "url": "tag/index.html",
    "revision": "775135eed86e4889d6c6dae14a5a054f"
  },
  {
    "url": "timeline/index.html",
    "revision": "c0b82d76598838688517f09d69c47b4d"
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

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
    "revision": "8dfa3d68d68361ef44ca52192e237911"
  },
  {
    "url": "about.html",
    "revision": "d150efef81d6c027afdb4d96e9ca8475"
  },
  {
    "url": "about1.html",
    "revision": "1c5dd6b3948b5184f978ca5e748fb41e"
  },
  {
    "url": "about2.html",
    "revision": "b01d93039aa8dbb68899bc673c854574"
  },
  {
    "url": "about3.html",
    "revision": "598d5bbb763937bb8a79b23912b9ffc6"
  },
  {
    "url": "about4.html",
    "revision": "1ad5271c092a77562e5e38858b44d22e"
  },
  {
    "url": "assets/css/0.styles.d15e9e62.css",
    "revision": "32509fb977b698e56520e303f6bfa292"
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
    "url": "assets/js/1.28e1b7d4.js",
    "revision": "8f5c90ad5f1bad773d54ae89fad95ea2"
  },
  {
    "url": "assets/js/10.a1e0f144.js",
    "revision": "450d96beef99b25813448dad384174ab"
  },
  {
    "url": "assets/js/11.0b6bbeca.js",
    "revision": "21461732c1c8bba59e9534b53f90aaad"
  },
  {
    "url": "assets/js/12.f1e2f900.js",
    "revision": "474f21555d1d2685fe543255019581b5"
  },
  {
    "url": "assets/js/13.1947e814.js",
    "revision": "b2c0dacce05cd39b5d28bdb78eb3ac5f"
  },
  {
    "url": "assets/js/14.c74cc75c.js",
    "revision": "d70b9d2703e2c51229822e2bb58aa0a5"
  },
  {
    "url": "assets/js/15.f70f963a.js",
    "revision": "611d13292b4ba943e867182d1b1e78ac"
  },
  {
    "url": "assets/js/16.370e884c.js",
    "revision": "b564ad71812faae1e0b6e31ef6f7cb19"
  },
  {
    "url": "assets/js/17.6102e632.js",
    "revision": "f2bf743cb3377ab26cf06927388c1940"
  },
  {
    "url": "assets/js/18.2137b720.js",
    "revision": "f2b4ad855b88314b0939c59b592f3e66"
  },
  {
    "url": "assets/js/19.6ad350d3.js",
    "revision": "eb71a2870c7382ed742c7f9564628422"
  },
  {
    "url": "assets/js/20.fab1a5e3.js",
    "revision": "9d75f19919e2bd87a3f2b4490a07fc73"
  },
  {
    "url": "assets/js/21.842f0360.js",
    "revision": "6b551aebcfb171cf63ae03a36b26274b"
  },
  {
    "url": "assets/js/22.d51a0a23.js",
    "revision": "d1d2b0fa22908d2e0af8cf5d9eb96232"
  },
  {
    "url": "assets/js/23.db5c972e.js",
    "revision": "535dc75cb726c4629c9ef2d018953300"
  },
  {
    "url": "assets/js/24.f1fb1654.js",
    "revision": "a313b11ef2db6422bc50d9e63dfc4514"
  },
  {
    "url": "assets/js/25.ba217c63.js",
    "revision": "5e35d84155df5da2cbec4c196448a655"
  },
  {
    "url": "assets/js/26.a8b5113f.js",
    "revision": "4d8c5852b592f7f5fbdb39adf7323fbc"
  },
  {
    "url": "assets/js/27.c7d530c2.js",
    "revision": "e0a3cd7aa49220997ea8ce90337d02a6"
  },
  {
    "url": "assets/js/28.fc1e5fc0.js",
    "revision": "dc557a207d4449c4b3caa9edb822a978"
  },
  {
    "url": "assets/js/29.5bea23c7.js",
    "revision": "6632088bc6cf3de8506e3dc38ac615b6"
  },
  {
    "url": "assets/js/3.ca0f69ed.js",
    "revision": "2fe4cee1b98b458205015107d7da6f19"
  },
  {
    "url": "assets/js/30.68324f70.js",
    "revision": "9f320e0a8773e64a87a97283e80fa123"
  },
  {
    "url": "assets/js/31.7f12e4c1.js",
    "revision": "7388c6759d5c47e181b1e0b1668abf31"
  },
  {
    "url": "assets/js/32.3fe337d9.js",
    "revision": "22c4dd724371913f03a6240fd29ebc7b"
  },
  {
    "url": "assets/js/33.769db1b4.js",
    "revision": "da13fd00c2efcf436280e5ab6ce126ce"
  },
  {
    "url": "assets/js/34.b91319eb.js",
    "revision": "19f7e46e32e0e306202559e44e5c34ec"
  },
  {
    "url": "assets/js/35.5b031676.js",
    "revision": "f45ddb6158d7e340040ef06812441cf1"
  },
  {
    "url": "assets/js/4.917360a3.js",
    "revision": "8c37056adef565fb24471217ad91f40c"
  },
  {
    "url": "assets/js/5.e74c7020.js",
    "revision": "ff8acbbca4b2c452d2c050c39872ba19"
  },
  {
    "url": "assets/js/6.0421d25c.js",
    "revision": "f2b4614d491455a4bf6ba3e03ae1b5c8"
  },
  {
    "url": "assets/js/7.e6fd46cd.js",
    "revision": "0ee4094de47f7499f9bee1903ff9d72b"
  },
  {
    "url": "assets/js/8.2f8b8100.js",
    "revision": "d94a8c88f36b34afba43cd65a5cc5bf6"
  },
  {
    "url": "assets/js/9.e77a9f67.js",
    "revision": "7cc5237dcc10592b19d9a771319c58cc"
  },
  {
    "url": "assets/js/app.c59cda9c.js",
    "revision": "a8d25a79b0f5b776e315512af3c724a4"
  },
  {
    "url": "categories/index.html",
    "revision": "4b78f887a9356227623f2a4367c670ab"
  },
  {
    "url": "countup.html",
    "revision": "80269007cce4d62a1f5d4d401cb17054"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "560266c55b914298f24db269d38da7a7"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "19f4473f22312e1bc76ecf79d72d1ee4"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "a3a80e6787291072dbfba7740bd219cc"
  },
  {
    "url": "css/index.html",
    "revision": "a809bb214dbd8cfa0895d959ddc63c05"
  },
  {
    "url": "firstblog.html",
    "revision": "27d286c91704a46bedc5bbb0fc61847a"
  },
  {
    "url": "html/html-introdution.html",
    "revision": "72aeee497c53d2ede3bdf0bfeca35403"
  },
  {
    "url": "html/index.html",
    "revision": "15bf958b18be96ed3900e3f0cde2750c"
  },
  {
    "url": "index.html",
    "revision": "18da9e08117d9717ec47d84d2b26bc6f"
  },
  {
    "url": "javascript/index.html",
    "revision": "6093903cd6607acbb3f4117f2956e239"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "08ceac57c25ec174273a7c23523620fb"
  },
  {
    "url": "javascript/j-aaa/index.html",
    "revision": "f7656f1498d8db25cf997b272d4bcac2"
  },
  {
    "url": "javascript/j-aaa/j-aaa.html",
    "revision": "a14799d8a3cae27c33963cae469c2505"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "52cd2b415a798664ec4b09c5ea9511b0"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "7d3a737ca224a798c530a7f65ffefe0b"
  },
  {
    "url": "LICENSE.html",
    "revision": "3a92a09a1ea2b34079d25da3ddd9cb89"
  },
  {
    "url": "quanxue.html",
    "revision": "41292734d41604b36b76873e09dbea24"
  },
  {
    "url": "tag/index.html",
    "revision": "81c4e4e77d955d3a4ba3527c24e4f894"
  },
  {
    "url": "timeline/index.html",
    "revision": "19f78375e2f4e5bf5d90d1f474c32bb7"
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

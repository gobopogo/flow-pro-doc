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
    "revision": "6e23a0ef75408e146204706c57ec6b3e"
  },
  {
    "url": "assets/css/0.styles.18b11951.css",
    "revision": "210b39c5db4b810fbc268925405947d2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.82d4215c.js",
    "revision": "6159e1373959b605f418f39dc99731a9"
  },
  {
    "url": "assets/js/11.6a0498b8.js",
    "revision": "8f39181efbb9d95d76df07549dd55637"
  },
  {
    "url": "assets/js/12.d7ee4de0.js",
    "revision": "24304f854a5ea74786596825cb41ffdb"
  },
  {
    "url": "assets/js/13.92cee946.js",
    "revision": "0fc2f5e1557d3bef1428a60f6616a18a"
  },
  {
    "url": "assets/js/14.9ec249ee.js",
    "revision": "706660e0aacdaef33ed73d168e6488df"
  },
  {
    "url": "assets/js/15.b6af8db2.js",
    "revision": "bd3a8daddf40017043f3bc2212995920"
  },
  {
    "url": "assets/js/16.e28fa358.js",
    "revision": "6312f786c31008915c65b5c615f103a3"
  },
  {
    "url": "assets/js/17.13d02625.js",
    "revision": "35b4fc64c6a5487a5758f81235a2a77a"
  },
  {
    "url": "assets/js/18.9672c5e7.js",
    "revision": "ac97190c73b3d27bae66d5830d6172a8"
  },
  {
    "url": "assets/js/19.b72c61fb.js",
    "revision": "6e14fd2f7606781b042425e35dd7dc7c"
  },
  {
    "url": "assets/js/2.e237970b.js",
    "revision": "8158af0f405f0af4411d3fc42eec6d69"
  },
  {
    "url": "assets/js/20.b60b1ef2.js",
    "revision": "14638856d56a359ec857129b8af4a1b5"
  },
  {
    "url": "assets/js/21.e7982618.js",
    "revision": "3697386eac6800a8b5a52caedb5ce007"
  },
  {
    "url": "assets/js/22.8823bdff.js",
    "revision": "d557027d402594eba6b7789d1efc4fac"
  },
  {
    "url": "assets/js/23.b49f7ddc.js",
    "revision": "9a059d5edd97a128330db160f1b9769d"
  },
  {
    "url": "assets/js/24.18a4e7d9.js",
    "revision": "92a75334ef4e3b60429dbcbad3c6f930"
  },
  {
    "url": "assets/js/25.b0b25769.js",
    "revision": "c497a6d3ce71c9faecaa8ca4d64a6967"
  },
  {
    "url": "assets/js/26.196d9e10.js",
    "revision": "fa510b9dccadc3fed833368caf66ad43"
  },
  {
    "url": "assets/js/27.ebf3fe26.js",
    "revision": "59ee23c4913edcb46a0bf4cee0da291c"
  },
  {
    "url": "assets/js/28.258e79fd.js",
    "revision": "e9e33d58acdb5f6030c928d046265527"
  },
  {
    "url": "assets/js/29.742c8916.js",
    "revision": "c59b1bdb10fa3e3732468aefc4ba0bf9"
  },
  {
    "url": "assets/js/3.ceb609b1.js",
    "revision": "35b967ae85f3fe9d8dfff363f603bf4b"
  },
  {
    "url": "assets/js/30.d7bd2ac3.js",
    "revision": "022564a28f1124d632243cf3680ba7a8"
  },
  {
    "url": "assets/js/31.facbd81d.js",
    "revision": "faf8377aed2c21ef06335b2d58be95b0"
  },
  {
    "url": "assets/js/32.087d98af.js",
    "revision": "f8cbb0824e9054f93f85838d9097cad5"
  },
  {
    "url": "assets/js/4.94f20706.js",
    "revision": "c98619aeb982275ce683dd2e5df9b54f"
  },
  {
    "url": "assets/js/5.fb67957c.js",
    "revision": "e9072079ae11fd6586e7ce6fe5753a2d"
  },
  {
    "url": "assets/js/6.95db578a.js",
    "revision": "a190a3934d4f13b396fcea85f41f14e8"
  },
  {
    "url": "assets/js/7.94606415.js",
    "revision": "ee49570eb1da9da6e64e997ec7f0854b"
  },
  {
    "url": "assets/js/8.5c692a6f.js",
    "revision": "939b724199100bfe53213606d62d4e8c"
  },
  {
    "url": "assets/js/9.b475953e.js",
    "revision": "031ab9d1cdc209bf143d3eb3f0ab9132"
  },
  {
    "url": "assets/js/app.a21bf154.js",
    "revision": "4298833183bb1f2f442a3ba4754e987a"
  },
  {
    "url": "blog/index.html",
    "revision": "f186086b3148a421aececccd8ccaf12f"
  },
  {
    "url": "img/bg.jpeg",
    "revision": "bf3e56b6219d2cfcd39eda9b4d1ab69d"
  },
  {
    "url": "img/bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "img/EB-logo.png",
    "revision": "40d8019adec67cd669c35462f14a5599"
  },
  {
    "url": "img/more.png",
    "revision": "20bc993bdaa9538405f85ac5fcefdf1d"
  },
  {
    "url": "img/other.png",
    "revision": "cd4a5ecbd9cc330e7fdcb9bdc3e92796"
  },
  {
    "url": "img/panda-waving.png",
    "revision": "425e622d348abc7ea349245e7e8738c2"
  },
  {
    "url": "img/python.png",
    "revision": "fd961de471b586d9049547322f8b1744"
  },
  {
    "url": "img/ui.png",
    "revision": "1c26d51f2ef9a17b8b36f55cb04be642"
  },
  {
    "url": "img/web.png",
    "revision": "c1718a647a4b41978bc8af6b0a3f41da"
  },
  {
    "url": "index.html",
    "revision": "68c25d74df63338e9535b6f4e13be9a2"
  },
  {
    "url": "markmap/01.html",
    "revision": "dd371c2f62cb9d9271072fece34c9ad4"
  },
  {
    "url": "pages/088c16/index.html",
    "revision": "ba3598ea881bc474dde097acd54d3a74"
  },
  {
    "url": "pages/197691/index.html",
    "revision": "0628f98b2a3eea1e1ac0b54312282acb"
  },
  {
    "url": "pages/1b12ed/index.html",
    "revision": "0d59526577a79091632a1f4e4dc5c545"
  },
  {
    "url": "pages/1cc523/index.html",
    "revision": "e09cec19ab59d26a09a8b17302f1dbc9"
  },
  {
    "url": "pages/26997d/index.html",
    "revision": "3a9694dade25dd2dbf219ba80f2bbe1a"
  },
  {
    "url": "pages/2f674a/index.html",
    "revision": "52d70760bd5715f09cedfbd6a7fa9a23"
  },
  {
    "url": "pages/3216b0/index.html",
    "revision": "37b99bcbd9fc083a55c2a3b1a463eb0b"
  },
  {
    "url": "pages/33d574/index.html",
    "revision": "8e3bd063c15f9d3f8f09b60d3664f0df"
  },
  {
    "url": "pages/52d5c3/index.html",
    "revision": "3ea9cd2020ec1ceaecae9d85427432de"
  },
  {
    "url": "pages/54651a/index.html",
    "revision": "5a721a9b9911fc285cc2e923112cc6ff"
  },
  {
    "url": "pages/5d571c/index.html",
    "revision": "9695d5070d4e29c3b9679bb90e8bf894"
  },
  {
    "url": "pages/793dcb/index.html",
    "revision": "f7ba52041657ab31ef90242f52fcb9b7"
  },
  {
    "url": "pages/9cc27d/index.html",
    "revision": "8bba1f38fb41d404305dafd5757d25e2"
  },
  {
    "url": "pages/a20ce8/index.html",
    "revision": "854f3f6e82c35a16854fb06d7d66f57f"
  },
  {
    "url": "pages/a2f161/index.html",
    "revision": "bdb712c617a927eac5c546bc6163df09"
  },
  {
    "url": "pages/c5a54d/index.html",
    "revision": "91d9a4841b739f2c4665ac2ce60f2e2c"
  },
  {
    "url": "pages/c5a54j/index.html",
    "revision": "ae67f636a34ba6676cdf8bfae5ac5a08"
  },
  {
    "url": "pages/c5a54z/index.html",
    "revision": "ebbf365be19a44539fefd3f5c8efede4"
  },
  {
    "url": "pages/ce175c/index.html",
    "revision": "062eafa26f5c1ef01ad1c971fb477598"
  },
  {
    "url": "pages/d0d7eb/index.html",
    "revision": "2031ebb858e52068a4daa141039f74eb"
  },
  {
    "url": "pages/db78e2/index.html",
    "revision": "4b942bc148957212c6a437990522a207"
  },
  {
    "url": "pages/dd027d/index.html",
    "revision": "dc8dbeccd54284e3709d5f5bbdffd050"
  },
  {
    "url": "pages/f14bdb/index.html",
    "revision": "924c5ffde5275b448781481213be1192"
  },
  {
    "url": "pages/f51918/index.html",
    "revision": "8cd7b8004a84e58570c27da050c91ede"
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

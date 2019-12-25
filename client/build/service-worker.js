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

importScripts(
<<<<<<< HEAD
  "/precache-manifest.c0fcd38a86217219ce7a770073ed22e9.js"
=======
<<<<<<< HEAD
  "/precache-manifest.6e0569c45355bac9b5ff8a5c89a3f094.js"
=======
<<<<<<< HEAD
  "/precache-manifest.e5833e78777c5b0056df1b6900fb2b4d.js"
=======
  "/precache-manifest.d438c1b3f5b0d853b84411225cd6c4f1.js"
>>>>>>> b008a184967e57a8624117211b87ede72d566fb8
>>>>>>> aaaf23381ea4c15fcebfa1714b9a7df81e7830ff
>>>>>>> c15bec6264c6eccf566c3798b19dbe642ec240ed
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});

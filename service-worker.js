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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a336289fda1bfef6da6979495441c7f5"
  },
  {
    "url": "assets/css/1.styles.d54a2158.css",
    "revision": "0aeead1fc5e5422c9466fb0c7cc2e596"
  },
  {
    "url": "assets/css/styles.c2edec4a.css",
    "revision": "8b72a6c7ef0e74fa972b1cd84c125427"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d54a2158.js",
    "revision": "edd3946fd27d4a7191addd2f75cf4620"
  },
  {
    "url": "assets/js/2.03e9a7aa.js",
    "revision": "8142769dffcf376b1d4b562705d1c7f3"
  },
  {
    "url": "assets/js/app.c2edec4a.js",
    "revision": "0d70a9447af635a2aad4b8667e8bf2d2"
  },
  {
    "url": "header/zh-cn.html",
    "revision": "a2650e8f7eac007cf86264a5613ea4f5"
  },
  {
    "url": "index.html",
    "revision": "8b58c0800268580966d899282190d38e"
  },
  {
    "url": "logo.jpg",
    "revision": "47f7e57bf69a8ff5db384642790d1e03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

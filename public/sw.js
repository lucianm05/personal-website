if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise((async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},a=(a,c)=>{Promise.all(a.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then((()=>{let c={};const n={uri:location.origin+a.slice(1)};return Promise.all(s.map((a=>{switch(a){case"exports":return c;case"module":return n;default:return e(a)}}))).then((e=>{const a=i(...e);return c.default||(c.default=a),c}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/80aJyJcLCFqRP_ckiaU4L/_buildManifest.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/80aJyJcLCFqRP_ckiaU4L/_ssgManifest.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/102.0eb8523a8d3b58d585d4.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/333.4a55a818b4adb691669b.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/347-d76c189679a015f0a339.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/361.fd8e2ccf0418c44b0a93.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/389.1656cc317c5cb174ca16.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/412.1b5b25843f1b15c819ce.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/515.e7c965e78a0054325476.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/569.23078da6940d23a81b0b.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/671.eb0cedc2947a2589ca60.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/797.d8fc8ce1b3e8b6b7bcde.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/819.b4516ce440f3efe54cb5.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/973.b0bedc4d67e9d7545dc1.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/979.bc0f2265c0dee6d8cd6f.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/framework-c4c6cd00349b8289cc5a.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/main-f9835f9695c1a9c05d9a.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/pages/_app-eefd843399df39e9a9fc.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/pages/_error-d2dc65a8df93efd493c5.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/pages/contact-dcba6510c5c2e81089f6.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/pages/index-a3dd8590ec32e5a318fb.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/pages/projects-d19720ad9a0b44cb65fe.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/pages/projects/%5B...slug%5D-89a7b6e708357b76267b.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/polyfills-e13094cb581482e858a5.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/chunks/webpack-b1e6a700336b2941c634.js",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/css/23266b2e776d4b83ea3f.css",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/css/3690b0798b9b77dcac02.css",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/css/bd83b7cf4e388981787d.css",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/css/d1569529e9e6c2ee8f82.css",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/_next/static/css/da7588aa5adb9709fa78.css",revision:"80aJyJcLCFqRP_ckiaU4L"},{url:"/cv/[EN] CV Manea Lucian George.pdf",revision:"8bb403b7fb276ff54e134e9bbc30f87a"},{url:"/cv/[RO] CV Manea Lucian George.pdf",revision:"bfd9a3b44ea9658d510ae669522d54b3"},{url:"/favicon.ico",revision:"b52e546363a40a939438fbea4d255035"},{url:"/fonts/ttf/Raleway-Italic-VF.ttf",revision:"068244f17cda23b694ff9353dfd9944a"},{url:"/fonts/ttf/Raleway-VF.ttf",revision:"d650253875e3f506dfd85206a52a1df4"},{url:"/fonts/woff/Raleway-Italic-VF.woff",revision:"f601f0250b82c9514667314b039e04d4"},{url:"/fonts/woff/Raleway-VF.woff",revision:"da4c49ae112f1545fcd40169811f8525"},{url:"/fonts/woff2/Raleway-Italic-VF.woff2",revision:"8558c8b1176c9c18c8f0f9f3769dc5d8"},{url:"/fonts/woff2/Raleway-VF.woff2",revision:"957920298752ec1b7f2a52c19f1e1efe"},{url:"/images/logo.svg",revision:"fc195d973aa26ca24fab9d172cbada7a"},{url:"/images/nav-banner.png",revision:"cec6958bf7b227ca57d763b97ab08c83"},{url:"/images/nav-banner.webp",revision:"b96ade3b12ddf7baa08fac05549cdd17"},{url:"/images/profile-picture.jpg",revision:"4112e6981a25739a725ddb818e78a071"},{url:"/images/projects/animus/og-image.png",revision:"b22cbf0f7a4f4c82a4eeeebc4945312c"},{url:"/images/projects/color-guess/og-image.png",revision:"1c58b6ae1cc8a9f89a783772ca46bae6"},{url:"/images/projects/elefant-copy/og-image.png",revision:"d53422c4d1fcba29bcf2e6824034a4d4"},{url:"/images/projects/tictactoe/og-image.png",revision:"d8f44d4af528a79ef8ddff98af38e89a"},{url:"/images/underline.svg",revision:"97d9dfad0fddf3c37c7bf80333591050"},{url:"/manifest.json",revision:"f8c24c85625ab39b312ecd8c64c48b2d"},{url:"/pwa/apple-touch-icon.png",revision:"b24f6d80ac864e0c1865b45eabb754f3"},{url:"/pwa/favicon-128x128.png",revision:"8706a7c30ee925794c509fbf93ee0794"},{url:"/pwa/favicon-144x144.png",revision:"92f0968bea8921e0be05bb0828acaae0"},{url:"/pwa/favicon-152x152.png",revision:"9ffbf5e8d446bec8e2c426a53e3797f3"},{url:"/pwa/favicon-16x16.png",revision:"802f8198d771f361f798e42ed8ef2805"},{url:"/pwa/favicon-192x192.png",revision:"2d350b75ad85b4ac368a355f999c6e8c"},{url:"/pwa/favicon-32x32.png",revision:"f059fd62de8a1d21841867ef2c3624b9"},{url:"/pwa/favicon-384x384.png",revision:"964f493017e12c897f0c261efd62d994"},{url:"/pwa/favicon-512x512.png",revision:"6f7aab4be2a901e3eb9ffe80778e4ad7"},{url:"/pwa/favicon-72x72.png",revision:"a7f0aa7c9cba56c531676be9e440110a"},{url:"/pwa/favicon-96x96.png",revision:"88d3db6d76ac7cc41379937141d8e574"},{url:"/pwa/favicon.png",revision:"b24f6d80ac864e0c1865b45eabb754f3"},{url:"/pwa/favicon.svg",revision:"d881d97bc560be933aea71893e9e4378"},{url:"/pwa/maskable_favicon.png",revision:"8930d1bb496473731ae4551335344886"},{url:"/pwa/og-image.png",revision:"05e02901606282b8912ea30672926be5"},{url:"/pwa/safari-pinned-tab.svg",revision:"d881d97bc560be933aea71893e9e4378"},{url:"/robots.txt",revision:"d3087b14b5dc8dce0f8cb6e07d107d29"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:c,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));

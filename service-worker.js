"use strict";var precacheConfig=[["/flashhang-landing/index.html","4ecf999a8a9a703ec9ea5aef072da312"],["/flashhang-landing/static/css/main.7615ab79.css","2bdbcc714eb84e688e82eaf118edad5f"],["/flashhang-landing/static/js/main.74fcbb06.js","34374f194c10175c778fd7bb5cf6e0c7"],["/flashhang-landing/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/flashhang-landing/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/flashhang-landing/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/flashhang-landing/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/flashhang-landing/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/flashhang-landing/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/flashhang-landing/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/flashhang-landing/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/flashhang-landing/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/flashhang-landing/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/flashhang-landing/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/flashhang-landing/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/flashhang-landing/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/flashhang-landing/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/flashhang-landing/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/flashhang-landing/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/flashhang-landing/static/media/pineapple.bc9fc362.jpg","bc9fc3626778c347d05d5afe68fd6b24"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,n,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return n.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,n=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),e=urlsToCacheKeys.has(n));var c="/flashhang-landing/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
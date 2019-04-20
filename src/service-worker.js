/* eslint-disable no-debugger */
/* eslint-disable no-undef */
/* eslint-disable no-console */
workbox.setConfig({
    debug: false,
});
  
if (workbox) {
    console.log(`Workbox is loaded`);
    self.__precacheManifest = [].concat(self.__precacheManifest || []);
    workbox.precaching.suppressWarnings();
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
} 
else {
    console.log(`Workbox failed to load`);
}
// workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'images',
        plugins: [
        new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
        ],
    }),
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'googleapis',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
      ],
    }),
);

workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
);

self.addEventListener("message", (e)=>{
    if (e.data.action=='skipWaiting') self.skipWaiting()
})
  
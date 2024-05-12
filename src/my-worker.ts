import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

declare let self: Window &
  typeof globalThis &
  ServiceWorkerGlobalScope & { skipWaiting: () => void; registration: ServiceWorkerRegistration };

self.addEventListener('push', (event: any) => {
  const payload = event.data?.text() ?? 'no payload';
  console.log('received push notification', payload);
  event.waitUntil(
    self.registration.showNotification('ServiceWorker Cookbook', {
      body: payload,
    }),
  );
});

console.log('hello, i am started');

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')));

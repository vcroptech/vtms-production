// CACHE is auto-generated fresh (current timestamp) every time this file is
// regenerated, so it's guaranteed to differ from whatever's currently deployed on
// GitHub — this is what makes the browser actually notice an update happened and
// fire the "new version available" refresh prompt in index.html. Deploy this file
// TOGETHER with index.html every time either one changes; if only index.html is
// updated and this file is left as-is, the browser has no way to detect that
// anything changed at all, and users will keep silently getting the old version.
const CACHE = 'vtms-prod-2026-08-22T03-59-16';
const SKIP_URLS = ['firestore', 'firebase', 'googleapis', 'gstatic'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['./']))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Don't intercept Firebase/Google requests
  if (SKIP_URLS.some(u => e.request.url.includes(u))) return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./')))
  );
});

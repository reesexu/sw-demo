const cacheKey = 'v1'
const cacheList = ['/pwa/', '/pwa/demo.jpg', '/pwa/index.css', '/pwa/index.js']

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheKey)
      .then((cache) => cache.addAll(cacheList))
      .then(() => {
        console.log('installed')
      })
  )
})

this.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== cacheKey) {
            return caches.delete(key)
          }
        }))
      })
  )
})

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  )
})
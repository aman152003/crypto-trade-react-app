const CacheName = 'version-1'
const CachedAssets = [
    '/offline'
]
self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open(CacheName)
          .then((cache)=>{
            console.log('Opened cache')
            return cache.addAll(CachedAssets)
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
          .then((response)=>{
            if(response){
              return response
            }
            return fetch(e.request)
          }
        )
    )
})


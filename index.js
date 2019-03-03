const tipContainer = document.getElementsByTagName('p')[0]

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => {
      const content = 'ServiceWorker注册成功'
      console.log(content)
      tipContainer.innerHTML = content
    })
    .catch(() => {
      tipContainer.innerHTML = 'ServiceWorker注册失败，请更换新版浏览器后重试'
    })
}

require('../css/page.css')

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('The page is loaded and ready to perform JS actions.')
})

export default function () {
  console.log('foooo')
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}

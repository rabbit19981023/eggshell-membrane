import Home from './home.js'

/** Content **/
const content = document.querySelector('.content')

/** Change the URL without page-fresh **/
const navigate = async function (event) {
  if (event.target.matches('.data-link')) {
    event.preventDefault()

    const path = event.target.getAttribute('href')
    window.history.pushState(null, null, path)
    router()
  }
}

/** Routes Mapping 
 * 
 * Everytime the URL changed, re-fetch the view content
 * 
 *  **/
const router = async function () {
  // Routes Register
  const routes = [
    { path: '/', view: new Home() },
    { path: '/shopping-cart', view: new ShoppingCart() },
    { path: '/contact', view: 'ContactUs' }
  ]

  const path = window.location.pathname
  // fetch the view content depends on current path
  const view = await routes.find(route => route.path === path).view.getHtml()

  content.innerHTML = view
}

// first time, or everytime the page refresh
// this feature Need a Backend Server: #GET '/*' -> res.sendFile('index.html')
window.addEventListener('DOMContentLoaded', router)
// when user click back or forward to get different history page
window.addEventListener('popstate', router)
// when user click the view-link
window.addEventListener('click', navigate)

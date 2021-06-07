import AbstractView from './components/AbstractView.js'
import Home from './components/home.js'
import About from './components/about.js'
import Contact from './components/contact.js'

/** Content **/
const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement

/** Change the URL without page-refresh **/
const navigate: EventListener = function (event: Event) {
  const dataLink: HTMLLinkElement = event.target as HTMLLinkElement
  if (dataLink.matches('.data-link')) {
    // prevent page redirect
    event.preventDefault()

    const path = dataLink.getAttribute('href')
    window.history.pushState(null, 'View Content', path)

    router(event)
  }
}

/** Routes Mapping
 * 
 * EveryTime the URL changed, re-fetch the view content
 * 
 **/
const router: EventListener = async function () {
  interface Route {
    path: string,
    view: AbstractView
  }
  // Routes Context
  const routes: Route[] = [
    { path: '/', view: new Home() },
    { path: '/about', view: new About() },
    { path: '/contact', view: new Contact() }
  ]

  const path = window.location.pathname
  const route = routes.find(route => route.path === path) as Route
  const title = route.view.getTitle()
  const view = await route.view.getContent()
  
  document.title = title
  content.innerHTML = view
}

window.addEventListener('DOMContentLoad', router)
window.addEventListener('popstate', router)
window.addEventListener('click', navigate)

import AbstractView from '../components/AbstractView.js'
import Home from '../components/home.js'
import About from '../components/about.js'
import Contact from '../components/contact.js'

import { toggleStore } from './toggle-store.js'

/** Content **/
const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement

/** Change the URL without page-refresh **/
const navigate: EventListener = function (event: Event) {
  const target: HTMLLinkElement = event.target as HTMLLinkElement
  if (target.matches('.nav-link')) {
    // prevent page redirect
    event.preventDefault()

    const path = target.href
    window.history.pushState(null, 'View Content', path)

    router(event)
  }
}

/** Routes Mapping
 * 
 * EveryTime the URL changed, re-fetch the view content
 * 
 **/
const router: EventListener = async function (event) {
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

  try {
    const path = window.location.pathname
    const route = routes.find(route => route.path === path) as Route
    const title = route.view.getTitle()
    const view = await route.view.getContent()
    
    document.title = title
    content.innerHTML = view
  } catch (err) { }

  toggleStore(event)
}

window.addEventListener('DOMContentLoaded', router)
window.addEventListener('popstate', router)
window.addEventListener('click', navigate)

import AbstractView from '../pages/AbstractView.js'
import Home from '../pages/home.js'
import About from '../pages/about.js'
import Contact from '../pages/contact.js'

import { activeLink } from './activeLink.js'
import { toggleStore } from './toggle-store.js'

/** View Content Div **/
const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement

/** Change the URL without page-refresh **/
const navigate: EventListener = function (event: Event) {
  const target: HTMLLinkElement = event.target as HTMLLinkElement
  if (target.matches('.nav-link')) {
    // prevent page redirect
    event.preventDefault()

    const url = target.href
    window.history.pushState(null, 'View Content Changed!', url)

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

  const path = window.location.pathname
  try {
    const route = routes.find(route => route.path === path) as Route
    const title = route.view.getTitle()
    const view = await route.view.getContent()

    document.title = title
    content.innerHTML = view
  } catch (err) {}

  activeLink(path)
  toggleStore(event)
}

const registerRouting: EventListener = function () {
  const navLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.nav-link') as NodeListOf<HTMLLinkElement>
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', navigate)
  })
}

window.addEventListener('DOMContentLoaded', registerRouting)
window.addEventListener('DOMContentLoaded', router)
window.addEventListener('popstate', router)

import AbstractView from '../pages/AbstractView.js'
import Home from '../pages/home.js'
import Brand from '../pages/brand.js'
import Contact from '../pages/contact.js'
import Login from '../pages/login.js'
import Register from '../pages/register.js'

import { activeLink } from './activeLink.js'
import { toggleStore } from './toggle-store.js'

/** View Content Div **/
const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement

/** Change the URL without page-refresh **/
const navigate: EventListener = function (event: Event) {
  const target: HTMLLinkElement = event.target as HTMLLinkElement
  
  const preventReloadPage = function () {
    event.preventDefault()
  }

  const updateHistory = function () {
    const url = target.href
    window.history.pushState(null, 'View Content Changed!', url)
  }

  preventReloadPage()
  updateHistory()
  router(event)
}

interface CachedView {
  title: string,
  content: string
}

interface CachedViews {
  [viewName: string]: CachedView
}

interface Route {
  path: string,
  view: AbstractView
}

// Cache Memory
const cachedViews: CachedViews = {} as CachedViews

// Routes Context
const routes: Route[] = [
  { path: '/', view: new Home('home') },
  { path: '/brand', view: new Brand('brand') },
  { path: '/contact', view: new Contact('contact') },
  { path: '/login', view: new Login('login') },
  { path: '/sign-up', view: new Register('register') }
]

const router: EventListener = async function (event) {
  const path = window.location.pathname
  try {
    const view = (routes.find(route => route.path === path) as Route).view

    const render = async function () {
      let cachedView: CachedView = cachedViews[view.name]

      if (!cachedView) {
        cachedView = {} as CachedView
        cachedView.title = view.getTitle()
        cachedView.content = await view.getContent()

        cachedViews[view.name] = cachedView
      }

      document.title = cachedView.title
      content.innerHTML = cachedView.content
    }

    render()
  } catch (err) { }

  activeLink(path)
  toggleStore(event)
}

const registerRouting: EventListener = function () {
  // Targeting <img> Link
  const homeLink: HTMLImageElement = document.querySelector('.main-brand') as HTMLImageElement
  homeLink.addEventListener('click', (event) => {
    const preventReloadPage = function () {
      event.preventDefault()
    }

    const updateHistory = function () {
      const path = '/'
      window.history.pushState(null, 'View Content Changed!', path)
    }

    preventReloadPage()
    updateHistory()
    router(event)
  })

  // Targeting <a> Link
  const navLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.nav-link') as NodeListOf<HTMLLinkElement>
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', navigate)
  })
}

window.addEventListener('DOMContentLoaded', registerRouting)
window.addEventListener('DOMContentLoaded', router)
window.addEventListener('popstate', router)

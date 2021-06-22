import AbstractView from '../pages/AbstractView.js'
import Home from '../pages/home.js'
import Brand from '../pages/brand.js'
import Contact from '../pages/contact.js'
import Login from '../pages/login.js'
import Register from '../pages/register.js'

import { activeLink } from './activeLink.js'
import { toggleStore } from './toggle-store.js'

/** Switch Page without page-refresh **/
const navigate: EventListener = function (event: Event) {
  const target: HTMLLinkElement = event.target as HTMLLinkElement

  const preventReloadPage = function () {
    event.preventDefault()
  }

  const updateHistory = function () {
    const url: string = target.href || '/' // a.nav-link || img.main-brand
    window.history.pushState(null, 'View Content Changed!', url)
  }

  preventReloadPage()
  updateHistory()
  router(event)
}

interface CachedView {
  title: string,
  view: HTMLElement
}

interface CachedViews {
  [identifier: string]: CachedView
}

interface Route {
  path: string,
  view: AbstractView
}

// Routes Context
const routes: Route[] = [
  { path: '/', view: new Home('home') },
  { path: '/brand', view: new Brand('brand') },
  { path: '/contact', view: new Contact('contact') },
  { path: '/login', view: new Login('login') },
  { path: '/sign-up', view: new Register('register') }
]

// Cache Memory
const cachedViews: CachedViews = {} as CachedViews

const router: EventListener = function (event): void {
  const render = function (): void {
    const getView = function (): CachedView {
      const currentRoute: Route = routes.find(route => route.path === window.location.pathname) as Route
      const identifier: string = currentRoute.view.identifier
      let cachedView: CachedView = cachedViews[identifier]

      if (!cachedView) {
        cachedView = {} as CachedView
        cachedView.title = currentRoute.view.getTitle()
        cachedView.view = currentRoute.view.getView()

        cachedViews[identifier] = cachedView
      }

      return cachedView
    }

    const renderView = function (title: CachedView["title"], view: CachedView["view"]): void {
      const emptyContainer = function (container: HTMLDivElement): void {
        while (container.firstChild) {
          container.removeChild(container.firstChild)
        }
      }

      const addViewToContainer = function (container: HTMLDivElement, view: CachedView["view"]): void {
        container.appendChild(view)
      }

      const setTitle = function (title: CachedView["title"]): void {
        document.title = title
      }

      const viewContainer: HTMLDivElement = document.querySelector('.content') as HTMLDivElement
      emptyContainer(viewContainer)
      addViewToContainer(viewContainer, view)
      setTitle(title)
    }

    try {
      const cachedView: CachedView = getView()
      const title: string = cachedView.title
      const view: HTMLElement = cachedView.view

      renderView(title, view)
    } catch (err) { }
  }

  render()
  console.log('render done')
  activeLink(window.location.pathname)
  toggleStore(event)
}

const registerRouting: EventListener = function () {
  // Targeting <img> Link
  const homeLink: HTMLImageElement = document.querySelector('.main-brand') as HTMLImageElement
  homeLink.addEventListener('click', navigate)

  // Targeting <a> Link
  const navLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.nav-link') as NodeListOf<HTMLLinkElement>
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', navigate)
  })
}

window.addEventListener('DOMContentLoaded', registerRouting)
window.addEventListener('DOMContentLoaded', router)
window.addEventListener('popstate', router)

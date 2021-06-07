const store: HTMLDivElement = document.querySelector('#my-store-61531483') as HTMLDivElement

const hiddenStore: EventListener = function (event) {
  const target: HTMLElement = event.target as HTMLElement
  try {
    if (target.matches('.data-link')) {
      store.style.display = 'none'
      return
    }
  } catch (err) {
    if (window.location.pathname !== '/store') {
      store.style.display = 'none'
      return
    }

    store.style.display = 'block'
  }
}
window.addEventListener('DOMContentLoaded', hiddenStore)
window.addEventListener('click', hiddenStore)

const showStore: EventListener = function () {
  const storeLink: HTMLLinkElement = document.querySelector('.store-link') as HTMLLinkElement

  const showStore: EventListener = function (event) {
    // prevent URL redirecting
    event.preventDefault()
  
    const path = storeLink.href
    window.history.pushState(null, '', path)
    document.title = 'Store'
  
    store.style.display = 'block'
  }

  storeLink.addEventListener('click', showStore)
}

window.addEventListener('DOMContentLoaded', showStore)

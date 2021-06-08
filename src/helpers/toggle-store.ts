const toggleStore = function (event: Event) {
  const store: HTMLDivElement = document.querySelector('#my-store-61531483') as HTMLDivElement
  const target: HTMLElement = event.target as HTMLElement

  try {
    if (target.matches('.data-link')) {
      store.style.display = 'none'
      return
    }

    if (target.matches('.store-link')) {
      document.title = 'Store'
      store.style.display = 'block'
      return
    }

  } catch (err) {
    event.preventDefault()
    if (window.location.pathname === '/store') {
      store.style.display = 'block'
      return
    }
    store.style.display = 'none'
  }
}

export { toggleStore }

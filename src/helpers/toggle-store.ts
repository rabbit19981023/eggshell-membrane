const toggleStore = function (event: Event) {
  const store: HTMLDivElement = document.querySelector('#my-store-61531483') as HTMLDivElement
  const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement
  const target: HTMLElement = event.target as HTMLElement

  try {
    if (target.matches('.data-link')) {
      content.style.display = 'block'
      store.style.display = 'none'
      return
    }

    if (target.matches('.store-link')) {
      document.title = 'Store'
      content.style.display = 'none'
      store.style.display = 'block'
      return
    }

  } catch (err) {
    if (window.location.pathname === '/store') {
      document.title = 'Store'
      content.style.display = 'none'
      store.style.display = 'block'
      return
    }
    content.style.display = 'block'
    store.style.display = 'none'
  }
}

export { toggleStore }

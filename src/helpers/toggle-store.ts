const toggleStore = function (event: Event) {
  const store: HTMLDivElement = document.querySelector('#my-store-61706777') as HTMLDivElement
  const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement
  const target: HTMLElement = event.target as HTMLElement

  try {
    /** View Link Event Triggered **/
    if (target.matches('.data-link')) {
      content.style.zIndex = '1000'
      store.style.zIndex = '0'
      return
    }

    if (target.matches('.store-link')) {
      document.title = 'Store'
      content.style.zIndex = '0'
      store.style.zIndex = '1000'
      return
    }
  } catch (err) {
    /** Window Event Triggered **/
    if (window.location.pathname === '/store') {
      document.title = 'Store'
      content.style.zIndex = '0'
      store.style.zIndex = '1000'
      return
    }
    content.style.zIndex = '1000'
    store.style.zIndex = '0'
  }
}

export { toggleStore }

const toggleStore = function (event: Event) {
  const store: HTMLDivElement = document.querySelector('#my-store-61706777') as HTMLDivElement
  const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement
  const target: HTMLElement = event.target as HTMLElement

  try {
    /** View Link Event Triggered **/
    if (target.matches('.data-link')) {
      content.style.display = 'block'
      store.style.visibility = 'hidden'
      store.style.height = '0'
      return
    }

    if (target.matches('.store-link')) {
      document.title = '線上選購 | 膜力蛋'
      content.style.display = 'none'
      store.style.visibility = 'visible'
      store.style.height = 'auto'
      return
    }
  } catch (err) {
    /** Window Event Triggered **/
    if (window.location.pathname === '/store') {
      document.title = '線上選購 | 膜力蛋'
      content.style.display = 'none'
      store.style.visibility = 'visible'
      store.style.height = 'auto'
      return
    }

    content.style.display = 'block'
    store.style.visibility = 'hidden'
    store.style.height = '0'
  }
}

export { toggleStore }

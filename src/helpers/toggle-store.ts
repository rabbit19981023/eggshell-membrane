const toggleStore = function (event: Event) {
  const store: HTMLDivElement = document.querySelector('#my-store-61706777') as HTMLDivElement
  const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement
  const target: HTMLElement = event.target as HTMLElement

  try {
    /** View Link Event Triggered **/
    if (target.matches('.data-link')) {
      content.style.opacity = '1'
      content.style.pointerEvents = 'auto'
      store.style.opacity = '0'
      store.style.pointerEvents = 'none'
      return
    }

    if (target.matches('.store-link')) {
      document.title = '線上選購 | 膜力蛋'
      content.style.opacity = '0'
      content.style.pointerEvents = 'none'
      store.style.opacity = '1'
      store.style.pointerEvents = 'auto'
      return
    }
  } catch (err) {
    /** Window Event Triggered **/
    if (window.location.pathname === '/store') {
      document.title = '線上選購 | 膜力蛋'
      content.style.opacity = '0'
      content.style.pointerEvents = 'none'
      store.style.opacity = '1'
      store.style.pointerEvents = 'auto'
      return
    }
    content.style.opacity = '1'
    content.style.pointerEvents = 'auto'
    store.style.opacity = '0'
    store.style.pointerEvents = 'none'
  }
}

export { toggleStore }

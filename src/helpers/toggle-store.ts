const toggleStore = function (event: Event) {
  const store: HTMLDivElement = document.querySelector('#my-store-61706777') as HTMLDivElement
  const content: HTMLDivElement = document.querySelector('.content') as HTMLDivElement
  const target: HTMLElement = event.target as HTMLElement

  try {
    /** View Link Event Triggered **/
    if (target.matches('.data-link')) {
      content.style.visibility = 'visible'
      store.style.visibility = 'hidden'
      return
    }

    if (target.matches('.store-link')) {
      document.title = '線上選購 | 膜力蛋'
      content.style.visibility = 'hidden'
      store.style.visibility = 'visible'
      return
    }
  } catch (err) {
    /** Window Event Triggered **/
    if (window.location.pathname === '/store') {
      document.title = '線上選購 | 膜力蛋'
      content.style.visibility = 'hidden'
      store.style.visibility = 'visible'
      return
    }

    content.style.visibility = 'visible'
    store.style.visibility = 'hidden'
  }
}

export { toggleStore }

import AbstractView from './AbstractView'

import { ContactPage } from '../components/contact-page'

class Contact extends AbstractView {
  constructor (identifier: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.identifier = identifier
    this.setTitle('聯絡我們 | 膜力蛋')
  }

  build () {
    const container: HTMLDivElement = document.createElement('div')
    const template: string = `
      ${ContactPage}
    `

    container.innerHTML = template
    this.content = container
  }

  getView () {
    this.build()
    return this.content
  }
}

export default Contact

import AbstractView from './AbstractView.js'

class Contact extends AbstractView {
  constructor (identifier: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.identifier = identifier
    this.setTitle('聯絡我們 | 膜力蛋')
  }

  async build () {
    const Contact: Response = await fetch('contact-us.html')
    const contact: string = await Contact.text()

    const container: HTMLDivElement = document.createElement('div')
    const template: string = `
      ${contact}
    `

    container.innerHTML = template
    this.content = container
  }

  async getView () {
    await this.build()
    return this.content
  }
}

export default Contact

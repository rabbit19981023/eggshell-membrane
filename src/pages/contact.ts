import AbstractView from './AbstractView.js'

class Contact extends AbstractView {
  constructor (name: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.name = name
    this.setTitle('聯絡我們 | 膜力蛋')
  }

  async getContent () {
    const Contact: Response = await fetch('contact-us.html')
    const contact: string = await Contact.text()

    this.content = (`
      ${contact}
    `)
    return this.content
  }
}

export default Contact

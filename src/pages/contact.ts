import AbstractView from './AbstractView.js'

class Contact extends AbstractView {
  constructor (name: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.name = name
    this.setTitle('聯絡我們 | 膜力蛋')
  }

  async getContent () {
    this.content = (`
      <img src="../img/contact.jpg" class="contact">
    `)
    return this.content
  }
}

export default Contact

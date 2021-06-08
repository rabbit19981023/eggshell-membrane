import AbstractView from './AbstractView.js'

class Contact extends AbstractView {
  constructor () {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.setTitle('Contact')
  }

  async getContent () {
    return (`
      <h2>Contact Us</h2>
    `)
  }
}

export default Contact

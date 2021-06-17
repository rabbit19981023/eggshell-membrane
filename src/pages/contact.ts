import AbstractView from './AbstractView.js'

class Contact extends AbstractView {
  constructor () {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.setTitle('聯絡我們 | 膜力蛋')
  }

  async getContent () {
    return (`
      <h2>聯絡我們</h2>
    `)
  }
}

export default Contact

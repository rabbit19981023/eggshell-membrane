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
      <h2>聯絡我們</h2>
    `)
    return this.content
  }
}

export default Contact

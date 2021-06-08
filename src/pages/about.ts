import AbstractView from './AbstractView.js'

class About extends AbstractView {
  constructor () {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.setTitle('About')
  }

  async getContent () {
    return (`
      <h2>About Us</h2>
    `)
  }
}

export default About

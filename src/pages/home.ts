import AbstractView from './AbstractView.js'

class Home extends AbstractView {
  constructor () {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.setTitle('Home')
  }

  async getContent () {
    return (`
      <h2>Home</h2>
    `)
  }
}

export default Home

import AbstractView from './AbstractView.js'

class Home extends AbstractView {
  constructor () {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.setTitle('Home')
  }

  async getContent () {
    const Carousel: Response = await fetch('carousel.html')
    const carousel = await Carousel.text()

    return (`
      ${carousel}
    `)
  }
}

export default Home

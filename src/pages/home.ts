import AbstractView from './AbstractView.js'

class Home extends AbstractView {
  constructor (name: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.name = name
    this.setTitle('膜力蛋')
  }

  async getContent () {
    const Carousel: Response = await fetch('carousel.html')
    const carousel = await Carousel.text()

    this.content = (`
      ${carousel}
    `)
    return this.content
  }
}

export default Home

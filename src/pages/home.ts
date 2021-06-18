import AbstractView from './AbstractView.js'

class Home extends AbstractView {
  constructor (name: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.name = name
    this.setTitle('廢棄循環，再造商機 | 膜力蛋')
  }

  async getContent () {
    const Carousel: Response = await fetch('carousel.html')
    const carousel: string = await Carousel.text()

    const Secret: Response = await fetch('secret.html')
    const secret: string = await Secret.text()

    const Compare: Response = await fetch('compare.html')
    const compare: string = await Compare.text()

    this.content = (`
      ${carousel}
      ${secret}
      ${compare}
    `)
    return this.content
  }
}

export default Home

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
    const carousel: string = await Carousel.text()

    const EggshellSecret: Response = await fetch('eggshell-secret.html')
    const eggshellSecret: string = await EggshellSecret.text()

    this.content = (`
      ${carousel}
      ${eggshellSecret}
    `)
    return this.content
  }
}

export default Home

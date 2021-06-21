import AbstractView from './AbstractView.js'
import { buildCarousels } from '../helpers/buildCarousels.js'
import { buildEggshellSecret } from '../helpers/buildEggshellSecret.js'

class Home extends AbstractView {
  constructor (identifier: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.identifier = identifier
    this.setTitle('廢棄循環，再造商機 | 膜力蛋')
  }

  private async build () {
    const Carousel: Response = await fetch('carousel.html')
    const carousel: string = await Carousel.text()

    const Secret: Response = await fetch('secret.html')
    const secret: string = await Secret.text()

    const Compare: Response = await fetch('compare.html')
    const compare: string = await Compare.text()
    
    const Advantage: Response = await fetch('advantage.html')
    const advantage: string = await Advantage.text()

    const container: HTMLDivElement = document.createElement('div')
    const template = `
      ${carousel}
      ${secret}
      ${compare}
      ${advantage}
    `
    container.innerHTML = template

    buildCarousels(container)
    buildEggshellSecret(container)
    this.content = container
  }

  async getView () {
    this.build()
    console.log(`1: ${this.content}`)
    return this.content
  }
}

export default Home

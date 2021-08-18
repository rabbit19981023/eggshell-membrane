import AbstractView from './AbstractView'

import { Carousel } from '../components/carousel'
import { Secret } from '../components/secret'
import { Compare } from '../components/compare'
import { Advantage } from '../components/advantage'

import { buildCarousels } from '../helpers/buildCarousels'
import { buildEggshellSecret } from '../helpers/buildEggshellSecret'

class Home extends AbstractView {
  constructor (identifier: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.identifier = identifier
    this.setTitle('廢棄循環，再造商機 | 膜力蛋')
  }

  private build () {
    const container: HTMLDivElement = document.createElement('div')
    const template = `
      ${Carousel}
      ${Secret}
      ${Compare}
      ${Advantage}
    `
    container.innerHTML = template

    buildCarousels(container)
    buildEggshellSecret(container)
    this.content = container
  }

  getView () {
    this.build()
    return this.content
  }
}

export default Home

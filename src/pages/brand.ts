import AbstractView from './AbstractView.js'
import { buildBrand } from '../helpers/buildBrand.js'

class Brand extends AbstractView {
  constructor (identifier: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.identifier = identifier
    this.setTitle('品牌理念 | 膜力蛋')
  }

  private async build () {
    const Brand: Response = await fetch('brand-appeal.html')
    const brand: string = await Brand.text()

    const container: HTMLDivElement = document.createElement('div')
    const template: string = `
      ${brand}
    `
    container.innerHTML = template

    buildBrand(container)
    this.content = container
  }

  async getView () {
    await this.build()
    return this.content
  }
}

export default Brand

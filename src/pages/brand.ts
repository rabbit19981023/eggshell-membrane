import AbstractView from './AbstractView'

import { BrandPage } from '../components/brand-page'

import { buildBrand } from '../helpers/buildBrand'

class Brand extends AbstractView {
  constructor (identifier: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.identifier = identifier
    this.setTitle('品牌理念 | 膜力蛋')
  }

  private build () {
    const container: HTMLDivElement = document.createElement('div')
    const template: string = `
      ${BrandPage}
    `
    container.innerHTML = template

    buildBrand(container)
    this.content = container
  }

  getView () {
    this.build()
    return this.content
  }
}

export default Brand

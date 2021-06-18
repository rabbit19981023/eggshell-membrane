import AbstractView from './AbstractView.js'

class Brand extends AbstractView {
  constructor (name: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.name = name
    this.setTitle('品牌理念 | 膜力蛋')
  }

  async getContent () {
    const Brand: Response = await fetch('brand-appeal.html')
    const brand: string = await Brand.text()

    this.content = (`
      ${brand}
    `)
    return this.content
  }
}

export default Brand

import AbstractView from './AbstractView.js'

class Brand extends AbstractView {
  constructor (name: string) {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.name = name
    this.setTitle('品牌理念 | 膜力蛋')
  }

  async getContent () {
    this.content = (`
      <h2>品牌理念</h2>
    `)
    return this.content
  }
}

export default Brand

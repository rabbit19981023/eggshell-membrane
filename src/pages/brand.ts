import AbstractView from './AbstractView.js'

class Brand extends AbstractView {
  constructor () {
    // Call Parent Class' Constructor to Init Properties
    super()
    this.setTitle('品牌理念 | 膜力蛋')
  }

  async getContent () {
    return (`
      <h2>品牌理念</h2>
    `)
  }
}

export default Brand

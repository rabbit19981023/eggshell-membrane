class AbstractView {
  public title: string

  constructor () {
    this.title = ''
  }

  setTitle (title: string) {
    this.title = title
  }

  getTitle () {
    return this.title
  }

  async getContent () {
    return ''
  }
}

export default AbstractView

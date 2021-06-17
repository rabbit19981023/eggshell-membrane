class AbstractView {
  public name: string
  public title: string
  public content: string

  constructor () {
    this.name = ''
    this.title = ''
    this.content = ''
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

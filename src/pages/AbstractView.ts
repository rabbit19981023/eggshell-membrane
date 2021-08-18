class AbstractView {
  public identifier: string
  public title: string
  public content: HTMLElement

  constructor () {
    this.identifier = ''
    this.title = ''
    this.content = document.createElement('div')
  }

  setTitle (title: string) {
    this.title = title
  }

  getTitle () {
    return this.title
  }

  getView () {
    return this.content
  }
}

export default AbstractView

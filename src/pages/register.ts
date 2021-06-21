import AbstractView from './AbstractView.js'

import { RegisterPage } from '../components/register-page.js'

class Register extends AbstractView {
  constructor (identifier: string) {
    super()
    this.identifier = identifier
    this.setTitle('註冊 | 膜力蛋')
  }

  build () {
    const container: HTMLDivElement = document.createElement('div')
    const template: string = `
      ${RegisterPage}
    `
    container.innerHTML = template
    this.content = container
  }

  getView () {
    this.build()
    return this.content
  }
}

export default Register

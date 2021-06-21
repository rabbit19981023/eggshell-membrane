import AbstractView from './AbstractView.js'

import { LoginPage } from '../components/login-page.js'

class Login extends AbstractView {
  constructor (identifier: string) {
    super()
    this.identifier = identifier
    this.setTitle('登入 | 膜力蛋')
  }

  build () {
    const container: HTMLDivElement = document.createElement('div')
    const template: string = `
      ${LoginPage}
    `

    container.innerHTML = template
    this.content = container
  }

  getView () {
    this.build()
    return this.content
  }
}

export default Login

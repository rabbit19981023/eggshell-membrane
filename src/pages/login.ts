import AbstractView from './AbstractView.js'

class Login extends AbstractView {
  constructor (identifier: string) {
    super()
    this.identifier = identifier
    this.setTitle('登入 | 膜力蛋')
  }

  async build () {
    const Login: Response = await fetch('login-page.html')
    const login: string = await Login.text()

    const container: HTMLDivElement = document.createElement('div')
    const template: string = `
      ${login}
    `

    container.innerHTML = template
    this.content = container
  }

  async getView () {
    await this.build()
    return this.content
  }
}

export default Login

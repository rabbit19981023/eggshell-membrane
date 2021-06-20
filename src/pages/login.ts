import AbstractView from './AbstractView.js'

class Login extends AbstractView {
  constructor (name: string) {
    super()
    this.name = name
    this.setTitle('登入 | 膜力蛋')
  }

  async getContent () {
    const Login: Response = await fetch('login-page.html')
    const login: string = await Login.text()

    this.content = (`
      ${login}
    `)
    return this.content
  }
}

export default Login

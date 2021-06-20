import AbstractView from './AbstractView.js'

class Register extends AbstractView {
  constructor (name: string) {
    super()
    this.name = name
    this.setTitle('註冊 | 膜力蛋')
  }

  async getContent () {
    const Register: Response = await fetch('register.html')
    const register: string = await Register.text()

    this.content = (`
      ${register}
    `)
    return this.content
  }
}

export default Register

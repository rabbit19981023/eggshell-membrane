import AbstractView from './AbstractView.js'

class Register extends AbstractView {
  constructor (identifier: string) {
    super()
    this.identifier = identifier
    this.setTitle('註冊 | 膜力蛋')
  }

  async build () {
    const Register: Response = await fetch('register.html')
    const register: string = await Register.text()

    const container: HTMLDivElement = document.createElement('div')
    const template: string = `
      ${register}
    `
    container.innerHTML = template
    this.content = container
  }

  async getView () {
    await this.build()
    return this.content
  }
}

export default Register

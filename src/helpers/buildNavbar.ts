import { Navbar } from '../components/nav'

const buildNavbar = function () {
  const body: HTMLBodyElement = document.body as HTMLBodyElement
  body.innerHTML = Navbar + body.innerHTML
}

buildNavbar()

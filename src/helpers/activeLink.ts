const activeLink = function (path: string) {
  const links: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.nav-link') as NodeListOf<HTMLLinkElement>

  links.forEach(link => {
    if (link.href.includes(`${path}`)) {
      link.classList.add('active')
      return
    }
    link.classList.remove('active')
  })
}

export { activeLink }

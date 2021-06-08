const include = async function () {
  try {
    const div: HTMLDivElement = document.querySelector('[include-html]') as HTMLDivElement
    const html: string = div.getAttribute('include-html') as string
    div.removeAttribute('include-html')

    const response: Response = await fetch(html)
    const result = await response.text()
    div.innerHTML = result

    // re-call the function until an error occured
    include()
  } catch (err) {
    // exit the function if an error occured
    // it means there are no more include-html remain
    return
  }
}

include()

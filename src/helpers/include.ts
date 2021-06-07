const include = async function () {
  try {
    const div: HTMLDivElement = document.querySelector('[include-html]') as HTMLDivElement
    const html: string = div.getAttribute('include-html') as string

    const response = await fetch(html)
    const result = await response.text()

    div.innerHTML = result
    div.removeAttribute('include-html')
  } catch (err) {
    // exit the function if an error occured.
    // it means there are no more include-html remain
    return
  }

  include()
}

include()

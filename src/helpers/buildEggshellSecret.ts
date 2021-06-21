interface EggshellSecret {
  title: string,
  field1: {
    html: string
  },
  field2: {
    html: string
  },
  image: {
    url: string
  }
}

let cachedEggshellSecret: EggshellSecret[]
const buildEggshellSecret = async function (container: HTMLDivElement): Promise<void> {
  const title: HTMLHeadingElement = container.querySelector('.eggshell-secret-title') as HTMLHeadingElement
  const field1: HTMLDivElement = container.querySelector('.field-1') as HTMLDivElement
  const field2: HTMLDivElement = container.querySelector('.field-2') as HTMLDivElement
  const image: HTMLImageElement = container.querySelector('.eggshell-secret-img') as HTMLImageElement

  if (!cachedEggshellSecret) {
    const response: Response = await fetch('/.netlify/functions/eggshell-secret')
    cachedEggshellSecret = await response.json()
  }
  
  title.textContent = cachedEggshellSecret[0]["title"]
  field1.innerHTML = cachedEggshellSecret[0]["field1"].html
  field2.innerHTML = cachedEggshellSecret[0]["field2"].html
  image.src = cachedEggshellSecret[0]["image"].url
}

export { buildEggshellSecret }

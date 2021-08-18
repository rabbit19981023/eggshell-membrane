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

const buildEggshellSecret = async function (container: HTMLDivElement): Promise<void> {
  const title: HTMLHeadingElement = container.querySelector('.eggshell-secret-title') as HTMLHeadingElement
  const field1: HTMLDivElement = container.querySelector('.field-1') as HTMLDivElement
  const field2: HTMLDivElement = container.querySelector('.field-2') as HTMLDivElement
  const image: HTMLImageElement = container.querySelector('.eggshell-secret-img') as HTMLImageElement

  const response: Response = await fetch('/.netlify/functions/eggshell-secret')
  const eggshellSecret: EggshellSecret[] = await response.json()

  title.textContent = eggshellSecret[0]["title"]
  field1.innerHTML = eggshellSecret[0]["field1"].html
  field2.innerHTML = eggshellSecret[0]["field2"].html
  image.src = eggshellSecret[0]["image"].url
}

export { buildEggshellSecret }

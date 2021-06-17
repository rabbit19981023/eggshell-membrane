interface EggshellSecret {
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
const buildEggshellSecret = async function (): Promise<void> {
  const image: HTMLImageElement = document.querySelector('.eggshell-secret-img') as HTMLImageElement
  const field1: HTMLDivElement = document.querySelector('.field-1') as HTMLDivElement
  const field2: HTMLDivElement = document.querySelector('.field-2') as HTMLDivElement

  if (!cachedEggshellSecret) {
    const response: Response = await fetch('/.netlify/functions/eggshell-secret')
    cachedEggshellSecret = await response.json()
  }
  
  field1.innerHTML = cachedEggshellSecret[0]["field1"].html
  field2.innerHTML = cachedEggshellSecret[0]["field2"].html
  image.src = cachedEggshellSecret[0]["image"].url
}

buildEggshellSecret()

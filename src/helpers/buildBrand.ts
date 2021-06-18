interface Brand {
  title: string,
  content: {
    html: string
  },
  images: { url: string }[]
}

let cachedBrand: Brand[]
const buildBrand = async function () {
  if (!cachedBrand) {
    const response: Response = await fetch('/.netlify/functions/brands')
    cachedBrand = await response.json()
  }

  const h1: HTMLHeadingElement = document.querySelector('.brand-title') as HTMLHeadingElement
  const img_1: HTMLImageElement = document.querySelector('.brand-img-1') as HTMLImageElement
  const img_2: HTMLImageElement = document.querySelector('.brand-img-2') as HTMLImageElement
  const img_3: HTMLImageElement = document.querySelector('.brand-img-3') as HTMLImageElement
  const content: HTMLDivElement = document.querySelector('.brand-content') as HTMLDivElement

  h1.innerHTML = cachedBrand[0].title
  img_1.src = cachedBrand[0].images[0].url
  img_2.src = cachedBrand[0].images[1].url
  img_3.src = cachedBrand[0].images[2].url
  content.innerHTML = cachedBrand[0].content.html
}

buildBrand()
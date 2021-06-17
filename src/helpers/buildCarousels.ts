interface Carousel {
  title: string,
  description: string,
  image: {
    url: string
  }
}

let cachedCarousels: Carousel[]
const buildCarousels = async function (): Promise<void> {
  const indicators: HTMLDivElement = document.querySelector('.carousel-indicators') as HTMLDivElement
  const container: HTMLDivElement = document.querySelector('.carousel-inner') as HTMLDivElement
  let count: number = 0

  if (!cachedCarousels) {
    const response: Response = await fetch('/.netlify/functions/carousels')
    cachedCarousels = await response.json()
  }

  cachedCarousels.forEach(carousel => {
    const title = carousel.title
    const description = carousel.description
    const imageUrl = carousel.image.url

    indicators.innerHTML += (`
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="${count}" aria-label="Slide ${count}"></button>
    `)
    container.innerHTML += (`
      <div class="carousel-item">
        <img src="${imageUrl}">

        <div class="container">
          <div class="carousel-caption">
            <h1>${title}</h1>
            <p>${description}</p>
          </div>
        </div>
      </div>
    `)

    count += 1
  })

  const firstCarouselBtn: HTMLButtonElement = indicators.querySelector('button') as HTMLButtonElement
  const firstCarouselItem: HTMLDivElement = container.querySelector('.carousel-item') as HTMLDivElement
  firstCarouselBtn.classList.add('active')
  firstCarouselBtn.setAttribute('aria-current', 'true')
  firstCarouselItem.classList.add('active')
}

buildCarousels()

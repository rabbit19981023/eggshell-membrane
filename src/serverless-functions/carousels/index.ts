import { Handler, HandlerEvent, HandlerContext, HandlerResponse } from '@netlify/functions'
import { createGraphQLClient } from '../config'

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext): Promise<HandlerResponse> {
  const client = createGraphQLClient()

  interface Carousel {
    title: string,
    description: string,
    image: {
      url: string
    }
  }
  interface Carousels {
    carousels: Carousel[]
  }

  const query: string = `
    {
      carousels {
        title
        description
        image {
          url
        }
      }
    }
  `

  const { carousels }: Carousels = await client.request(query)

  const response: HandlerResponse = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(carousels)
  }
  return response
}

export { handler }

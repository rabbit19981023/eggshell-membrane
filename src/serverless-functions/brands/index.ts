import { Handler, HandlerEvent, HandlerContext, HandlerResponse } from '@netlify/functions'
import { createGraphQLClient } from '../config'

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext): Promise<HandlerResponse> {
  const client = createGraphQLClient()

  interface Brand {
    title: string,
    content: {
      html: string
    },
    images: Array<{ url: string }>
  }
  interface Brands {
    brands: Brand[]
  }

  const query = `
    {
      brands {
        title
        content {
          html
        }
        images {
          url
        }
      }
    }
  `
  const { brands }: Brands = await client.request(query)

  const response: HandlerResponse = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(brands)
  }
  return response
}

export { handler }

import { Handler, HandlerEvent, HandlerContext, HandlerResponse } from "@netlify/functions";
import { createGraphQLClient } from '../config'

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext): Promise<HandlerResponse> {
  const client = createGraphQLClient()

  interface Field {
    field1: {
      html: string
    },
    field2: {
      html: string
    }
  }
  interface Fields {
    eggshellSecrets: Field
  }

  const query: string = `
    {
      eggshellSecrets {
        field1 {
          html
        }
        field2 {
          html
        }
        image {
          url
        }
      }
    }
  `
  const { eggshellSecrets }: Fields = await client.request(query)

  const response: HandlerResponse = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(eggshellSecrets)
  }
  return response
}

export { handler }

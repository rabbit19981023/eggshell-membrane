import { AwesomeGraphQLClient } from 'awesome-graphql-client'
import fetch from 'node-fetch'

let cachedClient: any // not support Type Feature
const createGraphQLClient = async function (): Promise<any> {
  if (cachedClient) {
    return cachedClient
  }

  const client = new AwesomeGraphQLClient({
    endpoint: process.env.GRAPHQL_ENDPOINT as string,
    fetch: fetch
  })

  cachedClient = client
  return cachedClient
}

export { createGraphQLClient }

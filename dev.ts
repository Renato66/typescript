import 'dotenv/config'
import { handler } from './src/index'

async function run (): Promise<void> {
  const body = JSON.stringify({
    test: 'testing'
  })
  const event = {
    body
  }
  try {
    const result = await handler(event, null, null)
    return result
  } catch (error) {
    return error
  }
}

run().then(
  (result) => { console.log(result) },
  (result) => { console.log(result) }
)

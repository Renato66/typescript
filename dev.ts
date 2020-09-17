import 'dotenv/config'
import { handler } from './index'
import context = require('aws-lambda-mock-context')
const ctx = context({
  timeout: 60
})

async function run (): Promise<void> {
  const body = JSON.stringify({
    test: 'testing'
  })
  const event = {
    body
  }
  try {
    const result = await handler(event, ctx, null)
    return result
  } catch (error) {
    return error
  }
}

run().then(
  (result) => { console.log(result) },
  (result) => { console.log(result) }
).finally(() => {
  process.exit()
})

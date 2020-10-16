import { handler } from './index'
import * as express from 'express'
import context = require('aws-lambda-mock-context')

const ctx = context({
  timeout: 60
})
const app = express()
const port = 8082 // default port to listenn
app.use(express.json())
app.use(express.static('client'))
app.post('/.netlify/functions/index', async (req, res) => {
  const event = {
    body: req.body
  }
  const result = await handler(event, ctx, null)
  ctx.succeed('')
  res.status(result.statusCode).send(result.body)
})

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

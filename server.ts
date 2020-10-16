import { handler } from './index'
import * as express from 'express'
import context = require('aws-lambda-mock-context')

const app = express()
const port = 8082

app.use(express.json())

app.use(express.static('client'))

app.post('/.netlify/functions/index', async (req, res) => {
  const ctx = context({
    timeout: 60
  })
  const event = {
    body: req.body
  }
  const result = await handler(event, ctx, null)
  ctx.succeed('')
  res.status(result.statusCode).send(result.body)
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

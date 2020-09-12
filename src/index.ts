import { Handler } from 'aws-lambda'
import * as Sentry from '@sentry/serverless'

Sentry.init({
  dsn: '',
  environment: process.env.NODE_ENV
})

export const main: Handler = async (event: any): Promise<any> => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  }

  return await new Promise((resolve) => {
    resolve(response)
  })
}

export const handler: Handler = Sentry.AWSLambda.wrapHandler(main, {
  captureTimeoutWarning: false
})

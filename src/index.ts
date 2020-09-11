import { Handler } from 'aws-lambda'
import * as Sentry from '@sentry/node'

Sentry.init({
  dsn: ''
})

function sentryHandler (lambdaHandler) {
  return async event => {
    try {
      return lambdaHandler(event)
    } catch (e) {
      Sentry.captureException(e)
      await Sentry.flush(2000)
      return e
    }
  }
}

export const handler: Handler = sentryHandler(async (event: any): Promise<any> => {
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
})

import { Handler } from 'aws-lambda'
import * as Sentry from '@sentry/serverless'
import { main } from './src/main'

Sentry.init({
  dsn: '',
  environment: process.env.NODE_ENV
})

export const handler: Handler = Sentry.AWSLambda.wrapHandler(main, {
  captureTimeoutWarning: false
})

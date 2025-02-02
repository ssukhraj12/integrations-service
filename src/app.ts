import express = require('express')

import { router } from './api'
import { logger } from './config/logger'
import { settings } from './config/settings'

const app: express.Application = express()

app.use('/', router)

app.listen(settings.port, async () => {
  logger.info(`App listening on port ${settings.port}!`)
})

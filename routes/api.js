const Router = require('@koa/router')
const queueHelpers = require('../helpers/queueHelpers')

const {getQueue, getQueues, getQueueStatus} = queueHelpers

const router = new Router({ prefix: "/api/v1" })

router.get('/', ctx => ctx.body='API V1')
router.get('/advania/GetQueue', getQueue)
router.get('/advania/getQueues', getQueues)
router.get('/advania/GetQueueStatus', getQueueStatus)

module.exports = router
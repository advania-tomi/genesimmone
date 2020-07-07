const Router = require('@koa/router')
const queueHelpers = require('../helpers/queueHelpers')

const {getQueue} = queueHelpers

const router = new Router({ prefix: "/api/v1" })

router.get('/', ctx => ctx.body='API V1')
router.get('/advania/queues', getQueue)

module.exports = router
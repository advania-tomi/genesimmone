const Router = require('@koa/router')
const queueHelpers = require('../helpers/queueHelpers')
const {testInsertneDB, testFindneDB} = require('../helpers')
const {getQueue, getQueues, getQueueStatus} = queueHelpers
const {dbInsertQueues, dbGetQueue, dbGetQueues, dbUpdateQueue} = require('../helpers/database')
const koaBody = require('koa-body')

const router = new Router({ prefix: "/api/v1" })

router.get('/', ctx => ctx.body='API V1')
router.get('/advania/GetQueue', getQueue)
router.get('/advania/getQueues', getQueues)
router.get('/advania/GetQueueStatus', getQueueStatus)

// #Test routes
router.get('/db/testinsert', testInsertneDB)
router.get('/db/testgetQueues', testFindneDB)

// Queue Database routes

router.get('/db/getQueue/:id', dbGetQueue)
router.get('/db/getQueues', dbGetQueues)
router.post('/db/insert', koaBody(), dbInsertQueues)
router.put('/db/updateQueue', koaBody(), dbUpdateQueue)




module.exports = router
const Router = require('@koa/router')
const router = new Router({ prefix: "/api/v2" })

router.get('/', ctx => ctx.body='API V2')


module.exports = router
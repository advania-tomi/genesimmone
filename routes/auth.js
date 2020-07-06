const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.status=302
  ctx.redirect(authorizeURI(options))
})
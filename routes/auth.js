const options = require('../authOptions.json').genesys
options.key = process.env.clientID
options.secret = process.env.clientSECRET
const Router = require('@koa/router')
const router = new Router({ prefix: "/auth" });

const helpers = require('../helpers')
const {
  authorizeURI
} = helpers

router.get('/', async (ctx, next) => {
  ctx.status=302
  ctx.redirect(authorizeURI(options))
})


module.exports = router
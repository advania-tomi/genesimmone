const Router = require('@koa/router')
const router = new Router()
const {authorizeURI, getAuthToken, getMe} = require('../helpers')
const options = require('../authOptions.json').genesys
options.key = process.env.clientID
options.secret = process.env.clientSECRET



router.get('/', async (ctx, next) => {
  if (ctx.session.isNew) {
    ctx.redirect(authorizeURI(options))
  } else {
    ctx.body = `Hello ${ctx.session.user.name}`
  }
})

router.get('/user', async (ctx, next) => {
  if (ctx.session.isNew) {
    ctx.redirect(authorizeURI(options))
  } else {
    ctx.body = JSON.stringify(ctx.session.user, null, 2)
  }
})
router.get('/callback', async (ctx, next) => {
  if (!ctx.query.code) {
    ctx.status = 404
  }
  else {
    try {
      const response = await getAuthToken(options, ctx)
      ctx.authData = response.data
    }
    catch (err) {
      console.log('Failed to get token: ', err)
    }
    
    try {
      const user = await getMe(options, ctx)
      ctx.session.user = user.data
      ctx.redirect('/user')
    }
    catch (err) {
      console.log('Failed to get user: ', err)
    }
  }
})


router.get('/views', async (ctx, next) => {
  if (ctx.session.isNew) {
    ctx.redirect(authorizeURI(options))
  } else {
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = ctx.session.user.name + ' ' + n + ' views'
  }
})

module.exports = router 
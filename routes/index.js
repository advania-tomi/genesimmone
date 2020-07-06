const Router = require('koa-router')
const router = new Router()
const {authorizeURI, getAuthToken, getMe} = require('../helpers')
const options = require('../authOptions.json').genesys
options.key = process.env.clientID
options.secret = process.env.clientSECRET
if (process.env.env === 'production') {
  options.redirect_uri =  "https://genesimmone.azurewebsites.net/connect/genesys/callback"
}

router.get('/', async (ctx, next) => {
  if (ctx.session.isNew) {
    ctx.redirect(authorizeURI(options))
  } else {
    ctx.body = `Hello ${ctx.session.user.name}`
  }
})
router.get('/auth', async (ctx, next) => {
  ctx.status=302
  ctx.redirect(authorizeURI(options))
})

router.get('/user', async (ctx, next) => {
  if (ctx.session.isNew) {
    ctx.redirect(authorizeURI(options))
  } else {
    console.log(ctx.session)
    ctx.body = JSON.stringify(ctx.session.user, null, 2)
  }
})
router.get('/connect/genesys/callback', async (ctx, next) => {
  if (!ctx.query.code) {
    ctx.status = 404
  }
  else {
    try {
      const response = await getAuthToken(options, ctx)
      ctx.authData = response.data
      console.log(ctx.authData)
    }
    catch (err) {
      console.log('Failed to get token: ', err)
    }
    
    try {
      const user = await getMe(options, ctx)
      ctx.session.user = user.data
      console.log(ctx.session)
      ctx.redirect('/user')
    }
    catch (err) {
      console.log('Failed to get user: ', err)
    }
  }

})



router.get('/views', async (ctx, next) => {
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = ctx.session.user.name + ' ' + n + ' views';
})

module.exports = { router }
const Router = require('@koa/router')
const router = new Router()
const {authorizeURI, getAuthToken, getMe} = require('../helpers')
const options = require('../authOptions.json').genesys
options.key = process.env.clientID
options.secret = process.env.clientSECRET
const koaBody = require('koa-body')


router.get('/', async (ctx, next) => {
  if (ctx.session.isNew) {
    ctx.redirect(authorizeURI(options))
  } else {
    ctx.redirect('/www')
    //ctx.body = `Hello ${ctx.session.user.name}`
  }
})

router.get('/user', async (ctx, next) => {
  console.log('In User: ',ctx.session)
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
    console.log('in Callback: ', ctx.session)
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
      ctx.redirect('/www')
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

router.post('/post', koaBody(), async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
})

module.exports = router 
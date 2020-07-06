
const PORT = process.env.PORT || 4000

const Koa = require('koa')
const session = require('koa-session')
const koaqs = require('koa-qs')
const parser = require('koa-bodyparser')
const router = require('./routes').router

const app = new Koa()
app.keys = ['SuperSecretYouKnowHa12Grrr']

app.use(session(app))
app.use(parser())
app.use(router.routes())
app.use(router.allowedMethods())
koaqs(app)
.listen(PORT)
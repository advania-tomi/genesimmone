
const PORT = process.env.PORT || 4000

const Koa = require('koa')
const session = require('koa-session')
const koaqs = require('koa-qs')
const parser = require('koa-body')
const serve = require('koa-static')
const mount = require('koa-mount')
const app = new Koa()
app.keys = ['SuperSecretYouKnowHa12Grrr']

app.use(mount('/www', serve('frontend/dist')))
app.use(mount('/js', serve('frontend/dist/js')))
app.use(mount('/css', serve('frontend/dist/css')))
app.use(session(app))
app.use(parser())
require('./routes')(app)
koaqs(app)
.listen(PORT)
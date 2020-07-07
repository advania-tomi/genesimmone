
const PORT = process.env.PORT || 4000

const Koa = require('koa')
const session = require('koa-session')
const koaqs = require('koa-qs')
const parser = require('koa-bodyparser')

const app = new Koa()
require('./routes')(app)
app.keys = ['SuperSecretYouKnowHa12Grrr']

app.use(session(app))
app.use(parser())
koaqs(app)
.listen(PORT)
const db = require('./nedb').data
;(async () => {
  try {
  const result = await db.asyncEnsureIndex({fieldName:'queue', unique:true})
  console.log('Queue is unique value on database now')
} catch (err){
  console.log(err)
}
})()


const template = async (ctx) => {
  try {

  } catch (err) {
    ctx.body = {err}
  }
} 

const dbGetQueue = async (ctx) =>  {
  try {
    console.log(ctx.params.id)
    console.log(ctx)
    const queue = await db.asyncFind({_id: ctx.params.id},[['limit',1],['sort', -1]])
    ctx.body = queue
  } catch (err) {
    ctx.body = {err}
  }
}
const dbGetQueues = async (ctx) =>  {
  try {
    const queues = await db.asyncFind({},[['limit',100],['sort', -1]])
    ctx.body = queues
  } catch (err) {
    ctx.body = {err}
  }
}

const dbInsertQueues = async (ctx) =>  {
  try {
    ctx.request.body.forEach((data) =>  db.asyncInsert({'queue':data.queue, name: data.name}))
    ctx.body = JSON.stringify(ctx.request.body)
  } catch (err) {
    ctx.body = {err}
  }
}

const dbUpdateQueue = async (ctx) => {
  try {
    ctx.request.body.forEach((data) =>  db.asyncUpdate({_id: data._id},{$set: {'queue':data.queue, name: data.name, enabled: data.enabled}}))
    console.log(ctx.request.body)
    ctx.body = JSON.stringify(ctx.request.body)
  } catch (err) {
    ctx.body = {err}
  }
}


module.exports = {dbGetQueue, dbGetQueues, dbInsertQueues, dbUpdateQueue}
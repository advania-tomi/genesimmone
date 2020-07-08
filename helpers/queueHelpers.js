const clientID = process.env.ADVANIA_QUEUE_POLLER_CLIENTID
const clientSECRET = process.env.ADVANIA_QUEUE_POLLER_CLIENTSECRET
const {getBase64Header} = require('../helpers')
const axios = require('axios')
const qs = require('querystring')

const options = require('../authOptions.json')

const {advania} = options


const getAccessToken = async () =>  {
  const base64options = {key:clientID,secret:clientSECRET}
  const tokenBody = {'grant_type':'client_credentials'}
  opts = {headers: {'content-type': 'application/x-www-form-urlencoded', Authorization: getBase64Header(base64options) }}

  const res = await axios.post(advania.access_url, qs.stringify(tokenBody), opts)
  console.log(res.data)
  return res.data.access_token
}

const getQueue = async (ctx) => {
  const token = await getAccessToken()
  console.log(token)
  const uri =  advania.platformAPI + '/api/v2/routing/queues/'+ ctx.query.q
  const opts = {headers:{Authorization: `Bearer ${token}`, 'content-type':'application/json' }}
  const res = await axios.get(uri,opts)
  ctx.body = JSON.stringify(res.data, null,2)
}

const getQueueStatus = async (ctx) => {
  const token = await getAccessToken()
  console.log(token)
  const uri =  advania.platformAPI + '/api/v2/routing/queues/'+ ctx.query.q + '/users/?presence=On%20Queue'
  const opts = {headers:{Authorization: `Bearer ${token}`, 'content-type':'application/json' }}
  const res = await axios.get(uri,opts)
  console.log(res.data)
  const loggedInUsers = { Logged_in_Users: res.data.total}
  ctx.body = loggedInUsers
}

const getQueues = async (ctx) => {
  
  const token = await getAccessToken()
  console.log(token)
  const uri =  advania.platformAPI + '/api/v2/routing/queues'
  const opts = {headers:{Authorization: `Bearer ${token}`, 'content-type':'application/json' }}
  const res = await axios.get(uri,opts)
  ctx.body = JSON.stringify(res.data.entities, null,2)
}



module.exports = {getQueue, getQueues, getQueueStatus}
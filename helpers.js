const axios = require('axios');
const qs = require('querystring')
const getcodeAuthHeader = (options) => {
  return 'Basic ' + Buffer.from(options.key + ":" + options.secret, 'utf-8').toString('base64')
}


const authorizeURI = (options) => {
  const authorizeURI = options.authorize_url || 'https://login.mypurecloud.de/oauth/authorize'
  const uri = encodeURI(authorizeURI+'?'+'client_id='+options.key+'&response_type=code'+'&redirect_uri='+options.redirect_uri )
  return uri
}

const getAuthToken = async (options, ctx) => {
  const body = {
    grant_type: 'authorization_code',
    code: ctx.request.query.code,
    redirect_uri: options.redirect_uri
  };
  const codeAuthHeader = getcodeAuthHeader(options)
  const opts = { headers: { accept: 'application/x-www-form-urlencoded', 'content-type': 'application/x-www-form-urlencoded', 'Authorization': codeAuthHeader }}
  return axios.post(options.access_url, qs.stringify(body), opts)
}

const getMe = (options, ctx) => {
  console.log(ctx.authData)
  const opts = { headers: { accept: 'application/json', 'Authorization': 'Bearer ' + ctx.authData.access_token }}
  return axios.get(options.me_uri, opts)

}

module.exports = {
  authorizeURI,
  getAuthToken,
  getMe
}
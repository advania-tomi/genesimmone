const { AsyncNedb } = require('nedb-async')

const data = new AsyncNedb({
  filename: 'database.db',
  autoload: true,
})


module.exports =  {data}
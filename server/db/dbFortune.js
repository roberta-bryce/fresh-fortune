const connection = require('./connection')

function getFortunes(db = connection) {
  return db('fortune').select()
}

module.exports = {
  getFortunes,
}

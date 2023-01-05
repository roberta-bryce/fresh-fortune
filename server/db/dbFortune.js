const connection = require('./connection')

function getFortunes(db = connection) {
  return db('fortune').select()
}

function addFortune(newFortune, db = connection) {
  return db('fortune').insert(newFortune)
}
module.exports = {
  getFortunes,
  addFortune,
}

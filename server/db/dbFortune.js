const connection = require('./connection')

function getFortunes(db = connection) {
  return db('fortune').select()
}

function addFortune(newFortune, db = connection) {
  return db('fortune').insert(newFortune)
}

function delFortune(id, db = connection) {
  return db('fortune').where('id', id).delete()
}

function updateFortune(functionToUpdate, db = connection) {
  return db('fortune').where('id', functionToUpdate.id).update(functionToUpdate)
}
module.exports = {
  getFortunes,
  addFortune,
  delFortune,
  updateFortune,
}

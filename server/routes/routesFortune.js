const express = require('express')
const db = require('../db/dbFortune')

const router = express.Router()

//GET /api/v1/fortune
router.get('/', (req, res) => {
  db.getFortunes()
    .then((fortunes) => {
      res.json(fortunes)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Bad luck, something went wrong' })
    })
})

//POST /api/v1/fortune/add
router.post('/add', (req, res) => {
  const fortune = req.body
  const newFortune = {
    fortune: fortune.fortune,
  }
  db.addFortune(newFortune)
    .then((fortuneId) => {
      res.json(fortuneId)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Bad luck, something went wrong' })
    })
})

//DEL /api/v1/fortune/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.delFortune(id)
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Bad luck, something went wrong' })
    })
})

//PUT /api/v1/fortune/update
router.put('/update', (req, res) => {
  const fortune = req.body
  const fortuneToUpdate = {
    id: fortune.id,
    fortune: fortune.fortune,
  }
  db.updateFortune(fortuneToUpdate)
    .then((fortunes) => {
      res.json(fortunes)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'Bad luck, something went wrong' })
    })
})

module.exports = router

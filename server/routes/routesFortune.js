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

module.exports = router

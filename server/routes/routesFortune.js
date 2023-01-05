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

module.exports = router

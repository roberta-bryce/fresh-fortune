const express = require('express')
const path = require('path')

const fortuneRoutes = require('./routes/routesFortune')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fortunes', fortuneRoutes)

module.exports = server

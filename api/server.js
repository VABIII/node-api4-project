const express = require('express')
const server = express()
const userRouter = require('./user-router')
const cors = require('cors')

server.use(express.json())

server.use(cors())

server.use('/api', userRouter)

server.get('/', (req, res, next) => {
    res.send(`<h1>Let's write some code</h1>`)
})

module.exports = server





























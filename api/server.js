const express = require('express')
const userRouter = require('./user-router')


const server = express()

server.use(express.json())

server.use('/api', userRouter)

require('dotenv').config()

const path = require('path')

server.use(express.static(path.join(__dirname, "client/build")))





server.get('/', (req, res, next) => {
    res.send(`<h1>Let's write some code</h1>`)
})











// server.use((err,req, res, next) => {
//     console.log('Disaster!')
//     res.status(err.status || 500).json({
//         message: `The Horror: ${err.message}`
//     })
//
// })



module.exports = server





























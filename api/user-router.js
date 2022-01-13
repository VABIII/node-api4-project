const express = require('express')

const router = express.Router()

const users = [
    "Vern",
    "Phillip",
    "Hannah"
]

router.get('/users', (req, res, next) => {
    res.send(users)
})

router.post('/register', (req, res, next) => {
    const username = req.body.username
    res.send(username)
})

router.post('/login', (req, res, next) => {
    if(!req.body.username || !req.body.password) {
        res.status(400).send({
            message: "Please provide a username and password"
        })
    }
    else {
        res.send(`
        <h1>Welcome To Our Page!</h1>
        `)
    }
})






























module.exports = router












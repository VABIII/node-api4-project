const express = require('express')

const router = express.Router()

const users = [
    "Vern",
    "Phillip",
    "Hannah"
]

router.get('/users', (req, res, next) => {
    res.json(users)
})

router.post('/register', (req, res, next) => {
    const username = req.body.username
    res.json(username)
})

router.post('/login', (req, res, next) => {
    if(!req.body.username || !req.body.password) {
        res.status(400).json({
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












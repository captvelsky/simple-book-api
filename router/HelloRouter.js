const router = require('express').Router
const helloRouter = router()
const helloHandler = require('../handler/HelloHandler')

helloRouter.get('/',helloHandler.getHelloHandler)

module.exports = helloRouter

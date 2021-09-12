const express = require('express')
const app = express()
const port = 6969

const helloRouter = require('./router/HelloRouter')
const bookRouter = require('./router/BookRouter')

app.use(express.json())
app.use('/hello', helloRouter);
app.use('/book', bookRouter);
app.listen(port, onServerConnect)

function onServerConnect() {
    console.log("Server running at port "+ port)
}
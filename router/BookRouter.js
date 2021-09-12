const router = require('express').Router
const bookRouter = router()
const bookHandler = require('../handler/BookHandler')


bookRouter.put('/:id',bookHandler.updateBookHandler) //router5
bookRouter.delete('/:id',bookHandler.deleteBookHandler) //router4
bookRouter.get('/:id',bookHandler.getBookHandler) //router3
bookRouter.get('/',bookHandler.getBooksHandler) //router1
bookRouter.post('/',bookHandler.insertBookHandler) //router2

module.exports = bookRouter

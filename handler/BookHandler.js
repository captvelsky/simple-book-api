const BookController = require("../controller/BookController")

module.exports = {
    getBooksHandler: (req, res) => {
        const books = BookController.getAllBooks()
        const response = {
            status: 'success',
            data: books
        }

        res.json(response)
    },

    insertBookHandler: (req, res) => {
        const {title, description} = req.body

        if (title == null || description == null) {
            const response = {
                status: 'fail',
                message: "Data kurang!"
            }
            res.status(400)
            res.json(response)
            return
        }

        const id = BookController.insertBook(title, description)

        const response = {
            status: 'success',
            book_id: id
        }

        res.status(201)
        res.json(response)
    },

    getBookHandler: (req, res) => {
        const {id} = req.params
        const book = BookController.getBookById(id)

        if(book != null) {
            const response = {
                status: 'success',
                book
            }
    
            res.json(response)

        } else {
            const response = {
                status: 'fail',
                message: "buku tidak ditemukan"
            }
    
            res.status(404)
            res.json(response)
        }
    },

    deleteBookHandler: (req, res) => {
        const {id} = req.params
        const book = BookController.deleteBook(id)

        if(book != false) {
            const response = {
                status: 'success',
                message: "buku "+id+" berhasil dihapus",
            }
    
            res.json(response)

        } else {
            const response = {
                status: 'fail',
                message: "buku tidak ditemukan"
            }
    
            res.status(404)
            res.json(response)
        }
    },

    updateBookHandler: (req, res) => {
        const {id} = req.params
        const {title, description} = req.body
        const success = BookController.updateBookById(id, title, description)

        if(success == true) {
            const response = {
                status: 'success',
                message: "buku "+id+" berhasil diupdate"
            }
            res.status(200)
            res.json(response)

        } else {
            const response = {
                status: 'fail',
                message: "buku tidak ditemukan"
            }
    
            res.status(404)
            res.json(response)
        }
    }
} 
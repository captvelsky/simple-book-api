const bookModel = require('../model/BookModel')

module.exports = {
    insertBook: (title, description) => {
        const id = "BOOK-" + Date.now()
        const book = {
            id,
            title,
            description
        }

        bookModel.insert(book)
        return id
    },

    getAllBooks: () => {
        return bookModel.getAllBooks()
    },

    getBookById: bookId => {
        return bookModel.getBookById(bookId)
    },

    deleteBook: bookId => {
        return bookModel.deleteBook(bookId)
    },

    updateBookById: (id, title, description) => {
        
        const newBook = {
            title,
            description
        }

        return bookModel.updateBookById(id, newBook)
        
    }
}
const books = []

module.exports = {
    insert: book => {
        books.push(book)
    },

    getAllBooks: () => {
        return books
    },

    getBookById: id => {
        return books.find(book => book.id == id)
    },

    deleteBook: id => {
        const index = books.findIndex(book => book.id == id)
        if(index == -1) return false
        books.splice(index, 1)
        return true
    },

    updateBookById: (id, newBook) => {
        for (book of books) {
            console.log(book)
            if(book.id == id) {
                book.title = newBook.title
                book.description = newBook.description
                return true
            }
        }
        return false
    }
}
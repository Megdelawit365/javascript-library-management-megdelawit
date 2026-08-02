import { books } from '../data/books.js'
import { validateBook } from '../utils/validator.js'
import { generateId } from '../utils/helpers.js'

const addBook = (book) => {
    const isValid = validateBook(book, books)

    if (!isValid.valid) {
        return {
            success: false,
            error: isValid.error
        }
    }
    book.id = generateId(books)
    books.push(book)

    return {
        success: true,
        message: "Book successfully added.",
        book: book
    }

}

const viewAllBooks = () => {
    return {
        totalBooks: books.length,
        books: books
    }
}

const searchBooks = (query) => {
    // query is an object

    let field = ""
    let value = ""
    const result = []

    for (const key in query) {
        field = key
        value = query[key]
    }

    for (const b of books) {
        if (b[field] === value) {
            result.push(b)
        }
    }


    return {
        totalResults: result.length,
        result: result
    }
}

const updateBook = (book) => {
    // check if book exists and isbn is valid
    let existingBook = -1

    for (let i = 0; i < books.length; i++) {
        if (books[i].id == book.id) {
            existingBook = i

            // if field is isbn
            if (book["isbn"] != books[i].isbn) {

                return {
                    success: false,
                    error: "Isbn cannot be changed."
                }
            }
        }

    }

    if (existingBook == -1) {
        return {
            success: false,
            error: "Book does not exist."
        }
    }

    const isValid = validateBook(book, books)

    if (!isValid.valid) {
        return {
            success: false,
            error: isValid.error
        }
    }

    books[existingBook] = book

    return {
        success: true,
        message: "Book successfully editted.",
        book: books[existingBook]
    }

}

const deleteBook = (bookId) => {
    const book = books.find(b => b.id === bookId)
    if (!book) {
        return {
            success: false,
            error: "Book does not exist"
        }
    }
    if (book.availableCopies != book.totalCopies) {
        return {
            success: false,
            error: "Some copies have not been returned."
        }
    }
    books = books.filter(b => b.id !== bookId);
    return {
        success: true,
        message: "Book successfully removed."
    }

}

export { addBook, viewAllBooks, searchBooks, updateBook }
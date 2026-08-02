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
    const existingBook = books.findIndex(b => b.id === book.id)

    if (existingBook == -1) {
        return {
            success: false,
            error: "Book does not exist."
        }
    }

    // check if isbn is the same
    if (book.isbn !== books[existingBook].isbn) {
        return {
            success: false,
            error: "ISBN cannot be changed."
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
    const bookIndex = books.findIndex(b => b.id === bookId)
    if (bookIndex == -1) {
        return {
            success: false,
            error: "Book does not exist"
        }
    }
    if (books[bookIndex].availableCopies != books[bookIndex].totalCopies) {
        return {
            success: false,
            error: "Some copies have not been returned."
        }
    }
    books.splice(bookIndex, 1);
    return {
        success: true,
        message: "Book successfully removed."
    }

}

export { addBook, viewAllBooks, searchBooks, updateBook, deleteBook }
import { books } from '../data/books.js'
import { validateBook } from '../utils/validator.js'
import { generateId } from '../utils/helpers.js'

const addBook = (book) => {
    const isValid = validateBook(book, books)

    if (!isValid.valid) {
        console.log("============= Error =============")
        console.log(isValid.error)
        return
    }
    book.id = generateId(books)
    books.push(book)

    console.log("============= Book added successfully! =============")
    console.log(book)
    return
}

const viewAllBooks = () => {
    if (books.length == 0) {
        console.log("No books found.")
        return
    }
    console.log(`${books.length} books found:`)
    console.log(" ")

    for (const b of books) {
        console.log(b)
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

    if (result.length == 0) {
        console.log("No books found.")
        return
    }

    console.log("============= Search Result =============")
    for (const r of result) {
        console.log(r)
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
                console.log("Isbn cannot be changed.")
                return
            }
        }
        if (books[i].isbn == book.isbn && books[i].id != book.id) {
            console.log("Isbn already exists.")
            return
        }
    }

    if (existingBook == -1) {
        console.log("Book does not exist.")
        return
    }

    const isValid = validateBook(book, books)

    if (!isValid.valid) {
        console.log("============= Error =============")
        console.log(isValid.error)
        return
    }


    books[existingBook] = book
    console.log("Book editted successfully.")
    return

}

export { addBook, viewAllBooks, searchBooks }
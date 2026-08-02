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

export { addBook, viewAllBooks }
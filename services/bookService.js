import { books } from '../data/books.js'
import { validateBook } from '../utils/validator.js'
import { generateId } from '../utils/helpers.js'

const addBook = (book) => {
    const isValid = validateBook(book)

    if (!isValid.valid) {
        console.log("============= Error =============")
        console.log(isValid.error)
        return
    }
    book.id = generateId()
    books.push(book)

    console.log("Book added successfully!")
    return
}
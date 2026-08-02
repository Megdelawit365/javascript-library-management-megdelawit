import { isEmpty } from "./helpers"
import { books } from '../data/books.js'

const validateBook = (book) => {
    //check if there are empty fields
    for (const key in book) {
        if (isEmpty(book[key])) {
            return {
                valid: false,
                error: `${key} cannot be empty.`
            }
        }
    }

    // year must be current year or before
    if (book.publicationYear < 1 || book.publicationYear > new Date().getFullYear()) {
        return {
            valid: false,
            error: `Invalid date.`
        }
    }

    // isbn must consist of numbers eventhough its type is string
    if (isNaN(Number(book.isbn))) {
        return {
            valid: false,
            error: `Invalid isbn. Isbn must consist of numbers.`
        }
    }

    if (book.totalCopies <= 0) {
        return {
            valid: false,
            error: `Total copies must be greater than 0.`
        }
    }
    if (book.availableCopies < 0 || book.availableCopies > book.totalCopies) {
        return {
            valid: false,
            error: `Available copies must be greater than 0 and less than or equal to total copies.`
        }
    }

    //check if it already exists

    for (const b of books) {
        if (b.isbn === book.isbn) {
            return {
                valid: false,
                error: `Book isbn already exists.`
            }
        }

    }

    return { valid: true }

}
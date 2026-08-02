import { books } from '../data/books.js'

const isEmpty = (data) => {
    return data == null || data == ""
}

const generateId = () => {
    const len = books.length
    let id = 1
    // sort by id from lowest to highest
    books.sort((a, b) => a.id - b.id)

    // after sorting by id, generated id would be the smallest available number
    for (let i = 1; i <= len; i++) {
        if (i != books[i - 1].id) {
            id = i
            break
        }
    }

    return id
}

export { isEmpty, generateId }
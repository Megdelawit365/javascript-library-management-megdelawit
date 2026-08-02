
const isEmpty = (data) => {
    return data == null || data == ""
}

const generateId = (books) => {
    const len = books.length
    if (len == 0) {
        return 1
    }
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

    if (id == len) {
        id = len + 1
    }

    return id
}

export { isEmpty, generateId }
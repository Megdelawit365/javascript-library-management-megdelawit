
const isEmpty = (data) => {
    return data == null || data == ""
}

const generateId = (data) => {
    const len = data.length
    if (len == 0) {
        return 1
    }
    let id = 1
    // sort by id from lowest to highest
    data.sort((a, b) => a.id - b.id)

    // after sorting by id, generated id would be the smallest available number
    for (let i = 1; i <= len; i++) {
        if (i != data[i - 1].id) {
            id = i
            break
        }
    }

    if (id == len) {
        id = len + 1
    }

    return id
}

const displayBook = (bookArray) => {
    for (const book of bookArray) {
        console.log("")
        console.log(`ID:               ${book.id}`)
        console.log(`Title:            ${book.title}`)
        console.log(`Author:           ${book.author}`)
        console.log(`Category:         ${book.category}`)
        console.log(`Publication Year: ${book.publicationYear}`)
        console.log(`ISBN:             ${book.isbn}`)
        console.log(`Total Copies:     ${book.totalCopies}`)
        console.log(`Available Copies: ${book.availableCopies}`)
        console.log("")
    }
}

const displayMember = (memberArray) => {
    for (const member of memberArray) {
        console.log("")
        console.log(`ID:             ${member.id}`)
        console.log(`First Name:     ${member.firstName}`)
        console.log(`Last Name:      ${member.lastName}`)
        console.log(`Email:          ${member.email}`)
        console.log(`Phone:          ${member.phone}`)
        console.log(`Borrowed Books: ${member.borrowedBooks}`)
        console.log("")
    }
}

const displayBorrow = (borrowArray) => {
    for (const borrow of borrowArray) {
        console.log("")
        console.log(`Borrow ID:  ${borrow.id}`)
        console.log(`Member ID:  ${borrow.memberId}`)
        console.log(`Book ID:    ${borrow.bookId}`)
        console.log(`Borrow Date: ${borrow.borrowDate}`)
        console.log(`Returned:   ${borrow.returned}`)
        console.log("")
    }
}


export { isEmpty, generateId, displayBook, displayMember, displayBorrow }
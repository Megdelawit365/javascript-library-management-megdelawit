import { searchBooks } from "./bookService"
import { searchMembers } from "./memberService"

const borrowBook = (memberId, bookId, books, members) => {
    if (!searchMembers({ "id": memberId })) {
        console.log("Member does not exist")
        return
    }
    if (!searchBooks({ "id": bookId })) {
        console.log("Member does not exist")
        return
    }
    const member = findIndex(m => m.id = member.id)
    const book = findIndex(b => b.id = book.id)

    if (book.availableCopies == 0) {
        console.log("Book is not available")
        return
    }
    if (book.isbn in member.borrowedBooks) {
        console.log("Member has already borrowed book.")
        return
    }

    books[book].availableCopies -= 1
    members[member].borrowedBooks.push(book.isbn)

    console.log("Book borrowed successfully")
    return

}

const returnBook = (memberId, bookId, books, members) => {
    if (!searchMembers({ "id": memberId })) {
        console.log("Member does not exist")
        return
    }
    if (!searchBooks({ "id": bookId })) {
        console.log("Member does not exist")
        return
    }
    const member = findIndex(m => m.id = member.id)
    const book = findIndex(b => b.id = book.id)

    if (!(book.isbn in member.borrowedBooks)) {
        console.log("Member has not borrowed book.")
        return
    }

    books[book].availableCopies += 1
    members[member].borrowedBooks = members[member].borrowedBooks.filter(m => m !== book.isbn)

    console.log("Book returned successfully")
    return
}

export { borrowBook, returnBook }
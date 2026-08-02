import { searchBooks } from "./bookService"
import { searchMembers } from "./memberService"
import { books } from '../data/books.js'
import { members } from '../data/members.js'
import { borrows } from "../data/borrows.js"
import { generateId } from "../utils/helpers"


const borrowBook = (memberId, bookId) => {
    if (searchMembers({ "id": memberId }).totalResults === 0) {
        return {
            success: false,
            error: "Member does not exist"
        }
    }
    if (searchBooks({ "id": bookId }).totalResults === 0) {
        return {
            success: false,
            error: "Book does not exist"
        }
    }
    const memberIndex = findIndex(m => m.id = member.id)
    const bookIndex = findIndex(b => b.id = book.id)

    if (books[bookIndex].availableCopies == 0) {
        return {
            success: false,
            error: "Book is not available"
        }
    }
    if (bookId in member.borrowedBooks) {
        return {
            success: false,
            error: "Member has already borrowed this book."
        }

    }

    books[book].availableCopies -= 1
    members[member].borrowedBooks.push(book.isbn)
    borrows.push({
        id: generateId(borrows),
        memberId: memberId,
        bookId: bookId,
        borrowDate: new Date(now),
        returned: false
    })

    return {
        success: true,
        message: "Book borrowed successfully."
    }


}

const returnBook = (memberId, bookId, books, members) => {
    if (searchMembers({ "id": memberId }).totalResults === 0) {
        return {
            success: false,
            error: "Member does not exist"
        }
    }
    if (searchBooks({ "id": bookId }).totalResults === 0) {
        return {
            success: false,
            error: "Book does not exist"
        }
    }
    const memberIndex = findIndex(m => m.id = member.id)
    const bookIndex = findIndex(b => b.id = book.id)

    if (!(bookId in member.borrowedBooks)) {
        return {
            success: false,
            error: "Member has not borrowed book."
        }
    }

    books[bookIndex].availableCopies += 1
    members[memberIndex].borrowedBooks = members[member].borrowedBooks.filter(m => m !== bookId)
    const borrowIndex = borrows.findIndex(b => b.memberId == memberId && b.bookId == bookId)
    borrows[borrowIndex].returned = true

    return {
        success: true,
        message: "Book returned successfully."
    }

}

export { borrowBook, returnBook }
import { searchBooks } from "./bookService.js"
import { searchMembers } from "./memberService.js"
import { books } from '../data/books.js'
import { members } from '../data/members.js'
import { borrows } from "../data/borrows.js"
import { generateId } from "../utils/helpers.js"


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
    const memberIndex = members.findIndex(m => m.id === memberId)
    const bookIndex = books.findIndex(b => b.id === bookId)

    if (books[bookIndex].availableCopies == 0) {
        return {
            success: false,
            error: "Book is not available"
        }
    }
    if (members[memberIndex].borrowedBooks.includes(bookId)) {
        return {
            success: false,
            error: "Member has already borrowed this book."
        }

    }

    books[bookIndex].availableCopies -= 1
    members[memberIndex].borrowedBooks.push(bookId)
    borrows.push({
        id: generateId(borrows),
        memberId: memberId,
        bookId: bookId,
        borrowDate: new Date(),
        returned: false
    })

    return {
        success: true,
        message: "Book borrowed successfully."
    }


}

const returnBook = (memberId, bookId) => {
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
    const memberIndex = members.findIndex(m => m.id === memberId)
    const bookIndex = books.findIndex(b => b.id === bookId)

    if (!members[memberIndex].borrowedBooks.includes(bookId)) {
        return {
            success: false,
            error: "Member has not borrowed book."
        }
    }

    books[bookIndex].availableCopies += 1
    members[memberIndex].borrowedBooks = members[memberIndex].borrowedBooks.filter(m => m !== bookId)
    const borrowIndex = borrows.findIndex(b => b.memberId == memberId && b.bookId == bookId)
    borrows[borrowIndex].returned = true

    return {
        success: true,
        message: "Book returned successfully."
    }

}

export { borrowBook, returnBook }
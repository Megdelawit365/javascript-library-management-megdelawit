import { books } from "../data/books.js"
import { borrows } from "../data/borrows.js"
import { members } from "../data/members.js"

const displayAnalytics = () => {
    const totalBooks = books.reduce((sum, book) => sum + book.totalCopies, 0)
    const totalAvailableBooks = books.reduce((sum, book) => sum + book.availableCopies, 0)
    let uniqueTitles = {}
    const activeBorrows = borrows.filter(b => b.returned === false)

    for (const b of books) {
        uniqueTitles[b.title] ? uniqueTitles[b.title] += 1 : uniqueTitles[b.title] = 1
    }


    return {
        "Total books": totalBooks,
        "Total available copies": totalAvailableBooks,
        "Total unique titles": Object.keys(uniqueTitles).length,
        "Total members": members.length,
        "Active borrows": activeBorrows.length
    }
}

const categoryInsights = () => {
    const categories = {}
    for (const b of books) {
        categories[b.category] ? categories[b.category] += 1 : categories[b.category] = 1
    }

    return categories
}

const yearFilter = (year) => {
    const filteredBooks = books.filter(b => b.publicationYear > year)
    return filteredBooks
}

const unavailableBooks = () => {
    const filteredBooks = books.filter(b => b.availableCopies == 0)
    return filteredBooks
}

const activeBorrowMembers = () => {
    const filteredMembers = members.filter(m => m.borrowedBooks.length > 0)
    return filteredMembers
}

export { displayAnalytics, categoryInsights, yearFilter, unavailableBooks, activeBorrowMembers }
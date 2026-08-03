import { addBook, viewAllBooks, searchBooks, updateBook, deleteBook } from "./services/bookService.js"
import { borrowBook, returnBook } from "./services/borrowService.js"
import { addMember, viewAllMembers, searchMembers, updateMember, deleteMember } from "./services/memberService.js"
import { displayAnalytics, categoryInsights, yearFilter, unavailableBooks, activeBorrowMembers } from './services/reportService.js'
import { displayBook } from "./utils/helpers.js"

console.log("================== Adding Books ==================")
console.log(" ")
const book1 = addBook(
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        publicationYear: 2008,
        isbn: "9780132350884",
        totalCopies: 5,
        availableCopies: 5
    }

)
const book2 = addBook(
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        category: "Programming",
        publicationYear: 1999,
        isbn: "9780135957059",
        totalCopies: 3,
        availableCopies: 3
    }
)
displayBook(book1)
displayBook(book2)
console.log(" ")
console.log("================== Viewing Books ==================")
console.log(" ")
console.log(" ")
console.log("================== Searching Books ==================")
console.log(" ")
console.log(" ")
console.log("================== Updating Books ==================")
console.log(" ")
console.log(" ")
console.log("================== Deleting Books ==================")
console.log(" ")
console.log(" ")
console.log("================== Adding Members ==================")
console.log(" ")
console.log(" ")
console.log("================== Viewing Members ==================")
console.log(" ")
console.log(" ")
console.log("================== Searching Members ==================")
console.log(" ")
console.log(" ")
console.log("================== Updating Members ==================")
console.log(" ")
console.log(" ")
console.log("================== Deleting Members ==================")
console.log(" ")
console.log(" ")
console.log("================== Borrowing Books ==================")
console.log(" ")
console.log(" ")
console.log("================== Returning Books ==================")
console.log(" ")
console.log(" ")
console.log("================== Library Analytics ==================")
console.log(" ")
console.log(" ")
console.log("================== Category Insights ==================")
console.log(" ")
console.log(" ")
console.log("================== Year Filter ==================")
console.log(" ")
console.log(" ")
console.log("================== Unavailable Books ==================")
console.log(" ")
console.log(" ")
console.log("================== Active Borrowers ==================")
console.log(" ")
console.log(" ")
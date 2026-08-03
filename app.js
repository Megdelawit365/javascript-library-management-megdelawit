import { addBook, viewAllBooks, searchBooks, updateBook, deleteBook } from "./services/bookService.js"
import { borrowBook, returnBook } from "./services/borrowService.js"
import { addMember, viewAllMembers, searchMembers, updateMember, deleteMember } from "./services/memberService.js"
import { displayAnalytics, categoryInsights, yearFilter, unavailableBooks, activeBorrowMembers } from './services/reportService.js'
import { displayBook, displayMember } from "./utils/helpers.js"

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
console.log(book1.message)
displayBook([book1.book])
console.log(book1.message)
displayBook([book2.book])
console.log(" ")

console.log("================== Viewing Books ==================")
console.log(" ")
const allBooks = viewAllBooks()
console.log(`Retrieved ${allBooks.totalBooks} books.`)
displayBook(allBooks.books)
console.log(" ")

console.log("================== Searching Books ==================")
console.log(" ")
const result = searchBooks({ "id": 2 })
console.log(`Retrieved ${result.totalResults} books.`)
displayBook(result.result)
console.log(" ")

console.log("================== Updating Books ==================")
console.log(" ")
const book1Editted = addBook(
    {
        id: 1,
        title: "Clean Code - editted",
        author: "Robert C. Martin",
        category: "Programming",
        publicationYear: 2008,
        isbn: "9780132350884",
        totalCopies: 5,
        availableCopies: 5
    }

)
console.log(book1Editted.message)
displayBook([book1Editted.book])
console.log(" ")

console.log("================== Deleting Books ==================")
console.log(" ")
const deletedBook = deleteBook(2)
console.log(deletedBook.message || deletedBook.error)
console.log(" ")

console.log("================== Adding Members ==================")
console.log("")

const member1 = addMember(
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@email.com",
        phone: "0912345678",
        borrowedBooks: []
    }
)

const member2 = addMember(
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@email.com",
        phone: "0923456789",
        borrowedBooks: []
    }
)
console.log(member1.message || member1.error)

if (member1.success) {
    displayMember([member1.member])
}
console.log("")

console.log(member2.message || member2.error)
if (member2.success) {
    displayMember([member2.member])
}
console.log("")


console.log("================== Viewing Members ==================")
console.log("")
const allMembers = viewAllMembers()
console.log(`Retrieved ${allMembers.totalMembers} members.`)
displayMember(allMembers.members)
console.log("")


console.log("================== Searching Members ==================")
console.log("")
const memberSearch = searchMembers({ id: 2 })
console.log(`Retrieved ${memberSearch.totalResults} members.`)
displayMember(memberSearch.result)
console.log("")


console.log("================== Updating Members ==================")
console.log("")
const updatedMember = updateMember(
    {
        id: 1,
        firstName: "John",
        lastName: "Doe Updated",
        email: "john.doe@email.com",
        phone: "0912345678",
        borrowedBooks: []
    }
)
console.log(updatedMember.message || updatedMember.error)
if (updatedMember.success) {
    displayMember([updatedMember.member])
}
console.log("")


console.log("================== Deleting Members ==================")
console.log("")
const deletedMember = deleteMember(2)
console.log(deletedMember.message || deletedMember.error)
console.log("")

console.log("================== Borrowing Books ==================")
console.log("")
const borrow1 = borrowBook(1, 1)
console.log(borrow1.message || borrow1.error)
console.log("")


console.log("================== Returning Books ==================")
console.log("")
const return1 = returnBook(1, 1)
console.log(return1.message || return1.error)
console.log("")

console.log(searchMembers({ "id": 1 }).result)

console.log("================== Library Analytics ==================")
console.log("")

const analytics = displayAnalytics()

console.log(`Total books: ${analytics["Total books"]}`)
console.log(`Total available copies: ${analytics["Total available copies"]}`)
console.log(`Total unique titles: ${analytics["Total unique titles"]}`)
console.log(`Total members: ${analytics["Total members"]}`)
console.log(`Active borrows: ${analytics["Active borrows"]}`)

console.log("")


console.log("================== Category Insights ==================")
console.log("")
const categories = categoryInsights()
for (const category in categories) {
    console.log(`${category}: ${categories[category]} books`)
}
console.log("")


console.log("================== Year Filter ==================")
console.log("")
const filteredBooks = yearFilter(2000)
console.log(`Books published after 2000: ${filteredBooks.length}`)
displayBook(filteredBooks)
console.log("")


console.log("================== Unavailable Books ==================")
console.log("")
const unavailable = unavailableBooks()
console.log(`Found ${unavailable.length} unavailable books.`)
displayBook(unavailable)
console.log("")


console.log("================== Active Borrowers ==================")
console.log("")
const activeBorrowers = activeBorrowMembers()
console.log(`Found ${activeBorrowers.length} active borrowers.`)
displayMember(activeBorrowers)
console.log("")
# Library Management System

This is a library management system built with javascript. No external libraries or frameworks were used.

## Features

- Add, view, search, update, and delete books
- Add, view, search, update, and delete members
- Borrow and return books
- Check book availability
- Prevent duplicate ISBN, email, and phone numbers
- Generate IDs automatically
- View library analytics and statistics
- View books by category
- Filter books by publication year
- View unavailable books
- View members with active borrows

## Folder Structure

```bash
library-management-system/
├── package.json
├── README.md
├── app.js
├── data/
│   ├── books.js
│   └── members.js
├── services/
│   ├── bookService.js
│   ├── memberService.js
│   ├── borrowService.js
│   └── reportService.js
└── utils/
    ├── validator.js
    └── helpers.js
```

## Setup instructions

Clone the repository:

```bash
git clone https://github.com/Megdelawit365/javascript-library-management-megdelawit
cd javascript-library-management-megdelawit
```

Run the program

```bash
node app.js
```

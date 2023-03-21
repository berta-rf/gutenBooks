// checks localStorage for books to load, if no books returns empty array
const loadBooks = () => JSON.parse(localStorage.getItem('savedBooks') || '[]');
// saves books in localStorage savedBooks array
const saveBooks = (books) => localStorage.setItem('savedBooks', JSON.stringify(books));

// find book in localStorage
export const findBook = (book_id) => {

    const books = loadBooks();
    // returns the book_id or -1
    const book = books.find((book) => book.id === parseInt(book_id));

    // (guard statement) returns null if book_id not found in the array
    if (book === -1) return null;

    return book;
}

// finds index of book in the array and with that we assign updates (epubcifi)
export const updateBook = (book_id, updates) => {
    const books = loadBooks();
    const bookIndex = books.findIndex((book) => book.id === parseInt(book_id));
    if (bookIndex === -1)
        return;

    books[bookIndex] = Object.assign(findBook(book_id), updates);
    saveBooks(books);
}

// if the book's not already present in array, it adds it
export const createBook = (book) => {
    if (findBook(book.id))
        return;

    const books = loadBooks();
    books.push(book);
    saveBooks(books);
}
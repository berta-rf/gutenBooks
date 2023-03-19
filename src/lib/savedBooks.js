
const loadBooks = () => JSON.parse(localStorage.getItem('savedBooks') || '[]');
const saveBooks = (books) => localStorage.setItem('savedBooks', JSON.stringify(books));

export const findBook = (book_id) => {
    const books = loadBooks();
    const book = books.find((book) => book.id == book_id);
    if (book === -1) return null;

    return book;
}

export const updateBook = (book_id, updates) => {
    const books = loadBooks();
    const bookIndex = books.findIndex((book) => book.id == book_id);
    if (bookIndex === -1)
        return;

    books[bookIndex] = Object.assign(findBook(book_id), updates);
    saveBooks(books);
}

export const createBook = (book) => {
    if (findBook(book.id))
        return;

    const books = loadBooks();
    books.push(book);
    saveBooks(books);
}
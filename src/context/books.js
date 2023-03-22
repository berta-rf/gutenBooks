import React, { createContext, useState, useEffect } from "react";
import defaultBooks from "../assets/data/defaultBooks.json";


const BookContext = createContext();

//search context---------

function Provider({ children }) {

  // handles results state, and sets defaultBooks.json as default book results to display on homepage
  const [results, setResults] = useState(defaultBooks);

  //saving context-------

  //check local storage for items, assign to bookShelfArray
  let bookShelfArray = JSON.parse(localStorage.getItem("bookshelf"));
  //if there is nothing in bookshelfarray
  if (!bookShelfArray) {
    //set bookshelfarray as []
    bookShelfArray = [];
  }

  const [bookshelf, setBookshelf] = useState(bookShelfArray);

  //save book function
  const addBooktoArray = (e) => {
    // target bookid from parent div
    let idDiv = e.target.parentElement.closest(".bookId");
    let bookID = idDiv.id;

    let selectedBook = results.find((obj) => obj.id === parseInt(bookID));

    let addedBook = {
      id: bookID,
      title: selectedBook.title,
      author: selectedBook.authors[0].name,
    };

    const updatedBookshelf = [addedBook, ...bookshelf];
    setBookshelf(updatedBookshelf);
  };

  //remove from bookshelf
  const removeFromBookshelf = (e) => {
    let id = e.currentTarget.id;
    const updatedBookshelf = bookshelf.filter((book) => {
      return book.id !== id;
    });

    setBookshelf(updatedBookshelf);
  };

  useEffect(() => {
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  }, [bookshelf]);

  //last read -------

  //check local storage for items, assign to lastReadArray

  let lastReadArray = JSON.parse(localStorage.getItem("lastRead"));

  //if there is nothing in lastReadarray
  if (!lastReadArray) {
    //set lastReadarray as []
    lastReadArray = [];
  }

  const [lastRead, setLastRead] = useState(lastReadArray);

  //last read function:
  const addLastReadBook = (e) => {
    let bookID =
      e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.id;

    let lastSelectedBook = results.find((obj) => obj.id === parseInt(bookID));

    let lastBook = {
      id: bookID,
      title: lastSelectedBook.title,
      author: lastSelectedBook.authors[0].name,
    };

    const updateLastRead = [lastBook];
    setLastRead(updateLastRead);
  };

  useEffect(() => {
    localStorage.setItem("lastRead", JSON.stringify(lastRead));
  }, [lastRead]);

  //what will passed to children components
  const valueToShare = {
    results,
    setResults,
    setBookshelf,
    bookshelf,
    addBooktoArray,
    lastRead,
    addLastReadBook,
    removeFromBookshelf,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;

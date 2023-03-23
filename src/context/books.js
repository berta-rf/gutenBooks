import React, { createContext, useState, useEffect } from "react";
import defaultBooks from "../assets/data/defaultBooks.json";

const BookContext = createContext();

//search context---------

function Provider({ children }) {
  // handles results state, and sets defaultBooks.json as default book results to display on homepage
  const [results, setResults] = useState(defaultBooks);

  //saving context-------

  // //check local storage for items, assign to bookShelfArray
  // let bookShelfArray = JSON.parse(localStorage.getItem("bookshelf"));
  // //if there is nothing in bookshelfarray
  // if (!bookShelfArray) {
  //   //set bookshelfarray as []
  //   bookShelfArray = [];
  // }

  // const [bookshelf, setBookshelf] = useState(bookShelfArray);

  const getBookshelf = () => JSON.parse(localStorage.getItem("bookshelf") || '[]');
  //save book function
  const addBooktoArray = (e) => {
    // target bookid from parent div
    let idDiv = e.target.parentElement.closest(".bookId");
    let bookID = idDiv.id;

    let selectedBook = results.find((obj) => obj.id === parseInt(bookID));

    let bookshelf = getBookshelf();
    const inShelf = bookshelf.find((b) => parseInt(b.id) === parseInt(selectedBook.id));
    // if (!inShelf) return;
    debugger
    let addedBook = {
      id: bookID,
      title: selectedBook.title,
      author: selectedBook.authors[0].name,
    };

    // const updatedBookshelf = [addedBook, ...bookshelf];
    // setBookshelf(updatedBookshelf);
    bookshelf.unshift(addedBook);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  };

  //remove from bookshelf
  const removeFromBookshelf = (e) => {
    let id = e.currentTarget.id;
    let bookshelf = getBookshelf();


    const updatedBookshelf = bookshelf.filter((book) => {
      return book.id !== id;
    });
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));

    // setBookshelf(updatedBookshelf);
  };

  // useEffect(() => {
  //   localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  // }, [bookshelf]);

  //last read -------

  //check local storage for items, assign to lastReadArray
  // let lastReadArray = JSON.parse(localStorage.getItem("lastRead"));

  // //if there is nothing in lastReadarray
  // if (!lastReadArray) {
  //   //set lastReadarray as []
  //   lastReadArray = [];
  // }
  
  // const [lastRead, setLastRead] = useState(lastReadArray);

  const getLastRead = () => {
    return JSON.parse(localStorage.getItem("lastRead"));
  }
 
  //last read function:
  const addLastReadBook = (book) => {
    let bookshelf = getBookshelf();
    let lastRead = JSON.parse(localStorage.getItem("lastRead"));

     if (lastRead && lastRead.id !== book.id) {
      const inShelf = bookshelf.find((b) => parseInt(b.id) === parseInt(book.id));
      // debugger
      if (!inShelf) {
        bookshelf.unshift(book);
      }
    }

    lastRead = book;
    localStorage.setItem("lastRead", JSON.stringify(lastRead));
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
    // // target bookid from parent div
    // let bookID = e.target.parentElement.closest(".bookId").id;

    // let lastSelectedBook = results.find((obj) => parseInt(obj.id) === parseInt(bookID));

    // let lastBook = {
    //   id: bookID,
    //   title: lastSelectedBook.title,
    //   author: lastSelectedBook.authors[0].name,
    // };

    // const updateLastRead = [lastBook];
    // setLastRead(updateLastRead);
  };

  // useEffect(() => {
  //   localStorage.setItem("lastRead", JSON.stringify(lastRead));
  // }, [lastRead]);

  //what will passed to children components
  const valueToShare = {
    results,
    setResults,
    // setBookshelf,
    // bookshelf,
    getBookshelf,
    addBooktoArray,
    getLastRead,
    addLastReadBook,
    removeFromBookshelf,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;

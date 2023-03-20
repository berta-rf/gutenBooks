import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import defaultBooks from "../assets/data/defaultBooks.json";

const BookContext = createContext();

//search context---------

function Provider({ children }) {
  const authorURL = "https://gutendex.com/books?search=";
  const topicURL = "https://gutendex.com/books?topic=";

  const [searchResults, setSearchResults] = useState({
    param: "author",
    query: "",
  });

  const handleChange = (event) => {
    setSearchResults({ ...searchResults, param: event.target.value });
  };

  const handleSearch = () => {
    let url;
    if (searchResults.param === "author") {
      url = authorURL + searchResults.query;
    } else if (searchResults.param === "topic") {
      url = topicURL + searchResults.query;
    }
    axios
      .get(url)
      .then((data) => setResults(data.data.results))
      .catch((error) => console.log(error));
  };

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
    let bookID = e.currentTarget.parentNode.parentNode.parentNode.parentNode.id;

    let selectedBook = results.find((obj) => obj.id == bookID);

    let addedBook = {
      id: bookID,
      title: selectedBook.title,
      author: selectedBook.authors[0].name,
    };

    const updatedBookshelf = [addedBook, ...bookshelf];
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

    let lastSelectedBook = results.find((obj) => obj.id == bookID);

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
    searchResults,
    setSearchResults,
    handleChange,
    handleSearch,
    setBookshelf,
    bookshelf,
    addBooktoArray,
    lastRead,
    addLastReadBook,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;

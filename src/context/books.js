import React, { createContext, useState } from "react";
import axios from "axios";
import defaultBooks from "../assets/data/defaultBooks.json";

const BookContext = createContext();

//search context
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

  //save book function
  const [bookshelf, setBookshelf] = useState([]);

  const addBooktoArray = (bookshelf) => {
    console.log("This book's title is:" + bookshelf);
    //add books to the start of bookshelf

    const updatedBookshelf = [
      { id: results.id, title: results.title, author: results.author[0].name },
      ...bookshelf,
    ];
    setBookshelf(updatedBookshelf);
  };

  //what will passed to children components
  const valueToShare = {
    results,
    searchResults,
    setSearchResults,
    handleChange,
    handleSearch,
    bookshelf,
    addBooktoArray,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;

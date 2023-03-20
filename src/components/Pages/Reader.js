import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ReactReader } from "react-reader";
import { findBook, updateBook } from "../../lib/savedBooks";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
// import { Toolbar } from "@mui/material";
// import { Box } from "@mui/system";

// const [savedBooks, setSavedBooks] = useState([]);

// useEffect(() => {
//     const savedBooks = JSON.parse(localStorage.getItem('savedBooks'));
//     if (savedBooks) {
//      setSavedBooks(savedBooks);
//     }
// }, []);

const drawerWidth = 280;

const Reader = () => {
  let params = useParams();
  const book_id = params.bookId;
  const book = findBook(book_id);

  const [location, setLocation] = useState(null);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const renditionRef = useRef(null);
  const fetchingBook = useRef(false);

  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)

    if (!firstRenderDone) {
      debugger;
      const currentLocation = book.location;
      setLocation(currentLocation);
      setFirstRenderDone(true);
      return;
    }
    // This is the code that runs everytime the page changes, after the initial render.
    // Saving the current epubcifi on storage...
    updateBook(book.id, { location: epubcifi });

    // And then rendering it.
    setLocation(epubcifi); // Or setLocation(localStorage.getItem("book-progress"))
  };

  const baseURL = "/.netlify/functions/epub-downloader";

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    if (!fetchingBook.current) {
      fetchingBook.current = true;
      axios.get(baseURL + `?book_id=${book_id}`).then((response) => {
        setBookData(response.data.data);
      });
    }
  });

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        xs={10}
        sx={{
          height: "80vh",
          width: `calc(100%)-${drawerWidth}px`,
        }}
      >
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          epubInitOptions={{ encoding: "base64" }}
          url={bookData}
          getRendition={(rendition) => (renditionRef.current = rendition)}
        />
      </Grid>
    </Grid>
  );
};

export default Reader;

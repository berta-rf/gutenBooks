import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ReactReader } from "react-reader";
import { findBook, updateBook } from "../../lib/savedBooks";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";

const drawerWidth = 280;

const Reader = () => {
  let params = useParams();
  const book_id = params.bookId;
  const book = findBook(book_id);

  // change page title
  let newPageTitle = `gutenBooks - ${book.title}`;
  document.title = newPageTitle;

  const [location, setLocation] = useState(null);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const renditionRef = useRef(null);
  const fetchingBook = useRef(false);

  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub

    if (!firstRenderDone) {
      const currentLocation = book.location;
      setLocation(currentLocation);
      setFirstRenderDone(true);
      return;
    }
    // This code runs everytime the page changes, after the initial render.
    // Saving the current epubcifi on storage...
    updateBook(book.id, { location: epubcifi });

    // And then rendering it.
    setLocation(epubcifi); // Or setLocation(localStorage.getItem("book-progress"))
  };

  // AWS Lambda function URL
  const awsURL = 'https://bxwfxnh4araqswaya6hrklccnu0bsduv.lambda-url.eu-north-1.on.aws/'

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    if (!fetchingBook.current) {
      fetchingBook.current = true;
      axios.get(awsURL + `?book_id=${book_id}`).then((response) => {
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

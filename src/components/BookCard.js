import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link, useParams} from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BookContext from "../context/books";
import BookModal from './BookModal'

import { createBook } from "../lib/savedBooks";

import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import { trackPromise} from 'react-promise-tracker';
import Spinner from "./Spinner";


const BookCard = () => {
  const { results, addBooktoArray, addLastReadBook, setResults } = useContext(BookContext);

  const languageAbbr ={
    en:"English",
    es:"Espanol",
    fr:"French",
    gr:"German",
  }

  // param refers to author/title and topic, query is search input
  const { query, param } = useParams();

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setResults([])
    }
    
    if (!query) return;
    const authorURL = "https://gutendex.com/books?search=";
    const topicURL = "https://gutendex.com/books?topic=";

    let url;
    if (param === "author") {
      url = authorURL + query;
    } else if (param === "topic") {
      url = topicURL + query;
    }

    trackPromise(
      axios
        .get(url)
        .then((data) => setResults(data.data.results))
        .catch((error) => console.log(error))
    );

  }, [setResults, param, query])
    
  if (results.length === 0) {
    return (<Spinner />)
  } else {
    return (
      <>
        {results.map((book) => (
          <Grid key={book.id} id={book.id}>
            <Card sx={{ width: 350, height: 700 }} onClick={()=>book.showDescription(book.title)}>
              {/* Cover */}
              <CardMedia
                component="img"
                alt={book.title}
                height="75%"
                image={`https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`}
              />

              <CardContent>
                {/* Booktitle */}
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    p: 1,
                    fontWeight: 600,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {book.title}
                </Typography>
                {/* Author */}
                <Typography
                  variant="subtitle1"
                  noWrap
                  sx={{
                    p: 1,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  by {book.authors[0] ? book.authors[0].name : "Unknown Author"}
                </Typography>
                <CardActions>
                  <BookModal 
                  title={book.title}
                  // this is the props which is breaking the search
                  // author={book.authors[0].name}
                  subjects={book.subjects}
                  language={languageAbbr[book.languages]??book.languages}
                  // description= {book.title}
                  /> 
                  <Link
                    to={`/Reader/${book.id}`}
                    onClick={(e) => createBook(book)}
                  >
                    <Button size="medium" onClick={addLastReadBook}>
                      READ
                    </Button>
                  </Link>
                  <Tooltip title="Add to Bookshelf">
                    <IconButton onClick={addBooktoArray}>
                      <BookmarkAddIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </>
    );

  }
};

export default BookCard;

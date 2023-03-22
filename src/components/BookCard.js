import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

import { createBook } from "../lib/savedBooks";

import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

const BookCard = () => {
  const { results, addBooktoArray, addLastReadBook } = useContext(BookContext);

  return (
    <>
      {results.map((book) => (
        <Grid key={book.id} id={book.id}>
          <Card className="bookCard" sx={{ width: 350, height: 675 }}>
            {/* Cover */}
            <CardMedia
              className="bookCardMedia"
              component="img"
              alt={book.title}
              height="75%"
              image={`https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`}
            />

            <CardContent className="bookCardContent">
              {/* Booktitle */}
              <Typography
                className="bookCardTitle"
                variant="h5"
                noWrap
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {book.title}
              </Typography>
              {/* Author */}
              <Typography
                className="bookCardAuthor"
                noWrap
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                by {book.authors[0] ? book.authors[0].name : "Unknown Author"}
              </Typography>
              <CardActions className="bookCardActions">
                <Button className="bookCardButton" size="medium">
                  Description
                </Button>

                <Link
                  to={`/Reader/${book.id}`}
                  onClick={(e) => createBook(book)}
                >
                  <Button
                    className="bookCardButton"
                    size="medium"
                    onClick={addLastReadBook}
                  >
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
};

export default BookCard;

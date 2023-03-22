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
import ClearIcon from "@mui/icons-material/Clear";

import { createBook } from "../lib/savedBooks";

const BookCard = () => {
  const { bookshelf, removeFromBookshelf } = useContext(BookContext);

  return (
    <>
      {bookshelf.map((book) => (
        <Grid key={book.id}>
          <Card sx={{ width: 350, height: 675 }}>
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
                by {book.author ? book.author : "Unknown Author"}
              </Typography>
              <CardActions sx={{ justifyContent: "space-evenly" }}>
                <Link
                  to={`/Reader/${book.id}`}
                  onClick={(e) => createBook(book)}
                >
                  <Button size="medium">READ</Button>
                </Link>
                <Link
                  to={`/Review`}>
                  <Button size="medium">Review</Button>
                </Link>
                <IconButton id={book.id} onClick={removeFromBookshelf}>
                  <Tooltip title="Remove from Bookshelf">
                    <ClearIcon />
                  </Tooltip>
                </IconButton>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default BookCard;

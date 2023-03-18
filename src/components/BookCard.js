import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import defaultBooks from "../assets/data/defaultBooks.json";
import Grid from "@mui/material/Unstable_Grid2";

//defeault booksjson
const books = defaultBooks;

const BookCard = () => {
  return (
    <>
      {books.map((book) => (
        <Grid>
          <Card id={book.id} sx={{ width: 350, height: 700 }}>
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

              <CardActionArea>
                <Button size="medium">Description</Button>
                <Button size="medium">READ THIS BOOK</Button>
              </CardActionArea>
              {/* Add to Bookshelf */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default BookCard;

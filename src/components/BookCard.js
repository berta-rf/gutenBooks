import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fab,
  IconButton,
  Typography,
} from "@mui/material";
import defaultBooks from "../assets/data/defaultBooks.json";
import Grid from "@mui/material/Unstable_Grid2";

//mui icons
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

//defeault booksjson
const books = defaultBooks;

//function to fix author name display
//split name into 2
function fixAuthorName(name) {
  const splitName = name.split(" ");

  return splitName;
}

const BookCard = () => {
  return (
    <>
      {books.map((book) => (
        <Grid>
          <Card sx={{ width: 350, height: 700 }}>
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

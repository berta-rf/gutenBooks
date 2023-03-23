import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
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
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { createBook } from "../lib/savedBooks";

const LastReadBookCard = () => {
  const { lastRead, addBooktoArray } = useContext(BookContext);

  return (
    <>
      {lastRead.map((book) => (
        <Grid className="bookId" key={book.id} id={book.id}>
          <Card sx={{ width: 350, height: 675 }}>
            {/* Cover */}
            <CardMedia
              component="img"
              alt={book.title}
              height="75%"
              image={`https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`}
            />
            <CardContent className="bookCardContent">
              {/* Booktitle */}
              <Typography
                className={`"bookCardTitle" ${"spreadEffectTitle"}`}
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
                className="bookCardAuthor"
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
              <CardActions className="bookCardActions">
                <Box sx={{ display: "flex" }}>
                  <Link
                    to={`/Reader/${book.id}`}
                    onClick={(e) => createBook(book)}
                  >
                    <Button
                      className="bookCardButton"
                      color="success"
                      size="medium"
                    >
                      READ
                    </Button>
                  </Link>
                </Box>
                <Box>
                  <Tooltip title="Add to Bookshelf">
                    <IconButton onClick={addBooktoArray}>
                      <BookmarkAddIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default LastReadBookCard;

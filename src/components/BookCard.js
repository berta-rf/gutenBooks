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
import BookModal from './BookModal'

import { createBook } from "../lib/savedBooks";

import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";


const BookCard = (props) => {
  const { results, addBooktoArray, addLastReadBook } = useContext(BookContext);
  const languageAbbr ={
    en:"English",
    es:"Espanol",
    fr:"French",
    gr:"German",
  }
  // const [description, setDescription] = useState("")
  // const descript =(data) => {
  //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=${results}&key=AIzaSyBW3TLScb7kRYv0kkDzkT_Zv5qUF8euQg8`)
  //   .then(res => { 
  //     let data = (res.data.items[0].volumeInfo.description);
  //     console.log(data); });
  //     // .catch(err => console.log(err)) 
  //     setDescription(data)
  //     console.log("Description"+ description)
  // }

  return (
    <>
      {results.map((book) => (
        <Grid key={book.id} id={book.id}>
          <Card sx={{ width: 350, height: 700 }} onClick={()=>props.showDescription(book.title)}>
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
                author={book.authors[0].name}
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
};

export default BookCard;

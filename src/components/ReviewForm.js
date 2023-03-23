import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Rating,
  Select,
  MenuItem,
  InputLabel,
  FormGroup,
  Container,
} from "@mui/material";
import BookContext from "../context/books";
import { Box } from "@mui/system";

function ReviewForm(props) {
  // states for the input of title, description and star rating
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const { getBookshelf } = useContext(BookContext);

  const handleClick = (e) => {
    e.preventDefault();
    // allows to use prop in the review item js when it is rendered onto the page
    props.addReview(title, description, value);
    // resets the input to blank after submit
    setTitle("");
    setDescription("");
    setValue(0);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Container className="reviewForm">
        <FormGroup>
          <InputLabel className="inputLabel">Book Title</InputLabel>
          <Select
            color="success"
            className="bookTitleSelect"
            id="title-simple-select-standard"
            variant="filled"
            labelId="Book Title"
            placeholder={title}
            value={title}
            // onChange={(e) => setTitle(e.target.value)}>
            onChange={handleChange}
          >
            {getBookshelf().map((savedTitle) => (
              <MenuItem
                className="menuItem"
                key={savedTitle.id}
                value={savedTitle.title}
              >
                {savedTitle.title}
              </MenuItem>
            ))}
          </Select>
        </FormGroup>
        <FormGroup sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputLabel className="inputLabel">Review</InputLabel>
            <Rating
              className="starRating"
              name="simple-controlled"
              size="large"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                // checking that it is showing star rating as number
                console.log(newValue);
              }}
            />
          </Box>
          <TextField
            multiline
            maxRows={4}
            className="reviewInput"
            id="descriptionInput"
            color="success"
            variant="filled"
            placeholder="What are your thoughts?"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
      </Container>
      <Button
        fullWidth
        className="submitReviewBtn"
        variant="filled"
        size="large"
        onClick={handleClick}
      >
        Submit
      </Button>
    </>
  );
}

export default ReviewForm;

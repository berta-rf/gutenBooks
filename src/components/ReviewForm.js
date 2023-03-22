import React, { useState, useContext } from 'react';
import { TextField, Button, Rating, Typography, Box, Select, MenuItem, InputLabel } from '@mui/material';
import BookContext from "../context/books";


const inputStyle = {
  width: 300,
  marginRight: 5,
  marginTop:1,
  // marginBottom:3,
}

const dropDownStyle = {
  width: 300,
  marginRight: 5,
  // marginBottom:3,
}

function ReviewForm(props) {
  // states for the input of title, description and star rating
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState(5)
  const { bookshelf } = useContext(BookContext);

  // test the dropdown options
  // const names =[{
  //   id:1,
  //   name:"this is a book"},
  //   {
  //     id:2,
  //     name:'another books'
  //   }
  // ]

  const handleClick = (e) => {
    e.preventDefault()
    // allows to use prop in the review item js when it is rendered onto the page
    props.addReview(title, description, value)
    // resets the input to blank after submit 
    setTitle("")
    setDescription("")
    setValue(null)
  }
  
  const handleChange = (event) => {
    setTitle(event.target.value)
  }


  return (
    <div>
      <Box>
        <Typography variant="h4">My Reviews</Typography>
      </Box>
      <Box>
        <form className='reviewForm'>
        <InputLabel id='titleInput'>Book Title</InputLabel>
          <Select 
            sx={dropDownStyle}
            id="titleInput"
            variant='outlined'
            labelId="Book Title"
            placeholder='Book Title'
            value={title}
            // onChange={(e) => setTitle(e.target.value)}>
            onChange={handleChange}>
          {bookshelf.map((savedTitle)=>(
            <MenuItem key={savedTitle.id} value={savedTitle.title}>{savedTitle.title}</MenuItem>
          ))}
          </Select>
          <TextField
            id="descriptionInput"
            placeholder='What are your thoughts?'
            sx={inputStyle}
            onChange={(e) => setDescription(e.target.value)} />
          <Rating
            name="simple-controlled"
            size="large"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              // checking that it is showing star rating as number
              console.log(newValue)
            }} />
          <Button 
          className='submitReviewBtn' 
          variant="outlined" 
          sx={{mb: 3, mt:1}} 
          size="large"
          onClick={handleClick}>
          Submit</Button>
        </form>
      </Box>
    </div>
  )
}

export default ReviewForm
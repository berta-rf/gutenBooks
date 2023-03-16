import React, { useState } from 'react';
import { TextField, Button, Rating } from '@mui/material';

function ReviewForm(props) {
  // states for the input of title, description and star rating
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState(5)

  const handleClick = (e) => {
    e.preventDefault()
    // allows to use prop in the review item js when it is rendered onto the page
    props.addReview(title, description, value)
    // resets the input to blank after submit 
    setTitle("")
    setDescription("")
    setValue(null)
  }

  return (
    <div>
      <h1>Write your reviews here</h1>
      <form className='reviewForm'>
        <TextField 
        id="titleInput"
          placeholder='Book Title'
          sx={{ ml: 30,
            mb: 5
          }}
          onChange={(e) => setTitle(e.target.value)} />
        <TextField
          id="descriptionInput"
          placeholder='What are your thoughts?'
          sx={{ ml: 5,
            mb: 5
          }}
          onChange={(e) => setDescription(e.target.value)} />
        <Rating
          name="simple-controlled"
          sx={{
            mx: 'auto',
            width: 200,
            p: 1,
            m: 1
          }}
          size="large"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            // checking that it is showing star rating as number
            console.log(newValue)
          }} />
        <Button className='submitReviewBtn' variant="outlined" sx={{mb: 3}} onClick={handleClick}>Submit</Button>
      </form>
    </div>
  )
}

export default ReviewForm
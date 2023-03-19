import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import BookCard from "../BookCard";
import Grid from "@mui/material/Unstable_Grid2";
import AddToBookshelf from "../AddtoBookshelf";

const Bookshelf = () => {
  //empty bookshelf array
  const [addedBooks, setAddedBook] = useState([]);

  return (
    <div>
      <Box>
        <Typography variant="h2">Bookshelf</Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5">Saved Books</Typography>
        <Grid container spacing={2}>
          <BookCard />
        </Grid>
      </Box>
    </div>
  );
};

export default Bookshelf;

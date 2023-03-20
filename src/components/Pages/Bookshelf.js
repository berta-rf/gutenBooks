import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BookshelfBookCard from "../BookshelfBookCard";

const Bookshelf = () => {
  return (
    <div>
      <Box>
        <Typography variant="h2">Bookshelf</Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5">Your Last Read Book:</Typography>
        <Grid container spacing={2} sx={{ m: 5 }}>
          <BookshelfBookCard />
        </Grid>
        <Typography variant="h5">Saved Books</Typography>
        <Grid container spacing={2}>
          <BookshelfBookCard />
        </Grid>
      </Box>
    </div>
  );
};
export default Bookshelf;

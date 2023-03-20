import React from "react";
import BookCard from "./BookCard";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Homepage() {
  return (
    <div>
      <Box>
        <Typography variant="h2">Here are some books for you:</Typography>
        <Grid container spacing={2} sx={{ m: 3 }}>
          <BookCard />
        </Grid>
      </Box>
    </div>
  );
}

export default Homepage;

import React from "react";
import BookCard from "./BookCard";
// import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// import Button from "@mui/material/Button";
// import { CardActionArea } from "@mui/material";
// import BookContext from "../context/books";

function Homepage() {
  return (
    <>
      <Container>
        <Typography variant="h3">Here are some books for you:</Typography>
        <Grid container spacing={2}>
          <BookCard />
        </Grid>
      </Container>
    </>
  );
}

export default Homepage;

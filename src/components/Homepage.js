import React, { useContext } from "react";
import BookCard from "./BookCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// import Button from "@mui/material/Button";
// import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import BookContext from "../context/books";

function Homepage() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3">Here are some books for you:</Typography>
        <Grid container spacing={2}>
          <BookCard />
        </Grid>
      </Box>
    </>
  );
}

export default Homepage;

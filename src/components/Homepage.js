import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import BookCard from "./BookCard";
// import BookContext from "../context/books";

function Homepage() {
  // const [greetings, setGreetings] = useState("")

  return (
    <div>
      <Box>
        <Typography variant="h4">Here are some books for you:</Typography>
        <Grid container spacing={2} sx={{ m: 3 }}>
          <BookCard />
        </Grid>
      </Box>
    </div>
  );
}

export default Homepage;

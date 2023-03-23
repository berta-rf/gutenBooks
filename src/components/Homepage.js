import React from "react";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BookCard from "./BookCard";

function Homepage() {
  return (
    <div>
      <Box>
        <Typography className="pageHeading">
          Here are some books for you:
        </Typography>
        <Grid container spacing={2} sx={{ p: 5 }} className="gridWrapper">
          <BookCard />
        </Grid>
      </Box>
    </div>
  );
}

export default Homepage;

import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BookshelfBookCard from "../BookshelfBookCard";
import LastReadBookCard from "../LastReadBookCard";

const Bookshelf = () => {
  return (
    <div>
      <Box>
        <Typography variant="h2">Bookshelf</Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" sx={{ m: 2 }}>
          Your Last Read Book:
        </Typography>
        <Grid container spacing={2} sx={{ m: 3 }}>
          <LastReadBookCard />
        </Grid>
        <Typography variant="h5" sx={{ m: 2 }}>
          Your Saved Books:
        </Typography>
        <Grid container spacing={2} sx={{ m: 3 }}>
          <BookshelfBookCard />
        </Grid>
      </Box>
    </div>
  );
};
export default Bookshelf;

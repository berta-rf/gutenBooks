import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BookshelfBookCard from "../BookshelfBookCard";
import LastReadBookCard from "../LastReadBookCard";

import "react-multi-carousel/lib/styles.css";

const Bookshelf = () => {
  // change page title
  let newPageTitle = `gutenBooks - My Bookshelf`;
  document.title = newPageTitle;

  return (
    <div className="homePageWrapper">
      <Box>
        <Typography className="pageHeading" variant="h4">
          My Bookshelf
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid>
            <Typography className="pageSubHeading" variant="h5" sx={{ m: 2 }}>
              Last Read:
            </Typography>
            <Grid container spacing={2} sx={{ m: 3 }}>
              <LastReadBookCard />
            </Grid>
          </Grid>
          <Grid sx={{ flexGrow: 2 }}>
            <Typography className="pageSubHeading" variant="h5" sx={{ m: 2 }}>
              My Saved Books:
            </Typography>
            <Grid container spacing={2} sx={{ m: 3 }}>
              <BookshelfBookCard />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Bookshelf;

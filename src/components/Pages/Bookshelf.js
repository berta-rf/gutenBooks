import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BookshelfBookCard from "../BookshelfBookCard";
import LastReadBookCard from "../LastReadBookCard";

const Bookshelf = () => {
  // change page title
  let newPageTitle = `gutenBooks - My Bookshelf`;
  document.title = newPageTitle;

  return (
    <div>
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
            <Grid
              className="bookshelfBookWrapper"
              container
              spacing={2}
              sx={{ pl: 6 }}
            >
              <LastReadBookCard />
            </Grid>
          </Grid>
          <Grid sx={{ flexGrow: 2 }}>
            <Typography className="pageSubHeading" variant="h5" sx={{ m: 2 }}>
              My Saved Books:
            </Typography>
            <Grid
              className="bookshelfBookWrapper"
              container
              spacing={2}
              sx={{ pl: 5 }}
            >
              <BookshelfBookCard />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Bookshelf;

import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";

function Homepage({ results }) {
  return (
    <>
      <Box>
        <h1>Here's some books for you...</h1>

        <Grid container className="homepage">
          <Card>Test</Card>
          {/* {results.map((book) => (
          <Grid xs={6} md={4} xl={3}>
            <Card className="books" sx={{ width: "92%" }}>
              <CardMedia
                component="img"
                alt={book.title}
                height="10%"
                image={`https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`}
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {book.title} by{" "}
                  {book.authors[0] ? book.authors[0].name : "Unknown Author"}
                </Typography>
              </CardContent>
              <CardActionArea>
                <Button size="medium">See description</Button>
                <Button size="medium">READ THIS BOOK</Button>
              </CardActionArea>
            </Card>
          </Grid>
        ))} */}
        </Grid>
      </Box>
    </>
  );
}

export default Homepage;

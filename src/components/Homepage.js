import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";

// import Button from "@mui/material/Button";
// import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import BookCard from "./BookCard";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Homepage({ results }) {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3">Here's some books for you...</Typography>
        <Grid container spacing={2}>
          <BookCard />
        </Grid>

        {/* {results.map((book) => (
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
          ))} */}
      </Box>
    </>
  );
}

export default Homepage;

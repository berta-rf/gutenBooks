import { Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';


function Homepage({results}) {

  console.log(results)
  return (<>

    <Grid container className='homepage' spacing={2}>
      <h1>Here's some books for you...</h1>

        {results.results.map((book) => (

          <Grid xs={6}>
              <Card className='defaultBooks'>
                  <CardMedia
                    component="img"
                    alt={book.title}
                    height="10%"
                    image={`https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`} />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      {book.title}
                      {/* {book.authors[0].name} */}
                    </Typography>
                  </CardContent>
                  <CardActionArea>
                    <Button size="small">See info</Button>
                    <Button size="small">READ THIS BOOK</Button>
                </CardActionArea>
              </Card>
          </Grid>
        ))}

    </Grid>
  
  </>);

}

export default Homepage;
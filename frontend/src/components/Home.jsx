//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { CardMedia } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';



const Home = () => {
    const rows=[{mName:'Movie1',mDesc:'movie1',mdirector:'raju'},{mName:'Movie2',mDesc:'movie2',mdirector:'rajmouli'}]

  return (
    // <div>Home</div>
    <div>
                <Grid container spacing={2}>

      {rows.map((item)=>(
                  <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 320 }}
                image="https://image.tmdb.org/t/p/w342/iSS17YFooUA33FKsJ0yJhWZzylb.jpg"
                title="Guruvayoor Ambalanadayil (2024)"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {item.mName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.mDesc}                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button href='https://www.imdb.com/title/tt25400540/' size="small">Learn More</Button>
              </CardActions>
            </Card>
                  
                  </Grid>
        ))}
        </Grid>
    </div>
  )
}

export default Home

//Write your code here
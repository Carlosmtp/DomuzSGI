
import { Card,  CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'

import { Button, CardActionArea, CardActions } from '@mui/material';

import React from 'react'

const Post = () => {
  return (
    <Grid container>
      <Card sx={{ width: 250, height: 280 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Proceso #X
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descripción del proceso aaa bb c dddd ee ff.
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver más...
        </Button>
      </CardActions>
    </Card>
    </Grid>
  )
}
export default Post


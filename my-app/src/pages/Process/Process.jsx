
import { Box, Grid, Typography } from '@mui/material'
//import { Button } from '@mui/material';
import React from 'react'
import ImageButton from '../../components/ImageButton'

const Post = () => {
  return (
    <Grid item xs={12} sm={3}>    
      <Box bgcolor="darkgray">
        <Grid container>       
          
            <ImageButton image={"https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg"} title={"Proceso #X"}/>
          
          <Grid item pt={2} pb={2} pl={3} pr={3} align="left">
            <Typography variant="body2" color="text.primary" align="justify" height={{xs:40, sm:60}}>
              Descripción del proceso. Debe mostrar como máximo 3 líneas, o si no, se daña.
            </Typography>
            {/*<Button size="small" color="primary">
              Ver más...
            </Button>  */}
          </Grid>
        </Grid>
      </Box>
    </Grid> 
  )
}
export default Post


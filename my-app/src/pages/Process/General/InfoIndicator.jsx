
import { Box, Grid, Typography } from '@mui/material'
//import { Button } from '@mui/material';
import React from 'react'
import ImageButton from '../../../components/ImageButton'

const InfoProccess = ( {title, description, id }) => {
  return (
    <Grid item xs={12} sm={12} >    
      <Box bgcolor="white" sx={{ borderRadius: '16px' }}>
        <Grid container>       
            <ImageButton image={"https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg"} title={title} actionFunction={() => {console.log("ACTION")}}/>
        </Grid>
      </Box>
    </Grid> 
  )
}
export default InfoProccess


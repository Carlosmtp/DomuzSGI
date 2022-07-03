
import { Box, Grid, Stack, Typography } from '@mui/material'
//import { Button } from '@mui/material';
import React from 'react'
import ImageButton from '../../../components/ImageButton'

const InfoProccess = ( {title}) => {
  return (
    <Grid item xs={12} sm={12} >   
      <Box bgcolor='background.light' p={{xs:1, sm:2}} sx={{ borderRadius: '16px', border: 1, borderColor:'background.paper', boxShadow: 3 }}>
        <Stack direction={{xs:"column", sm:"row"}}>
            <Grid item xs={12} sm={3} >    
            <ImageButton image={"https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg"} title={title} actionFunction={() => {console.log("ACTION")}}/>
        </Grid>   
        <Grid item xs={12} sm={7} p={{xs:1, sm:0}}  pl={{sm:2}} pr={{sm:2}}>    
            <Typography>DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DELDEL DELDELDELDEL DEDEL DEL DELDEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO DESCRIPCIÓN DEL PROCESO </Typography>
        </Grid>
        <Grid item xs={12} sm={2} >    
            <Box bgcolor='secondary.main' p={{xs:1, sm:2}} sx={{ borderRadius: '16px', border: 1, boxShadow: 2 }}>
                <Stack direction={{xs:"row", sm:"column"}}>
                    <Typography>Eficiencia</Typography>
                    <Typography>Meta</Typography>
                </Stack>
            </Box>    
        </Grid>
        </Stack>
      </Box>
    </Grid> 
  )
}
export default InfoProccess


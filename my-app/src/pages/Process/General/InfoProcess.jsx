
import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import axios from 'axios'
//import { Button } from '@mui/material';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const InfoProcess = ( {title, description, goal}) => {
  const [efficiency, setEfficiency] = useState()

  useEffect(()=>{
    axios.get('/get/last_report?process_id=1').then((res)=>{
      let aux = res.data
      setEfficiency(aux.efficiency >= 1 ? aux.efficiency*100+"%" : (aux.efficiency*100+"").substr(0, 2)+"%")
    })
  },[])

  return (
    <Grid item xs={12} sm={12} >  
    <Typography variant='h4' align='center' pb={2} >{title}</Typography> 
      <Box bgcolor='secondary.dark' sx={{ borderRadius: '16px', boxShadow: 3 }}>
        <Stack direction={{xs:"column", sm:"row"}}>
            <Grid item xs={12} sm={3} sx={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "secondary",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>  
            {/*
            <ImageButton image={"https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg"} title={title} actionFunction={() => {console.log("ACTION")}}/>
            */}            
        </Grid>   
        <Grid item xs={12} sm={7} p={{xs:1, sm:3}}  pl={{sm:3}} pr={{sm:3}}>    
            <Typography color='White' align='justify'>{description}</Typography>
        </Grid>
        <Grid item xs={12} sm={2} p={{xs:1, sm:3}} >    
            <Box bgcolor='secondary.main' p={{xs:1, sm:2}} sx={{ borderRadius: '16px', border: 1, borderColor:'secondary.light', boxShadow: 2 }}>
                <Stack direction={{xs:"row", sm:"column"}} spacing={{xs:1, sm:3}}>
                    <Box flex={6}>
                        <Typography variant='h5' color='White' align='center'>{efficiency}</Typography>
                        <Typography color='White' align='center'>Eficiencia:</Typography>
                    </Box>
                    <Divider light/>
                    <Box flex={6}>
                        <Typography variant='h5' color='White' align='center'>{goal*100}%</Typography>
                        <Typography color='White' align='center'>Meta:</Typography>
                    </Box>
                </Stack>
            </Box>    
        </Grid>
        </Stack>
      </Box>
    </Grid> 
  )
}
export default InfoProcess


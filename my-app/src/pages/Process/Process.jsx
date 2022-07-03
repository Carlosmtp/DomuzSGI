
import { Box, Grid, Typography } from '@mui/material'
//import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import ImageButton from '../../components/ImageButton'
import { AppContext } from '../../context/AppContext'

const Process = ( {title, description, id }) => {
  
  const { processes, setLastObject } = useContext(AppContext)
  let navigate = useNavigate();

  return (
    <Grid item xs={12} sm={3} >    
      <Box bgcolor="white" sx={{ borderRadius: '16px' }}>
        <Grid container>                 
            <ImageButton image={"https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg"} title={title} actionFunction={() => {
                                    setLastObject(processes[id])
                                    navigate("/app/procesos/"+processes[id].name)
                                  }}/>
          
          <Grid item pt={2} pb={2} pl={3} pr={3} align="left">
            <Typography variant="body2" color="black" align="justify" height={{xs:40, sm:60}}>
              { description }
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
export default Process


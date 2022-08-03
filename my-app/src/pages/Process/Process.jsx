
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
      <Box bgcolor="white" sx={{ boxShadow: 3 }}>
        <Grid container>                 
            <ImageButton image={"https://picsum.photos/30"+id} title={title} actionFunction={() => {
                                    setLastObject(processes[id])
                                    navigate("/app/procesos/"+processes[id].name)
                                  }}/>
          
          <Grid item pt={{xs:1, sm:2}} pb={{xs:1, sm:2}} pl={{xs:2, sm:3}} pr={{xs:2, sm:3}} align="left" >
            <Typography variant="body2" color="black" align="justify" height={{xs:40, sm:80}} widht={{xs:100, sm:200}}>
              { description.substr(0, 60) }...
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


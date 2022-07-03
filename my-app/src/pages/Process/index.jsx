import { Grid } from '@mui/material';
import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react'
import Processes from './Process'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router';
import General from './General'

const Process = () => {
    const { id } = useParams();
    const { login, processes } = useContext(AppContext)
    switch (id) {
      case "inicio":
        return (
          <Box>
            <Typography color='default' variant='h6' align='center' pb={{xs:3, sm:0}}>
            Interfaz de Menu: {login}
            </Typography>
            <Grid container spacing={3} p={{xs:0, sm:3}}>
            
              {processes.map((e,i) =>
                <Processes title={e.name} description={e.description} key={e.id}  id={i}/>)}
    
            </Grid> 
          </Box>
        )
    
      default:
        return <General title={id}/>
    }
    
}

export default Process
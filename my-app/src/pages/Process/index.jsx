import { Grid } from '@mui/material';
import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react'
import Processes from './Process'
import { AppContext } from '../../context/AppContext'
const Process = () => {

    //let navigate = useNavigate();
    const { login, processes } = useContext(AppContext)

    return (
      <Box>
        <Typography color='default' variant='h6' align='center' pb={{xs:3, sm:0}}>
        Interfaz de Menu: {login}
        </Typography>
        <Grid container spacing={3} p={{xs:0, sm:3}}>
        
          {processes.map((e) =>
            <Processes title={e.name} description={e.description} key={e.id} />)}

        </Grid> 
      </Box>
    )
}

export default Process
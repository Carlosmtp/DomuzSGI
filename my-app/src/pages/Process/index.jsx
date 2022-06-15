import { Grid } from '@mui/material';
import { Stack, Box } from '@mui/material';
import React from 'react'
//import { useNavigate } from 'react-router';
import Processes from './Process'
//import { AppContext } from '../../context/AppContext'

const Process = () => {

    //let navigate = useNavigate();

    //const { login } = useContext(AppContext)
    return (
      <Box bgcolor="background.default" p={3}>
        {/*<Typography color='default' variant='h6' align='center'>
        Interfaz de Menu: {login}
        </Typography>*/}
        <Grid container>
          <Grid>
            <Stack direction={{ xs: 'column', sm: 'row' }} p={{ xs: 1, sm: 2 }} spacing={3} justifyContent="space-between">
              <Processes />
              <Processes />
              <Processes />
              <Processes />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} p={{ xs: 1, sm: 2 }} spacing={3} justifyContent="space-between">
              <Processes />
              <Processes />
              <Processes />
              <Processes />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} p={{ xs: 1, sm: 2 }} spacing={3} justifyContent="space-between">
              <Processes />
              <Processes />
              <Processes />
              <Processes />
            </Stack>
          </Grid>
        </Grid> 
      </Box>
    )
}

export default Process
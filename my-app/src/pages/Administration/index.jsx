import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react'
//import { useNavigate } from 'react-router';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { deepPurple, red, teal, orange, lightBlue, indigo } from '@mui/material/colors'
import CardAdmin from './CardAdmin';

const Administration = () => {

    //let navigate = useNavigate();

    //const { login } = useContext(AppContext)
    return (
      <Box>
        <Typography variant="h4">
          Administración
        </ Typography>
        <Grid container spacing={3} p={{xs:0, sm:3}}>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={PersonIcon} color={red} title='PERSONAS' created='0'/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={BusinessCenterIcon} color={orange} title='PROYECTOS' created='0'/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={PersonIcon} color={teal} title='PROYECTOS' created='0'/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={PersonIcon} color={lightBlue} title='PROYECTOS' created='0'/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={PersonIcon} color={deepPurple} title='PROYECTOS' created='0'/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardAdmin Icon={PersonIcon} color={indigo} title='PROYECTOS' created='0'/>
          </Grid>
        </Grid>        
      </ Box>
    )
}

export default Administration
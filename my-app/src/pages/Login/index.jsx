import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import logo from '../../assets/logodomuz.png';


import FormLogin from './FormLogin';
import { Paper, Box, Grid, Typography } from '@mui/material';
const Login = () => {

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/12/21/12/08/consulting-3031678_1280.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'secondary',
            /*(t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],*/
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              py: 8,
              px: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            bgcolor="background.default"
          >
            <Box
              component="img"
                sx={{
                   height: 150,
                   margin: 5
                   
                    }}
                alt='Domuz'
                src={logo}
            />
            <Typography variant='h5' pb ={4} color='info'>Sistema de Gestión Integral</Typography>
            <FormLogin />
          </Box>
        </Grid>
      </Grid>
  );
}

export default Login
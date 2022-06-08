import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logodomuz.png';


import FormLogin from './FormLogin';
import Darkmode from '../../components/Darkmode';

export default function Login() {
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: '#272727'} }>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
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
            <Typography variant='h5' color='info'>Sistema de Gestión Integral</Typography>
            <FormLogin />
          </Box>
        </Grid>
      </Grid>
  );
}
import React, { useContext, useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Navbar } from './Navbar.jsx';
import { Outlet, useNavigate } from 'react-router';
import { AppContext } from '../../context/AppContext.jsx';
import { LinearProgress } from '@mui/material';

const AppBar = () => {
  const { login } = useContext(AppContext)

  const [loading, setLoading] = useState(true)

  let navigate = useNavigate();   

  useEffect(()=>{
    if(login.name === undefined){
        navigate('/')
    }else{
      setLoading(false)
    }
    //quitar si algo se daña
  },[navigate,login.name])

  if(loading){
      return (
      <LinearProgress  />
  )}
  else{
    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar/>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
            bgcolor='background.default'
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Box bgcolor='background.paper' p={{xs:2, sm:4}} sx={{ borderRadius: '16px', border: 1, borderColor: 'background.light', boxShadow: 4 }}>
                <Outlet />
              </Box>
            </Container>
          </Box>
        </Box>
    );
        }
}

export default AppBar
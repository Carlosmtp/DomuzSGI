import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Navbar } from './Navbar.jsx';
import { Outlet } from 'react-router';

const AppBar = () => {

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
            <Box bgcolor='background.paper' p={{xs:2, sm:4}} sx={{ borderRadius: '16px', border: 1, borderColor: 'background.light' }}>
              <Outlet />
            </Box>
          </Container>
        </Box>
      </Box>
  );
}

export default AppBar
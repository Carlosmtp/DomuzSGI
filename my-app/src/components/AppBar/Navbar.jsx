import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import { mainListItems } from './ListItems.jsx';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import Darkmode from '../Darkmode.jsx';
import Processes from './Processes.jsx';
import SecondaryListItems from './SecondaryListItems.jsx';
import Profile from './Profile.jsx';
import { Avatar } from '@mui/material';

import logo from "../../assets/logosmall.png";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

export const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>   
      <AppBar position="absolute" open={open}>
        <Box bgcolor="primary.main">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: 'white', width: 50, height: 50, "&:hover": {cursor: "pointer"}  }} alt="Logo Domuz" src={logo} onClick={()=> window.open("https://www.domuz.com.co/nosotros/", "_blank")}/>
            <Typography
              pl={2}
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, display: { xs: "none", sm:"block" } }}              
            >
              Sistema de Gestión Integral
            </Typography>
            <Typography
              pl={2}
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, display: { xs: "block", sm:"none" } }}              
            >
              SGI
            </Typography>
            {/*
            <IconButton color="inherit">              
              <Badge badgeContent={4} color="info">
                <NotificationsIcon />
              </Badge>
            </IconButton>
              */}
            
            <Profile />
            
          </Toolbar>
        </Box>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <Box bgcolor="background.paper">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
        <IconButton onClick={toggleDrawer}> 
          <ChevronLeftIcon />
        </IconButton>
        </Toolbar>
        
        <Divider />
        <List component="nav">
          <Darkmode />
          <Processes />
          {
            /*
              <Divider sx={{ my: 1 }} />
              {mainListItems}            
            */
          }
          <Divider sx={{ my: 1 }} />
          <SecondaryListItems />
        </List>
        </Box>
      </Drawer>
    </Box>
  )
}


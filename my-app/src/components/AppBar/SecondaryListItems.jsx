import { Box, Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';

import React from 'react'
import { useNavigate } from 'react-router';

const SecondaryListItems = () => {
    let navigate = useNavigate()
  return (
    <Box>
       {/* <ListSubheader component="div" inset>
        Administración
        </ListSubheader>
        <Divider sx={{ my: 1 }} />*/}
        <ListItemButton onClick={()=>navigate("/app/administracion")}>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Administración" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItemButton>
    </Box>
  )
}

export default SecondaryListItems
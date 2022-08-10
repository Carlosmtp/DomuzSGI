import { Box, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';

import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';

const SecondaryListItems = () => {
  const { login } = useContext(AppContext)

  const [show, setShow] = useState(<Box />)

  useEffect(()=>{    
      if(login.rol === 1 || login.rol === 2){
        showAdmin()
    }
  },[])

  const showAdmin = () => {
    setShow(
      <Tooltip title='Administración' placement="right">
          <ListItemButton onClick={()=>navigate("/app/administracion")}>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Administración" />
          </ListItemButton>
        </Tooltip>
    )
  }

  let navigate = useNavigate()
  return (
    <Box>
       {/* <ListSubheader component="div" inset>
        Administración
        </ListSubheader>
        <Divider sx={{ my: 1 }} />*/}
        {show}
        <Tooltip title='Reportes' placement="right">
          <ListItemButton onClick={()=>navigate('/app/ver/reportes')}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Tooltip>
    </Box>
  )
}

export default SecondaryListItems
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Processes = () => {
  let navigate = useNavigate() 
  return (
    <ListItemButton onClick={()=>navigate("/app/procesos")}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Procesos" />
    </ListItemButton>
  )
}
export default Processes
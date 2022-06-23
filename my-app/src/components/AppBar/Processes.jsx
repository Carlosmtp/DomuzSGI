import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Processes = () => {
  let navigate = useNavigate() 
  return (
    <ListItemButton onClick={()=>navigate("/app/procesos")}>
      <ListItemIcon>
        <GridViewIcon />
      </ListItemIcon>
      <ListItemText primary="Procesos" />
    </ListItemButton>
  )
}
export default Processes
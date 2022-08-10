import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Processes = () => {
  let navigate = useNavigate() 
  return (
    <Tooltip title='Procesos' placement="right">
      <ListItemButton onClick={()=>navigate("/app/procesos/inicio")}>
        <ListItemIcon>
          <GridViewIcon />
        </ListItemIcon>
        <ListItemText primary="Procesos" />
      </ListItemButton>
    </Tooltip>
  )
}
export default Processes
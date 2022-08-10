import { DarkMode } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Darkmode = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext)
  return (
    <Tooltip title='Cambiar modo' placement="right">
      <ListItemButton onClick={e=>setIsDarkTheme(!isDarkTheme)}>
        <ListItemIcon>
          <DarkMode />
        </ListItemIcon>
        <ListItemText primary="Cambiar modo" />
      </ListItemButton>
    </Tooltip>
  )
}

export default Darkmode
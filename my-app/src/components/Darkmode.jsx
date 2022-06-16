import { DarkMode } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Darkmode = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext)
  return (
    <ListItemButton onClick={e=>setIsDarkTheme(!isDarkTheme)}>
      <ListItemIcon>
        <DarkMode />
      </ListItemIcon>
      <ListItemText primary="Cambiar modo" />
    </ListItemButton>
  )
}

export default Darkmode
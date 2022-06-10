import { DarkMode } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Darkmode = () => {
  const { mode, setMode } = useContext(AppContext)
  return (
    <ListItemButton onClick={e=>setMode(mode === "light" ? "dark" : "light")}>
      <ListItemIcon>
        <DarkMode />
      </ListItemIcon>
      <ListItemText primary="Cambiar modo" />
    </ListItemButton>
  )
}

export default Darkmode
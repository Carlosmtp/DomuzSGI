import React from 'react'
import { ModeNight } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, Switch } from '@mui/material'


export const Darkmode = () => {
    return (
    <ListItemButton>
              <ListItemIcon>
                    <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
    </ListItemButton> 
  )
}

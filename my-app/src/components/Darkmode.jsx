import React from 'react'
import { ModeNight } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, Switch } from '@mui/material'

import { useContext } from "react";

export const Darkmode = () => {
    return (
      <div>
          {/*<ListItemButton>
              <ListItemIcon>
                    <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
    </ListItemButton> */}
      </div>
  )
}

import { Add } from '@mui/icons-material'
import { Fab, Tooltip } from '@mui/material'
import React from 'react'

const AddPhoto = () => {
  return (
    <Tooltip 
      title="Add photo" 
      sx={{position:"fixed", 
          bottom:20, 
          left:{xs:"calc(45%)", md:"calc(5%)"}}}>
        <Fab color="primary" aria-label="add">
            <Add/>
        </Fab>
    </Tooltip>
  )
}

export default AddPhoto
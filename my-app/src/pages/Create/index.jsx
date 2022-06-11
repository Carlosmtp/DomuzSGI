import { Box, Typography } from '@mui/material'
import React from 'react'
import User from './User'

const Create = () => {
  return (
    <Box bgcolor='background.default' p={{xs:2, sm:4}} sx={{ borderRadius: '16px' }}>
      <Typography variant="h4">
        Crear {"<Lo que sea>"}
      </ Typography>
      <User />

    </Box>
  )
}

export default Create
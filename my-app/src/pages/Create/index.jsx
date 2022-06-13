import { Box, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'

const Create = () => {
  return (
    <Box bgcolor='background.default' p={{xs:2, sm:4}} sx={{ borderRadius: '16px' }}>
      <Typography variant="h4">
        Crear {"<Lo que sea>"}
      </ Typography>
      <Outlet />

    </Box>
  )
}

export default Create
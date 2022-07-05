import { Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import User from './User'

const routes = (id) => {
  switch (id) {
    case "usuario":
      return <User />
    default:
      break;
  }
}

const Update = () => {

  const { id } = useParams();

  return (
    <Box>
      <Typography variant="h4">
        Actualizar {id}
      </ Typography>
      <Box pt={3} pl={3} pr={3}>
        {/*<Outlet />*/}
        {routes(id)}
      </Box>
    </Box>
  )
}

export default Update
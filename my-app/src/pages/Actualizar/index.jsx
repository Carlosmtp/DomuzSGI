import { Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import ProcessIndicator from './ProcessIndicator'
import User from './User'

let nombre = (id) => {
  switch (id) {
    case "indicador-de-proceso":
      return "indicador de proceso"
    case "usuario":
      return "usuario"

    default:
      break;
  }
}

const routes = (id) => {
  switch (id) {
    case "indicador-de-proceso":
      return <ProcessIndicator />
    case "usuario":
      return <User />
    default:
      break;
  }
}

const Actualizar = () => {
  
  const { id } = useParams();

  return (
    <Box>
      <Typography variant="h4">
        Actualizar {nombre(id)}
      </ Typography>
      <Box pt={3} pl={3} pr={3}>
        {routes(id)}
      </Box>
    </Box>
  )
}

export default Actualizar
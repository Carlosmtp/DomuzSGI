import { Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import ProcessIndicator from './ProcessIndicator'
import User from './User'
import Process from './Process'

let nombre = (id) => {
  switch (id) {
    case "indicador-de-proceso":
      return "indicador de proceso"
    case "usuario":
      return "usuario"
    case "proceso":
      return "proceso"
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
    case "proceso":
      return <Process />
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
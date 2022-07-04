import { Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import ProcessIndicator from './ProcessIndicator'

let nombre = (id) => {
  switch (id) {
    case "indicador":
      return "indicador de proceso" 
    default:
      break;
  }
}

const routes = (id) => {
  switch (id) {
    case "indicador":
      return <ProcessIndicator /> 
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
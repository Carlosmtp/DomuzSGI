import { Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import ProcessIndicator from './ProcessIndicator'
import User from './User'
import Process from './Process'
import Objective from './Objective'
import ActionPlan from './ActionPlan'
import Company from './Companies'

let nombre = (id) => {
  switch (id) {
    case "indicador-de-proceso":
      return "indicador de proceso"
    case "usuario":
      return "usuario"
    case "proceso":
      return "proceso"
    case "objetivo":
      return "objetivo"
    case "plan":
      return "plan de acción"
    case "empresa":
      return "empresa"  
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
    case "objetivo":
      return <Objective />
    case "plan":
      return <ActionPlan />
    case "empresa":
      return <Company />
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
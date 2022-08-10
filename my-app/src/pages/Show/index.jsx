import { Box, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router';
import Objectives from './Objectives';
import User from './User'
import Process from './Process'
import Reports from './Reports'
import ActionPlan from './ActionPlan'
import Companies from './Companies'

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
        return "empresas"
    case "reportes":
        return"reportes" 
    default:
      break;
  }
}

const routes = (id) => {
    switch (id) {
      case "usuarios":
        return <User /> 
      case "objetivos":
        return <Objectives /> 
      case "procesos":
        return <Process />
      case "reportes":
        return <Reports /> 
      case "plan":
        return <ActionPlan /> 
      case "empresa":
          return <Companies /> 
      default:
        break;
    }
  }

const Show = () => {
  const { id } = useParams();

  return (
    <Box>
      <Typography variant="h4">
        Ver {nombre(id)}
      </ Typography>
      <Box pt={3} pl={3} pr={3}>
        {routes(id)}
      </Box>
    </Box>
  )
}

export default Show
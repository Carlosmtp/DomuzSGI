import { Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import Company from './Companies'
import Objective from './Objective'
import Process from './Process'
import Proyect from './Proyect'
import User from './User'
import ActionPlan from './ActionPlan'

let nombre = (id) => {
  switch (id) {
    case "usuario":
      return "usuario"
    case "proceso":
      return "proceso"
    case "proyecto":
      return "proyecto"
    case "empresa":
      return "empresa"
    case "objetivo":
      return "objetivo"
    case "plan":
      return "plan de acción" 
    default:
      break;
  }
}

const routes = (id) => {
  switch (id) {
    case "usuario":
      return <User />
    case "proceso":
      return <Process />
    case "proyecto":
      return <Proyect />
    case "empresa":
      return <Company />
    case "objetivo":
      return <Objective />
    case "plan":
      return <ActionPlan />  
    default:
      break;
  }
}

const Create = () => {

  const { id } = useParams();

  return (
    <Box>
      <Typography variant="h4">
        Crear {nombre(id)}
      </ Typography>
      <Box pt={3} pl={3} pr={3}>
        {routes(id)}
      </Box>
    </Box>
  )
}

export default Create
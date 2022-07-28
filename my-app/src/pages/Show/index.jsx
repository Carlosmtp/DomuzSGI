import { Box, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router';
import Objectives from './Objectives';
import User from './User'
import Process from './Process'

const routes = (id) => {
    switch (id) {
      case "usuarios":
        return <User /> 
      case "objetivos":
        return <Objectives /> 
      case "procesos":
        return <Process /> 
      default:
        break;
    }
  }

const Show = () => {
  const { id } = useParams();

  return (
    <Box>
      <Typography variant="h4">
        Ver {id}
      </ Typography>
      <Box pt={3} pl={3} pr={3}>
        {routes(id)}
      </Box>
    </Box>
  )
}

export default Show
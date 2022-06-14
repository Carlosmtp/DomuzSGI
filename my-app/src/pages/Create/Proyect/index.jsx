
import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormProyect from './FormProyect'

const Proyect = () => {

  const [name,setName] = useState('')
  const [proyectId,setProyectId] = useState('')
  const [users,setUsers] = useState('')
  const [companies,setCompanies] = useState('')
  const [projectStates,setProjectStates] = useState('')
  const [portfolios,setPortfolios] = useState('')
  const [longitude,setLongitude] = useState('')
  const [latitude,setLatitude] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //CONEXIÓN CON LA BD.
                   {/*portfolios={setPortfolios} */}
                   console.log( name,proyectId,users,companies,projectStates,portfolios,longitude,latitude )
  }

  return (
    <Grid container  component="form" spacing={4} p={3} onSubmit={handleSubmit}>
      <Grid item xs={12}><Typography variant="h6" color='secondary'>Datos del Proyecto</Typography>
      <FormProyect name={name}
                    setName={setName}
                    proyectId={proyectId}
                    setProyectId={setProyectId}
                    users={users}
                    setUsers={setUsers}
                    companies={companies}
                    setCompanies={setCompanies}
                    projectStates={projectStates}
                    setProjectStates={setProjectStates}
                    portfolios={portfolios}
                    setPortfolios={setPortfolios}
                    longitude={longitude}
                    setLongitude={setLongitude}
                    latitude={latitude}
                    setLatitude={setLatitude}
                                  />
      </Grid>          
      <Button variant="contained" color='secondary' type="submit">Crear Proceso</Button>
    </Grid>
  )
}

export default Proyect
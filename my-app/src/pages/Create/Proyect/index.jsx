
import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormProyect from './FormProyect'

const Proyect = () => {

  const [name,setName] = useState('')
  const [proyectId,setProyectId] = useState('')
  const [leader,setLeader] = useState('')
  const [companies,setCompanies] = useState('')
  const [projectStates,setProjectStates] = useState('')
  const [portfolios,setPortfolios] = useState('')
  const [longitude,setLongitude] = useState('')
  const [latitude,setLatitude] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //CONEXIÓN CON LA BD.
      console.log( name,proyectId,leader,companies,projectStates,portfolios,longitude,latitude )
  }

  return (
    <Grid container  component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Grid item xs={12}>
      <Typography variant="h6" pb={3} color='secondary'>Datos del Proyecto</Typography>  
        <FormProyect name={name}
                      setName={setName}
                      proyectId={proyectId}
                      setProyectId={setProyectId}
                      leader={leader}
                      setLeader={setLeader}
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
      <Grid item justify="center" align="right" xs={12}>       
        <Button variant="contained" color='secondary' type="submit">Crear Proyecto</Button>
      </Grid>
    </Grid>
  )
}

export default Proyect
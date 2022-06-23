
import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormCompany from './FormCompany'

const Company = () => {

  const [name,setName] = useState('')
  const [NIT,setNIT] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //CONEXIÓN CON LA BD.
      console.log( name,NIT)
  }

  return (
    <Grid container  component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Grid item xs={12} sm={12}>
      <Typography variant="h6" pb={3} color='secondary'>Datos del Proyecto</Typography>  
        <FormCompany name={name}
                      setName={setName}
                      NIT={NIT}
                      setNIT={setNIT}                      
                                    />
      </Grid>  
      <Grid item justify="center" align="right" xs={12}>       
        <Button variant="contained" color='secondary' type="submit">Crear Empresa</Button>
      </Grid>
    </Grid>
  )
}

export default Company
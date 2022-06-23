
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormProcess from './FormProcess'
import FormIndicator from './FormIndicator'

const Process = () => {

  const [nameProcess,setNameProcess] = useState('')
  const [descriptionProcess,setDescriptionProcess] = useState('')
  const [efficiency,setEfficiency] = useState('')

  const [nameIndicator,setNameIndicator] = useState('')
  const [objective,setObjective] = useState('')
  const [periodicity,setPeriodicity] = useState('')
  const [weight,setWeight] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //CONEXIÓN CON LA BD.
    console.log(nameProcess)
  }

  return (
    <Grid container  component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" pb={3} color='secondary'>Datos del Proceso</Typography>
        <FormProcess name={nameProcess}
                     setName={setNameProcess}
                     description={descriptionProcess}
                     setDescription={setDescriptionProcess}
                     efficiency={efficiency}
                     setEfficiency={setEfficiency}
                       />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box p={2} sx={{ border: 2, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent' }}>  
          <Typography variant="h6" pb={3} color='secondary'>Indicador</Typography>            
            <FormIndicator
                          name={nameIndicator}
                          setName={setNameIndicator}
                          objective={objective}
                          setObjective={setObjective}
                          periodicity={periodicity}                        
                          setPeriodicity={setPeriodicity}
                          weight={weight}                         
                          setWeight={setWeight}                                        
                          />
          <Grid item justify="center" align="right" xs={12} pt={3}>       
            <Button variant="contained" color='secondary' type="submit">Añadir Indicador</Button>
          </Grid>
        </Box>
      </Grid>

      

      <Grid item justify="center" align="right" xs={12}>         
            <Button variant="contained" color='secondary' type="submit">Crear Proceso</Button>
      </Grid>
    </Grid>
  )
}

export default Process
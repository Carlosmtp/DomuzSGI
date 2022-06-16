
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormProcess from './FormProcess'
import FormIndicator from '../Indicator/FormIndicator'

const Process = () => {

  const [nameProcess,setNameProcess] = useState('')
  const [descriptionProcess,setDescriptionProcess] = useState('')

  const [nameIndicator,setNameIndicator] = useState('')
  const [descriptionIndicator,setDescriptionIndicator] = useState('')
  const [periodicity,setPeriodicity] = useState('')
  const [weight,setWeight] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //CONEXIÓN CON LA BD.
    console.log(nameProcess,descriptionProcess, nameIndicator, descriptionIndicator, periodicity, weight )
  }

  return (
    <Grid container  component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" pb={3} color='secondary'>Datos del Proceso</Typography>
        <FormProcess name={nameProcess}
                     setName={setNameProcess}
                     description={descriptionProcess}
                     setDescription={setDescriptionProcess}
                       />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box p={4} sx={{ border: 2, borderRadius: '16px', borderColor: 'secondary.main' }}>          
        <Typography variant="h6" pb={3} color='secondary'>Indicador</Typography>            
          <FormIndicator
                        name={nameIndicator}
                        setName={setNameIndicator}
                        description={descriptionIndicator}
                        setDescription={setDescriptionIndicator}
                        periodicity={periodicity}                        
                        setPeriodicity={setPeriodicity}
                        weight={weight}                         
                        setWeight={setWeight}                                        
                        />
        </Box>
      </Grid>
      <Grid item justify="center" align="right" xs={12}>         
            <Button variant="contained" color='secondary' type="submit">Crear Proceso</Button>
      </Grid>
    </Grid>
  )
}

export default Process
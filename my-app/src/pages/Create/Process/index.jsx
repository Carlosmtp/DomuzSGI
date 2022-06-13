
import { Box, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import FormProcess from './FormProcess'
import FormIndicator from '../Indicator/FormIndicator'

const User = () => {

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
    <Grid container  component="form" spacing={4} p={3} onSubmit={handleSubmit}>
      <Grid item xs={12} sm={6}>
        <Box p={4}>
        <FormProcess name={nameProcess}
                     setName={setNameProcess}
                     description={descriptionProcess}
                     setDescription={setDescriptionProcess}
                       />
        </Box>            
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor='gray' p={4} sx={{ borderRadius: '16px' }}>
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
        <Box p={4} display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" color='secondary' type="submit">Crear Proceso</Button>   
        </Box> 
        </Grid>
    </Grid>
  )
}

export default User
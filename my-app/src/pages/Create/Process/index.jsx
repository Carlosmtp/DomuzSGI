
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormProcess from './FormProcess'
import FormIndicator from './FormIndicator'
import axios from 'axios'

const Process = () => {

  const [nameProcess,setNameProcess] = useState('')
  const [descriptionProcess,setDescriptionProcess] = useState('')
  const [efficiency,setEfficiency] = useState('')

  const [nameIndicator,setNameIndicator] = useState('')
  const [objective,setObjective] = useState('')
  const [periodicity,setPeriodicity] = useState('')
  const [weight,setWeight] = useState('')
  const [inCharge,setInCharge] = useState('')
  const [user,setUser] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    //axios.post("http://localhost:6464/create/proccess",
    console.log(
    {
      name: nameProcess,
      description: descriptionProcess,
      efficiency: 0.2,
      indicators: [
        {
          name:nameIndicator,
          objetive: objective,
          periodicity: "semanalmente",
          in_charge: inCharge,
          weight: 0.4,
          userId:1
        }
      ]
    }
    )//.then((res) => {console.log(res)})
    
  }

  return (
    <Grid container  component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Datos del Proceso</Typography>
        <FormProcess name={nameProcess}
                     setName={setNameProcess}
                     description={descriptionProcess}
                     setDescription={setDescriptionProcess}
                     efficiency={efficiency}
                     setEfficiency={setEfficiency}
                       />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box p={2} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent', boxShadow: 3}}>  
          <Typography variant="h6" pb={3} color='secondary'>Indicador</Typography>            
            <Box p={2} sx={{ border: 1, borderRadius: '16px', borderColor: 'secondary.main', }}> 
              <FormIndicator
                          name={nameIndicator}
                          setName={setNameIndicator}
                          objective={objective}
                          setObjective={setObjective}
                          periodicity={periodicity}                        
                          setPeriodicity={setPeriodicity}
                          weight={weight}                         
                          setWeight={setWeight}
                          inCharge={inCharge}                         
                          setInCharge={setInCharge}
                          user={user}                         
                          setUser={setUser}                                             
                          />
          </Box>
            <Grid item justify="center" align="right" xs={12} pt={3}>       
              <Button variant="contained" color='secondary'>Añadir Indicador</Button>
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

import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormObjective from './FormObjective'
import FormObjIndicator from './FormObjIndicator'
import FormInitiative from './FormInitiative'

const Objective = () => {

  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [perspective,setPerspective] = useState('')

  const [nameInit,setNameInit] = useState('')
  const [descriptionInit ,setDescriptionInit] = useState('')

  const [nameInd,setNameInd] = useState('')
  const [goal,setGoal] = useState('')
  const [periodicity,setPeriodicity]= useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //CONEXIÓN CON LA BD.
      console.log( name,description,perspective)
  }

  return (
    <Grid container component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Datos del Objetivo</Typography>  
        <FormObjective name={name}
                        setName={setName}
                        description={description}
                        setDescription={setDescription} 
                        perspective={perspective}
                        setPerspective={setPerspective}                     
                                    />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box p={2} sx={{ border: 2, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent' }}>  
          <Typography variant="h6" pb={3} color='secondary'>Iniciativas</Typography>  
          <FormInitiative nameInit={nameInit}
                          setNameInit={setNameInit}
                          descriptionInit={descriptionInit}
                          setDescriptionInit={setDescriptionInit}                    
                          />
          <Grid item justify="center" align="right" xs={12} pt={3}>       
            <Button variant="contained" color='secondary' type="submit">Añadir Iniciativa</Button>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box p={2} sx={{ border: 2, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent' }}>  
          <Typography variant="h6" pb={3} color='secondary'>Indicadores </Typography>  
          <FormObjIndicator nameInd={nameInd}
                            setNameInd={setNameInd}
                            goal={goal}
                            setGoal={setGoal} 
                            periodicity={periodicity}
                            setPeriodicity={setPeriodicity}                     
                            />
          <Grid item justify="center" align="right" xs={12} pt={3}>       
            <Button variant="contained" color='secondary' type="submit">Añadir Indicador</Button>
          </Grid>
        </Box>
      </Grid>

      <Grid item justify="center" align="right" xs={12}>       
        <Button variant="contained" color='secondary' type="submit">Crear Objetivo</Button>
      </Grid>
    </Grid>
  )
}

export default Objective
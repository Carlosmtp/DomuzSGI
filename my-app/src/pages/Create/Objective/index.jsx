
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormObjective from './FormObjective'
import FormObjIndicator from './FormObjIndicator'
import FormInitiative from './FormInitiative'
import CustomTable from '../../../components/Forms/CustomTable'

const Objective = () => {

  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [perspective,setPerspective] = useState('')

  const [nameInit,setNameInit] = useState('')
  const [descriptionInit ,setDescriptionInit] = useState('')

  const [nameInd,setNameInd] = useState('')
  const [goal,setGoal] = useState('')
  const [periodicity,setPeriodicity]= useState('')

  const [initiatives,setInitiatives] = useState([])
  const [indicator,setIndicator] = useState([])

  const addRowInit = (e) => { 
    let aux = initiatives.concat({
      id:"",
      name:nameInit,
      description:descriptionInit
    } )
    for (let i = 0; i < aux.length; i++) {
      aux[i].id = i + 1;      
    }
    setInitiatives(aux)
    console.log("Table: ",initiatives)
  }

  const addRowInd = (e) => { 
    let aux = initiatives.concat({
      id:"",
      name:nameInd,
      goal:goal,
      periodicity:periodicity
    } )
    for (let i = 0; i < aux.length; i++) {
      aux[i].id = i + 1;      
    }
    setIndicator(aux)
    console.log("Table: ",indicator)
  }

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
        <Box p={2} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent' }}>
          <Typography variant="h6" pb={3} color='secondary'>Iniciativas</Typography>  
          <FormInitiative name={nameInit}
                          setName={setNameInit}
                          description={descriptionInit}
                          setDescription={setDescriptionInit}                    
                          />
          <Grid item justify="center" align="center" xs={12} p={2}>       
            <Button variant="contained" color='secondary' onClick={addRowInit}>Añadir Iniciativa</Button>
          </Grid>
          <CustomTable rows={initiatives} setRows={setInitiatives} columns={
                [
                  { field: 'id', headerName: 'ID', width: 25 },
                  { field: 'name', headerName: 'Nombre', width: 140 },
                  { field: 'description', headerName: 'Descripción', width: 130 }]
              }/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box p={2} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent' }}>  
          <Typography variant="h6" pb={3} color='secondary'>Indicadores </Typography>  
          <FormObjIndicator name={nameInd}
                            setName={setNameInd}
                            goal={goal}
                            setGoal={setGoal} 
                            periodicity={periodicity}
                            setPeriodicity={setPeriodicity}                     
                            />
          <Grid item justify="center" align="center" xs={12} p={2}>      
            <Button variant="contained" color='secondary' onClick={addRowInd}>Añadir Indicador</Button>
          </Grid>
          <CustomTable rows={indicator} setRows={setIndicator} columns={
                [
                  { field: 'id', headerName: 'ID', width: 15 },
                  { field: 'name', headerName: 'Nombre', width: 100 },
                  { field: 'goal', headerName: 'Meta', width: 70 },
                  { field: 'periodicity', headerName: 'Periodicidad', width: 100 }]
              }/>
        </Box>
      </Grid>

      <Grid item justify="center" align="right" xs={12}>       
        <Button variant="contained" color='secondary' type="submit">Crear Objetivo</Button>
      </Grid>
    </Grid>
  )
}

export default Objective
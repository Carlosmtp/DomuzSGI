
import { Alert, Box, Button, Grid, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormObjective from './FormObjective'
import FormObjIndicator from './FormObjIndicator'
import FormInitiative from './FormInitiative'
import CustomTable from '../../../components/Forms/CustomTable'
import axios from 'axios'

const Objective = () => {

  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [perspective,setPerspective] = useState('')

  const [nameInit,setNameInit] = useState('')
  const [descriptionInit ,setDescriptionInit] = useState('')

  const [nameInd,setNameInd] = useState('')
  const [goal,setGoal] = useState('0.5')
  const [periodicity,setPeriodicity]= useState('')

  const [initiatives,setInitiatives] = useState([])
  const [indicators,setIndicators] = useState([])

  const addRowInit = (e) => {
    if(nameInit==='' || descriptionInit===''){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('No pueden haber campos en blanco para añadir una iniciativa.')
    }else{
      let aux = initiatives.concat({
        id:"",
        name:nameInit,
        description:descriptionInit
      } )
      for (let i = 0; i < aux.length; i++) {
        aux[i].id = i + 1;      
      }
      setInitiatives(aux)
      setNameInit('')
      setDescriptionInit('')
    }
    
  }

  const addRowInd = (e) => {
    if(nameInd==='' || periodicity===''){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('No pueden haber campos en blanco para añadir un indicador.')
    }else{
      let aux = indicators.concat({
        id:"",
        name:nameInd,
        goal:goal,
        periodicity:periodicity
      } )
      for (let i = 0; i < aux.length; i++) {
        aux[i].id = i + 1;      
      }
      setIndicators(aux)
      setNameInd('')
      setPeriodicity('')
    }    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(initiatives.length===0 || indicators.length===0){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('Debe existir al menos 1 iniciativa y 1 indicador para crear el objetivo estratégico.')
    }else{
      let auxInit = []
      for (let i = 0; i < initiatives.length; i++) {
        auxInit = auxInit.concat({
          name : initiatives[i].name,
          description : initiatives[i].description
        })      
      }
  
      let auxInd = []
      for (let i = 0; i < indicators.length; i++) {
        auxInd = auxInd.concat({
          name : indicators[i].name,
          goal : indicators[i].goal,
          periodicity : indicators[i].periodicity
        })      
      }
      //CONEXIÓN CON LA BD
      //console.log(
      axios.post("http://localhost:6464/create/objective",      
        {
          name:name,
          description:description,
          prespectiveId:perspective.id,
          indicators:auxInd,
          initiatives:auxInit
        })
      setOpen(true)
      setSeverity("success")
      setValidationMsg(name+' ha sido creado exitosamente.')
      setName('')
      setDescription('')
      setPerspective('')
      setIndicators([])
      setInitiatives([])
    }    
  }

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('error');
  const [validationMsg, setValidationMsg] = useState('');
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}>
              {validationMsg}
        </Alert>
      </Snackbar>
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
        <Box p={2} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent', boxShadow: 2 }}>
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
        <Box p={2} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent', boxShadow: 2 }}>  
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
          <CustomTable rows={indicators} setRows={setIndicators} columns={
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
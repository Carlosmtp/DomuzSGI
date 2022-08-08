
import { Alert, Box, Button, Grid, Snackbar, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import FormProcess from './FormProcess'
import FormIndicator from './FormIndicator'
import axios from 'axios'
import CustomTable from '../../../components/Forms/CustomTable'
import { AppContext } from '../../../context/AppContext'

const Process = () => {

  const { setProcesses } = useContext(AppContext)
  const [nameProcess,setNameProcess] = useState('')
  const [descriptionProcess,setDescriptionProcess] = useState('')
  const [goal,setGoal] = useState(50)

  const [nameIndicator,setNameIndicator] = useState('')
  const [objective,setObjective] = useState('')
  const [periodicity,setPeriodicity] = useState('')
  const [inCharge,setInCharge] = useState('')
  const [user,setUser] = useState('')

  const [indicators, setIndicators] = useState([])

  const addRow = (e) => {
    if(nameIndicator==='' || objective==='' || periodicity==='' || inCharge==='' || user===''){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('No pueden haber campos en blanco para añadir un indicador.')
    }else{
      let aux = indicators.concat({
          id:"",
          name:nameIndicator,
          objetive: objective,
          periodicityId: periodicity,
          in_charge: inCharge,
          user:user.label,
          userId:user.id
        } )
        for (let i = 0; i < aux.length; i++) {
          aux[i].id = i + 1;      
        }
        setIndicators(aux)
        setNameIndicator('')
        setObjective('')
        setPeriodicity('')
        setInCharge('')
        setUser('')
    }
    
    //console.log("Table: ",indicators)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(indicators.length===0){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('Debe existir al menos 1 indicador para crear el proceso.')
    }else{
      let aux = []
      for (let i = 0; i < indicators.length; i++) {
        aux = aux.concat({
            name : indicators[i].name,
            objetive : indicators[i].objetive,
            periodicityId : indicators[i].periodicityId,
            in_charge : indicators[i].in_charge,
            userId : indicators[i].userId
          }
        )      
      }
      let obj = {
        name: nameProcess,
        description: descriptionProcess,
        goal: goal/100,
        indicators: aux
      }
      console.log(obj)
      try {
        axios.post("create/process",obj).then((res)=>{
          console.log(res)
          setProcesses([])
          setOpen(true)
          setSeverity("success")
          setValidationMsg(nameProcess+' ha sido creado exitosamente.')
        })
      } catch (error) {
        setOpen(true)
        setSeverity("error")
        setValidationMsg('Ha ocurrido un error inesperado.')
      }      
    }    
  }
   
//Validación
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
    <Grid container  component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
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
      <Typography variant="h6" pb={3} color='secondary'>Datos del Proceso</Typography>
        <FormProcess name={nameProcess}
                     setName={setNameProcess}
                     description={descriptionProcess}
                     setDescription={setDescriptionProcess}
                     initialValue={50}
                     goal={goal}
                     setGoal={setGoal}
                     units={'%'}
                       />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box p={{xs:2,sm:3}} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent', boxShadow: 3}}>  
          <Typography variant="h6" pb={3} color='secondary'>Añadir indicadores</Typography>    
            <Stack spacing={4}>
              
              <Box p={{xs:2,sm:4}} sx={{ border: 1, borderRadius: '16px', borderColor: 'secondary.main', }}> 
                <FormIndicator
                            name={nameIndicator}
                            setName={setNameIndicator}
                            objective={objective}
                            setObjective={setObjective}
                            periodicity={periodicity}                        
                            setPeriodicity={setPeriodicity}
                            inCharge={inCharge}                         
                            setInCharge={setInCharge}
                            user={user}                         
                            setUser={setUser}                                             
                            />                
            </Box>
            <Grid item justify="center" align="center" xs={12}>       
              <Button variant="contained" color='secondary'onClick={addRow}>Añadir Indicador</Button>
            </Grid>
            <CustomTable rows={indicators} setRows={setIndicators} columns={
                [
                  { field: 'id', headerName: 'ID', width: 25 },
                  { field: 'name', headerName: 'Nombre', width: 150 },
                  { field: 'objetive', headerName: 'Objetivo', width: 130 },
                  { field: 'in_charge', headerName: 'Persona a cargo', width: 160 },
                  { field: 'user', headerName: 'Usuario', width: 130 }]}
                pageSize={5}
                rowsPerPageOptions={25}
                deleteButton={true}
                checkboxSelection={true}
              />
          </Stack>
            
        </Box>
      </Grid>
      
      <Grid item justify="center" align="right" xs={12}>         
            <Button variant="contained" color='secondary' type="submit">Crear Proceso</Button>
      </Grid>
    </Grid>
  )
}

export default Process
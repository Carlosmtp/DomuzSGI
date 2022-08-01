
import { Alert, Box, Button, Grid, Snackbar, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import FormProcess from './FormProcess'
import FormIndicator from './FormIndicator'
import axios from 'axios'
import CustomTable from '../../../components/Forms/CustomTable'
import { AppContext } from '../../../context/AppContext'

const Process = () => {
  const { lastObject, setProcesses } = useContext(AppContext)

  //console.log(lastObject)
  const [nameProcess,setNameProcess] = useState(lastObject.name)
  const [descriptionProcess,setDescriptionProcess] = useState(lastObject.description)
  const [goal,setGoal] = useState(lastObject.goal*100)

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
      try {
        let ind = {
          name : nameIndicator,
          objetive : objective,
          periodicityId : periodicity,
          in_charge : inCharge,
          processId : lastObject.id,
          userId : user.id,
        }    

        axios.post("/create/process/indicators", ind).then((res) => {
          console.log('creado_ind',res)}
        )

        let aux = indicators.concat({
          id:"",
          name:nameIndicator,
          objetive: objective,
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

        //ACTUALIZAR PROCESOS
        setProcesses([])
        setOpen(true)
        setSeverity("success")
        setValidationMsg(nameIndicator + 'ha sido añadido correctamente.')
      } catch (error) {
        setOpen(true)
        setSeverity("error")
        setValidationMsg('Algo ha salido mal.')
      }      
    }
  }

  const delete_row = (ind) => {
    let aux = {
      indicator_id: ind.indId
    }
    console.log(aux)
    try {
      axios.delete("/delete/process/indicator", aux).then((res) => {
        console.log('res',res)})

        //ACTUALIZAR PROCESOS
        setProcesses([])
        setOpen(true)
        setSeverity("success")
        setValidationMsg(ind.name + 'ha sido eliminado correctamente.')
    } catch (error) {
        setOpen(true)
        setSeverity("error")
        setValidationMsg('Algo ha salido mal.')
    }    
  }

  //Update process
  const handleSubmit = (e) => {
    e.preventDefault()
    let aux = {
      id : lastObject.id,
      name : nameProcess,
      description : descriptionProcess,
      goal : goal/100
    }
    console.log('aux',aux)
    try {
      axios.post("/update/proccess", aux).then((res) => {
        console.log('res',res)
        //ACTUALIZAR PROCESOS
          setProcesses([])
          setOpen(true)
          setSeverity("success")
          setValidationMsg(nameProcess+' ha sido actualizado exitosamente.')
        }
      )        
    } catch (error) {
      setOpen(true)
      setSeverity("error")
      setValidationMsg('Algo ha salido mal.')
    }   
  }
  
  useEffect(()=>{
    //Start Rows
    for (let i = 0; i < lastObject.indicators.length; i++) {
      console.log(lastObject.indicators[i] )
      let aux = []
      for (let i = 0; i < lastObject.indicators.length; i++) {
        aux = aux.concat({
          id:i+1,
          indId: lastObject.indicators[i].id,
          name:lastObject.indicators[i].name,
          objetive: lastObject.indicators[i].objetive,
        } )     
      }
      setIndicators(aux)
    }
  }
  ,[lastObject.indicators])

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
                     initialValue={lastObject.goal*100}
                     goal={goal}
                     setGoal={setGoal}
                     units={'%'}
                       />
      </Grid>
      <Grid item justify="center" align="right" xs={12}>         
            <Button variant="contained" color='secondary' type="submit">Actualizar Proceso</Button>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box p={{xs:2,sm:3}} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent', boxShadow: 3}}>  
          <Typography variant="h6" pb={3} color='secondary'>Editar indicadores</Typography>   
            <Stack spacing={4}>                           
            <CustomTable rows={indicators} setRows={setIndicators} columns={
                [
                  { field: 'id', headerName: 'ID', width: 25 },
                  { field: 'name', headerName: 'Nombre', width: 150 },
                  { field: 'objetive', headerName: 'Objetivo', width: 300 }
                ]}
                pageSize={5}
                rowsPerPageOptions={25}
                deleteButton={true}
                checkboxSelection={true}
                deleteFunction={delete_row}
              />
            <Typography color='main.light'>Añadir indicador</Typography>
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
          </Stack>
            
        </Box>
      </Grid>     
      
    </Grid>
  )
}

export default Process
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormIndicator from './FormIndicator'
import CustomTable from '../../../components/Forms/CustomTable'
import { Box } from '@mui/system'
import axios from 'axios'

const ProcessIndicator = () => {

  const [name,setName] = useState('A')
  const [objective,setObjective] = useState('B')
  const [periodicity,setPeriodicity] = useState('C')
  const [weight,setWeight] = useState(0.5)
  const [inCharge,setInCharge] = useState('D')
  const [user,setUser] = useState('E')

  const handleSubmit = (e) => {

    if(name==='' ||
       objective==='' ||
       periodicity==='' ||
       inCharge==='' ||
       weight==='' ||
       user===''){
      setOpen(true)
      setSeverity("error")  
      setValidationMsg('No pueden haber campos en blanco para añadir un indicador.')
    }else{
      axios.post("actualizar/indicador-de-proceso",
      {
        name : name,
        objective : objective,
        periodicity : periodicity,
        inCharge : inCharge,
        weight : weight,
        user : user
      })
      setOpen(true)
      setSeverity("success")
      setValidationMsg(name+' ha sido actualizado exitosamente.')
      setName('')
      setObjective('')
      setPeriodicity('') 
      setInCharge('')
      setUser('')}
    }    
  
//Validacion
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
        <Typography variant="h6" pb={3} color='secondary'>Datos del Indicador</Typography>
        <FormIndicator name={name}
                      setName={setName}
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
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Medición</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <CustomTable rows={[]} columns={
                        [
                          { field: 'month', headerName: 'Mes', width: 110 },
                          { field: 'numerator', headerName: 'Numerador', width: 120 },
                          { field: 'denominator', headerName: 'Denominador', width: 120 },
                          { field: 'score', headerName: 'Resultado', width: 120 }]}
                        pageSize={12}
                        rowsPerPageOptions={12}
                        hideFooter
                        editButton={true}
                        />
          </Grid>  
          <Grid item xs={12} sm={4}>
          <Box bgcolor="secondary.light">
            <Typography variant="h6" pb={16} color='secondary.light'>Aquí va algo</Typography>
          </Box>
          </Grid>   
        </Grid>             
      </Grid>
      <Grid item justify="center" align="right" xs={12}>         
            <Button variant="contained" color='secondary' type="submit">Actualizar Indicador</Button>
      </Grid>
    </Grid>
  )
}

export default ProcessIndicator
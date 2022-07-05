import { Alert, Box, Button, Grid, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FormIndicator from './FormIndicator'
import FormRegister from './FormRegister'
import CustomTable from '../../../components/Forms/CustomTable'
import axios from 'axios'

const ProcessIndicator = () => {

  const [name,setName] = useState('A')
  const [objective,setObjective] = useState('B')
  const [periodicity,setPeriodicity] = useState('')
  const [weight,setWeight] = useState(0.5)
  const [inCharge,setInCharge] = useState('D')
  const [user,setUser] = useState('')

  const [month,setMonth] = useState('')
  const [numerator,setNumerator] = useState('')
  const [denominator,setDenominator] = useState('')
  const [score,setScore] = useState('')

  //Llamar desde BD
  const [registerPerMonth,setRegisterPerMonth] = useState([])

  //const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("/get/periodic_records?year=2022")
    .then((res) => {
      let obj = []//,{}]
      let aux = res.data
      //console.log('aux',aux[0].record_date.substring(5, 7))
      for (let i = 0; i < aux.length; i++) {
        obj.push({
          id: i+1,
          month: aux[i].record_date,
          numerator: aux[i].archieved_value,
          denominator: aux[i].expected_value,
          //score: aux[i]
        })              
      }
      console.log("obj", obj)
      setRegisterPerMonth(obj)
      setloading(false)
    })        
  },[])

  const addRowRegister = (e) => {
    e.preventDefault();
    if(month==='' || numerator==='' || denominator===''){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('No pueden haber campos en blanco para actualizar un registro.')
    }else{
      //Descomentar para añadir elemento por la fuerza y realizar pruebas.
      /*
      let aux = registerPerMonth.concat({
        month:month,
        numerator:numerator,
        denominator:denominator
      } )
      for (let i = 0; i < aux.length; i++) {
        aux[i].id = i + 1;      
      }
      setRegisterPerMonth(aux)
      */
      for(let i = 0; i < registerPerMonth.length; i++){
        if(registerPerMonth[i].month.substring(0, 7)===month.substring(0, 7)){
          registerPerMonth[i].month = month
          registerPerMonth[i].numerator = numerator
          registerPerMonth[i].denominator = denominator
          registerPerMonth[i].score =  parseFloat(numerator)/parseFloat(denominator)
          let aux = registerPerMonth.concat()
          setRegisterPerMonth(aux)
        }
      }
    }    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name==='' ||
       objective==='' ||
       periodicity==='' ||
       inCharge==='' ||
       weight==='' ||
       user===''){
      setOpen(true)
      setSeverity("error")  
      setValidationMsg('No pueden haber campos en blanco para actualizar un indicador.')
    }else{
      /*axios.post("actualizar/indicador-de-proceso",
      {
        name : name,
        objective : objective,
        periodicity : periodicity,
        inCharge : inCharge,
        weight : weight,
        user : user
      })*/
      setOpen(true)
      setSeverity("success")
      setValidationMsg(name+' ha sido actualizado exitosamente.')}
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
    <Grid container component="form" spacing={4} pt={3} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}>
              {validationMsg}
        </Alert>
      </Snackbar>
      <Box p={2} sx={{ border: 2, borderRadius: '16px', borderColor: 'background.default', boxShadow: 4 }}>  
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
        <Grid item justify="center" align="right" xs={12} pt={2}>         
              <Button variant="contained" color='secondary' type="submit" onClick={ProcessIndicator}>Actualizar Indicador</Button>
        </Grid>
      </Box>  
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Medición</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <CustomTable rows={registerPerMonth} setRows={setRegisterPerMonth} columns={
                        [
                          { field: 'month', headerName: 'Mes', width: 90 },
                          { field: 'numerator', headerName: 'Numerador', width: 140 },
                          { field: 'denominator', headerName: 'Denominador', width: 140 },
                          { field: 'score', headerName: 'Resultado', width: 140 }]}
                        pageSize={12}
                        rowsPerPageOptions={12}
                        hideFooter
                        editButton={true}
                        loading={loading}
                        checkboxSelection={true}
                        />
          </Grid>  
          <Grid item xs={12} sm={4}>
            <Box sx={{ border: 2, borderRadius: '16px', borderColor: 'background.default', boxShadow: 3 }}> 
              <Grid item align="center" p={2} ml={-1} xs={12}>  
                <FormRegister month={month}
                              setMonth={setMonth}
                              numerator={numerator} 
                              setNumerator={setNumerator} 
                              denominator={denominator} 
                              setDenominator={setDenominator}        
                              score={score} 
                              setScore={setScore}                                     
                          />     
              </Grid>
              <Grid pb={2} item justify="center" align="center" xs={12}>             
                  <Button pt={2} variant="contained" color='secondary' type="submit" onClick={addRowRegister}>Actualizar Registro</Button>
              </Grid>
            </Box>
          </Grid>   
        </Grid>             
      </Grid>
    </Grid>
  )
}

export default ProcessIndicator
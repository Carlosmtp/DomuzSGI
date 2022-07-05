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

  const [date,setDate] = useState('')
  const [numerator,setNumerator] = useState('')
  const [denominator,setDenominator] = useState('')
  const [score,setScore] = useState('')

  //Llamar desde BD
  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("/get/periodic_records?year=2022")
    .then((res) => {
      let obj = []
      let aux = res.data
      for (let i = 0; i < aux.length; i++) {
        //Set Month
        obj.push({
          id: i+1,
          date: aux[i].record_date,
          month: parseToMonth(aux[i].record_date),
          numerator: aux[i].archieved_value,
          denominator: aux[i].expected_value,
          score: calculateScore(aux[i].archieved_value,aux[i].expected_value)
        })              
      }
      console.log("obj", obj)
      setRows(obj)
      setloading(false)
    })
  },[])

  let parseToMonth = (e) => { 
    switch (e.substring(5, 7)) {
    case "01":
          return "Enero"
    case "07":
      return "Julio"
    default:
      return "Mes inválido."
    }
  }  

  let calculateScore = (num, den) => { 
      return parseFloat(num)/parseFloat(den)
  }

  const addRowRegister = (e) => {
    e.preventDefault();
    if(date==='' || numerator==='' || denominator===''){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('No pueden haber campos en blanco para actualizar un registro.')
    }else{
      for(let i = 0; i < rows.length; i++){
        if(rows[i].date.substring(0, 7)===date.substring(0, 7)){
          rows[i].month = parseToMonth(date)
          rows[i].numerator = numerator
          rows[i].denominator = denominator
          rows[i].score =  calculateScore(parseFloat(numerator),parseFloat(denominator))
          let aux = rows.concat()
          setRows(aux)
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
            <CustomTable rows={rows} setRows={setRows} columns={
                        [
                          { field: 'month', headerName: 'Mes', width: 70 },
                          { field: 'numerator', headerName: 'Numerador', width: 100 },
                          { field: 'denominator', headerName: 'Denominador', width: 100 },
                          { field: 'score', headerName: 'Resultado', width: 90 }]}
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
                <FormRegister date={date}
                              setDate={setDate}                              
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
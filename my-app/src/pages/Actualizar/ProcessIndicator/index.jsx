import { Alert, Box, Button, Grid, Snackbar, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import FormIndicator from './FormIndicator'
import UFormRegister from './FormRegister'
import CFormRegister from '../../Create/ProcessIndicator/FormRegister'
import CustomTable from '../../../components/Forms/CustomTable'
import axios from 'axios'
import { AppContext } from '../../../context/AppContext'

const actualDate = new Date().toISOString().substring(0, 10);

const ProcessIndicator = () => {

  const { lastObject } = useContext(AppContext)

  console.log("lastObject",lastObject)
  const [name,setName] = useState(lastObject.name)
  const [objective,setObjective] = useState(lastObject.objetive)
  const [periodicity,setPeriodicity] = useState(lastObject.periodicity)
  const [inCharge,setInCharge] = useState(lastObject.in_charge)
  const [user,setUser] = useState('')

  const [date,setDate] = useState(actualDate)
  const [year,setYear] = useState("")
  const [month,setMonth] = useState("")
  
  const [goal,setGoal] = useState(0.5)
  const [weight,setWeight] = useState(0.5)
  const [numerator,setNumerator] = useState(50)
  const [denominator,setDenominator] = useState(50)
  const [score,setScore] = useState('')

  //Llamar desde BD
  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("/get/periodic_records?year="+new Date().getFullYear()+"&indicator="+lastObject.id)
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

    axios.get("/get/user?user_id="+lastObject.userId)
    .then((res) => {
      let aux = res.data
      console.log(aux.name)
      setUser(aux.name+' '+aux.lastname)
    })
    
  },[lastObject.userId,lastObject.id])

  let calculateScore = (num, den) => { 
    return parseFloat(num)/parseFloat(den)
  }

  let parseToMonth = (e) => { 
    switch (e.substring(5, 7)) {
    case "01":
      return "Enero"
    case "02":
      return "Febrero"
    case "03":
      return "Marzo"
    case "04":
      return "Abril"
    case "05":
      return "Mayo"
    case "06":
      return "Junio"
    case "07":
      return "Julio"
    case "08":
      return "Agosto"
    case "09":
      return "Septiembre"
    case "10":
      return "Octubre"
    case "11":
      return "Noviembre"
    case "12":
      return "Diciembre"
    default:
      return "Mes inválido."
    }
  }  

  const updateRowRegister = (e) => {
    e.preventDefault();
    if(year==='' || month===''){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('No pueden haber campos en blanco para actualizar un registro.')
    }else{
      for(let i = 0; i < rows.length; i++){
          console.log("MES NUEVO:" + month.substring(0, 2))
          console.log("MES TABLA:" + rows[i].date.substring(5, 7))
          console.log("0000000000000")
          //rows[i].date.substring(0, 4)===year && 
        if(rows[i].date.substring(5, 7)===month.substring(0, 2)){
          console.log("--------------")
          console.log("MES TABLA:" + rows[i].date.substring(0, 4))
          console.log("MES NUEVO:" + year)
          console.log("--------------")
          rows[i].month = parseToMonth(date)          
          rows[i].weight = weight
          rows[i].goal = goal
          rows[i].numerator = numerator
          rows[i].denominator = denominator
          rows[i].score =  calculateScore(parseFloat(numerator),parseFloat(denominator))
          let aux = rows.concat()
          setRows(aux)
        }
      }
    }    
  }

  const addRowRegister = (e) => {
    e.preventDefault();
    if(date==='' || numerator==='' || denominator===''){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('No pueden haber campos en blanco para crear un registro.')
    }else{
      let conteo = 0
      for(let i = 0; i < rows.length; i++){
        if(rows[i].date.substring(0, 7)===date.substring(0, 7)){
          conteo = conteo+1
        }
      }
      if(conteo===0){
        let aux = rows.concat({
          id: "",
          date: date,
          month: parseToMonth(date),          
          weight: weight,
          goal: goal,
          numerator: numerator,
          denominator: denominator,
          score:  calculateScore(parseFloat(numerator),parseFloat(denominator))
        })
        for (let i = 0; i < aux.length; i++) {
          aux[i].id = i + 1;      
        }
        console.log(aux)
        setRows(aux)
      }else{
        setOpen(true)
        setSeverity("error")
        setValidationMsg("Ya existe un registro en la fecha indicada.")
      }
    }   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name==='' ||
       objective==='' ||
       goal==='' ||
       periodicity==='' ||
       inCharge==='' ||
       weight==='' ||
       user===''){
      setOpen(true)
      setSeverity("error")  
      setValidationMsg('No pueden haber campos en blanco para actualizar un indicador.')
    }else{
      console.log(goal)
      console.log(weight)
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
                          { field: 'month', headerName: 'Mes', width: 90},
                          { field: 'weight', headerName: 'Peso', width: 65 },
                          { field: 'goal', headerName: 'Meta', width: 65 },
                          { field: 'numerator', headerName: 'Valor real', width: 100 },
                          { field: 'denominator', headerName: 'Valor esperado', width: 110 },
                          { field: 'score', headerName: 'Resultado', width: 75 }]}
                        pageSize={12}
                        rowsPerPageOptions={12}
                        hideFooter
                        loading={loading}
                        checkboxSelection
                        deleteButton
                        />
          </Grid>  
          <Grid item xs={12} sm={4}>
            <Box sx={{ border: 2, borderRadius: '16px', borderColor: 'background.default', boxShadow: 3 }}> 
              <Grid item align="center" p={2} ml={-1} xs={12}>
                <Typography pb={1}>Actualizar Registro</Typography>
                <UFormRegister year={year}
                              setYear={setYear}  
                              month={month}
                              setMonth={setMonth} 
                              weight={weight}                         
                              setWeight={setWeight}
                              goal={goal}                         
                              setGoal={setGoal}                            
                              numerator={numerator} 
                              setNumerator={setNumerator} 
                              denominator={denominator} 
                              setDenominator={setDenominator}        
                              score={score} 
                              setScore={setScore}                                      
                          />     
              </Grid>
              <Grid pb={2} item justify="center" align="center" xs={12}>             
                  <Button pt={2} variant="contained" color='secondary' type="submit" onClick={updateRowRegister}>Actualizar Registro</Button>
              </Grid>
            </Box>
            <Box sx={{ border: 2, borderRadius: '16px', borderColor: 'background.default', boxShadow: 3 }}> 
              <Grid item align="center" p={2} ml={-1} xs={12}>  
                <Typography pb={1}>Crear Registro</Typography>
                <CFormRegister date={date}
                              setDate={setDate}  
                              weight={weight}                         
                              setWeight={setWeight}
                              goal={goal}                         
                              setGoal={setGoal}                             
                              numerator={numerator} 
                              setNumerator={setNumerator} 
                              denominator={denominator} 
                              setDenominator={setDenominator}        
                              score={score} 
                              setScore={setScore}                                      
                          />     
              </Grid>
              <Grid pb={2} item justify="center" align="center" xs={12}>             
                  <Button pt={2} variant="contained" color='secondary' type="submit" onClick={addRowRegister}>Crear Registro</Button>
              </Grid>
            </Box>
          </Grid>   
        </Grid>             
      </Grid>
    </Grid>
  )
}

export default ProcessIndicator
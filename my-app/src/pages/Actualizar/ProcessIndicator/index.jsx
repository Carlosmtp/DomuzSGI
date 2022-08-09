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
  const { lastObject, setProcesses } = useContext(AppContext)

  //console.log("lastObject",lastObject)
  const [name,setName] = useState(lastObject.name)
  const [objective,setObjective] = useState(lastObject.objetive)
  const [periodicity,setPeriodicity] = useState(lastObject.periodicityId)
  const [inCharge,setInCharge] = useState(lastObject.in_charge)
  const [user,setUser] = useState("")

  const [date,setDate] = useState(actualDate)
  const [year,setYear] = useState(new Date().getFullYear())
  const [month,setMonth] = useState("")
  
  const [cGoal,cSetGoal] = useState(0.5)
  const [cWeight,cSetWeight] = useState(0.5)
  const [cNumerator,cSetNumerator] = useState(50)
  const [cDenominator,cSetDenominator] = useState(50)
  const [cScore,cSetScore] = useState('')

  const [uGoal,uSetGoal] = useState(0.5)
  const [uWeight,uSetWeight] = useState(0.5)
  const [uNumerator,uSetNumerator] = useState(50)
  const [uDenominator,uSetDenominator] = useState(50)
  const [uScore,uSetScore] = useState('')

  //Llamar desde BD
  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("/get/periodic_records?year="+year+"&indicator="+lastObject.id)
    .then((res) => {
      let obj = []
      let aux = res.data
      for (let i = 0; i < aux.length; i++) {
        //Set Month
        obj.push({
          id: aux[i].id,
          date: aux[i].record_date,
          month: parseToMonth(aux[i].record_date),
          numerator: aux[i].archieved_value,
          denominator: aux[i].expected_value,
          score: (aux[i].efficiency*100+"").substr(0, 5)+"%",
          goal: (aux[i].goal*100+"").substr(0, 5)+"%",
          weight: (aux[i].weight*100+"").substr(0, 5)+"%"
        })              
      }
      //console.log("obj", obj)
      setRows(obj)
      setloading(false)
    })

    axios.get("/get/user?user_id="+lastObject.userId)
    .then((res) => {
      let aux = {
        id : lastObject.userId,
        label : res.data.name + ' ' + res.data.lastname
      }       
      setUser(aux)
    })
    
  },[year,lastObject.userId,lastObject.id])

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

  const updateIndicator = (e) => {
    e.preventDefault()
    let aux = {
      id:lastObject.id,
      name: name,
      objetive: objective,
      periodicityId: periodicity,
      in_charge: inCharge,
      userId: user.id,
      processId: lastObject.processId
    }
    try {
      axios.post("update/process/indicator", aux).then((res) => {console.log(res)})
      setOpen(true)
      setSeverity("success")
      setValidationMsg(name+' ha sido actualizado exitosamente.')
    } catch (error) {
      setOpen(true)
      setSeverity("error")
      setValidationMsg('Algo ha salido mal.')
    }  
  }

  const updateRowRegister = (e) => {
    e.preventDefault();
    if(month===''){
      setOpen(true)
      setSeverity("error")
      setValidationMsg('No pueden haber campos en blanco para actualizar un registro.')
    }else{
      let error = true
      for(let i = 0; i < rows.length; i++){  
        if(rows[i].date.substring(5, 7)===month.substring(0, 2)){
          error = false
          let obj = {
            id : rows[i].id,
            indicator_id : lastObject.id,
            record_date : year+'-'+month.substring(0,2)+'-28T00:00:00.000Z',
            expected_value : uDenominator,
            archieved_value : uNumerator,
            goal : uGoal,
            weight : uWeight
          }
          
          try {              
            axios.post("/update/periodic_record", obj).then((res) => {
            //console.log(res)
            setProcesses([])
            console.log(month.substring(0,1))
            rows[i].month = parseToMonth(month.substring(0,1))        
            rows[i].weight = (uWeight*100+"").substr(0, 5)+"%"
            rows[i].goal = (uGoal*100+"").substr(0, 5)+"%"
            rows[i].numerator = uNumerator
            rows[i].denominator = uDenominator
            rows[i].score =  ((uNumerator/uDenominator)*100+"").substr(0, 5)+"%"
            let aux = rows.concat()
            setRows(aux)            
  
            setOpen(true)
            setSeverity("success")
            setValidationMsg('Se ha actualizado el registro correctamente.')
            })
            
          } catch (r) {
            setOpen(true)
            setSeverity("error")
            setValidationMsg('Ha ocurrido un error.')
          }
                 
        }            
      }
      if(error){
        setOpen(true)
        setSeverity("error")
        setValidationMsg('No se encontró un registro que actualizar.')
      }
    }    
  }

  const addRowRegister = (e) => {
    e.preventDefault();
    
    let crear = true
    for(let i = 0; i < rows.length; i++){
      if(rows[i].date.substring(0, 7)===date.substring(0, 7)){
        crear = false
        setOpen(true)
        setSeverity("error")
        setValidationMsg("Ya existe un registro en la fecha indicada.")
      }
    }
    if(crear){
      let obj = {
        indicator_id : lastObject.id,
        record_date : date,
        expected_value : cDenominator,
        archieved_value : cNumerator,
        goal : cGoal,
        weight : cWeight
      }
      //console.log(obj)
      
      try {
        axios.post("/add/periodic_record", obj).then((res) => {
          console.log(res.data)
          setProcesses([])

          let aux = rows.concat({
            id: res.data[0].id,
            date: date,
            month: parseToMonth(date),          
            weight: cWeight,
            goal: cGoal,
            numerator: cNumerator,
            denominator: cDenominator,
            score:  calculateScore(parseFloat(cNumerator),parseFloat(cDenominator))
          })
          
          setOpen(true)
          setSeverity("success")
          setValidationMsg('Se ha creado el registro correctamente.')
          setRows(aux)
        })
      } catch (error) {
        setOpen(true)
        setSeverity("error")
        setValidationMsg("Ha ocurrido un error.")
      } 
      
           
    }   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name==='' ||
       objective==='' ||
       uGoal==='' ||
       periodicity==='' ||
       inCharge==='' ||
       uWeight==='' ||
       user===''){
      setOpen(true)
      setSeverity("error")  
      setValidationMsg('No pueden haber campos en blanco para actualizar un indicador.')
    }else{
      console.log(uGoal)
      console.log(uWeight)
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
              <Button variant="contained" color='secondary' type="submit" onClick={updateIndicator}>Actualizar Indicador</Button>
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
                          { field: 'score', headerName: 'Eficiencia', width: 75 }]}
                        pageSize={12}
                        rowsPerPageOptions={12}
                        hideFooter
                        loading={loading}
                        />
          </Grid>  
          <Grid item xs={12} sm={4}>
            <Box sx={{ border: 2, borderRadius: '16px', borderColor: 'background.default', boxShadow: 3 , mb:2}}> 
              <Grid item align="center" p={2} ml={-1} xs={12}>
                <Typography pb={1}>Actualizar Registro</Typography>
                <UFormRegister year={year}
                              setYear={setYear}  
                              month={month}
                              setMonth={setMonth}                        
                              setWeight={uSetWeight}                   
                              setGoal={uSetGoal}       
                              setNumerator={uSetNumerator}
                              setDenominator={uSetDenominator}  
                              setScore={uSetScore}                                      
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
                              weight={cWeight}                         
                              setWeight={cSetWeight}
                              goal={cGoal}                         
                              setGoal={cSetGoal}                             
                              numerator={cNumerator} 
                              setNumerator={cSetNumerator} 
                              denominator={cDenominator} 
                              setDenominator={cSetDenominator}        
                              score={cScore} 
                              setScore={cSetScore}                                      
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
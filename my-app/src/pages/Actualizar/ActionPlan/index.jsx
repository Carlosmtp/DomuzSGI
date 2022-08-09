
import { Alert, Box, Button, Grid, Snackbar, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import FormActionPlan from './FormActionPlan'
import FormActionInitiative from './FormActionInitiative'
import FormActionSelector from './FormActionSelectors'
import FormActionDate from './FormActionDate'
import { AppContext } from '../../../context/AppContext'
import axios from 'axios'

const Action_Plan = () => {

  const { lastObject, setActionPlan } = useContext(AppContext)

  const [nameInit,setNameInit] = useState('')
  const [nameAP,setNameAP] = useState(lastObject.name)
  const [descriptionAP ,setDescriptionAP] = useState(lastObject.description)
  const [user,setUser] = useState('')
  const [value,setValue] = useState(lastObject.delivery_date)
  
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('error');
  const [validationMsg, setValidationMsg] = useState('');
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(()=>{
    axios.get('/get/user?user_id='+lastObject.user).then((res)=>{
      let aux1 = res.data
      setUser(aux1.name + " " + aux1.lastname)
    })
    axios.get('/get/objective/initiative?id='+lastObject.initiativeId).then((res)=>{
        let aux2 = res.data
        setNameInit(aux2.name)})
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    if( nameAP==='' ||
        descriptionAP==='' ||
        value==='' ||
        nameInit===null ||
        nameInit==='' ||
        user===null ||
        user==='' ){
      setOpen(true)
      setSeverity("error")  
      setValidationMsg('No pueden haber campos en blanco para actualizar un indicador.')
    }
    else{
      const newAP = {  
        id : lastObject.id, 
        name : nameAP,     
        description : descriptionAP,   
        delivery_date : value,
        initiativeId : nameInit.id,
        userId :  user.id,
        stateId : 3
      }
      
      console.log(lastObject)
      console.log(newAP)
      try {
        axios.post("update/action_plan", newAP).then((res) => {
          console.log(res);
          setOpen(true)
          setSeverity("success")
          setValidationMsg(nameAP +' ha sido creado exitosamente.')
        })
      } catch (error) {
        setOpen(true)
        setSeverity("error")
        setValidationMsg('Ha ocurrido un error inesperado.')
      }
    }
  }

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
        <Box p={2} sx={{ border: 2, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent' }}>  
          <Typography variant="h6" pb={3} color='secondary'>Iniciativa</Typography>  
          <FormActionInitiative initiative={nameInit}
                                setInitiative={setNameInit}                    
                          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Datos</Typography>  
        <FormActionPlan name={nameAP} 
                        setName={setNameAP}
                        description={descriptionAP} 
                        setDescription={setDescriptionAP}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Responsable</Typography>  
        <FormActionSelector user={user}
                            setUser={setUser}                    
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Fecha límite</Typography>  
        <FormActionDate   date={value}
                          setDate={setValue}                      
                                    />
      </Grid>  
      <Grid item justify="center" align="right" xs={12}>       
        <Button variant="contained" color='secondary' type="submit">Actualizar Plan de acción</Button>
      </Grid>
    </Grid>
  )
}

export default Action_Plan

import { Alert, Button, Grid, Snackbar } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import FormCompany from './FormCompany'

const Company = () => {

  const [name,setName] = useState('')
  const [NIT,setNIT] = useState('')

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('error');
  const [validationMsg, setValidationMsg] = useState('');
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if( name==='' ||
        NIT===''){
      setOpen(true)
      setSeverity("error")  
      setValidationMsg('No pueden haber campos en blanco para actualizar un indicador.')
    }
    else{
      const newCompany = { 
        name : name,     
        nit : NIT,  
      }
      try {
        axios.post("/create/company", newCompany).then((res) => {
          console.log(res);
          setOpen(true)
          setSeverity("success")
          setValidationMsg(name +' ha sido creada exitosamente.')
        })
      } catch (error) {
        setOpen(true)
        setSeverity("error")
        setValidationMsg('Ha ocurrido un error inesperado.')
      }
    }
  }

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
        <FormCompany name={name}
                      setName={setName}
                      NIT={NIT}
                      setNIT={setNIT}                      
                                    />
      </Grid>  
      <Grid item justify="center" align="right" xs={12}>       
        <Button variant="contained" color='secondary' type="submit">Crear Empresa</Button>
      </Grid>
    </Grid>
  )
}

export default Company
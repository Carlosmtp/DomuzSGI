
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormActionPlan from './FormActionPlan'
import FormActionInitiative from './FormActionInitiative'
import FormActionSelector from './FormActionSelectors'
import FormActionDate from './FormActionDate'

const Action_Plan = () => {

  const [nameInit,setNameInit] = useState('')

  const [nameAP,setNameAP] = useState('')
  const [descriptionAP ,setDescriptionAP] = useState('')

  const [user,setUser] = useState('')
  const [planState,SetPlanState] = useState('')

  const actualDate = new Date().toISOString().substring(0, 10);
  const [value,setValue] = useState(actualDate)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    //CONEXIÓN CON LA BD.
      console.log(nameInit)
      console.log(nameAP)
      console.log(descriptionAP)
      console.log(user)
      console.log(planState)
      console.log(value)
  }

  return (
    <Grid container component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
       
      <Grid item xs={12} sm={12}>
        <Box p={2} sx={{ border: 2, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent' }}>  
          <Typography variant="h6" pb={3} color='secondary'>Iniciativas</Typography>  
          <FormActionInitiative initiative={nameInit}
                                setInitiative={setNameInit}                    
                          />
        </Box>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Datos del Plan de Accion</Typography>  
        <FormActionPlan name={nameAP} 
                        setName={setNameAP}
                        description={descriptionAP} 
                        setDescription={setDescriptionAP}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Responsable y Estado del plan</Typography>  
        <FormActionSelector user={user}
                            setUser={setUser}
                            planState={planState}
                            SetPlanState={SetPlanState}                      
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h6" pb={3} color='secondary'>Fecha límite del plan</Typography>  
        <FormActionDate   value={value}
                          setValue={setValue}                      
                                    />
      </Grid>
      

      <Grid item justify="center" align="right" xs={12}>       
        <Button variant="contained" color='secondary' type="submit">Crear Plan de acción</Button>
      </Grid>
    </Grid>
  )
}

export default Action_Plan
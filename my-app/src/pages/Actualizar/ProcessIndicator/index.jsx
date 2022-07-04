import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormIndicator from './FormIndicator'
import CustomTable from '../../../components/Forms/CustomTable'
import { Box } from '@mui/system'

const ProcessIndicator = () => {

  const [name,setName] = useState('A')
  const [objective,setObjective] = useState('B')
  const [periodicity,setPeriodicity] = useState('C')
  const [weight,setWeight] = useState(0.5)
  const [inCharge,setInCharge] = useState('D')
  const [user,setUser] = useState('E')

  return (
    <Grid container  component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}}>
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
          <Grid item xs={12} sm={8}>
            <CustomTable rows={[]} columns={
                        [
                          { field: 'month', headerName: 'Mes', width: 130 },
                          { field: 'goal', headerName: 'Meta', width: 130 },
                          { field: 'numerator', headerName: 'Numerador', width: 130 },
                          { field: 'denominator', headerName: 'Denominador', width: 130 },
                          { field: 'score', headerName: 'Resultado', width: 130 }]}
                        pageSize={1}
                        rowsPerPageOptions={25}
                        hideFooter
                        height={180}
                      />
          </Grid>  
          <Grid item xs={12} sm={8}>
          <Box backgroundcolor="secondary.light">
          </Box>
          </Grid>             
      </Grid>
    </Grid>
  )
}

export default ProcessIndicator
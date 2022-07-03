import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import InfoProccess from './InfoProccess'
import InfoIndicator from './InfoIndicator'
import { AppContext } from '../../../context/AppContext'
 
const General = () => {
  const { lastObject } = useContext(AppContext)
  return (
    <Grid container component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}}>
      <Grid item xs={12} sm={12}>
        <InfoProccess title={lastObject.name} description={lastObject.description}/>
      </Grid>
      <Grid item xs={12} sm={12}>
        <InfoIndicator/>
      </Grid>
    </Grid>
  )
}

export default General
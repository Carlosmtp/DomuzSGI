import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import InfoProccess from './InfoProccess'
import InfoIndicator from './InfoIndicator'

const index = ( {title} ) => {
  return (
    <Grid container component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}}>
      <Grid item xs={12} sm={12}>
        <InfoProccess/>
      </Grid>
      <Grid item xs={12} sm={12}>
        <InfoIndicator/>
      </Grid>
    </Grid>
  )
}

export default index
import { Grid } from '@mui/material'
import React from 'react'

const FormContainer = ({children}) => {
  return (
    <Grid container spacing={{xs:2,sm:3}} pl={{xs:1,sm:3}}>
      {children}
    </Grid>
  )
}

export default FormContainer
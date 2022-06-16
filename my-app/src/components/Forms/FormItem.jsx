import { Grid } from '@mui/material'
import React from 'react'

const FormItem = ({children, phone, computer}) => {
  return (
    <Grid item xs={phone} sm={computer}>
        { children }
    </Grid>
  )
}

export default FormItem
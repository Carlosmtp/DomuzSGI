import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const cardPlan = () => {
  return (
    <Box>
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Typography>
                    Nombre
                </Typography>
            </Grid> 
            <Grid item xs={12} sm={6}>
                <Typography>
                    Fecha
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Typography>
                    Descrip
                </Typography>
            </Grid>
            
        </Grid>
    </Box>
  )
}

export default cardPlan
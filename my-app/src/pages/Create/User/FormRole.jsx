import { Engineering } from '@mui/icons-material'
import { Avatar, Box, Divider, Grid, Pagination, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const rol = 'El colaborador es el encargado de llenar las iniciativas para tener la información actualizada de los procesos, únicamente puede ver los procesos que se le han sido asignados.'

const FormRole = () => {

    const handleChange = (event) => {
        console.log(event.target.textContent)

  };

  return (
    <Box bgcolor='gray' p={4} sx={{ borderRadius: '16px' }}>
        <Grid container spacing={1} xs={12}>
            <Grid item xs={12} sm={6}>
                <Avatar
                alt="Colaborador"
                sx={{ width: { xs: 78, sm: 128}, height: { xs: 78, sm: 128}, bgcolor:deepPurple[500] }}
                >
                <Engineering sx={{ width: { xs: 56, sm: 80}, height: { xs: 56, sm: 80} }}/>
                </Avatar>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Divider sx={{ my: 1 }}>
                <Typography variant='h5'>
                    Colaborador
                </Typography>
                </Divider>
                {rol}            
                <Pagination  count={3} onChange={handleChange} color="secondary" />
            </Grid>
        </Grid>
        </Box> 
  )
}

export default FormRole
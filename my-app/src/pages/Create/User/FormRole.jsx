import { Engineering } from '@mui/icons-material'
import { Avatar, Box, Divider, Grid, Pagination, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'


const FormRole = ({
                    role,
                    setRole,
                    description,
                    setDescription,
                    descriptions,
                    roles
}) => {

    const handleChange = (event, page) => {
        setRole(roles[page-1])
        setDescription(descriptions[page-1])
  };

  return (
    <Box bgcolor='gray' p={4} sx={{ borderRadius: '16px' }}>
        <Grid container spacing={1} >
            <Grid item xs={12} sm={6} align="center" justify="center">
                <Avatar
                alt={role}
                sx={{ width: { xs: 78, sm: 128}, height: { xs: 78, sm: 128}, bgcolor:deepPurple[500] }}
                p={2}
                >
                    <Engineering sx={{ width: { xs: 56, sm: 80}, height: { xs: 56, sm: 80} }}/>
                </Avatar>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Divider sx={{ my: 1 }}>
                <Typography variant='h5'>
                    {role}
                </Typography>
                </Divider>
                {description}            
                
            </Grid>
            <Pagination  count={roles.length} onChange={handleChange} color="secondary" />
        </Grid>
        </Box> 
  )
}

export default FormRole
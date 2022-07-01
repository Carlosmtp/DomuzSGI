import { Engineering } from '@mui/icons-material'
import { Avatar, Box, Divider, Grid, LinearProgress, Pagination, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React, { useState, useEffect } from 'react'
const axios = require('axios').default;

const FormRole = ({
                    setIdRole
}) => {

    const[name, setName] = useState()
    const[description, setDescription] = useState()

    const [roles,setRoles] = useState([])//Array de Objetos
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        axios.get("http://localhost:6464/get/roles")
        .then((res) => {
          //console.log(res.data)
          setName(res.data[0].name)
          setDescription(res.data[0].description)
          setIdRole(res.data[0].id)

          setloading(false)
          setRoles(res.data)
        })        
      },[])

    const handleChange = (event, page) => {
        setIdRole(roles[page-1].id)
        setName(roles[page-1].name)
        setDescription(roles[page-1].description)
  };

  if(loading){
    return (
    <LinearProgress color="secondary" />
  )}
  else{
  return (
    <Box pl={{xs:1,sm:3}} pr={{xs:1,sm:3}} pt={4} pb={4} sx={{ borderRadius: '16px', border: 1, borderColor: 'background.light' }}>
        <Grid container spacing={1} >
            <Grid item xs={12} sm={6} align="center" justify="center">
                <Avatar
                alt={name}
                sx={{ width: { xs: 78, sm: 128}, height: { xs: 78, sm: 128}, bgcolor:deepPurple[500] }}
                p={2}
                >
                    <Engineering sx={{ width: { xs: 56, sm: 80}, height: { xs: 56, sm: 80} }}/>
                </Avatar>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Divider sx={{ my: 1 }}>
                <Typography variant='h5'>
                    {name}
                </Typography>
                </Divider>
                <Typography align='justify'>
                    {description} 
                </Typography>
                           
                
            </Grid>
            <Pagination  count={roles.length} onChange={handleChange} color="secondary" />
        </Grid>
        </Box> 
  )
}
}

export default FormRole
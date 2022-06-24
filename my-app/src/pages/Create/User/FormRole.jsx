import { Engineering } from '@mui/icons-material'
import { Avatar, Box, Divider, Grid, LinearProgress, Pagination, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React, { useState, useEffect } from 'react'
const axios = require('axios').default;

const FormRole = ({
                    setIdRole
}) => {

    const[role, setRole] = useState()
    const[description, setDescription] = useState()

    const [roles,setRoles] = useState([])
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        const aux = async () => {
          try {
            let res = await axios.get("http://localhost:6464/get/roles")
            setRoles(res.data)
            setloading(false)
          } catch (error) {
            console.log("Error, probablemente el servidor este down o no tengas permiso de IP")
          }
        }
        aux()
      },[])

    const handleChange = (event, page) => {
        setIdRole(roles[page-1].ids)
        setRole(roles[page-1].name)
        setDescription(roles[page-1].description)
  };

  if(loading){
    return (
    <LinearProgress color="secondary" />
  )}
  else{
    //Iniciar variables
    //setIdRole(roles[0].id)
    //setRole(roles[0].name)
    //setDescription(roles[0].description)

  return (
    <Box pl={{xs:1,sm:3}} pr={{xs:1,sm:3}} pt={4} pb={4} sx={{ borderRadius: '16px', border: 2, borderColor: 'background.light' }}>
        <Grid container spacing={1} >
            <Grid item xs={12} sm={6} align="center" justify="center">
                <Avatar
                alt={roles[0].name}
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
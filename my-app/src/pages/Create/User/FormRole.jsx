import { Box, Divider, Grid, LinearProgress, Pagination, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CustomAvatar from '../../../components/CustomAvatar';
const axios = require('axios').default;

const FormRole = ({
          idRole, setIdRole
}) => {

    const[name, setName] = useState()
    const[description, setDescription] = useState()

    const [roles,setRoles] = useState([])//Array de Objetos
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        axios.get("http://localhost:6464/get/roles")
        .then((res) => {
          //console.log(res.data)        
          setloading(false)
          setRoles(res.data)

          setName(res.data[0].name)
          setDescription(res.data[0].description)
          setIdRole(res.data[0].id)
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
                <CustomAvatar id={idRole} size={128} />
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
            <Box pt={3}>
              <Pagination count={roles.length} onChange={handleChange} color="secondary" />
            </Box>
            
        </Grid>
        </Box> 
  )
}
}

export default FormRole
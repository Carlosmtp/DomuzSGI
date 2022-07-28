import { Box, Button, Divider, Grid, LinearProgress, Pagination, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CustomAvatar from '../../../components/CustomAvatar';
const axios = require('axios').default;

const FormRole = ({
          idRole, setIdRole, startRole, setStartRole
}) => {

    const[name, setName] = useState()
    const[description, setDescription] = useState()

    const[page, setPage] = useState(1)

    const [roles,setRoles] = useState([])//Array de Objetos
    const [loading,setloading] = useState(true)

    /*
    useEffect(()=>{
      console.log(startRole)
      if(startRole >= 0 && roles.length > 0){
        axios.get("get/user?user_id="+startRole).then((res)=>{
          let init = res.data.rol
          for (let i = 0; i < roles.length; i++) {
            
            if(init === roles[i].id){
              console.log(roles[i])
              setName(roles[i].name)
              setDescription(roles[i].description)
              setIdRole(roles[i].id)
              setPage(i+1)
              setStartRole('')
            }            
          }
        }) 
      }
    },[startRole, roles])

    */
    
    useEffect(()=>{
      if(startRole >= 0 && roles.length > 0){
        axios.get("get/user?user_id="+startRole).then((res)=>{
        let init = res.data.rol
        for (let i = 0; i < roles.length; i++) {  
          if(init === roles[i].id){
            setName(roles[i].name)
            setDescription(roles[i].description)
            setIdRole(roles[i].id)
            setPage(i+1)
            setStartRole('')
            }            
          }
        }) 
      } 
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[roles])

    useEffect(()=>{
        axios.get("get/roles")
        .then((res) => {
          //console.log(res.data)        
          setloading(false)
          setRoles(res.data)
          setName(res.data[0].name)
          setDescription(res.data[0].description)
          setIdRole(res.data[0].id)          
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    const handleChange = (event, i) => {
        setPage(i)
        setIdRole(roles[i-1].id)
        setName(roles[i-1].name)
        setDescription(roles[i-1].description)
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
              <Pagination page={page} count={roles.length} onChange={handleChange} color="secondary" />
            </Box>
            
        </Grid>
        </Box> 
  )
}
}

export default FormRole
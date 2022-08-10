import { Box, Divider, Grid, LinearProgress, Pagination, Typography } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import CustomAvatar from '../../../components/CustomAvatar';
import { AppContext } from '../../../context/AppContext';
const axios = require('axios').default;

const FormRole = ({
          idRole, setIdRole, startRole
}) => {
    const { login } = useContext(AppContext)
    const [show, setShow] = useState(<Box />)
    
    const[name, setName] = useState()
    const[description, setDescription] = useState()

    const[page, setPage] = useState(1)

    const [roles,setRoles] = useState([])//Array de Objetos
    const [loading,setloading] = useState(true)  

    useEffect(()=>{
        axios.get("get/roles")
        .then((res) => {
          let aux = res.data
          setloading(false)
          setRoles(aux)
          
          if(startRole>=0){
            for (let i = 0; i < aux.length; i++) {
              if(aux[i].id === startRole){
                setName(aux[i].name)
                setDescription(aux[i].description)
                setIdRole(aux[i].id)
              }
            }
          }else{
            setName(aux[0].name)
            setDescription(aux[0].description)
            setIdRole(aux[0].id)
          }
        })

        if(login.rol === 1 || login.rol === 2){
          showRol()
      }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    const handleChange = (event, i) => {
        setPage(i)
        setIdRole(roles[i-1].id)
        setName(roles[i-1].name)
        setDescription(roles[i-1].description)
  };

  const showRol = () => {
    setShow(
      <Pagination page={page} count={roles.length} onChange={handleChange} color="secondary" />
    )
  }

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
              {show}
            </Box>
            
        </Grid>
        </Box> 
  )
}
}

export default FormRole
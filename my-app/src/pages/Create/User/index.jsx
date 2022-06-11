import { Engineering } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, Pagination, Stack, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React, { useState } from 'react'
import FormUser from './FormUser'

const rol = 'El colaborador es el encargado de llenar las iniciativas para tener la información actualizada de los procesos, únicamente puede ver los procesos que se le han sido asignados.'

const roles = ["acmin","si","lencio"]

const User = () => {

  const [name,setName] = useState('')
  const [lastname,setLastname] = useState('')
  const [idPerson,setIdPerson] = useState('')
  const [password,setPassword] = useState('')
  const [mail,setMail] = useState('')
  const [phone,setPhone] = useState('')
  const [typeUser,setTypeUser] = useState(1)  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name,lastname)
  }

  const handleChangePage = (e, value) => {
    e.preventDefault()    
    console.log("A")
    console.log("value",roles[value-1]) 
    setTypeUser(value)
    console.log("hook",roles[typeUser-1])
  }

  return (
    <Grid container  component="form" spacing={4} p={3} onSubmit={handleSubmit}>
      <Grid item xs={12} sm={6}>
            <FormUser name={name}
                      setName={setName}
                      lastname={lastname}
                      setLastname={setLastname}
                      idPerson={idPerson}
                      setIdPerson={setIdPerson}
                      password={password}
                      setPassword={setPassword}
                      mail={mail}
                      setMail={setMail}
                      phone={phone}
                      setPhone={setPhone} />
      </Grid>
      <Grid item xs={12} sm={6} align="center" justify="center">
        <Box bgcolor='background.default' p={4} sx={{ borderRadius: '16px' }}>
          <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Avatar
              alt="Colaborador"
              sx={{ width: { xs: 78, sm: 128}, height: { xs: 78, sm: 128}, bgcolor:deepPurple[500] }}
            >
              <Engineering sx={{ width: { xs: 56, sm: 80}, height: { xs: 56, sm: 80} }}/>
            </Avatar>
            <Divider sx={{ my: 1 }}>
              <Typography variant='h5'>
                Colaborador
              </Typography>
            </Divider>
              {rol}            
              <Pagination  count={3} onChange={handleChangePage} color="secondary" />
            <Button variant="contained" color='secondary' type="submit">Crear Usuario</Button>
          </Stack>
        </Box> 
      </Grid>
    </Grid>
  )
}

export default User
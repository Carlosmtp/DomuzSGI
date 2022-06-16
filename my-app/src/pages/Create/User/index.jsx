import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormUser from './FormUser'
import FormPersonal from './FormPersonal'
import FormRole from './FormRole'

const roles = ['Colaborador','Líder','Gerente','Administrador']
const descriptions = ['El colaborador es el encargado de llenar las iniciativas para tener la información actualizada de los procesos, únicamente puede ver los procesos que se le han sido asignados.',
                      'El Líder es capaz de llenar el informe de avance detallado así como sus respectivas iniciativas para mantener actualizados los procesos que se le han asignado.',
                      'El gerente tiene acceso a funciones de creación de usuarios, procesos, iniciativas, proyectos. Además puede visualizar los informes generados por la plataforma.',
                      'El administrador tiene acceso a toda la plataforma.']
const User = () => {

  const [name,setName] = useState('')
  const [lastname,setLastname] = useState('')
  const [idPerson,setIdPerson] = useState('')
  const [password,setPassword] = useState('')
  const [mail,setMail] = useState('')
  const [phone,setPhone] = useState('')
  
  const [role,setRole] = useState(roles[0])
  const [description,setDescription] = useState(descriptions[0])

  /*const [typeUser,setTypeUser] = useState(1)  */

  const handleSubmit = (e) => {
    e.preventDefault()
    //CONEXIÓN CON LA BD.
    console.log(name,lastname)
  }

  /*const handleChangePage = (e, value) => {
    e.preventDefault()    
    console.log("A")
    console.log("value",roles[value-1]) 
    setTypeUser(value)
    console.log("hook",roles[typeUser-1])
  }*/

  return (
    <Grid container  component="form" spacing={4} pl={{xs:0,sm:3}} pr={{xs:0,sm:3}} onSubmit={handleSubmit}>
      <Grid item xs={12} sm={6}>
        
        <Typography variant="h6" pb={3} color='secondary'>Datos de Usuario</Typography>
              <FormUser idPerson={idPerson}
                        setIdPerson={setIdPerson}
                        password={password}
                        setPassword={setPassword}/>
        
        <Typography variant="h6" pt={3} pb={3} color='secondary'>Datos personales</Typography>
              <FormPersonal name={name}
                            setName={setName}
                            lastname={lastname}
                            setLastname={setLastname}
                            mail={mail}
                            setMail={setMail}
                            phone={phone}
                            setPhone={setPhone}/>
        
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormRole role={role} setRole={setRole} roles={roles}
                  description={description} setDescription={setDescription} descriptions={descriptions} />
      </Grid>
      <Grid item justify="center" align="right" xs={12}>         
        <Button variant="contained" color='secondary' type="submit">Crear Usuario</Button>
      </Grid>
   </Grid>
  )
}

export default User
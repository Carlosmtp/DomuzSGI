import { AccountCircle, Badge, DriveFileRenameOutline, Mail, PhoneAndroid, Security } from '@mui/icons-material'
import { Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

const FormUser = ({ name, setName,
                    lastname, setLastname,
                    idPerson, setIdPerson,
                    password, setPassword,
                    mail, setMail,
                    phone, setPhone }) => {

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "name":
                    setName(target.value)
                break;
            case "lastname":
                    setLastname(target.value)
                break;
            case "idPerson":
                    setIdPerson(target.value)
                break;
            case "password":
                    setPassword(target.value)
                break;
            case "mail":
                    setMail(target.value)
                break;
            case "phone":
                    setPhone(target.value)
                break;
          default:
            console.log("Necesitas crear el respectivo handleInput")
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}><Typography variant="h6" color='secondary'>Datos de Usuario</Typography></Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="idPerson"
                    label="Identificación"
                    name="idPerson"                
                    value={idPerson}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Badge />
                        </InputAdornment>
                        ),
                    }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="password"
                    label="Contraseña"
                    name="password"                
                    value={password}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Security />
                        </InputAdornment>
                        ),
                    }}
                    />
                    </Grid>
            <Grid item xs={12}><Typography variant="h6" color='secondary'>Datos personales</Typography></Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nombre"
                    name="name"                
                    value={name}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                        ),
                    }}
                    />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Apellido"
                    name="lastname"                
                    value={lastname}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <DriveFileRenameOutline />
                        </InputAdornment>
                        ),
                    }}
                    />
                </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="mail"
                            label="Correo"
                            name="mail"                
                            value={mail}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Mail />
                                </InputAdornment>
                                ),
                            }}
                            />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="phone"
                            label="Telefono"
                            name="phone"                
                            value={phone}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneAndroid />
                                </InputAdornment>
                                ),
                            }}
                            />
                    </Grid>
                </Grid>
    )
}

export default FormUser
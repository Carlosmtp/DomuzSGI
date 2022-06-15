import { Badge, Security } from '@mui/icons-material'
import { Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const FormUser = ({ idPerson, setIdPerson,
                    password, setPassword }) => {

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "idPerson":
                    setIdPerson(target.value)
                break;
            case "password":
                    setPassword(target.value)
                break;
          default:
            console.log("Necesitas crear el respectivo handleInput")
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <Grid container spacing={{xs:2,sm:3}} pl={{xs:1,sm:3}}>
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
        </Grid>
    )
}

export default FormUser
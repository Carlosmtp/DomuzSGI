import { AccountCircle, DriveFileRenameOutline } from '@mui/icons-material'
import { Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const FormProcess = ({ name, setName,
                        description, setDescription,
                    }) => {

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "name":
                    setName(target.value)
                break;
            case "description":
                    setDescription(target.value)
                break;
          default:
            console.log("Necesitas crear el respectivo handleInput")
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <Grid container spacing={{xs:2,sm:3}} pl={{xs:1,sm:3}}>
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12} sm={12}>
                <TextField
                    required
                    fullWidth
                    id="description"
                    label="Descripción"
                    name="description"                
                    value={description}
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
        </Grid>
    )
}

export default FormProcess
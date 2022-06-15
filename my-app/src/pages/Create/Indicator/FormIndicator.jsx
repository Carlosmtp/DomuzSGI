import { AccountCircle, DriveFileRenameOutline, Mail, PhoneAndroid } from '@mui/icons-material'
import { Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const FormIndicator = ({ name, setName,
                         description, setDescription, 
                         periodicity, setPeriodicity,
                         weight, setWeight}) => {

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "name":
                    setName(target.value)
                break;
            case "description":
                setDescription(target.value)
                break;
            case "periodicity":
                setPeriodicity(target.value)
                break;
            case "weight":
                setWeight(target.value)
                break;
          default:
            console.log("Necesitas crear el respectivo handleInput")
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <Grid container spacing={2} pl={3}>
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
                    
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="periodicity"
                    label="Periodicidad"
                    name="periodicity"                
                    value={periodicity}
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
                    id="weight"
                    label="Peso"
                    name="weight"                
                    value={weight}
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

export default FormIndicator
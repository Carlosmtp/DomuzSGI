import { AccountCircle } from '@mui/icons-material'
import { InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

const FormCompany = ({ name, setName,
                        NIT, setNIT
                    }) => {

const handleInputChange = ({target}) => {
    switch (target.id) {
        case "name":
            setName(target.value)
            break;
        case "NIT":
            setNIT(target.value)
            break;
        default:
            console.log("Necesitas crear el respectivo handleInput")
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <FormContainer>
            <FormItem phone={12} computer={12}>
                <Stack spacing={2}>
                    <TextField
                        required
                        color="secondary"
                        id="name"
                        label="Nombre"
                        name="name"                
                        value={name}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>)}}/>
                    <TextField
                        required
                        color="secondary"
                        id="NIT"
                        label="NIT"
                        name="NIT"                
                        value={NIT}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>)}}/>
                </Stack>
            </FormItem>                     
        </FormContainer>
    )
}

export default FormCompany
import { AccountCircle } from '@mui/icons-material'
import { Box, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

const FormActionPlan = ({ name, setName,
                          description, setDescription
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
        <FormContainer>
            <FormItem phone={12} computer={12}>
                <Box p={2} sx={{ border: 2, borderRadius: '16px', borderColor: 'secondary.main' }}>          
                    <Stack spacing={2}>
                        <TextField
                            required
                            fullWidth
                            id="name"
                            color='secondary'
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
                        <TextField
                            required
                            fullWidth
                            id="description"
                            color='secondary'
                            label="Descripción"
                            name="description"                
                            value={description}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                </Box>
            </FormItem>                     
        </FormContainer>
    )
}

export default FormActionPlan
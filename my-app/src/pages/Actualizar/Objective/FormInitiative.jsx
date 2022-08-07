import { DriveFileRenameOutline } from '@mui/icons-material'
import { Box, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

const FormInitiative = ({ name, setName,
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
                <Box p={2} sx={{ border: 1, borderRadius: '16px', borderColor: 'secondary.main' }}>          
                    <Stack spacing={2}>
                        <TextField
                            color="secondary"
                            id="name"
                            label="Nombre"
                            name="name"                
                            value={name}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <DriveFileRenameOutline />
                                    </InputAdornment>)}}/>
                        <TextField                            
                            color="secondary"
                            id="description"
                            label="Descripción"
                            name="description"                
                            value={description}
                            onChange={handleInputChange}
                            multiline
                            rows={4}/>
                    </Stack>
                </Box>
            </FormItem>                     
        </FormContainer>
    )
}

export default FormInitiative
import { AccountCircle } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Selector } from '../../../components/Forms/Selector'

const FormObjective = ({ name, setName,
                        description, setDescription,
                        perspective, setPerspective

                    }) => {

const handleInputChange = ({target}) => {
    switch (target.id) {
        case "name":
            setName(target.value)
            break;
        case "description":
            setDescription(target.value)
            break;
        case "perspective":
            setPerspective(target.value)
            break;
        default:
            console.log("Necesitas crear el respectivo handleInput")
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <FormContainer>
            <FormItem phone={12} computer={6} >
                <Box>
                    <TextField
                        required                
                        fullWidth
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
               </Box>                       
            </FormItem> 

            <FormItem phone={12} computer={6}>
                    <Selector 
                        idSelector="select-perspective" 
                        labelSelector="Perspectiva" 
                        id="perspective" 
                        hook={perspective} 
                        setHook={setPerspective}
                        array_elements={["base de datos"]}/>
            </FormItem>
            
            <FormItem phone={12} computer={12}>
                <TextField
                required
                fullWidth
                color="secondary"
                id="description"
                label="Descripción"
                name="description"                
                value={description}
                onChange={handleInputChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>)}}/>
            </FormItem>                     
        </FormContainer>
    )
}

export default FormObjective
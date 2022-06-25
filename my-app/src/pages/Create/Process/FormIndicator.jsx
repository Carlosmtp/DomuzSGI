import { AccountCircle, DriveFileRenameOutline } from '@mui/icons-material'
import { Box, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Selector } from '../../../components/Forms/Selector'

const FormIndicator = ({ name, setName,
                         objective, setObjective, 
                         periodicity, setPeriodicity,
                         weight, setWeight,
                         inCharge, setInCharge,
                         user, setUser}) => {

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "name":
                    setName(target.value)
                break;
            case "objective":
                setObjective(target.value)
                break;
            case "periodicity":
                setPeriodicity(target.value)
                break;
            case "weight":
                setWeight(target.value)
                break;
            case "user":
                setInCharge(target.value)
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
                            required
                            fullWidth
                            id="name"
                            label="Nombre"
                            color="secondary"
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
                            id="objective"
                            color="secondary"
                            label="Objetivo"
                            name="objective"                
                            value={objective}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <DriveFileRenameOutline />
                                </InputAdornment>
                                ),
                            }}
                            />                        
                        <Selector
                            idSelector="select-periodicity" 
                            labelSelector="Periodicidad" 
                            id="periodicity" 
                            hook={periodicity} 
                            setHook={setPeriodicity}/>
                        <Selector
                            idSelector="select-weight" 
                            labelSelector="Peso" 
                            id="weight" 
                            hook={weight} 
                            setHook={setWeight}/>
                        <TextField
                            required
                            fullWidth
                            id="inCharge"
                            color="secondary"
                            label="Persona a cargo"
                            name="inCharge"                
                            value={inCharge}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <DriveFileRenameOutline />
                                </InputAdornment>
                                ),
                            }}
                            /> 
                        <Selector
                            idSelector="select-user" 
                            labelSelector="Usuario" 
                            id="user" 
                            hook={user} 
                            setHook={setUser}/>                        
                    </Stack>
                </Box>
            </FormItem>
        </FormContainer>
    )
}

export default FormIndicator
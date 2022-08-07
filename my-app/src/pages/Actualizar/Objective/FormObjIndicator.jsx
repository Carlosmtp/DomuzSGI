import { DriveFileRenameOutline } from '@mui/icons-material'
import { Box, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomSlider from '../../../components/Forms/CustomSlider'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Periodicity } from '../../../components/Forms/Periodicity'

const FormObjIndicator = ({ name, setName,
                            goal, setGoal,
                            periodicity, setPeriodicity
                    }) => {

const handleInputChange = ({target}) => {
    switch (target.id) {
        case "name":
            setName(target.value)
            break;
        case "goal":
            setGoal(target.value)
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
                       
                    <Box>
                        <Typography>Meta</Typography>
                        <Box pl={2} pr={2}>
                            <CustomSlider id="Goal" setHook={setGoal} valorPorDefecto={0.5} maximo={1} escala={0.01}/>
                    </Box>    

                    </Box>
                        
                        <Periodicity
                            hook={periodicity} 
                            setHook={setPeriodicity}/>
                    </Stack>
                </Box>
            </FormItem>                     
        </FormContainer>
    )
}

export default FormObjIndicator
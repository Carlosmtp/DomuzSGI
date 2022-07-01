import { AccountCircle } from '@mui/icons-material'
import { Box, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Selector } from '../../../components/Forms/Selector'

const FormObjIndicator = ({ nameInd, setNameInd,
                            goal, setGoal,
                            periodicity, setPeriodicity
                    }) => {

const handleInputChange = ({target}) => {
    switch (target.id) {
        case "nameInd":
            setNameInd(target.value)
            break;
        case "goal":
            setGoal(target.value)
            break;
        case "periodicity":
            setPeriodicity(target.value)
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
                            color="secondary"
                            id="nameInd"
                            label="Nombre"
                            name="nameInd"                
                            value={nameInd}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>)}}/>
                        <TextField
                            required
                            color="secondary"
                            id="goal"
                            label="Meta"
                            name="goal"                
                            value={goal}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>)}}/>
                        
                        <Selector
                            idSelector="select-periodicity" 
                            labelSelector="Periodicidad" 
                            id="periodicity" 
                            hook={periodicity} 
                            setHook={setPeriodicity}
                            array_elements={["semanal","mensual","trimestral","semestral","anual"]}/>
                    </Stack>
                </Box>
            </FormItem>                     
        </FormContainer>
    )
}

export default FormObjIndicator
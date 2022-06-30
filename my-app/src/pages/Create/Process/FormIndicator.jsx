import { AccountCircle, DriveFileRenameOutline } from '@mui/icons-material'
import { InputAdornment, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Selector } from '../../../components/Forms/Selector'
import CustomSlider from '../../../components/Forms/CustomSlider'

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
            case "inCharge":
                setInCharge(target.value)
                break;
            case "user":
                setUser(target.value)
                break;
          default:
            console.log("Necesitas crear el respectivo handleInput")
            console.log(target)
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <FormContainer>    
                <FormItem phone={12} computer={6}>
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
                </FormItem> 
                <FormItem phone={12} computer={6}>               
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
                </FormItem> 
                <FormItem phone={12} computer={6}>                     
                        <Selector
                            idSelector="select-periodicity" 
                            labelSelector="Periodicidad" 
                            id="periodicity" 
                            hook={periodicity} 
                            setHook={setPeriodicity}/>
                </FormItem> 
                <FormItem phone={12} computer={6}> 
                    <Typography>Peso*</Typography>
                    <Box pl={2} pr={2}>
                        <CustomSlider id="weight" setHook={setWeight}/>
                    </Box>    
                </FormItem> 
                <FormItem phone={12} computer={6}> 
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
                </FormItem> 
                <FormItem phone={12} computer={6}> 
                    <Selector
                        idSelector="select-user" 
                        labelSelector="Usuario" 
                        id="user" 
                        hook={user} 
                        setHook={setUser}/>                     
                </FormItem>                   
        </FormContainer>
    )
}

export default FormIndicator
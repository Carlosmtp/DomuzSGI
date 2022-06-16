import { AccountCircle, DriveFileRenameOutline, Mail, PhoneAndroid } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

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
        <FormContainer>
            <FormItem phone={12} computer={12}>
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
            <FormItem phone={12} computer={12}>
                <TextField
                        required
                        fullWidth
                        id="description"
                        color="secondary"
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
            </FormItem>
                    
            <FormItem phone={12} computer={6}>
                <TextField
                    required
                    fullWidth
                    id="periodicity"
                    color="secondary"
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
            </FormItem>
        
            <FormItem phone={12} computer={6}>
                <TextField
                    required
                    fullWidth
                    id="weight"
                    color="secondary"
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
            </FormItem>
        </FormContainer>
    )
}

export default FormIndicator
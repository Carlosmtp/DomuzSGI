import { AccountCircle, DriveFileRenameOutline } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

const FormProcess = ({ name, setName,
                        description, setDescription,
                        efficiency, setEfficiency,
                    }) => {

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "name":
                    setName(target.value)
                break;
            case "description":
                    setDescription(target.value)
                break;
            case "efficiency":
                    setEfficiency(target.value)
                break;
          default:
            console.log("Necesitas crear el respectivo handleInput")
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
                        </InputAdornment>
                        ),
                    }}
                    />
            </FormItem>
            <FormItem phone={12} computer={6}>
                <TextField
                    required
                    fullWidth
                    id="efficiency"
                    color="secondary"
                    label="Eficiencia"
                    name="efficiency"                
                    value={efficiency}
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
        </FormContainer>
    )
}

export default FormProcess
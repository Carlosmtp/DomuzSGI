import { Badge, Security } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

const FormUser = ({ idPerson, setIdPerson,
                    password, setPassword }) => {

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "idPerson":
                    setIdPerson(target.value)
                break;
            case "password":
                    setPassword(target.value)
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
                    id="idPerson"
                    color='secondary'
                    label="Identificación"
                    name="idPerson"                
                    value={idPerson}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Badge />
                        </InputAdornment>
                        ),
                    }}
                    />
            </FormItem>
            <FormItem phone={12} computer={6}>
                <TextField
                    required
                    fullWidth
                    id="password"
                    color='secondary'
                    label="Contraseña"
                    name="password"                
                    value={password}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <Security />
                        </InputAdornment>
                        ),
                    }}
                    />
            </FormItem>
        </FormContainer>
    )
}

export default FormUser
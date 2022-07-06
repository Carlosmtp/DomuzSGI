import { AccountCircle, DriveFileRenameOutline, Mail, PhoneAndroid } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

const FormPersonal = ({ name, setName,
                    lastname, setLastname,
                    mail, setMail,
                    phone, setPhone }) => {

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "name":
                    setName(target.value)
                break;
            case "lastname":
                    setLastname(target.value)
                break;
            case "mail":
                    setMail(target.value)
                break;
            case "phone":
                    setPhone(target.value)
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
            </FormItem>
            <FormItem phone={12} computer={6}>
                <TextField
                    required
                    fullWidth
                    id="lastname"
                    color='secondary'
                    label="Apellido"
                    name="lastname"                
                    value={lastname}
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
                        id="mail"
                        color='secondary'
                        label="Correo"
                        name="mail"                
                        value={mail}
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
                    id="phone"
                    color='secondary'
                    label="Telefono"
                    name="phone"                
                    value={phone}
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

export default FormPersonal
import { AccountCircle, DriveFileRenameOutline } from '@mui/icons-material'
import { InputAdornment, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import CustomAutocomplete from '../../../components/Forms/CustomAutocomplete'
import CustomSlider from '../../../components/Forms/CustomSlider'
import { useState } from 'react'
import axios from 'axios'
import { Periodicity } from '../../../components/Forms/Periodicity'

const FormIndicator = ({ name, setName,
                         objective, setObjective, 
                         periodicity, setPeriodicity,
                         inCharge, setInCharge,
                         user, setUser}) => {
    
    const [loadedUsers, setLoadedUsers] = useState([])

    useEffect(()=>{
        axios.get("get/users")
        .then((res) => {
          let obj = []
          let aux = res.data
          for(let i=0;i<aux.length;i++){        
            obj.push({
              //id: aux[i].id_people.person_id,
              id: aux[i].id,
              label: aux[i].id_people.name + " " + aux[i].id_people.lastname,
            })        
          }
        setLoadedUsers(obj)
          //console.log(res.data.length)
        })        
      },[])

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
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <FormContainer>    
                <FormItem phone={12} computer={6}>
                    <TextField
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
                            <DriveFileRenameOutline />
                            </InputAdornment>
                            ),
                        }}
                    />
                </FormItem> 
                <FormItem phone={12} computer={6}>                     
                        <Periodicity
                            hook={periodicity} 
                            setHook={setPeriodicity}
                            />
                </FormItem> 
                <FormItem phone={12} computer={6}> 
                    <TextField
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
                            <AccountCircle />
                            </InputAdornment>
                            ),
                        }}
                    />                 
                </FormItem> 
                <FormItem phone={12} computer={6}>
                    <CustomAutocomplete label="Usuario"
                        hook={user}
                        setHook={setUser}
                        array_elements={loadedUsers}/>
                </FormItem>
                <FormItem phone={12} computer={12}>               
                    <TextField
                        fullWidth
                        id="objective"
                        color="secondary"
                        label="Objetivo"
                        name="objective"                
                        value={objective}
                        onChange={handleInputChange}
                        multiline
                        rows={2}                        
                        />  
                </FormItem>
        </FormContainer>
    )
}

export default FormIndicator
import { DriveFileRenameOutline } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import axios from 'axios'
import CustomAutocomplete from '../../../components/Forms/CustomAutocomplete'

const FormObjective = ({ name, setName,
                        description, setDescription,
                        perspective, setPerspective

                    }) => {

const [loadedPerspective, setLoadedPerspective] = useState([])

useEffect(()=>{
    axios.get("http://localhost:6464/get/objectives/perspectives")
    .then((res) => {
      let obj = []
      let aux = res.data
      for(let i=0;i<aux.length;i++){        
        obj.push({
          id: aux[i].id,
          label: aux[i].name,
        })        
      }
      setLoadedPerspective(obj)
    })        
  },[])

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
                            <DriveFileRenameOutline />
                            </InputAdornment>)}}/>  
               </Box>                       
            </FormItem> 

            <FormItem phone={12} computer={6}>
                <CustomAutocomplete label="Perspectiva"
                    hook={perspective}
                    setHook={setPerspective}
                    array_elements={loadedPerspective}/>
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
                multiline
                rows={5}/>
            </FormItem>                     
        </FormContainer>
    )
}

export default FormObjective
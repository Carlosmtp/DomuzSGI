import { DriveFileRenameOutline  } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
//import { useState } from 'react'
//import axios from 'axios'

//const date = new Date().toISOString().substring(0, 10);

const FormRegister = ({ month, setMonth,
                         numerator, setNumerator, 
                         denominator, setDenominator,
                         }) => {
    
    //const [loadedUsers, setLoadedUsers] = useState([])

    /*useEffect(()=>{
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
      },[])*/

    const handleInputChange = ({target}) => {
        switch (target.id) {
            case "month":
                setMonth(target.value)
                break;
            case "numerator":
                setNumerator(target.value)
                break;
            case "denominator":
                setDenominator(target.value)
                break;
          default:
            console.log("Necesitas crear el respectivo handleInput")
            console.log(target)
            break;
        }      
      }
    return (
        <FormContainer>    
                <FormItem phone={12} computer={12}>                     
                <TextField
                    fullWidth
                    id="month"
                    color="secondary"
                    label="Fecha"
                    name="month"
                    type="date"
                    //defaultValue={date}
                    onChange={handleInputChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </FormItem> 
                <FormItem phone={12} computer={12}> 
                    <TextField
                        fullWidth
                        id="numerator"
                        color="secondary"
                        label="Numerador"
                        name="numerator"                
                        value={numerator}
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
                        fullWidth
                        id="denominator"
                        color="secondary"
                        label="Denominador"
                        name="denominator"                
                        value={denominator}
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

export default FormRegister
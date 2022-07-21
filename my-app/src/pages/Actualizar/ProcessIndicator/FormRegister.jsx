import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import CustomSlider from '../../../components/Forms/CustomSlider'
//import { useState } from 'react'
//import axios from 'axios'

const actualDate = new Date().toISOString().substring(0, 10);

const UFormRegister = ({ setYear,
                        setMonth,                        
                        setGoal,                        
                        setWeight,
                        setNumerator,
                        setDenominator
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
          case "year":
            setYear(target.value)
            console.log(actualDate.year)
            break;
          case "month":
            setMonth(target.value)
            console.log(actualDate.month)
            break;
          case "weight":
              setWeight(target.value)
              break;
          case "goal":
              setGoal(target.value)
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
                    id="year"
                    color="secondary"
                    label="Año"
                    name="year"
                    type="year"
                    defaultValue={actualDate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    id="month"
                    color="secondary"
                    label="Mes"
                    name="month"
                    type="month"
                    defaultValue={actualDate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </FormItem> 
                <FormItem phone={12} computer={12}> 
                    <Typography>Peso</Typography>
                    <Box pl={2} pr={2}>
                        <CustomSlider id="weight" setHook={setWeight} valorPorDefecto={0.5} maximo={1} escala={0.01}/>
                    </Box>                  
                </FormItem> 
                <FormItem phone={12} computer={12}> 
                    <Typography>Meta</Typography>
                    <Box pl={2} pr={2}>
                        <CustomSlider id="goal" setHook={setGoal} valorPorDefecto={0.5} maximo={1} escala={0.01}/>
                    </Box>                 
                </FormItem>   
                <FormItem phone={12} computer={12}> 
                    <Typography>Valor real</Typography>
                    <Box pl={2} pr={2}>
                        <CustomSlider id="numerator" setHook={setNumerator} valorPorDefecto={50} maximo={100} escala={1}/>
                    </Box>                  
                </FormItem> 
                <FormItem phone={12} computer={12}> 
                    <Typography>Valor esperado</Typography>
                    <Box pl={2} pr={2}>
                        <CustomSlider id="denominator" setHook={setDenominator} valorPorDefecto={50} maximo={100} escala={1}/>
                    </Box>                 
                </FormItem>    
        </FormContainer>
    )
}

export default UFormRegister
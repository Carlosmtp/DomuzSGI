import { Box, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Selector } from '../../../components/Forms/Selector'

const FormActionInitiative = ({
                        initiative, setInitiative

                    }) => {

const handleInputChange = ({target}) => {
    switch (target.id) {
        case "initiative":
            setInitiative(target.value)
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
                <Stack direction="column" m={-1}>
                <Selector 
                        idSelector="select-initiative" 
                        labelSelector="Iniciativa" 
                        id="initiative" 
                        hook={initiative} 
                        setHook={setInitiative}
                        array_elements={["Semanal","Mensual","Trimestral","Semestral","Anual"]}
                        />
                </Stack>
            </FormItem>                    
        </FormContainer>
    )
}

export default FormActionInitiative
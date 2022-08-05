import { Stack } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Periodicity } from '../../../components/Forms/Periodicity'

const FormActionInitiative = ({
                        initiative, setInitiative

                    }) => {

/*
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
*/

    return (
        <FormContainer>
          <FormItem phone={12} computer={12}>
                <Stack direction="column" m={-1}>
                <Periodicity 
                        hook={initiative} 
                        setHook={setInitiative}
                        />
                </Stack>
            </FormItem>                    
        </FormContainer>
    )
}

export default FormActionInitiative
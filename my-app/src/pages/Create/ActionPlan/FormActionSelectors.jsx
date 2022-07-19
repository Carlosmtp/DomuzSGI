import { Stack} from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Periodicity } from '../../../components/Forms/Periodicity'


const FormActionSelector = ({
                        user, setUser,
                        planState, SetPlanState,
                        date, SetDate

                    }) => {

      //<Stack spacing={2}>
    return (
        <FormContainer>
          <FormItem phone={12} computer={6}>
                <Stack direction="column" m={-1}>
                    <Periodicity 
                            hook={user} 
                            setHook={setUser}
                            />
                    
                </Stack>
            </FormItem> 
            <FormItem phone={12} computer={6}>
                <Stack direction="column" m={-1}>
                    <Periodicity
                            hook={planState} 
                            setHook={SetPlanState}
                            />                    
                </Stack>
            </FormItem>            
        </FormContainer>
    )
}

export default FormActionSelector
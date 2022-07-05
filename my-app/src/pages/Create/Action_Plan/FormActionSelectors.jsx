import { Stack} from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Selector } from '../../../components/Forms/Selector'


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
                    <Selector 
                        idSelector="select-user" 
                        labelSelector="Responsable" 
                        id="user" 
                        hook={user} 
                        setHook={setUser}/>
                </Stack>
            </FormItem> 
            <FormItem phone={12} computer={6}>
                <Stack direction="column" m={-1}>
                    <Selector 
                        idSelector="select-planState" 
                        labelSelector="Estado del plan" 
                        id="planState" 
                        hook={planState} 
                        setHook={SetPlanState}/>
                </Stack>
            </FormItem>            
        </FormContainer>
    )
}

export default FormActionSelector
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomAutocomplete from '../../../components/Forms/CustomAutocomplete'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'


const FormActionSelector = ({ user, setUser,
                              planState, SetPlanState
                            }) => {

    const [loadedUsers, setLoadedUsers] = useState([])
  
    useEffect(()=>{
        axios.get("get/users")
        .then((res) => {
          let obj = []
          let aux = res.data
          for(let i=0;i<aux.length;i++){        
            obj.push({
              id: aux[i].id,
              label: aux[i].id_people.name + " " + aux[i].id_people.lastname,
            })        
          }
        setLoadedUsers(obj)
        })        
      },[])

    return (
        <FormContainer>
          <FormItem phone={12} computer={6}>
            <CustomAutocomplete label="Usuario"
                        hook={user}
                        setHook={setUser}
                        array_elements={loadedUsers}/>
          </FormItem>      
          <FormItem phone={12} computer={6}>
            <CustomAutocomplete label="Estado"
                        hook={planState}
                        setHook={SetPlanState}
                        array_elements={loadedUsers}/>
          </FormItem>      
        </FormContainer>
    )
}

export default FormActionSelector
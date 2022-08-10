import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomAutocomplete from '../../../components/Forms/CustomAutocomplete'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

const FormActionInitiative = ({ initiative, setInitiative }) => {

    const [loadedInitiatives, setLoadedInitiatives] = useState([])
  
    useEffect(()=>{
        axios.get("get/objectives/initiatives")
        .then((res) => {
          let obj = []
          let aux = res.data
          for(let i=0;i<aux.length;i++){            
            obj.push({
              id: aux[i].id,
              label: aux[i].id_objetives.name+' > '+aux[i].name
            })        
          }
          setLoadedInitiatives(obj)
        })        
      },[])

    return (
        <FormContainer>
          <FormItem phone={12} computer={12}>
            <CustomAutocomplete label="Iniciativa"
                        hook={initiative}
                        setHook={setInitiative}
                        array_elements={loadedInitiatives}/>
          </FormItem>            
        </FormContainer>
    )
}

export default FormActionInitiative


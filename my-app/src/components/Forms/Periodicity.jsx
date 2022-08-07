import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Selector } from './Selector';

export const Periodicity = ({ hook, setHook }) => {

  const [loadedPeriod, setLoadedPeriod] = useState([])

  useEffect(()=>{
    axios.get("/get/periodicities/")
    .then((res) => {
        setLoadedPeriod(res.data)
      //console.log(res.data)
    })  
  },[])
  

  return (
    <Selector
        idSelector="select-periodicity" 
        labelSelector="Frecuencia" 
        id="periodicity" 
        hook={hook} 
        setHook={setHook}
        array_elements={loadedPeriod}
        multiple
        />
  )
}

import React from 'react'
import { Selector } from './Selector';

export const Periodicity = ({ hook, setHook }) => {

  return (
    <Selector
        idSelector="select-periodicity" 
        labelSelector="Periodicidad" 
        id="periodicity" 
        hook={hook} 
        setHook={setHook}
        array_elements={["Mensual","Trimestral","Semestral","Anual"]}
        />
  )
}

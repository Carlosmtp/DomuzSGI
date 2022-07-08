import { Slider } from '@mui/material'
import React from 'react'

const CustomSlider = ({ id, setHook, maximo, valorPorDefecto, escala }) => {

  const handleChange = (event) => {
    setHook(parseFloat(event.target.value));
};

  return (
    <Slider name={id} size="small" defaultValue={valorPorDefecto} aria-label="Small" valueLabelDisplay='auto' color='secondary' onChange={handleChange} min={0} max={maximo} step={escala}/>
  )
}

export default CustomSlider
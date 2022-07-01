import { Slider } from '@mui/material'
import React from 'react'

const CustomSlider = ({ id, setHook }) => {

  const handleChange = (event) => {
    setHook(parseInt(event.target.value)/100);
};

  return (
    <Slider name={id} size="small" defaultValue={50} aria-label="Small" valueLabelDisplay='auto' color='secondary' onChange={handleChange}/>
  )
}

export default CustomSlider
import { Slider } from '@mui/material'
import React from 'react'

const CustomSlider = ({ id, setHook }) => {

  const handleChange = (event) => {
    setHook(event.target.value);
};

  return (
    <Slider name={id} size="small" defaultValue={50} aria-label="Small" valueLabelDisplay='auto' color='secondary' onChange={handleChange}/>
  )
}

export default CustomSlider
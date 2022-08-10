import { Slider, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

const CustomSlider = ({ id, hook, setHook, maximo, valorPorDefecto, escala, units }) => {

  const handleChange = (event) => {
    setHook(parseFloat(event.target.value));
};

  return (
    <Box>
      <Typography variant='h5' align='center'>{hook}{units}</Typography>
      <Slider name={id} size="small" defaultValue={valorPorDefecto} aria-label="Small" valueLabelDisplay='auto' color='secondary' onChange={handleChange} min={0} max={maximo} step={escala}/>
    </Box>
    
  )
}

export default CustomSlider
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export const Selector = ({ idSelector, labelSelector,
                        id, hook, setHook }) => {

    const handleChange = (event) => {
        setHook(event.target.value);
  };

  return (
    <FormControl variant="filled" fullWidth>
        <InputLabel id={idSelector}>{labelSelector}</InputLabel>
        <Select
            color="secondary"
            required            
            fullWidth
            labelId={idSelector}
            id={id}            
            name={id}                
            value={hook}
            onChange={handleChange}
            label={labelSelector}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>      
    </FormControl>
  )
}

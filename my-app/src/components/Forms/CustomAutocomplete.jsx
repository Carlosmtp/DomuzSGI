import { Autocomplete, FormControl, TextField } from '@mui/material'
import React from 'react'

const CustomAutocomplete = ({ label, hook, setHook, array_elements }) => {

    const handleChange = (event, newValue) => {
        setHook(newValue);
  };

  return (
    <FormControl variant="filled" fullWidth>
        <Autocomplete
            color="secondary"
            options={array_elements}
            renderInput={(params) => <TextField {...params} label={label} />}    
            value={hook}   
            isOptionEqualToValue={(option, value) =>
              value === undefined || value === "" || option.id === value.id
            }  
            onChange={handleChange}
        />     
    </FormControl>
  )
}

export default CustomAutocomplete
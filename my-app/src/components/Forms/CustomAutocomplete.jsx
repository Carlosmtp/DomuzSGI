import styled from '@emotion/styled';
import { Autocomplete, FormControl, TextField } from '@mui/material'
import React from 'react'

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: "translate(34px, 20px) scale(1);"
  },
  "& .MuiAutocomplete-inputRoot": {
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "primary"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0095ff"
    }
  }
});

const CustomAutocomplete = ({ label, hook, setHook, array_elements }) => {

    const handleChange = (event, newValue) => {
        setHook(newValue);
  };

  return (
    <FormControl variant="filled" fullWidth>
        <StyledAutocomplete
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
import { Box, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'

const actualDate = new Date().toISOString().substring(0, 10);

const FormActionDate = ({
  date, setDate

}) => {

const handleInputChange = ({target}) => {
  switch (target.id) {
      case "date":
        setDate(target.value)
          break;
      default:
          console.log("Necesitas crear el respectivo handleInput")
          break;
      }      
    }
    //<Stack spacing={2}>
  return (
      <FormContainer>
          <FormItem phone={12} computer={12}>
              <Box p={2} sx={{ border: 2, borderRadius: '16px', borderColor: 'secondary.main' }}>          
              <TextField
                    fullWidth
                    id="date"
                    color="secondary"
                    label="Fecha"
                    name="date"
                    type="date"
                    defaultValue={actualDate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                /> 
              </Box>
          </FormItem>                     
      </FormContainer>
  )
}

export default FormActionDate
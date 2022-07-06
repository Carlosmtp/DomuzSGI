import { AccountCircle } from '@mui/icons-material'
import { Box, InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'


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
                  <Stack spacing={2}>
                      <TextField
                          required
                          color="secondary"
                          id="date"
                          label="Fecha Limite"
                          name="date"                
                          value={date}
                          onChange={handleInputChange}
                          InputProps={{
                              startAdornment: (
                                  <InputAdornment position="start">
                                  <AccountCircle />
                                  </InputAdornment>)}}/>
                  </Stack>
              </Box>
          </FormItem>                     
      </FormContainer>
  )
}

export default FormActionDate
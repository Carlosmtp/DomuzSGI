
import { Grid, Typography } from '@mui/material'
//import { Button } from '@mui/material';
import React from 'react'
import CustomTable from '../../../components/Forms/CustomTable'

const InfoProcess = ( {title, description, id }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>   
        <Typography variant='h6' align='left' pb={2} >Nombre del Indicador</Typography> 
      </Grid> 
        <Grid item xs={12} sm={4} >   
            <CustomTable rows={[]} columns={
                      [
                        { field: 'weight', headerName: 'Peso', width: 75 },
                        { field: 'goal', headerName: 'Meta', width: 75 },
                        { field: 'periodicity', headerName: 'Periodicidad', width: 110  }]}
                      pageSize={1}
                      rowsPerPageOptions={25}
                      hideFooter={true}
                      height={180}
                    />
          </Grid> 
          <Grid item xs={12} sm={8} >   
            <CustomTable rows={[]} columns={
                      [
                        { field: 'jan', headerName: 'ENE', width: 17 },
                        { field: 'feb', headerName: 'FEB', width: 17 },
                        { field: 'mar', headerName: 'MAR', width: 17 },
                        { field: 'apr', headerName: 'ABR', width: 17 },
                        { field: 'may', headerName: 'MAY', width: 17 },
                        { field: 'jun', headerName: 'JUN', width: 17 },
                        { field: 'jul', headerName: 'JUL', width: 17 },
                        { field: 'ago', headerName: 'AGO', width: 17 },
                        { field: 'sep', headerName: 'SEP', width: 17 },
                        { field: 'oct', headerName: 'OCT', width: 17 },
                        { field: 'nov', headerName: 'NOV', width: 17 },
                        { field: 'dec', headerName: 'DEC', width: 17 }]}
                      pageSize={1}
                      rowsPerPageOptions={25}
                      hideFooter
                      height={180}
                    />
          </Grid>
    </Grid> 
  )
}
export default InfoProcess


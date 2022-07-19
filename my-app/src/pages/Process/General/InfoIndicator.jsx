
import { Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
//import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import CustomTable from '../../../components/Forms/CustomTable'
import { AppContext } from '../../../context/AppContext'

const InfoIndicator = ( { indicator }) => {
  let navigate = useNavigate() 

  const { setLastObject } = useContext(AppContext)

  const [user, setUser] = useState(indicator.userId)

  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("/get/periodic_records?year="+new Date().getFullYear()+"&indicator="+indicator.id)
    .then((res) => {
      let obj = [
        {id:'Esperado',jan:'',feb:'',mar:'',apr:'',may:'',jun:'',jul:'',ago:'',sep:'',oct:'',nov:'',dec:''},
        {id:'Real',jan:'',feb:'',mar:'',apr:'',may:'',jun:'',jul:'',ago:'',sep:'',oct:'',nov:'',dec:''}]//,{}]
      let aux = res.data
      //console.log('aux',aux[0].record_date.substring(5, 7))
      
      for (let i = 0; i < 1; i++) {
        switch (aux[i].record_date.substring(5, 7)) {
          case '07':
            //esperado
            obj[0].jul = aux[i].expected_value
            //real
            obj[1].jul = aux[i].archieved_value
            //eficiencia
            //obj[2] = { ...obj[2], jul:aux[i].expected_value}
            break;
          
          default:
            break;
        }            
      /*
        obj.push({
          id: i+1,
          person_id: aux[i].id_people.person_id,
          firstName: aux[i].id_people.name,
          lastName: aux[i].id_people.lastname,
          rol: aux[i].id_roles.name,
          mail: aux[i].id_people.mail,
          phone: aux[i].id_people.phone
        })  
        */              
      }
      console.log("obj", obj)
      setRows(obj)
      setloading(false)
      //console.log(res.data.length)
    })
    
    axios.get("get/user?user_id="+indicator.userId).then((res)=>{
      //console.log(res)
      setUser(res.data)
    })
    //si algo se daña quita userId del array
  },[indicator.userId,indicator.id])

  return (
    <Grid container spacing={2} pt={1} pb={2}>
      <Grid item xs={12} sm={12}>   
        <Typography variant='h6' align='left' >{indicator.name}</Typography> 
        <Typography align='left' pb={1}>Asignado: {user.name}</Typography> 
        <Button onClick={()=>{
          setLastObject(indicator)
          navigate('/app/actualizar/indicador-de-proceso')
          }}
          variant="contained"
          color='secondary'
          > Editar Indicador </Button>
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
                      loading={loading}
                    />
          </Grid> 
          <Grid item xs={12} sm={8} >
            <CustomTable rows={rows} columns={
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
                      pageSize={3}
                      rowsPerPageOptions={25}
                      hideFooter
                    />
          </Grid>
    </Grid> 
  )
}
export default InfoIndicator



import { Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
//import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import CustomAvatar from '../../../components/CustomAvatar'
import CustomTable from '../../../components/Forms/CustomTable'
import { AppContext } from '../../../context/AppContext'

const InfoIndicator = ( { indicator }) => {
  let navigate = useNavigate()
  const { setLastObject } = useContext(AppContext)

  const [user, setUser] = useState(indicator.userId)

  const [rows,setRows] = useState([])
  const [infoRows,setInfoRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("/get/periodic_records?year="+new Date().getFullYear()+"&indicator="+indicator.id)
    .then((res) => {
      let obj = [
        {id:'Esperado',jan:'',feb:'',mar:'',apr:'',may:'',jun:'',jul:'',ago:'',sep:'',oct:'',nov:'',dec:''},
        {id:'Real',jan:'',feb:'',mar:'',apr:'',may:'',jun:'',jul:'',ago:'',sep:'',oct:'',nov:'',dec:''},
        {id:'Eficiencia',jan:'',feb:'',mar:'',apr:'',may:'',jun:'',jul:'',ago:'',sep:'',oct:'',nov:'',dec:''}]//,{}]
      let aux = res.data      
      if(aux !== []){
        for (let i = 0; i < aux.length; i++) {
          switch (aux[i].record_date.substring(5, 7)) {
            case '01':
              //esperado
              obj[0].jan = aux[i].expected_value
              //real
              obj[1].jan = aux[i].archieved_value
              //eficiencia
              obj[2].jan = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '02':
              //esperado
              obj[0].feb = aux[i].expected_value
              //real
              obj[1].feb = aux[i].archieved_value
              //eficiencia
              obj[2].feb = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '03':
              //esperado
              obj[0].mar = aux[i].expected_value
              //real
              obj[1].mar = aux[i].archieved_value
              //eficiencia
              obj[2].mar = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '04':
              //esperado
              obj[0].apr = aux[i].expected_value
              //real
              obj[1].apr = aux[i].archieved_value
              //eficiencia
              obj[2].apr = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '05':
              //esperado
              obj[0].may = aux[i].expected_value
              //real
              obj[1].may = aux[i].archieved_value
              //eficiencia
              obj[2].may = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '06':
              //esperado
              obj[0].jun = aux[i].expected_value
              //real
              obj[1].jun = aux[i].archieved_value
              //eficiencia
              obj[2].jun = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '07':
              //esperado
              obj[0].jul = aux[i].expected_value
              //real
              obj[1].jul = aux[i].archieved_value
              //eficiencia
              obj[2].jul = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '08':
              //esperado
              obj[0].ago = aux[i].expected_value
              //real
              obj[1].ago = aux[i].archieved_value
              //eficiencia
              obj[2].ago = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '09':
              //esperado
              obj[0].sep = aux[i].expected_value
              //real
              obj[1].sep = aux[i].archieved_value
              //eficiencia
              obj[2].sep = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '10':
              //esperado
              obj[0].oct = aux[i].expected_value
              //real
              obj[1].oct = aux[i].archieved_value
              //eficiencia
              obj[2].oct = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '11':
              //esperado
              obj[0].nov = aux[i].expected_value
              //real
              obj[1].nov = aux[i].archieved_value
              //eficiencia
              obj[2].nov = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            case '12':
              //esperado
              obj[0].dec = aux[i].expected_value
              //real
              obj[1].dec = aux[i].archieved_value
              //eficiencia
              obj[2].dec = aux[i].archieved_value / aux[i].expected_value * 100 + "%"
              break;
            default:
              break;
          }                  
        }        
      }
      //console.log("obj", obj)
      setRows(obj)
      setloading(false)
      //console.log(res.data.length)
    })
    
    axios.get("get/user?user_id="+indicator.userId).then((res)=>{
      //console.log(res)
      setUser(res.data)
    })

    axios.get("/get/last_record?indicator_id="+indicator.id).then((res)=>{
      let aux = res.data      
      let obj = [{
        id:1,
        weight : aux.weight,
        goal : aux.goal,
        periodicity : ''
      }]
      setInfoRows(obj)
      console.log(res.data)
      //setUser(res.data)
    })
    
    //si algo se daña quita userId del array
  },[indicator.userId,indicator.id])

  return (
    <Grid container spacing={2} pt={1} pb={2}>
      <Grid item xs={12} sm={12}>   
        <Typography variant='h6' align='left' >{indicator.name}</Typography> 
        
        
      </Grid> 
        <Grid item xs={12} sm={2} align='center'>
              <CustomAvatar id={user.rol} size={120}/>
              <Typography variant='h5' pt={1}>{user.name}</Typography> 
            </Grid>        
        <Grid item xs={12} sm={8} >   
            <CustomTable rows={infoRows} columns={
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
          <Grid item xs={12} sm={2} align='center'>
            <Button onClick={()=>{
              setLastObject(indicator)
              navigate('/app/actualizar/indicador-de-proceso')
              }}
              variant="contained"
              color='secondary'
              > Editar Indicador </Button>
            </Grid>
          
          <Grid item xs={12} sm={12} >
            <CustomTable rows={rows} columns={
                      [
                        { field: 'id', headerName: '', width: 100 },
                        { field: 'jan', headerName: 'ENE', width: 80 },
                        { field: 'feb', headerName: 'FEB', width: 80 },
                        { field: 'mar', headerName: 'MAR', width: 80 },
                        { field: 'apr', headerName: 'ABR', width: 80 },
                        { field: 'may', headerName: 'MAY', width: 100 },
                        { field: 'jun', headerName: 'JUN', width: 80 },
                        { field: 'jul', headerName: 'JUL', width: 80 },
                        { field: 'ago', headerName: 'AGO', width: 80 },
                        { field: 'sep', headerName: 'SEP', width: 80 },
                        { field: 'oct', headerName: 'OCT', width: 80 },
                        { field: 'nov', headerName: 'NOV', width: 80 },
                        { field: 'dec', headerName: 'DEC', width: 80 }]}
                      pageSize={3}
                      rowsPerPageOptions={25}
                      hideFooter
                    />
          </Grid>
    </Grid> 
  )
}
export default InfoIndicator


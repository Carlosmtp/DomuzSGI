import React, { useContext, useEffect } from "react";
import { Box, Grid, Paper, Typography } from '@mui/material';
import { ArgumentAxis, ValueAxis, Chart, BarSeries } from '@devexpress/dx-react-chart-material-ui';
import axios from "axios";
import { useState } from "react";
import CustomTable from "../../../components/Forms/CustomTable";
import { AppContext } from "../../../context/AppContext";
  
  
const Report = () => {

  const { processes } = useContext(AppContext)

  const [data,setData] = useState ([])
  const [rows,setRows] = useState([])  
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("get/reports?year=2022")
    .then((res) => {
      let obj = [[],[],[],[],[],[],[],[],[],[],[],[]]
      let aux = res.data
      let months = [
        { argument: 'Ene', value: 0 },
        { argument: 'Feb', value: 0 },
        { argument: 'Mar', value: 0 },
        { argument: 'Abr', value: 0 },
        { argument: 'May', value: 0 },
        { argument: 'Jun', value: 0},
        { argument: 'Jul', value: 0},
        { argument: 'Ago', value: 0},
        { argument: 'Sep', value: 0},
        { argument: 'Oct', value: 0},
        { argument: 'Nov', value: 0},
        { argument: 'Dic', value: 0}
      ]
      //console.log(aux[0].efficiency)
      for (let i = 0; i < aux.length; i++) {
        switch (aux[i].date.substring(5,7)) {
          case '01':
            obj[0].push(aux[i].efficiency)
            break;
          case '02':
            obj[1].push(aux[i].efficiency)
            break;
          case '03':
            obj[2].push(aux[i].efficiency)
            break;
          case '04':
            obj[3].push(aux[i].efficiency)
            break;
          case '05':
            obj[4].push(aux[i].efficiency)
            break;
          case '06':
            obj[5].push(aux[i].efficiency)
            break;
          case '07':
            obj[6].push(aux[i].efficiency)
            break;
          case '08':
            obj[7].push(aux[i].efficiency)
            break;
          case '09':
            obj[8].push(aux[i].efficiency)
            break;
          case '10':
            obj[9].push(aux[i].efficiency)
            break;
          case '11':
            obj[10].push(aux[i].efficiency)
            break;
          case '12':
            obj[11].push(aux[i].efficiency)
            break;
          default:
            break;
        }                
      }
      for (let i = 0; i < obj.length; i++) {
        let ac = 0
        for (let j = 0; j < obj[i].length; j++) {              
          ac = ac + obj[i][j]
        }            
        obj[i] = obj[i].length > 0 ? ac/obj[i].length : 0
        //Maybe remove
        months[i].value = obj[i]
      }
      setData(months)
      console.log(obj)
    })                     

    let mat = []
    for (let i = 0; i < processes.length; i++) {
      mat = mat.concat({id:processes[i].id, name:processes[i].name ,jan:'',feb:'',mar:'',apr:'',may:'',jun:'',jul:'',ago:'',sep:'',oct:'',nov:'',dec:''})    
    }

    axios.get("get/reports?year="+new Date().getFullYear())
    .then((res) => {
      let aux = res.data 
      for (let i = 0; i < aux.length; i++) {
        for (let j = 0; j < processes.length; j++) {
          if (aux[i].processId === processes[j].id) {
            switch (aux[i].date.substring(5, 7)) {
              case '01':
                mat[j].jan = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '02':
                mat[j].feb = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '03':
                mat[j].mar = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '04':
                mat[j].apr = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '05':
                mat[j].may = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '06':
                mat[j].jun = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '07':
                mat[j].jul = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '08':
                mat[j].ago = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '09':
                mat[j].sep = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '10':
                mat[j].oct = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '11':
                mat[j].nov = Math.round(aux[i].efficiency*100)+"%"
                break;
              case '12':
                mat[j].dec = Math.round(aux[i].efficiency*100)+"%"
                break;
              default:
                break;
            }
          }          
        }        
      }    
      setRows(mat)
      setloading(false)
    })
  },[])

  const columns = [
    { field: 'name', headerName: 'Proceso', width: 190 },
    { field: 'jan', headerName: 'ENE', width: 70 },
    { field: 'feb', headerName: 'FEB', width: 70 },
    { field: 'mar', headerName: 'MAR', width: 70 },
    { field: 'apr', headerName: 'ABR', width: 70 },
    { field: 'may', headerName: 'MAY', width: 70 },
    { field: 'jun', headerName: 'JUN', width: 70 },
    { field: 'jul', headerName: 'JUL', width: 70 },
    { field: 'ago', headerName: 'AGO', width: 70 },
    { field: 'sep', headerName: 'SEP', width: 70 },
    { field: 'oct', headerName: 'OCT', width: 70 },
    { field: 'nov', headerName: 'NOV', width: 70 },
    { field: 'dec', headerName: 'DIC', width: 70 },
  ];

return (
      <Grid>
        <Typography><br/></Typography>
        <Typography variant="h6" pb={3} color='secondary'>Resultados del año</Typography>
        <Box p={2} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent', boxShadow: 2 }}>  
          <CustomTable
              columns={columns}
              rows={rows}
              setRows={setRows}
              pageSize={processes.length}
              rowsPerPageOptions={processes.length}
              loading={loading}
              hideFooter={true}/>
        </Box>        
        <Typography><br/></Typography>
        <Typography><br/></Typography>
        <Typography variant="h6" pb={3} color='secondary'>Gráfica</Typography>
        <Box p={2} sx={{ border: 1, borderRadius: '16px', backgroundColor: 'background.default', borderColor: 'transparent', boxShadow: 2 }}>  
          <Chart
            data={data}>
            <ArgumentAxis />
            <ValueAxis />  
            <BarSeries valueField="value" argumentField="argument" />
          </Chart>
        </Box>
      </Grid>
);
}
  
export default Report;
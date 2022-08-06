import React, { useEffect } from "react";
import { Paper } from '@mui/material';
import { ArgumentAxis, ValueAxis, Chart, BarSeries } from '@devexpress/dx-react-chart-material-ui';
import axios from "axios";
import { useState } from "react";
  
  
const Report = () => {

  const [data,setData] = useState ([])

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
  },[])

return (
    <Paper>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
);
}
  
export default Report;
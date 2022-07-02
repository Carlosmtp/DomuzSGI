import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
const axios = require('axios').default;

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Nombre', width: 130 },
];

const Objectives = () => {

  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("http://localhost:6464/get/objectives")
    .then((res) => {
      let obj = []
      let aux = res.data
      console.log(aux)
      for(let i=0;i<aux.length;i++){
        obj.push({
          id: aux[i].id,
          name: aux[i].name,
        })        
      }
      console.log(obj)
      setRows(obj)
      setloading(false)
      //console.log(res.data.length)
    })        
  },[])

  if(loading){
    return (
    <LinearProgress color="secondary" />
  )}
  else{
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
  }
}

export default Objectives
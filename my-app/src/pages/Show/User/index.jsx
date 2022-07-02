import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
const axios = require('axios').default;

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'rol', headerName: 'Rol', width: 130 },
  { field: 'mail', headerName: 'Mail', width: 180 },
  { field: 'phone', headerName: 'Phone', width: 130 },
];

const User = () => {

  const [rows,setRows] = useState()
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("http://localhost:6464/get/users")
    .then((res) => {
      let obj = []
      let aux = res.data
      console.log(aux[0])
      for(let i=0;i<aux.length;i++){
        obj.push({
          id: aux[i].id_people.person_id,
          firstName: aux[i].id_people.name,
          lastName: aux[i].id_people.lastname,
          rol: aux[i].id_roles.name,
          mail: aux[i].id_people.mail,
          phone: aux[i].id_people.phone
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
    
    <div style={{ height: 1200, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        checkboxSelection
      />
    </div>
  )
  }
}

export default User
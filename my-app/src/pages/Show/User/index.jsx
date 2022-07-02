import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
import CustomTable from '../../../components/Forms/CustomTable';
const axios = require('axios').default;

const columns = [
  { field: 'person_id', headerName: 'Identificación', width: 150 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'rol', headerName: 'Rol', width: 130 },
  { field: 'mail', headerName: 'Mail', width: 180 },
  { field: 'phone', headerName: 'Phone', width: 130 },
];

const User = () => {

  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("get/users")
    .then((res) => {
      let obj = []
      let aux = res.data
      console.log(aux[0])
      for(let i=0;i<aux.length;i++){
        obj.push({
          id: i+1,
          person_id: aux[i].id_people.person_id,
          firstName: aux[i].id_people.name,
          lastName: aux[i].id_people.lastname,
          rol: aux[i].id_roles.name,
          mail: aux[i].id_people.mail,
          phone: aux[i].id_people.phone
        })        
      }
      //console.log(obj)
      setRows(obj)
      setloading(false)
      //console.log(res.data.length)
    })        
  },[])

  return ( 
      <CustomTable
        columns={columns}
        rows={rows}
        setRows={setRows}
        pageSize={5}
        rowsPerPageOptions={5}
        height={1200}
        loading={loading}
        editButton={true}/>        
  )
  
}

export default User
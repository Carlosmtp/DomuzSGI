import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
const axios = require('axios').default;

/*
const ocolumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const orows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
*/

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

export default User
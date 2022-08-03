import React, { useEffect, useState } from 'react'
import CustomTable from '../../../components/Forms/CustomTable';
import { useNavigate } from 'react-router';
const axios = require('axios').default;

const columns = [
  { field: 'person_id', headerName: 'Identificación', width: 150 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'lastname', headerName: 'Last name', width: 130 },
  { field: 'rol', headerName: 'Rol', width: 130 },
  { field: 'mail', headerName: 'Mail', width: 180 },
  { field: 'phone', headerName: 'Phone', width: 130 },
];

const User = () => {

  let navigate = useNavigate();

  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  const update = () =>{
    navigate("/app/actualizar/usuario")
  }

  useEffect(()=>{
    axios.get("get/users")
    .then((res) => {
      let obj = []
      let aux = res.data
      //console.log(aux[0])
      for(let i=0;i<aux.length;i++){
        obj.push({
          id: aux[i].id,
          person_id: aux[i].id_people.person_id,
          name: aux[i].id_people.name,
          lastname: aux[i].id_people.lastname,
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
        pageSize={100}
        rowsPerPageOptions={100}
        loading={loading}
        editButton={true}
        editFunction={update}
        checkboxSelection={true}/>        
  )  
}

export default User
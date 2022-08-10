import React, { useEffect, useState } from 'react'
import CustomTable from '../../../components/Forms/CustomTable';
import { useNavigate } from 'react-router';
const axios = require('axios').default;

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Nombre', width: 150 },
  { field: 'nit', headerName: 'NIT', width: 250 },
];

const Companies = () => {

  let navigate = useNavigate();

  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  const update = () =>{
    navigate("/app/actualizar/empresa")
  }

  useEffect(()=>{
    axios.get("/get/companies")
    .then((res) => {
      let obj = []
      let aux = res.data
      console.log(aux)
      for(let i=0;i<aux.length;i++){
        obj.push({
          id: aux[i].id,
          name: aux[i].name,
          nit: aux[i].nit,
        })        
      }
      setRows(obj)
      setloading(false)
    })        
  },[])

  return (    
      <CustomTable
        columns={columns}
        rows={rows}
        setRows={setRows}
        pageSize={5}
        rowsPerPageOptions={5}
        loading={loading}
        editButton={true}
        editFunction={update}
        checkboxSelection={true}/>
  )
  
}

export default Companies
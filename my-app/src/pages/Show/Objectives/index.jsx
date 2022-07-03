import React, { useEffect, useState } from 'react'
import CustomTable from '../../../components/Forms/CustomTable';
const axios = require('axios').default;

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Nombre', width: 130 },
];

const Objectives = () => {

  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  useEffect(()=>{
    axios.get("get/objectives")
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
        loading={loading}
        editButton={true}
        checkboxSelection={true}/>
  )
  
}

export default Objectives
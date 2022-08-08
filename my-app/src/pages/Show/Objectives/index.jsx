import React, { useEffect, useState } from 'react'
import CustomTable from '../../../components/Forms/CustomTable';
import { useNavigate } from 'react-router';
const axios = require('axios').default;

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Nombre', width: 260 },
  { field: 'description', headerName: 'Descripción', width: 615 }
];

const Objectives = () => {

  let navigate = useNavigate();

  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  const update = () =>{
    navigate("/app/actualizar/objetivo")
  }

  useEffect(()=>{
    axios.get("get/objectives")
    .then((res) => {
      let obj = []
      let aux = res.data
      console.log(aux)
      for(let i=0;i<aux.length;i++){
        obj.push({
          id: i+1,
          objective_id: aux[i].id,
          name: aux[i].name,
          description: aux[i].description,
          prespectiveId: aux[i].prespectiveId,
          indicators: aux[i].indicators,
          initiatives: aux[i].initiatives    
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

export default Objectives
import React, { useEffect, useState } from 'react'
import CustomTable from '../../../components/Forms/CustomTable';
import { useNavigate } from 'react-router';
const axios = require('axios').default;

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Nombre', width: 150 },
  { field: 'description', headerName: 'Descripción', width: 250 },
  { field: 'user', headerName: 'Responsable', width: 100 },
  { field: 'state', headerName: 'Estado', width: 100 },
];

const ActionPlan = () => {

  let navigate = useNavigate();

  const [rows,setRows] = useState([])
  const [loading,setloading] = useState(true)

  const update = () =>{
    navigate("/app/actualizar/plan")
  }

  const delete_row = (pln) => {
    console.log(pln.id_plan)
    axios.delete("/delete/action_plan?id="+pln.id_plan).then((res) => {
      console.log('res',res)
    }) 
  }

  useEffect(()=>{
    axios.get("/get/action_plans")
    .then((res) => {
      let obj = []
      let aux = res.data
      for(let i=0;i<aux.length;i++){
        obj.push({
          id: i+1,
          id_plan: aux[i].id,
          name: aux[i].name,
          description: aux[i].description,
          delivery_date: aux[i].delivery_date,
          initiativeId: aux[i].initiativeId,
          userId: aux[i].userId,
          state: aux[i].stateId,            
        })        
      }
      setRows(obj)
      setloading(false)
    })        
  },[rows])

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
        checkboxSelection={true}
        deleteButton={true}
        deleteFunction={delete_row}
        />
  )
  
}

export default ActionPlan
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'objective', headerName: 'Objetivo', width: 130 },
    { field: 'periodicity', headerName: 'Periodicidad', width: 130 },
    { field: 'weight', headerName: 'Peso', width: 130 },
    { field: 'inCharge', headerName: 'Persona a cargo', width: 180 },
    { field: 'user', headerName: 'Usuario', width: 130 },
  ];

const TableIndicator = ({ table }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={table}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default TableIndicator
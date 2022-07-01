import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'



const CustomTable = ({ columns, rows, setRows }) => {

  const [selectionModel, setSelectionModel] = React.useState([]);
  columns = columns.concat(
    {
      field: "delete",
      width: 60,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
              const selectedIDs = new Set(selectionModel);
              setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
            }}
          >
            <DeleteIcon />
          </IconButton>
        );
      }
    }
  )

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}        
        checkboxSelection
        onSelectionModelChange={(ids) => {
        setSelectionModel(ids);
      }}
      />
    </div>
  )
}

export default CustomTable
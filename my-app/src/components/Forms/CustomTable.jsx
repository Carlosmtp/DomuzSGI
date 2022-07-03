import { Alert, IconButton, Snackbar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react'



const CustomTable = ({ columns, rows, setRows, loading, deleteButton, editButton, pageSize, rowsPerPageOptions, checkboxSelection, hideFooter }) => {

  const [select, setSelect] = useState([]);

  //Si puede eliminar
  if(deleteButton){
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
                const selectedIDs = new Set(select);
                setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
              }}
            >
              <DeleteIcon />
            </IconButton>
          );
        }
      }
    )
  }  

  //Si se puede editar
  if (editButton) {
    columns = columns.concat(
      {
        field: "editar",
        width: 60,
        sortable: false,
        disableColumnMenu: true,
        renderHeader: () => {
          return (
            <IconButton
              onClick={() => {    
                if(select.length > 1){
                  setOpen(true)
                  setSeverity("error")
                  setValidationMsg('Solo puedes modificar 1 fila a la vez. Seleccionadas: '+select.length)
                }else{
                //Siempre debe empezar con un id desde 1
                console.log("select",select)            
                console.log("selected",rows[select[0]-1])
                }
              }}
            >
              <EditIcon />
            </IconButton>
          );
        }
      }
    )
  }

  //Validation
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('error');
  const [validationMsg, setValidationMsg] = useState('');
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}>
              {validationMsg}
        </Alert>
      </Snackbar>
      <DataGrid
      autoHeight
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[rowsPerPageOptions]}   
        checkboxSelection={checkboxSelection}
        hideFooter={hideFooter}
        onSelectionModelChange={(ids) => {
        setSelect(ids);
        loading={loading}        
      }}
      />
    </div>
  )
}

export default CustomTable
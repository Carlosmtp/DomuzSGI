import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Snackbar, TextField } from '@mui/material';


import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react'
//import styled from '@emotion/styled';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';

/*
const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
  root:{
    "& .MuiDataGrid-renderingZone" : {
      "& .MuiDataGrid-row": {
        "&:nth.child(2n)": {
          backgroundColor: "rgba(235, 235, 235, 0.7)"
        }
      }
    }
  }
}));

*/
const CustomTable = ({ 
                      columns,
                      rows, setRows,
                      loading,
                      deleteButton, editButton,
                      pageSize, rowsPerPageOptions,
                      checkboxSelection,
                      hideFooter, editFunction, deleteFunction }) => {

  const { setLastObject } = useContext(AppContext)

  const [select, setSelect] = useState([]);
  const [confirm, setConfirm] = useState('')

  const handleInputChange = ({target}) => {
    switch (target.id) {
        case "confirm":
                setConfirm(target.value)
            break;
      default:
        console.log("Necesitas crear el respectivo handleInput")
        break;
    }      
  }

  const deleteFeedback = () => {
    if(confirm === 'CONFIRMAR'){
        deleteFunction(rows[select[0]-1])
        const selectedIDs = new Set(select);
        setRows((r) => r.filter((x) => !selectedIDs.has(x.id)))
        handleCloseDialog()
        setConfirm('')
      }
      else{
        setOpen(true)
        setSeverity("error")
        setValidationMsg('Por favor escriba CONFIRMAR para continuar.')
      }
  }

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
                if(deleteFunction !== undefined){
                  if(select.length === 0){
                    setOpen(true)
                    setSeverity("error")
                    setValidationMsg('Por favor seleccione la fila que desea eliminar')
                  }else{
                    if(select.length > 1){
                      setOpen(true)
                      setSeverity("error")
                      setValidationMsg('Solo puedes eliminar 1 fila a la vez. Seleccionadas: '+select.length)
                    }else{
                    //Siempre debe empezar con un id desde 1
                    if(rows.length === 1){
                      setOpen(true)
                      setSeverity("error")
                      setValidationMsg('Debe existir al menos un existir un item.')
                    }else{
                      setOpenDialog(true)
                      console.log(rows[select[0]-1].name)
                    }                    
                    }
                  }                  
                }else{
                  if(select.length === 0){
                    setOpen(true)
                    setSeverity("error")
                    setValidationMsg('Por favor seleccione la fila que desea eliminar')
                  }else{
                    const selectedIDs = new Set(select);
                    setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
                  }                  
                }                
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
                if(select.length === 0){
                  setOpen(true)
                  setSeverity("error")
                  setValidationMsg('Por favor seleccione la fila que desea modificar')
                }else{
                  if(select.length > 1){
                    setOpen(true)
                    setSeverity("error")
                    setValidationMsg('Solo puedes modificar 1 fila a la vez. Seleccionadas: '+select.length)
                  }else{
                  //Siempre debe empezar con un id desde 1
                  setLastObject(rows[select[0]-1])
                  editFunction()
                  //console.log("select",select)            
                  //console.log("selected",rows[select[0]-1])
                  }
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
  const [openDialog, setOpenDialog] = useState(false);
  const [severity, setSeverity] = useState('error');
  const [validationMsg, setValidationMsg] = useState('');
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleCloseDialog = (event, reason) => {
    setOpenDialog(false);
  };
  return (
    <div style={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          variant="filled"
          onClose={()=>{setOpenDialog(false)}}
          severity={severity}
          sx={{ width: "100%" }}>
              {validationMsg}
        </Alert>
      </Snackbar>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>¿Estás seguro que deseas eliminar {rows[select[0]-1] !== undefined ? rows[select[0]-1].name : ''}?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escribe "CONFIRMAR" abajo, luego presiona "Eliminar permanentemente" para remover de la base de datos.
          </DialogContentText>
          <DialogContentText pt={1}>
            Esta acción no se puede deshacer.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="confirm"
            color="secondary"
            onChange={handleInputChange}
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="secondary" onClick={deleteFeedback}>Eliminar permanentemente</Button>
        </DialogActions>
      </Dialog>
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
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            borderColor: 'background.light',
          },          
          '& .MuiCheckbox-root.Mui-checked.MuiCheckbox-indeterminate': {
            color: 'secondary.light',
          },
          '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate)  ': {
            color: 'secondary.main',
          },          
        }}
      />
    </div>
  )
}

export default CustomTable
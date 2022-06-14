import { AccountCircle, DriveFileRenameOutline } from '@mui/icons-material'
import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

const FormProyect = ({ name, setName,
                        proyectId, setProyectId,
                        users, setUsers,
                        companies, setCompanies,
                        projectStates, setProjectStates,
                        portfolios, setPortfolios,
                        longitude, setLongitude,
                        latitude, setLatitude,
                    }) => {

const handleInputChange = ({target}) => {
    switch (target.id) {
        case "name":
            setName(target.value)
            break;
        case "proyectId":
            setProyectId(target.value)
            break;
        case "users":
            setUsers(target.value)
            break;
        case "companies":
            setCompanies(target.value)
            break;
        case "projectStates":
            setProjectStates(target.value)
            break;
        case "portfolios":
            setPortfolios(target.value)
            break;
        case "longitude":
            setLongitude(target.value)
            break;
        case "latitude":
            setLatitude(target.value)
            break;
          default:
            console.log("Necesitas crear el respectivo handleInput")
            break;
        }      
      }
      //<Stack spacing={2}>
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Box p={4}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="name"
                            label="Nombre"
                            name="name"                
                            value={name}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>)}}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="proyectId"
                            label="Identificación del Proyecto"
                            name="proyectId"                
                            value={proyectId}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <DriveFileRenameOutline />
                                </InputAdornment>)}}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="users"
                            label="Usuarios"
                            name="users"                
                            value={users}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>)}}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="companies"
                            label="Empresas"
                            name="companies"                
                            value={companies}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <DriveFileRenameOutline />
                                </InputAdornment>)}}/>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box p={4}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="projectStates"
                            label="Estados del Proyecto"
                            name="projectStates"                
                            value={projectStates}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>)}}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="portfolios"
                            label="Portafolios"
                            name="portfolios"                
                            value={portfolios}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <DriveFileRenameOutline />
                                </InputAdornment>)}}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="longitude"
                            label="Longitud"
                            name="longitude"                
                            value={longitude}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>)}}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="latitude"
                            label="Latitud"
                            name="latitude"                
                            value={latitude}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <DriveFileRenameOutline />
                                </InputAdornment>)}}/>
                    </Grid>
                </Box>   
            </Grid>                      
        </Grid>
    )
}

export default FormProyect
import { AccountCircle, DriveFileRenameOutline } from '@mui/icons-material'
import { FormControl, InputAdornment, InputLabel, Select, Stack, TextField } from '@mui/material'
import React from 'react'
import FormContainer from '../../../components/Forms/FormContainer'
import FormItem from '../../../components/Forms/FormItem'
import { Selector } from '../../../components/Forms/Selector'

const FormProyect = ({ name, setName,
                        proyectId, setProyectId,
                        leader, setLeader,
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
        case "leader":
            setLeader(target.value)
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
        <FormContainer>
            <FormItem phone={12} computer={6}>
                <Stack spacing={2}>
                        <TextField
                            required
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
                        <TextField
                            disabled
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

                        <Selector idSelector="select-leader" labelSelector="Líder" id="leader" hook={leader} setHook={setLeader}/>
                        
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="select-company">Empresas</InputLabel>
                            <Select
                                required
                                labelId="select-company"
                                id="companies"
                                label="Empresas"
                                name="companies"                
                                value={companies}
                                onChange={handleInputChange}
                                />
                        </FormControl>
                </Stack>
            </FormItem>
            <FormItem phone={12} computer={6}>
                <Stack spacing={2}>
                       <TextField
                            required
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
                        <TextField
                            required
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
                        <TextField
                            required
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
                        <TextField
                            required
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
                    </Stack>   
                </FormItem>                     
        </FormContainer>
    )
}

export default FormProyect
import { AccountCircle, DriveFileRenameOutline } from '@mui/icons-material'
import { InputAdornment, Stack, TextField } from '@mui/material'
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
                            color="secondary"
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
                            color="secondary"
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

                        <Selector 
                            idSelector="select-leader" 
                            labelSelector="Líder" 
                            id="leader" 
                            hook={leader} 
                            setHook={setLeader}/>
                        
                        <Selector 
                            idSelector="select-company" 
                            labelSelector="Empresas" 
                            id="companies" 
                            hook={companies} 
                            setHook={setCompanies}/>
                        
                </Stack>
            </FormItem>
            <FormItem phone={12} computer={6}>
                <Stack spacing={2}>
                    <Selector 
                        idSelector="select-projectStates" 
                        labelSelector="Estados del Proyecto" 
                        id="projectStates" 
                        hook={projectStates} 
                        setHook={setProjectStates}/>

                    <Selector 
                        idSelector="select-portfolios" 
                        labelSelector="Portafolios" 
                        id="portfolios" 
                        hook={portfolios} 
                        setHook={setPortfolios}/>
                            
                    <TextField
                        required
                        color="secondary"
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
                        color="secondary"
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
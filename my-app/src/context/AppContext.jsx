import { LinearProgress } from "@mui/material";
import React, { useState, createContext, useEffect } from "react";
import axios from 'axios';
const config = require("./config");
axios.defaults.baseURL = config.API_URL;
export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [login, setLogin] = useState('Usuario no identificado, volver a login.')
    const [isDarkTheme, setIsDarkTheme] = useState(true)

    const [processes, setProcesses] = useState()//Array de Objetos
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        axios.get("get/processes")
        .then((res) => {
          console.log(res.data)
          //setName(res.data[0].name)
          //setDescription(res.data[0].description)

          setloading(false)
          setProcesses(res.data)
        })        
      },[])

      
    if(loading){
        return (
        <LinearProgress  />
    )}
    else{
    return (
        <AppContext.Provider value={{ 
            login,
            setLogin,
            isDarkTheme,
            setIsDarkTheme,
            processes,
            setProcesses }}>
            { children }
        </AppContext.Provider>
    )
}
}
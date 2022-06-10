import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [login, setLogin] = useState('Usuario no identificado, volver a login')
    const [mode, setMode] = useState('dark')
    return (
        <AppContext.Provider value={{ 
            login,
            setLogin,
            mode,
            setMode }}>
            { children }
        </AppContext.Provider>
    )
}
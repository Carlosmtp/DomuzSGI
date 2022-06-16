import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [login, setLogin] = useState('Usuario no identificado, volver a login')
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    return (
        <AppContext.Provider value={{ 
            login,
            setLogin,
            isDarkTheme,
            setIsDarkTheme }}>
            { children }
        </AppContext.Provider>
    )
}
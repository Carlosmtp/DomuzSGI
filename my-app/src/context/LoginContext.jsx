import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [login, setLogin] = useState('fuera')

    return (
        <LoginContext.Provider value={{ 
            login,
            setLogin }}>
            { children }
        </LoginContext.Provider>
    )
}
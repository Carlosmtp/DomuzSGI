import { createTheme } from "@mui/material";
import React, { useState, createContext } from "react";

export const ModeContext = createContext();

const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#0095ff',
      },
      info: {
        main: '#f50057',
      },
    },
  })

export const ModeProvider = ({ children }) => {

    const [mode, setMode] = useState(darkTheme)

    return (
        <ModeContext.Provider value={{ 
            mode,
            setMode }}>
            { children }
        </ModeContext.Provider>
    )
}
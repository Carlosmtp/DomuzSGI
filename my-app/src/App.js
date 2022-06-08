import React, { useState, createContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { createTheme,ThemeProvider } from '@mui/material';

import Menu from './pages/Menu/IMenu';
import Login from './pages/Login/ILogin';
import ModeContext from './context/ModeContext';

const App = () => {

  const [mode,setMode] = useState('dark')

const darkTheme = createTheme({
  palette: {
    mode: mode,
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

  return (
    <ModeContext.Provider value={mode}>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/test" element={<Menu />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ModeContext.Provider>
  )
}

export default App
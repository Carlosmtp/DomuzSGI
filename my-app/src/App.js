import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { createTheme,ThemeProvider } from '@mui/material';

import Menu from './pages/Menu/IMenu';
import Login from './pages/Login/ILogin';
import { LoginProvider } from './context/LoginContext';
import Dashboard from './components/Dashboard';

const App = () => {

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

  return (
    <LoginProvider>
      
        <ThemeProvider theme={darkTheme}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/menu" element={<Dashboard />} />
              <Route path="*" element={<Login />} />
            </Routes>
          </Router>
        </ThemeProvider>
    </LoginProvider>
  )
}

export default App
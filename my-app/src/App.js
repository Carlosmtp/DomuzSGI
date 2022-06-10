import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { createTheme,ThemeProvider } from '@mui/material';

import Login from './pages/Login';

import AppBar from './components/AppBar';
import Process from './pages/Process.jsx'
import { AppContext } from './context/AppContext';

const App = () => {

  const { mode } = useContext(AppContext)

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
     
        <ThemeProvider theme={darkTheme}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="app" element={<AppBar />} >
                  <Route path="procesos" element={<Process />} />
              </Route>
              <Route path="*" element={<Login />} />
            </Routes>
          </Router>
        </ThemeProvider>
  )
}

export default App
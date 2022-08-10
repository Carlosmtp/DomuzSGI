import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { createTheme,ThemeProvider } from '@mui/material';

import Login from './pages/Login';

import AppBar from './components/AppBar';
import Process from './pages/Process';
import Administration from './pages/Administration';
import { AppContext } from './context/AppContext';
import Create from './pages/Create';
import Show from './pages/Show'
import Actualizar from './pages/Actualizar'
const App = () => {

  const { isDarkTheme } = useContext(AppContext)
  
/*
        light: '#33aaff',
        dark: '#0068b2',
*/
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#000000',
        contrast: '#FFFFFF'
      },
      secondary: {
        main: '#0095ff',
        light: '#64c1ff',
        dark: '#0064b7'
      },
      info: {
        main: '#F3216B',
      },
      background: {
        default: '#272727',
        paper: '#424242',
        light: '#6e6e6e'
      },
    },
  })

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffffff',
        contrast: '#000000'
      },
      secondary: {
        main: '#0095ff',
        light: '#33aaff',
        dark: '#0068b2',
      },
      info: {
        main: '#F3216B',
      },
      background: {
        default: '#fff',
        paper: '#fafafa',
        light: '#c1c1c1'
      },
    },
  })
  

  return (
     
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="app" element={<AppBar />} >
                  <Route path="procesos/:id" element={<Process />} />
                  <Route path="administracion" element={<Administration />} />
                  <Route path="crear/:id" element={<Create />} />
                  <Route path="ver/:id" element={<Show />} />
                  <Route path="actualizar/:id" element={<Actualizar />} />
              </Route>
              <Route path="*" element={<Login />} />
            </Routes>
          </Router>
        </ThemeProvider>
  )
}

export default App
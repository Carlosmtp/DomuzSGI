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
import User from './pages/Create/User';
import CreateProcess from './pages/Create/Process';
import CreateProyect from './pages/Create/Proyect';

const App = () => {

  const { isDarkTheme } = useContext(AppContext)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#000000'
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
                  <Route path="procesos" element={<Process />} />
                  <Route path="administracion" element={<Administration />} />
                  <Route path="crear" element={<Create />}>
                    <Route path="usuario" element={<User />} />
                    <Route path="proceso" element={<CreateProcess />} />
                    <Route path="proyecto" element={<CreateProyect />} />
                  </Route>
              </Route>
              <Route path="*" element={<Login />} />
            </Routes>
          </Router>
        </ThemeProvider>
  )
}

export default App
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
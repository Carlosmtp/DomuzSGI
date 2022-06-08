import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { createTheme,ThemeProvider } from '@mui/material';

import Test1 from './components/Test1';
import Login from './pages/Login';

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
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/test" element={<Test1 />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
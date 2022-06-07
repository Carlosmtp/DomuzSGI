import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Test1 from './components/Test1';
import Login from './pages/Login';

const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test1 />} />   
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default app
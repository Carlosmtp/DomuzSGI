import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';

import Test1 from './components/Test1';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/test" element={<Test1 />} />    

      </Routes>
    </BrowserRouter>      
  </React.StrictMode>
);
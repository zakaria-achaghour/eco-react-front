import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './core/Home';
import Menu from './core/Menu';
import AdminRoute from './Routes/AdminRoute';
import PrivateRoute from './Routes/PrivateRoute';
import AdminDashboard from './user/AdminDashboard';
import Dashboard from './user/Dashboard';

import Signin from './user/Signin';
import Signup from './user/Signup';
const App = () => {
  return (
    <div >
  
    <Menu />

      <ToastContainer />

  
    
 
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes> 
 

      
    </div>
  )
}

export default App
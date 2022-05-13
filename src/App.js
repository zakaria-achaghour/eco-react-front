import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import AddCategory from './Admin/Category/AddCategory';
import AddProduct from './Admin/Product/AddProduct';
import Home from './core/Home';
import Menu from './core/Menu';
import Shop from './core/Shop';
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
        <Route path="/shop" element={<PrivateRoute><Shop
         /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>}/>
        <Route path="/admin/category/create" element={<AdminRoute><AddCategory /></AdminRoute>}/>
        <Route path="/admin/product/create" element={<AdminRoute><AddProduct /></AdminRoute>}/>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes> 
 

      
    </div>
  )
}

export default App
import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';
import Home from './core/Home';
import Layout from './core/Layout';
import Menu from './core/Menu';

import Signin from './user/Signin';
import Signup from './user/Signup';
const App = () => {
  return (
    <div >
  
    <Menu />

      <ToastContainer />

  
    
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes> 
 

      
    </div>
  )
}

export default App
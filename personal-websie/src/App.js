import logo from './logo.svg';
import './App.css';

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <div className='container mt-4'>
      <AppRouter/>
    </div>
    </BrowserRouter>
  );
}
export default App;
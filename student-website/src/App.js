import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from "./Home";
import Student from "./Student";

function App(){
  return(
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/student/:name' element={<Student />}/>
      </Routes>
   
  );
}
export default App;
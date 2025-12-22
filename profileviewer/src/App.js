import logo from './logo.svg';
import './App.css';

import React,{useState,useEffect} from 'react';
function App(){
  const [user,setUser] = useState("Guest");
  useEffect(()=>{
    if (user !== "Guest"){
      console.log(`User changed to ${user}`);
    }
  },[user]);
  return(
    <div style={{padding:"20px"}}>
      <h2>Welcome,{user}!</h2>
      <button onClick={() => setUser("Alice")}>
        Login as Alice
      </button>
    </div>
  );
}

export default App;
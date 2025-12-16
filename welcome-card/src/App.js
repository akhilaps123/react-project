import logo from './logo.svg';
import './App.css';
import React from 'react';
import internal_image from "./internal_image/react.jpg";

// function App() {
  
//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function App(){
  console.log("React app started");
  const username = "Akhila";
  return(
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card text-center shadow-lg p-4' style={{ width: "22rem" }}>
      <h1 style={{color: "#0d6efd",fontWeight:'bold'}}>Welcome to React Learning, {username}</h1>
      

      <div className='mt-3'>
        <img
        src={internal_image}
        alt="Internal"
        className='img-fluid mb-3'
        style={{ width: "200px" }}
        />
        <img
        src="https://tse2.mm.bing.net/th/id/OIP.ORYCDafreIYhtQfCY0B0NAHaFg?pid=Api&P=0&h=180"
        alt="External"
        className='img-fluid'
        />
      </div>
      </div>
      
      <p className='mt-3 text-muted fw-semibold'>This is your first card with images and styles!</p>
    </div>
    
    
  )
}
export default App;
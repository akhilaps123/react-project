import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

// function App() {
//   return (
//     <div className="App">
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
function Favfoods(){
const foods = ["piza","biriyani","burger"];
const [message,setMessage]=useState("Select a food that you love!");

return(
  <div className="app-container">
    <h2>Favorite Foods</h2>
    <ul className='food-list'>
      {foods.map((food,index)=>(
      <li key={index} className="food-item">
        {food}{" "}
     
          <button className="love-btn" onClick={()=>setMessage (`I love ${food}!`)}>
               Love it ❤️
          </button>
      </li>
      ))}
    </ul>
    <h3>{message}</h3>
     </div>
)}
export default Favfoods;


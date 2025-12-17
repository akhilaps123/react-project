// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Child from "./Child";

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


function Room() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>
        {isOn ? "The room is bright" : "The room is dark"}
      </h2>

      <Child isOn={isOn} toggleLight={toggleLight} />
    </div>
  );
}

export default Room;

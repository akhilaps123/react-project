import logo from './logo.svg';
import './App.css';
import image from "./image/profile.jpg"

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
function App(){
  const name="Akhila";
  const description="I am a beginner React developer learning UI development.";
  const cardStyle ={
    border: "2px solid #ccc",
    padding: "20px",
    width: "300px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    textAlign: "center",
  }
  return(
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div style={cardStyle}>
        <img src=
        {image}
        width="100"
        alt="Internal Profile"
        className='mt-3'       
         />
        <h1>{name}</h1>
        <p>{description}</p>
        <img src=
        "https://www.pngall.com/wp-content/uploads/5/Profile.png"
        width="100" 
        alt="External Profile"
        className='mt-3'/>
      </div>
    </div>
  )
}
export default App;
import logo from './logo.svg';
import './App.css';

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
  const name="Alex";
  const age=20;
  const isStudent=true;
  const headingColor = "lightblue";

  const favoriteHobbies = ["Reading", "Hiking", "Coding"];
  
  let hobbiesForLoop=[];
  for(let i=0;i<favoriteHobbies.length;i++){
    hobbiesForLoop.push(<li key={i}>{favoriteHobbies[i]}</li>)
  }
  
  const showMessage = () =>{
    document.getElementById("message").innerText = "Hello from React! I love my hobbies!";
    document.getElementById("mainheading").style.backgroundColor = headingColor;
  }

  return(
    <div className='container'>
      <h1 id='mainheading' className='text-center p-2'>My Personal Information</h1>

      <div className='card mt-3'>
        <div className='card-body'>
          <h5 className='card-title'>Personal Details</h5>
            <p className='card-text'>Name:{name}</p>
            <p className='card-text'>Age:{age}</p>
            <p className='card-text'>Student:{isStudent}</p>
          </div>
        </div>

        <h4 className='mt-4'>Hobbies (Using for loop)</h4>
        <ul>{hobbiesForLoop}</ul>

        <h4 className='mt-4'>Hobbies (Using map)</h4>
        <ul>
          {favoriteHobbies.map((hobby,index)=>(
          <li key={index}>{hobby}</li>
          ))}</ul>

          <button className='btn btn-primary mt-3'onClick={showMessage}>Show Enthusiasm</button>

          <p id='message' className='mt-3'>Click the button to see my enthusiasm!</p>
      </div>
    
  )
}
export default App;

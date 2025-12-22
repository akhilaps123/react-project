import React from "react";

function About() {
  const showEnthusiasm = () => {
    document.getElementById("message").innerText =
      "Hello from React! I love this page!";
    document.getElementById("heading").style.backgroundColor = "lightblue";
  };

  return (
    <div className="card p-4 mb-4">
      <h2 id="heading">This is the About Page</h2>
      <p id="message">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showEnthusiasm}>
        Show Enthusiasm
      </button>
    </div>
  );
}

export default About;

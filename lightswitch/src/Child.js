import React from "react";

function Child({ isOn, toggleLight }) {
  return (
    <button onClick={toggleLight}>
      {isOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default Child;

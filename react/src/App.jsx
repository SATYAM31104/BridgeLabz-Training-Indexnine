import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";

function App() {
    const age = 29;
  return (
    <div>
      <div className="navbar">
        <h1>Navbar</h1> 
      </div>
      <div className="card">
        <h1>hi React {age}</h1>
        <p> I am checking</p>
        
      </div>
      <Card/>
    </div>
  )
}

export default App;
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {
// const a = 20;
// const btnHandler = ()=>{

//   console.log("clicked");
// }

const [a, setA] = useState(20);
const [num,changeNum]=useState([10,20,30]); //here the changeNum function is asynchronus 
const [name,changeName]=useState({user:"Shashwat",age:20})

// const btnClicked=()=>{
//   console.log(name.user);
//   changeName("sathi");
//   //idhar changes karne ke liye destructre karlo
//   const newName = {...name};
//   newName.user="Sathu"
//   changeName(newName);
// }

//another way
const btnClicked=()=>{
  changeNum(prev =>(prev+1));
  changeNum(prev =>(prev+1));
}

  return (
    <div>The value of the element is {a}
    <button onClick={() => setA(30)}>ADD</button>
    <div>{num}
      <button onClick={btnClicked}>change</button>
      </div>
      <div>the value is {name.user}</div>
      <button onClick={btnClicked}>CHANGE NAME</button>
    </div>
  )
}

export default App

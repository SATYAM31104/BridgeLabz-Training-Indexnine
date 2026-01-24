// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   // function btnClicked(){
//   //   console.log("The button has been clicked");
//   // }

//   const inputChange=(elem)=>{
//     console.log("The input is changed");
//     console.log(elem.target.value);
//   }

//   return (
//     <div>
//       {/* <input onChange={(elem)=>{console.log(elem)}}></input>  */}
//       {/* <input onChange={(elem)=>{console.log(elem.target)}}></input>  */}
//       <input onChange={(elem)=>{inputChange(elem)}}></input> 
//       {/* elem ek event object hai and 
//       uske pas kuch properties hoti hai jaise ki target , value etc */}
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // function btnClicked(){
  //   console.log("The button has been clicked");
  // }

  const inputChange=(elem)=>{
    console.log("The input is changed");
    console.log(elem.target.value);
  }

  return (
    <div>
      {/* <input onChange={(elem)=>{console.log(elem)}}></input>  */}
      {/* <input onChange={(elem)=>{console.log(elem.target)}}></input>  */}
      <input onChange={(elem)=>{inputChange(elem)}}></input> 
      {/* elem ek event object hai and 
      uske pas kuch properties hoti hai jaise ki target , value etc */}
    </div>
  )
}

export default App



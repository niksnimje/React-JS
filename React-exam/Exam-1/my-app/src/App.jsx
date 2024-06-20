import './App.css'

import { useState } from "react";

function App() {

  const [vlaue,setvalue]=useState(0)
  
  // const Compo=(num)={
  //   if(num <= 1)
      
  //       for( let i=2 i<=num i++)
  //         {
  //             if(num%===1) return ture;
  //         }
  // }


  const Prime=(num)=>{
    if(num <= 1) 
      {

        return false;
      }
      
    for(let i=2; i<=Math.sqrt(num); i++)
      {
        if (num % i === 0) 
          {
            return false;
          }
      }
      return true;
  } 



  
  
  return (
    <>  
    <div className='Main'>
    <h1>Counter</h1>
      <button id='btn1' onClick={()=>setvalue(vlaue-1)} disabled={vlaue <= 0}>-1</button>
      <span>{vlaue}</span>
      <button onClick={()=>setvalue(vlaue+1)} >+1</button>
      <button onClick={()=>setvalue(0)}>Reset</button>
      <h1>Composite Num = {vlaue}</h1>
      <h1>Prime Num = {Prime(vlaue).toString()}</h1>
    </div>
      
    </>
  );
}

export default App;

# React-JS



import { useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";

function Countries() { 
  // return <LoadingIndicator />;


  const Fetchdata=()=>
  {
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
    .then((res)=>res.json())
    .then((resdata)=>console.log(resdata))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    Fetchdata()
  },[])

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
      </div>
      <div>
        {/* Pagination */}
      </div>
    </div>
  );
}

export default Countries;

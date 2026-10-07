import React, { useEffect, useState } from 'react';
import Product from './Products';



function App() {
  const [products, setProduct] = useState([])

  useEffect(()=>{
    async function APICall(){
      console.log("Aman Happy Birthday....");
      let response = await fetch("http://localhost:5001/api/products");
      let data = await response.json();
      console.log(data);
      setProduct(data)
      
      
    }
    APICall();
  },[])



  return (
    <div>
      <Product products={products}/>
    </div>
  )
}

export default App

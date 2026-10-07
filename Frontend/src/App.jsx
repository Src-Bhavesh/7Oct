import React, { useEffect, useState } from 'react';
import Product from './Products';



function App() {
  const [products, setProduct] = useState([])

  useEffect(()=>{
    async function APICall(){
      console.log("Aman Happy Birthday....");
      let response = await fetch("https://sevenoct-1.onrender.com/api/products");
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

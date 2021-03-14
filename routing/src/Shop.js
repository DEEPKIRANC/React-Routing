import React from "react"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom";

function Shop() {

    const [items,setItems]=useState([]);

  useEffect(()=>{
    fetchItems();
  },[]
);

  const fetchItems=async()=>{
      const res=await fetch("https://fakestoreapi.com/products")
      const data=await res.json()
      setItems(data);
     // console.log(data);  
  }  
  return (
    <div>
      
      {items.map(item=>
      (
          <h3 key={item.id}>
            <Link to={`/shop/${item.id}`}>    
              {item.title}
            </Link>  
          </h3>
      ))
      }
    </div>
  );
}

export default Shop;

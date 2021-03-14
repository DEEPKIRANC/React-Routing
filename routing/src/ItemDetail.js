import React from "react"
import {useState,useEffect} from "react"
import "./App.css";

function ItemDetail({match}) {

    const [item,setItem]=useState({});

  useEffect(()=>{
    fetchItem();
    console.log(match);
  },[]
);

  const fetchItem=async()=>{
      const res=await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      const data=await res.json()
      setItem(data);
    console.log(data);  
  }  
  return (
    <div className="details">
      
      <img src={item.image} className="itemImage" />

      <span>{item.title}</span>

      <p>{item.description}</p>

      <span>${item.price}</span>

    </div>
  );
}

export default ItemDetail;

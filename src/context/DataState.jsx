import React, { useState } from 'react'
import DataContext from './DataContext'
import { items } from './Data';

const DataState = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(items);


const addToCart=(id,title,price,imgSrc)=>{
  const obj={id,title,price,imgSrc};
  setCart([...cart,obj]);
  console.log(cart)
}

  return (
    <DataContext.Provider value={{products,setProducts,cart,setCart,addToCart}}>  {props.children}  </DataContext.Provider>
  );
};

export default DataState
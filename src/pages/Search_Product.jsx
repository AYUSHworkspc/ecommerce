import React from 'react'
import { useParams } from 'react-router'
import { items } from '../context/Data'
import Products from '../components/Products'
const Search_Product = () => {

  console.log("searchproducts ka use params====>",useParams())
  const {term}=useParams();

//filter ka functionality 
const searchedProducts=items.filter((pro)=> pro.title.toLowerCase().includes(term.toLowerCase())  );


  return (
    <>
<Products items={searchedProducts} />
    </>
  )
}

export default Search_Product
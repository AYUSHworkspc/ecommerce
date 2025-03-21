import React from 'react'

import VideoPlayer from '../components/VideoPlayer'
import { useParams } from 'react-router'

import {Videos} from "../context/Data"
import { items } from '../context/Data'
import Products from '../components/Products'

function ProductByCategory() {
   
    console.log("use params main dynamic routes ka data===>",useParams());
    const {cat}=useParams();
    const videoByCategory=Videos.find((vid)=> vid.category.toLocaleLowerCase() === cat.toLocaleLowerCase());

    const productsByCategory= items.filter((pro)=>pro.category.toLocaleLowerCase() === cat.toLocaleLowerCase())
    
  return (
    <>
    <VideoPlayer  src={videoByCategory.url } />
    <Products items={productsByCategory }   />
     
    
    </>
  )
}

export default ProductByCategory
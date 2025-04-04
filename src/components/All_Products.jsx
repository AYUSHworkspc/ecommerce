import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import Products from "./Products"
import VideoPlayer from "./VideoPlayer"

const All_Products = () => {

  const {products}=useContext(DataContext);
  // console.log(products)
  return (
    <>
    <VideoPlayer  src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/xlarge_2x.mp4"  /> 
    <Products  items={products} />
    
    </>
  )
}

export default All_Products
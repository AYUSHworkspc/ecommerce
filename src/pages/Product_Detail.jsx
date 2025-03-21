import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { items } from '../context/Data';
import Products from '../components/Products';
import "./Product_Detail.css"
import DataContext from '../context/DataContext';



function Product_Detail() {
  console.log("productdetails ka useparams==>",useParams());
  const{id}=useParams();
  const product=items.find((pro)=>pro.id == id); //is matched id wale objext ka sara ka sara data product main aa jayega 


  const relatedProduct=items.filter((pro)=>pro.category.toLocaleLowerCase() == product.category.toLocaleLowerCase())               
  // mere us id wale product se agar koi same category wala data match kar jaye to uska full details is related product naam ke variable main aa jayega


  const {addToCart}=useContext(DataContext); //add to cart functionality  


  return (
    <>
    <div>
   <div className='container my-5 flex gap-[2rem] '>
<div className='product-detail-card'>

  <div className='image-section'>
<img src={product.imgSrc} alt={product.title} className='product-image' />
  </div>

  <div className="info-section">
    <h2 className="product-title text-2xl ">    {product.title}</h2>
  <h3 className="product-discription">{product.description}</h3>
  <h3 className="product-price"> ₹{product.price}</h3>
  <button className='btn add-to-cart'  onClick={()=>addToCart(product.id,product.title,product.price,product.imgSrc)}> 🛒 Add To Card </button>

  </div>
</div>
   </div>
   {/* related Products wala data yaha se aayega UI main ====>>===============>>==============>>=====================> */}
   <h2 className='text-center my-5 '>Related Products </h2>
   <Products items={relatedProduct}   />
   </div>
    </>
  )
}

export default Product_Detail
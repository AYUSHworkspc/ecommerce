import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router'
import ShopByCategory from './ShopByCategory'
import DataContext from '../context/DataContext'

const Products = ({items}) => {

  const {addToCart}=useContext(DataContext)
  
  const {pathname} =useLocation();
  return (
<>

{pathname == "/" && <ShopByCategory/> }

{/* <ShopByCategory/> */}
    <div className='container my-5 '>
      <div className='row d-flex justify-content-center'>
        
{items.map((product)=>(

<div key={product.id} className='col-lg-4 col-md-6 my-3 d-flex justify-content-center '>
<div className='card product-card ' style={{width:"18rem"}}>

{/* link is throwing route at link /product/productkaid */}

  <Link to={`/product/${product.id}`} className='image-container ' >\
  <img src={product.imgSrc} className='card-img-top' alt="" />
  </Link>


<div className='card-body text-center'>
  <h4 className='card-title'>{product.title}</h4>
  <p className='product-price'>{product.price}</p>
  <div className='button-container'>
    <button onClick={()=>addToCart(product.id,product.title,product.price,product.imgSrc)}> 🛒 ADD TO CART</button>
     </div>
</div>
</div>
</div>
))}
      </div>
    </div>
    </>
  )
}

export default Products
import React, { useContext } from 'react' 
import DataContext from '../context/DataContext'
import { Link } from 'react-router'


function Cart() {
  const {cart,setCart}=useContext(DataContext);
  return (
    <div className='cointainer my-5 '>

{cart.length == 0 ? (<div className='text-center font-bold text-2xl '>

<h1 className='text-xl bg-yellow-200 '>
  YOUR CART IS EMPTY 
</h1>
<h3 className='text-2xl '>
<Link to={"/"} className='btn btn-warning mt-3 ' >continue shopping </Link>

</h3>

</div>)  : (<div className='d-flex items-center content-between '>
  <h3> {cart.map((product)=> <div key={product.id} className='col-md-10 my-3 '>
<div className='card cart-card'>
  <div className="row g-0 align-items-center ">
<div className="col-md-4"></div>
<img src={product.imgSrc} alt="" className='cart-img' />
  </div>
<div className="col-md-8">
  <div className="card-body text-center">
  <h2 className="product-title text-2xl ">    {product.title}</h2>
  <h3 className="product-discription">{product.description}</h3>
  <h3 className="product-price"> ₹{product.price}</h3>
  <button className='btn add-to-cart'  onClick={()=>addToCart(product.id,product.title,product.price,product.imgSrc)}>🛒 BUY NOW  </button>
  </div>
</div>
</div>

  </div>)} </h3>

<div className='text-center my-5 '>
  <Link type='button' to={"/cart/checkout"} className="btn btn-warning mx-3">checkout</Link>
  <button onClick={()=>setCart([])} className="btn btn-danger mx-3">clear cart</button>
</div>

</div>)}

    </div>
  )
}

export default Cart
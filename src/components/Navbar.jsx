import React, { useContext, useState } from 'react'
import { FaAmazon ,FaShoppingCart,FaSearch} from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import DataContext from '../context/DataContext';

const Navbar = () => {
// search baar ki functionaLITY 
const [searchTerm, setSearchTerm] = useState("")
const {cart}=useContext(DataContext);
  

const navigate=useNavigate();
const handleSubmit=(e)=>{
  e.preventDefault();
  navigate(`/product/search/${searchTerm}`)  //navigate ke through bhej rahe hain search_product component ko 
  setSearchTerm("")
}
//search baar ki functionality yaha par khatam ho gayi hain humne form aur imput tag par updation ki hain for our search functionality 


  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-green-900 px-4 sticky-top shadow'>
<div  className='container-fluid'>
{/* left section logo */}
<Link to={'/'} className='nabbar-brand d-flex align-items-center'  >
<FaAmazon className='text-warning fs-2 me-2 '/>
<span className='fs-bold fw-bold'> AMAZON</span>
</Link>
<form className="d-flex mx-auto search-container" onSubmit={handleSubmit}>
<input type="text" placeholder='search prodicts......' className='form-control mx-auto search-container' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
<button className='btn btn-warning bg-yellow-500 search-button'><FaSearch/></button>

</form>

{/* categories */}
<ul className='navbar-nav mx-auto d-flex gap-3'>
  {["Mobiles","Laptops","Tablets","Watches"].map((category)=>(<li  key={category} className='nav-items'>

{/* ye wala link hum /product/category/${category} url tak le jaa raah hain  */}

<Link to={`/product/category/${category}`} className='nav-link category-link'>{category}</Link>
 
  </li>))}
</ul>
{/* cart buttons  */}
<Link type="button" className="btn btn-primary position-relative" to={"/cart"}>
<FaShoppingCart/>

{cart.length > 0 && ( <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>)}
 
</Link>

</div>


    </div>
  )
}
export default Navbar
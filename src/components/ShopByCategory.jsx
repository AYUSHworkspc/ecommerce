import React, { useContext, useState } from 'react'
import {FaMobileAlt,FaLaptop,FaTabletAlt,FaClock,FaThLarge,FaRupeeSign}  from "react-icons/fa"
import DataContext from '../context/DataContext'
import {items} from"../context/Data";



const categories=[
  {name:"All Products", icons:<FaThLarge/>},
  {name:"Mobiles", icon:<FaMobileAlt/>},
  {name:"Laptops", icon:<FaLaptop/>},
  {name:"Tablets", icon:<FaTabletAlt/>},
  {name:"Watches", icon:<FaClock/>}
  
]
const priceRange=["3000","4000","5000","6000","7000","8000","9000"];





const ShopByCategory = () => {
  const {setProducts}=useContext(DataContext);  // jo data final aa raha hain using context api usko change karne ke lea use karo 
  const [selectedPrice, setSelectedPrice] = useState(8000);    // ye bata dega ki by default kitne tak ke phone dikhane hai 
   // aab main filter by category ka logic yaha hain=====>  =================> =========================>
  
   const filterByCategory=(cat)=>{
if(cat == "All Products"){
  setProducts(items);
  return 
} 

setProducts(items.filter(pro=> pro.category.toLocaleLowerCase() === cat.toLocaleLowerCase()))
    //ye cateory par lag rahe filter ka code hain 
   }


// aab filter by price ka logic ====>     ===================>         ==================>  =============> ============================>

  const filterByPrice=(price)=>{

    setProducts(items.filter(amount=>
      amount.price <= price
    ))

  }

  return (
    <>
    <div className='container bg-dark text-light my-4 p-4  rounded '>
<h3>Filter products </h3>
<div className="d-flex justify-content-center align-items-center gap-3 mb-4 ">

  
{categories.map(({name,icon})=> (<div key={name} onClick={()=>filterByCategory(name)} className='d-flex align-items-center gap-2 px-4 py-2 bg-secondary text-light fw-light' style={{cursor:"pointer"}}>
  {icon} <span>   {name}   </span>
   </div>)   )}

</div>

<div className='d-flex aliogn-items-center justify-content-center gap-3 cursor-pointer '>

{priceRange.map((value)=> <span key={value} className={`badge p-3 fw-bold ${selectedPrice == value ? "bg-yellow-500 text-dark" : "bg-white text-dark"}`} onClick={()=>filterByPrice(value)}  > <FaRupeeSign/>  {value}  </span>  )}

</div>

    </div>
    </>
  )
}

export default ShopByCategory
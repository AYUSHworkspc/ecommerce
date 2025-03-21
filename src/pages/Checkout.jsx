import React, { useContext } from 'react'
import DataContext from '../context/DataContext';

import { useParams } from 'react-router'


function Checkout() {
    const {cart}=useContext(DataContext);
    console.log(cart);
    const prices=cart.map((item)=>parseFloat(item.price))
    let totalPrice=0;
    prices.forEach(price => {
        totalPrice+=price;
        
    });

 {/* {cart.map((item)=>
    <div  key={item.id}>
    <h3>{item.id}</h3>
    <h3>{item.title}</h3>
    </div>
    )} */}

  return (
<div className='p-6 flex flex-col items-center'>

<h1>checkout page </h1>
<div className='flex flex-wrap justify-center gap-6 mt-6  '>
{cart.map((item, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-40">
                        {/* Product Image */}
                        <img src={item.imgSrc} alt={item.title} className="w-24 h-24 object-cover rounded-md" />

                        {/* Product Title */}
                        <h2 className="mt-2 text-lg font-semibold text-center">{item.title}</h2>

                        {/* Product Price */}
                        <p className="text-gray-700 font-medium">₹{parseFloat(item.price).toLocaleString()}</p>
                    </div>
                ))}



</div>

<h1 className="mt-6 text-3xl font-bold text-green-600">
                Total Price to Pay: ₹{totalPrice.toLocaleString()}
            </h1>
</div>
  )
}

export default Checkout
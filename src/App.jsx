import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router";
import Navbar from "./components/Navbar"
import Product_Detail from "./pages/Product_Detail";
import Cart from "./pages/Cart";
//import ShopByCategory from "./components/ShopByCategory"
import All_Products from "./components/All_Products"
import Search_Product from "./pages/Search_Product"
import TrendingSlider from "./components/Trending_Slider"
import ProductByCategory from "./pages/ProductByCategory";
import Checkout from "./pages/Checkout";



function App() {
  

  return (
<Router>
<Navbar/>


<Routes>
  <Route path="/" element={<All_Products/>}       />
  <Route path="/cart" element={<Cart/>}       />
  <Route path="/product/:id" element={<Product_Detail/>}       />
  <Route path="/product/category/:cat" element={<ProductByCategory/>}       />
  <Route path="/product/search/:term" element={<Search_Product/>}       />               
  {/* "/product/search/:term" is link par tab navigate hoga jab hum search karenge    ye path par jo dynamic wala part aaya hain wo useparams() ke through dynamic wala url ka link aa jayega   */}
  <Route path="/cart/checkout" element={<Checkout/>} />
</Routes>
{/* <TrendingSlider/> */}
</Router>

  )
}

export default App

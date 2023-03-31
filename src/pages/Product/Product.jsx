import React from 'react'
import { useState } from 'react'

import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

   const [selectedImg, setSelectImg] = useState(0);
   const [quantity, setQuantity] = useState(1);
   
   const images = [
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
   ]

   return (
      <div className='product'>
         <div className="left">
            <div className="images">
               <img src={images[0]} alt="" onClick={e=>setSelectImg(0)}/>
               <img src={images[1]} alt="" onClick={e=>setSelectImg(1)}/>
            </div>
            <div className="mainImg">
               <img src={images[selectedImg]} alt="" />
            </div>
         </div>

         <div className="right">
            <h1>Title</h1>
            <span className='price'>199</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div className="quantity">
               <button onClick={() => setQuantity((prev)=>(prev ===1 ? 1: prev-1))}>-</button>
               {quantity}
               <button onClick={() => setQuantity(prev => prev+1)}>+</button>
            </div>
            
            <button className='add'>
               <AddShoppingCartIcon /> ADD TO CART
            </button>

            <div className="links ">
               <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISHLIST
               </div>
               <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
               </div>
            </div>
            
            <div className="info">
               <span>Vender: Polo</span>
               <span>Product Type: Tshirt</span>
               <span>Tag: T-Shirt, Men, Top</span>
            </div>
            
            <hr />
            <div className="info">
               <span>Description</span>
               <hr />
               <span>ADDITIONAL INFORMATION</span>
               <hr />
               <span>FAQ</span>
            </div>
         </div>
      </div>
   )
}

export default Product
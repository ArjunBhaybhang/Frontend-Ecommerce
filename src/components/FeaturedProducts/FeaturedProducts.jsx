import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'


const FeaturedProducts = ({type}) => {

   const data = [
      {
         id:1,
         img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
         img2:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
         title:'Bag',
         isNew:true,
         oldPrice:19,
         price: 12
      },
      {
         id:1,
         img:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
         img2:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
         title:'Jacket',
         isNew:true,
         oldPrice:19,
         price: 12
      },
      {
         id:1,
         img:'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
         img2:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
         title:'Top',
         isNew:false,
         oldPrice:19,
         price: 12
      },
      {
         id:1,
         img:'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
         img2:'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
         title:'Ring',
         isNew:false,
         oldPrice:19,
         price: 12
      }
   ]

   return (
      <div className='featuredProducts'>
         <div className="top">
            <h1>{type} Products</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
         </div>
         <div className="bottom">
            {data.map(item =>
               <Card item={item} key={item.id}/>
               )}
         </div>
      </div>
   )
}

export default FeaturedProducts
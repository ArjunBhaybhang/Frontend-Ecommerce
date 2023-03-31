import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = () => {

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
         id:2,
         img:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
         img2:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
         title:'Jacket',
         isNew:true,
         oldPrice:19,
         price: 12
      },
      {
         id:3,
         img:'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
         img2:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
         title:'Top',
         isNew:false,
         oldPrice:19,
         price: 12
      },
      {
         id:4,
         img:'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
         img2:'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
         title:'Ring',
         isNew:false,
         oldPrice:19,
         price: 12
      },
      {
         id:5,
         img:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
         img2:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
         title:'Bag',
         isNew:true,
         oldPrice:19,
         price: 12
      },
      {
         id:6,
         img:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
         img2:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
         title:'Jacket',
         isNew:true,
         oldPrice:19,
         price: 12
      },
      {
         id:7,
         img:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
         img2:'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
         title:'Top',
         isNew:false,
         oldPrice:19,
         price: 12
      },
      {
         id:8,
         img:'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
         img2:'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
         title:'Ring',
         isNew:false,
         oldPrice:19,
         price: 12
      }
   ]

   return (
         <div className='list'>{data?.map(item=>(
               <Card item={item} key={item.id} />
            ))}
         </div>
      )
   }

export default List
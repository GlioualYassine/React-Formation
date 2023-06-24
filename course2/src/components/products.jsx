import React from 'react'
import Counter from './counter';
import Product from './product';
import { useState } from "react"

function Products() {

  let [products,setProducts] = useState([
    {id : 1 , label : 'iphone 13',price : 15200},
    {id : 2 , label : 'ipad',price : 15860},
  ])
  let showProduct = true ;


  let deleteProduct = (id)=>{
    let newlist = products.filter(prod=>prod.id!==id)
    setProducts(newlist)
  }

    return (
    <>
    <Counter>
       
    </Counter> 
    {
        showProduct && ( 
        <div>
            {products.map((prod,index)=>(
               <Product key={index} id = {prod.id} onDeleteProduct = {deleteProduct}>
                 <div class="card-header">{prod.label}</div>
                 <div class="card-body">
                        <h4 class="card-title">Price</h4>
                        <p class="card-text">
                        <button className='btn btn-primary ml-2'>{prod.price}</button>

                         </p>
                  </div>
               </Product>
            ))}
        </div>         )   
}
       
    
    </>
  )
}

export default Products
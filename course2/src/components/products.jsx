import React from 'react'
import Counter from './counter';
import Product from './product';
function product() {
  let products = [
    {id : 1 , label : 'iphone 13',price : 15200},
    {id : 2 , label : 'ipad',price : 15860},
  ]
  let showProduct = true ;
    return (
    <>
    <Counter>
       
    </Counter> 
    {
        showProduct && ( 
        <div>
            {products.map((prod,index)=>(
               <Product price={prod.price} label={prod.label}/>
            ))}
        </div>         )   
}
       
    
    </>
  )
}

export default product
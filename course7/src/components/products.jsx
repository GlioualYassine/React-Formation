import React from 'react'
import Product from './product';
import { useState } from "react"
import {v4 as uuid} from "uuid"
import { useContext , useRef } from 'react';
import { ProductContext } from '../context/ProductContext';

function Products() {

  let data = useContext(ProductContext)
  let [newProduct,setNewProduct]= useState(data.newProduct)
  let {products,addProduct} = useContext(ProductContext)
  const title = useRef("")
  const price = useRef(0)
  
  

  let submitForm = (e)=>{
    e.preventDefault()
    let myproduct = {
      id : uuid(),
      label : title.current.value,
      price : price.current.value
    }
    addProduct(myproduct)
    title.current.value=""
    price.current.value = ""
    
      
    }
   
    
  




    return (
    <>
      <form onSubmit={submitForm}>
        <div className="form-group w-25 mx-2 my-2 mb-1">
          <label htmlFor="" className="form-label">Label</label>
          <input ref={title}  type="text"  className="form-control py-2 px-2" />
          
        </div>
        <div className="form-group mx-2 w-25 my-2 mb-1">
          <label htmlFor="" className="form-label py-1 px-2">price</label>
          <input ref={price}  type="number"  className="form-control" />
          
          
        </div>
        <button  className="btn mx-2 btn-primary my-2 mb-1" >Save</button>
      </form>

        <div>
            {products.map((prod,index)=>(
               <Product key={index} id = {prod.id} >
                 <div className="card-header">{prod.label}</div>
                 <div className="card-body">
                        <h4 className="card-title">Price</h4>
                        <p className="card-text">
                        <button className='btn btn-primary ml-2'>{prod.price}</button>

                         </p>
                  </div>
               </Product>
            ))}
        </div>         

       
    
    </>
  )
            }

export default Products
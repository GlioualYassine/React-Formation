import React from 'react'
import Product from './product';
import { useState } from "react"
import {v4 as uuid} from "uuid"
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

function Products() {

  let data = useContext(ProductContext)
  let [newProduct,setNewProduct]= useState(data.newProduct)
  let {products,addProduct} = useContext(ProductContext)
   
  
    console.log('data',data)
    console.log('new Product',newProduct)
    console.log("products",products)

 

  let [title,setTitle] = useState()
  let [price,setPrice] = useState()
  
  let titleInput = (e)=>{        
      setTitle(e.target.value)  
    }
      
  let priceInput = (e)=>{
        setPrice(e.target.value)    
    }
  

  let submitForm = (e)=>{
    e.preventDefault()
    let myproduct = {
      id : uuid(),
      label : title,
      price
    }
    addProduct(myproduct)

    
      setPrice(0)
      setTitle("")
    }
   
    
  




    return (
    <>
      <form onSubmit={submitForm}>
        <div className="form-group w-25 mx-2 my-2 mb-1">
          <label htmlFor="" className="form-label">Label</label>
          <input defaultValue={title} type="text" onChange={titleInput}  className="form-control py-2 px-2" />
          
        </div>
        <div className="form-group mx-2 w-25 my-2 mb-1">
          <label htmlFor="" className="form-label py-1 px-2">price</label>
          <input defaultValue={price} type="number" onChange={priceInput} className="form-control" />
          
          
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
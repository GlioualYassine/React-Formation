import React from 'react'
import Product from './product';
import { useState } from "react"
import {v4 as uuid} from "uuid"

function Products() {

  let [products,setProducts] = useState([
    {id : 1 , label : 'iphone 13',price : 15200},
    {id : 2 , label : 'ipad',price : 15860},
  ])


  let deleteProduct = (id)=>{
    let newlist = products.filter(prod=>prod.id!==id)
    setProducts(newlist)
  }

  let [title,setTitle] = useState()
  let [price,setPrice] = useState()
  let [message,setMessage] = useState({
    label : "",
    price : ""
  })

  let titleInput = (e)=>{
    if(e.target.value === ""){
      let msg = {
        label : "title is required",
        price : message.price
      }
      setMessage(msg)
    }
    else if (e.target.value.trim().length <= 3)
    {
      let msg = {
        label : "title is at least 4 caracts",
        price : message.price
      }
      setMessage(msg)
    }
    else{        
        setTitle(e.target.value)  
      let msg = {
        label : "",
        price : message.price
      }
        setMessage(msg)
    }
      }
  let priceInput = (e)=>{
    if(e.target.value ===""){
      let msg = {
        label : message.label,
        price : "price is required"
      }
      setMessage(msg)
    }
   
    else{        
        setTitle(e.target.value)    
      let msg = {
        label : message.label,
        price : ""
            }
            setMessage(msg)

    }
  }

  let submitForm = (e)=>{
    e.preventDefault()
    let myproduct = {
      id : uuid(),
      label : title,
      price
    }
    //let Prod = [myproduct, ...products]
    //setProducts(Prod)
    console.log(message)
    if(message.label.length==0 && message.price.length==0){
      console.log('yes')
      products.unshift(myproduct);
    setProducts([...products]);
    setPrice(0)
    setTitle("")
    }
    
  }




    return (
    <>
      <form onSubmit={submitForm}>
        <div className="form-group w-25 mx-2 my-2 mb-1">
          <label htmlFor="" className="form-label">Label</label>
          <input defaultValue={title} type="text" onChange={titleInput}  className="form-control py-2 px-2" />
          {message.label && (
            <div className="alert alert-danger">{message.label}</div>
          )}
        </div>
        <div className="form-group mx-2 w-25 my-2 mb-1">
          <label htmlFor="" className="form-label py-1 px-2">price</label>
          <input defaultValue={price} type="number" onChange={priceInput} className="form-control" />
          {message.price && (
            <div className="alert alert-danger mt-3">{message.price}</div>
          )}
        </div>
        <button  className="btn mx-2 btn-primary my-2 mb-1" >Save</button>
      </form>

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
        </div>         

       
    
    </>
  )
}

export default Products
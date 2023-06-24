import React from 'react'
import PropTypes from 'prop-types'
const Product = ({children,id,onDeleteProduct}) => {
  return (
    <>
    <div className="my-2">
      <div className="card border-primary mb-3" >
        {children}
      </div>
    </div>
    <button className='btn btn-dark' onClick={()=>onDeleteProduct(id)}>Delete</button>
  </>
  )
}
Product.propTypes = {
    label : PropTypes.string,
    price : PropTypes.number
}
Product.defaultProps = {
  label : "my product" ,
  price : 0
} 
export default Product
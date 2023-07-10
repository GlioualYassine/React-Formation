import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
const Product = ({children,id}) => {
  let {deleteProduct} = useContext(ProductContext)
  return (
    <>
    <div className="my-2">
      <div className="card border-primary mb-3" >
        {children}
      </div>
    </div>
    <button className='btn btn-dark' onClick={()=>deleteProduct(id)}>Delete</button>
    <Link to={"/product/"+id} className='btn btn-info'>Show Product</Link>
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
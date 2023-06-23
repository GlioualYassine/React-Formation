import React from 'react'
import PropTypes from 'prop-types'
const Product = ({label,price}) => {
  return (
    <h2>
        {label}
        <button className='btn btn-primary ml-2'>{price}</button>
    </h2>
  )
}
Product.propTypes = {
    label : PropTypes.string,
    price : PropTypes.number
}
export default Product
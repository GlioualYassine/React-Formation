import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

const Counter = props => {
    //variable
    let count = 0 ;
    //state 
    let [counter,setCounter] = useState(0)
    let [user,setUser] = useState(
        {name : '',age : 0}
    )
    let increment = ()=>{
        setCounter(counter+1)
        count++
    }
  return (
    <>
        <h2>My Counter</h2>
        <h4>Var : {count}</h4>
        <h4>State : {counter}</h4>
        <button onClick={increment}>Increment Var</button>
        <button onClick={increment}>Increment State</button>
    </>
  )
}

Counter.propTypes = {}

export default Counter
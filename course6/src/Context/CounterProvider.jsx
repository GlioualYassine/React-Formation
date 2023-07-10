import CounterContext from './CounterContext'
import { useState , useReducer } from 'react'
import ConterReducer from './ConterReducer'

const CounterProvider = ({children} )=>{

    //const [counter,setCounter] = useState(20)
    const initialstate = {
        counter : 0 ,
        load : true
    }

    //usage of reducer

    const [state,dispatch] = useReducer(ConterReducer,initialstate)



    //functions 
    const increment = ()=>{
        //setCounter(counter+1)
        dispatch({type:"INCREMENT",payload : 5})
    }
    const decrement = ()=>{
        //setCounter(counter-1)
        dispatch({type:"DECREMENT"})

    }

    return (

        <CounterContext.Provider value={{
            counter : state.counter,
            increment,
            decrement
        }}>
            {children}
        </CounterContext.Provider>
    )

}

export default CounterProvider
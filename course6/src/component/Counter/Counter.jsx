import {  BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import { useContext } from "react";
import ConterContext from "../../Context/CounterContext";
const Counter = () => {
    
    const {counter ,increment,decrement} = useContext(ConterContext)
  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mx-auto ">
                    <h2>My counter {counter} </h2>
                    <button onClick={increment} className="btn btn-success mx-3">
                        <BsFillPatchPlusFill />
                    </button>
                    
                    <button onClick={decrement} className="btn btn-warning">
                         <BsFillPatchMinusFill />
                    </button>
                </div>
            </div>
        </div>
    </>

    )
}

export default Counter
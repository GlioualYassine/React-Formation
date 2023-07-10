const ConterReducer = (state,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter : state.counter+ action.payload
            }
        case "DECREMENT":
            return {
                ...state,
                counter : state.counter -1
            }    
        default:
            return state
    }
}

export default ConterReducer
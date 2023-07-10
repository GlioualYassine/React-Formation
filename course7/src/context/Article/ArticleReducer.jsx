const Reducer = (state,action)=>{
    
    switch (action.type) {
        case "GET_ARTICLES":
            return{
                ...state,
                articles : action.payload
            }
        case "DELETE_ARTICLE":
            return{
                ...state,
                articles : state.articles.filter(art=>art.id !== action.payload)
            }
            
    
        default:
            return state;
    }
}

export default Reducer
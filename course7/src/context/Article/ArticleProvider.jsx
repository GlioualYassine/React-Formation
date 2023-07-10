import ArticleContext from "./ArticleContext";
import Reducer from "./ArticleReducer";
import { useReducer } from "react";
import { getallArticle , deleteanArticle} from './ArticleAction'


const ArticleProvider = ({children})=>{

    const initialState = {
        articles : []
    }

   const  [state,dispatch] = useReducer(Reducer,initialState)

   const getArticle = async()=>{
    dispatch(
        {
            type : "GET_ARTICLES",
            payload : await getallArticle()
        }
    )
   }

   const deleteArticle = async (id)=>{

    let status = await deleteanArticle(id)
    if(status)
        dispatch({
            type : "DELETE_ARTICLE",
            payload : id
        })
   }
    

    return (
        <ArticleContext.Provider value={{
            getArticle,
            articles : state.articles,
            deleteArticle


        }}>
            {children}
        </ArticleContext.Provider>
    )
}

export default ArticleProvider
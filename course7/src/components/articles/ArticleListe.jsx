import axios from "axios"
import { useState , useEffect , useContext } from "react";
import ArticleContext from "../../context/Article/ArticleContext";

 const ArticleListe = () => {

    const {articles,getArticle,deleteArticle} = useContext(ArticleContext)
    
   
   
   
    
    useEffect(()=>{
        getArticle();
    },[articles])

    
    
  return (
    <div>
        <h1>articles</h1>
        <button onClick={getArticle} className="btn btn-danger"> show articles</button>
        <div className="container w-50 mx-auto">
            <table className="table ">
                <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>aperation</td>
                </tr>
                </thead>
                <tbody>
                {articles.map(art=>(
                    <tr key={art.id}>
                        <td>{art.id}</td>
                        <td>{art.name}</td>
                        <td>{art.age}</td>
                        <td>
                            <button className="btn" onClick={ () => {deleteArticle(art.id)}}>Delete article</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ArticleListe
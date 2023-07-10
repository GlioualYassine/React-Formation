import axios from "axios"
import { useState , useEffect } from "react";
 const ArticleListe = () => {
    const [articles,setArticles]=useState([])
    async function getArticle(){
        let response = await axios.get('http://localhost:3000/articales')
       // console.log(response.data)
        setArticles(response.data)
        console.log(articles)
    }
    useEffect(()=>{
        getArticle();
    },[])

    const deleteArticle = async(id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                            
                    try{
                        const response = await axios.delete('http://localhost:3000/articales/'+id)
                        if(response.status === 200){
                            setArticles(articles.filter(art=>art.id !== id))
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                        }
                    }catch(error){
                        console.log(error)
                    }


              
            }
          })



    }
    
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
                    <tr>
                        <td>{art.id}</td>
                        <td>{art.name}</td>
                        <td>{art.age}</td>
                        <td>
                            <button className="btn" onClick={ () => deleteArticle(art.id)}>Delete article</button>
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
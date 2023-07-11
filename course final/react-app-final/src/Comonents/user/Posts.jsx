import { getPosts } from "../../features/post/PostSlice"
import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"

const Posts = () => {

    const dispatch = useDispatch()
    const {posts , loading} =  useSelector(state=>state.post)
    useEffect(()=>{
        dispatch(getPosts())
    },[])

  return (
    <>
        { loading ? "loading . . . . . "  :  posts.map(post=>(
            <>
            <div key={post.id}>
                 <h1>{post.id} {post.title}</h1>
                 <p>{post.body}</p>
            </div>
                <hr /> 
            </>      
        ))}

    
    </>
  )
}

export default Posts
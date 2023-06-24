import { useParams,useNavigate } from "react-router-dom"

const Showproduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const redirectToHome = ()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>the product N° {id}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, repudiandae.</p>
        <button onClick={redirectToHome} >Home</button>
    </div>
  )
}

export default Showproduct
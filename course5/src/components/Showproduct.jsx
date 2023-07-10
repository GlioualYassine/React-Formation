import { useParams,useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
const Showproduct = () => {
  const {products} = useContext(ProductContext);
 // console.log(products)
    const {id} = useParams()
    let prod = products.find(p => p.id === +id)
    console.log(prod)

    const navigate = useNavigate()

    const redirectToHome = ()=>{
        navigate("/")
    }
  return (
    <div>
        <h1> {prod.label}</h1>
        <p>price : {prod.price}</p>
        <button onClick={redirectToHome} >Home</button>
    </div>
  )
}

export default Showproduct
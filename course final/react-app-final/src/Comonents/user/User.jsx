import { useSelector , useDispatch} from 'react-redux'
import {deleteUser} from "../../features/user/userSlice"
const User = () => {
  
  const users = useSelector((state)=>state.utilisateurs.users)
  const dispatch = useDispatch()
  return (
    <>
      {users.map(user=>(
        <div key={user.id}>
          <p>{user.name}
            <button onClick={()=>{
              dispatch(deleteUser(
                user.id
              ))
            }}>delete</button>
          </p>
        </div>
      ))}
    
    </>
  )
}

export default User
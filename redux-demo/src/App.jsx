import { useDispatch } from "react-redux"
import { LOGIN } from "./redux/authSlice"
import SelectData from "./SelectData"
import UsersList from "./UsersList"

function App() {
  const dispatch = useDispatch()
   return (
  <>
    <h1>Redux Toolkit Demo</h1>
    <button type="button" class="btn btn-primary"
    onClick={()=>dispatch(LOGIN({login:true,name:'Harshita'}))}>
      LogIn
    </button><hr/>
    <SelectData/><hr/>
    <UsersList/>
  </>
  )
}

export default App

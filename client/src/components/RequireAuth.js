import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

const RequireAuth = () => {
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true)
  const auth = useContext(AuthContext)

  useEffect(()=>{
    checkAuthStatus();
  }, [])

  const checkAuthStatus = async () => {
    if(auth.authenticated || !localStorage.getItem('access-token')){
      setCheckingAuthStatus(false)
      return
    }
    try{
      const data = await axios.get('/api/auth/validate_token')
      auth.setUser(data.data.data)
    } catch (err){
      console.log("unable to validate token")
    } finally{
      setCheckingAuthStatus(false)
    }
  }
  if(checkingAuthStatus) {
    return(
      <p>Checking for authentication</p>
    )
  }

  if(!auth.authenticated) {
    return <Navigate to='/login' />
  }
  return (<Outlet />)
}
export default RequireAuth;
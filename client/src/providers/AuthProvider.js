import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  const handleRegister = async (user, navigate) => {
    try{
    let data = await axios.post("/api/auth", user)
    setUser(data.data.data)
    navigate('/protected')
  } catch(err) {
    alert("Error occured registering user")
  }
  }

  const handleLogin = async (user, navigate) => {
    try{
      let data = await axios.post("/api/auth/sign_in", user)
      setUser(data.data.data)
      navigate('/protected')
    } catch(err) {
      alert("Error occured logging in user")
    }
  }

  const handleLogout = async (navigate) => {
    try{
    let data = await axios.delete('/api/auth/sign_out')
    setUser(null)
    navigate('/login')
    } catch(err) {
    alert("Error occured logging out user")
    }
  }

  return (
    <AuthContext.Provider value={{
      ...user,
      handleRegister,
      handleLogin,
      handleLogout,
      setUser,
      authenticated: user !== null, 
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
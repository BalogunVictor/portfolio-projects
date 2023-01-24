import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
  const userContext = useContext(UserContext)
 
  const handleLogin = () => {
      userContext.setUser({
        name: 'Vishwas',
        email: 'vishwas@example.com'
      })
  }
  const handleLogout = () => {
      userContext.setUser(null)
  }

  return (
    <div>
      <button onClick= {handleLogin}>Login</button>
      <button onClick= {handleLogout}>Logout</button>
      <div>user name is {userContext.user?.name}</div>
      <div>user email is {userContext.user?.email}</div>
    </div>
  )
}
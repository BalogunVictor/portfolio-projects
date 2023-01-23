import { useState } from 'react'

type AuthUser = {
  name: string
  email: string   
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwas@example.com',
    })
  }

  return (
    <div>
       <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Login</button> */}
      <div>User is {user.name} </div>
      <div>User is {user.email} </div>
    </div>
  )
}  
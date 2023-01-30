import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const AuthContext2 = createContext()

function AuthProvider2(props) {
  const [user, setUser] = useState({
    userId: 1,
    username: 'Khoi Tran',
    avatar:
      'https://images.unsplash.com/photo-1661521885730-6b4df0415cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  })
  const value = { user, setUser }
  return (
    <AuthContext2.Provider
      value={value}
      {...props}
    ></AuthContext2.Provider>
  )
}

function useAuth2() {
  const context = useContext(AuthContext2)
  if (typeof context === 'undefined') {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}

export { useAuth2, AuthProvider2 }

import React from 'react'
import { useState } from 'react'
import instance from '../../../services/api'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUsersLogin = (e) => {
    e.preventDefault()
    instance.post('/api/auth/login', {
      email,
      password
    })
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }
  
  return (
    <form className='auth__form' onSubmit={handleUsersLogin}>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
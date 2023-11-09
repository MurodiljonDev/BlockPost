import React, { useState } from 'react'
import instance from '../../../services/api'

const SignUp = () => {
  const [firstName, setFirstname] = useState('')
  const [laststName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    


  const handleUsersSingUp = (e)=>{
    e.preventDefault()

    instance.post('/api/auth/signup', {
      firstname:firstName,
      lastname: laststName,
      email,
      password
    })
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }
  return (
    
      <form className='auth__form' onSubmit={handleUsersSingUp}>
        <input type="text" placeholder='Firstname' value={firstName} onChange={(e) => setFirstname(e.target.value)} />
        <input type="text" placeholder='Lastname' value={laststName} onChange={(e) => setLastname(e.target.value)}/>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Sing Up</button>
      </form>

  )
}

export default SignUp
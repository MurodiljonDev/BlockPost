import React from 'react'
import "./Auth.scss"
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='auth'>
      <div className="auth-container">
          <nav>
            <ul className='auth__nav-list'>
              <li className='auth__nav-item'>
                <NavLink to={"/auth/login"} className={
                  ({isActive}) => isActive ? "auth__nav-link auth__nav-link--active" : "auth__nav-link"}>Login</NavLink>
              </li>
              <li className='auth__nav-item'>
                <NavLink to={"/auth/signup"} className={
                  ({isActive}) => isActive ? "auth__nav-link auth__nav-link--active" : "auth__nav-link"}>SingUp</NavLink>
              </li>
            </ul>
          </nav>
          <Outlet/>
      </div>
      
    </div>
    
  )
}

export default Auth
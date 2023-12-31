import React from 'react'
import { Container } from '../../utils'
import logo from "../../assets/images/logo.svg"
import { NavLink, useLocation } from 'react-router-dom'
import "./Nav.scss"
// import { Exception } from 'sass'
const EXCEPTION_ROUTES = ["/auth/login", "/auth/signup", "/admin"]


const Nav = ({type}) => {
    const  {pathname} = useLocation();
    console.log(pathname)

  return !EXCEPTION_ROUTES.includes(pathname) && (
    <nav className='nav'>
        <Container>
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <img width={200} height={40} src={logo} alt="logo" />
                    <h1 className='nav__seo-title' >Medium</h1>                    
                </div>
                <ul className="nav__list">
                    <li className='nav__item'><NavLink end className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/">Home</NavLink></li>
                    <li className='nav__item'><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/membership">Membership</NavLink></li>
                    <li className='nav__item'><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/articles">Articles</NavLink></li>
                    <li className='nav__item'><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/auth/login">Login</NavLink></li>
                    <li className='nav__item'><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link btn"} to="/auth/signup">Get Started</NavLink></li>
                </ul>
            </div>
        </Container>
    </nav>
  )
}

export default Nav
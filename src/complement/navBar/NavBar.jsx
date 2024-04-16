import { Link } from 'react-router-dom'
import React from 'react'
import CartWidge from '../CartWidge'
import "./navBar.css"
const NavBar = () => {
  return (
    <nav className="NavBar">
        <div className="brand">
          <Link to="/" className="Icon-NavBar">
          <img  src="https://th.bing.com/th/id/OIP.88X_JdQv6XfHh5x7Xwl33gHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7" alt="icon nails" />    
          </Link>    
        </div>
            <ul className="Categories-NavBar">
                <Link to="/category/Uñas" className="Categories-NavBar">Uñas</Link>
                <Link to="/category/Belleza de Pies" className="Categories-NavBar" >Belleza de Pies</Link>
                <Link to="/category/Maquinas" className="Categories-NavBar" >Maquinas</Link>
            </ul>
                <CartWidge />
    </nav>
  )
}

export default NavBar
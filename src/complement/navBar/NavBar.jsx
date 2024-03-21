import React from 'react'
import CartWidge from '../CartWidge'
const NavBar = () => {
  return (
    <nav>
        <div className='brand'>
            <img src="https://th.bing.com/th/id/OIP.88X_JdQv6XfHh5x7Xwl33gHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7" alt="icon nails" />    
        </div>
            <ul>
                <li>Uñas color</li>
                <li>Belleza de Pies</li>
                <li>Maquinas</li>
            </ul>
                <CartWidge />
    </nav>
  )
}

export default NavBar
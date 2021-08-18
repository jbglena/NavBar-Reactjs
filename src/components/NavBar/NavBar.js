import React, {useState, useEffect} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Icon } from 'semantic-ui-react'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (

    <nav>
      <CartWidget />

      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">Outlet</li>
      <li className="items">Prendas</li>
      <li className="items">Demin</li>
      <li className="items">Accesorios</li>
      <li className="items">Lookbook</li>
      <li className="items">Contacto</li>
    </ul>
      )}

    <div className="menu">
      <button onClick={toggleNav} className="btn"><Icon disabled name='bars' /></button>
    </div>
      

    </nav>
  )
}
// dulu react wajib di import di setiap komponen
// untuk versi baru import nya opsional
import React from "react"
import './Navbar.css'
import Logo from './react-logo.png'

const Navbar = () => {
  return (
    <nav id="nav" className="nav">
      {/* cara import sebagai komponen */}
      <img src={Logo} className="nav-logo"></img>
      {/* <img src={process.env.PUBLIC_URL + "/logo512.png"} className="nav-logo"></img> */}
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
 <nav className="">
    <Link to={"/settings"}>configuracion</Link>
    <Link to={"/"}>inicio</Link>
    <Link to={"/alltrades"}>trades</Link>
    <Link to={"/addtrade"}>nuevo trade</Link>
 </nav>
  )
}

export default Navbar

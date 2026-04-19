import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between font-bold capitalize ">
      <Link to={"/"}>inicio</Link>
      <Link to={"/alltrades"}>trades</Link>

      <div>
        {/**el boton de agrgar un nuevo trade se muestra solo cuando se ha iniciado secion */}
        <Link to={"/addtrade"}>nuevo trade</Link>
      </div>
      
      <div>
        <button c>inicio</button>
        {/* boton inicio secion o crear una cuenta*/}
        {/**el boton de configuracion se muestra solo cuando se ha iniciado secion */}
        <Link to={"/settings"}>configuracion</Link>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between font-bold capitalize ">
      <Link to={"/"}>inicio</Link>
      <Link to={"/alltrades"}>Historial</Link>

      <button>
        {/**el boton de agrgar un nuevo trade se muestra solo cuando se ha iniciado secion */}
        <Link to={"/addtrade"}>nuevo trade</Link>
      </button>
      
      <div className='flex justify-center gap-2'>
        <button>inicio</button>
        {/* boton inicio secion o crear una cuenta*/}
        {/**el boton de configuracion se muestra solo cuando se ha iniciado secion */}
        <button><Link to={"/settings"}>configuracion</Link></button>
      </div>
    </nav>
  )
}

export default Navbar

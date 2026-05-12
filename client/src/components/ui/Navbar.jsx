import React from 'react'

import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';



function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleHamburger = () => {
    setIsOpen(!isOpen)

  }

  return (
    <nav className='border-b border-b-stone-600 pb-0 max-md:border-hidden'>

      <div onClick={toggleHamburger} className="md:hidden mr-0 w-18 p-4 mt-2  bg-zinc-800 rounded-xl cursor-pointer" >

        {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </div>
      <div className="">
        <div className={`${isOpen ? "fixed top-0 p-0 bg-stone-900 h-full flex flex-col  items-center w-60 cursor-pointer " : "max-md:hidden"} flex justify-evenly  font-bold capitalize `}>

          <Link to={"/"} className='navbarhover  '>inicio</Link>

          <Link to={"/alltrades"} className='navbarhover'>Historial</Link>
          {/**el boton de agrgar un nuevo trade se muestra solo cuando se ha iniciado secion */}
          <Link to={"/accounts"} className='navbarhover' >Cuentas </Link>


          <div className='flex justify-center gap-4 max-md:flex max-md:flex-col max-md:mt-20 max-md:w-full '>
            <Link to={""} className='navbarhover'>iniciar</Link>
            {/* boton inicio secion o crear una cuenta*/}
            {/**el boton de configuracion se muestra solo cuando se ha iniciado secion */}
            <Link to={"/settings"} className='navbarhover' >configuracion</Link>
          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar

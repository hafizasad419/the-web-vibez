import React from 'react'
import DekstopNavItems from './DesktopNavItems'
import MobileNavItems from './MobileNavItems'
import { MoveRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'




function Header() {


  return (
    <header
      className='py-4 lg:py-6 flex items-center justify-between lg:justify-around fixed w-full bg-white z-[100] top-0 shadow px-4 lg:px-0'
    >

      <NavLink to={"/"}>
        <img
          className='w-20 lg:w-32'
          src={"/wv-logo-mark.png"} alt="" />
      </NavLink>

      <section>
        <DekstopNavItems />
        <MobileNavItems />
      </section>

      <div className='hidden lg:flex space-x-4'>
        <button
          className='btn-primary hidden lg:block animate-subtle-bounc'
        >
          Claim your free website <MoveRight className='inline w-6 h-6 ml-2' />

        </button>

        <button
          className=' btn-outline hidden lg:block animate-subtle-bounc'
        >
          I will pay $ upfront
          {/* <MoveRight className='inline w-6 h-6 ml-2' /> */}

        </button>
      </div>




    </header>
  )
}

export default Header
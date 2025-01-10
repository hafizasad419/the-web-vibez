import React, { useState } from 'react'
import { ArrowRight, Menu, MoveRight, X } from 'lucide-react'
import { guestNavItems } from '../guestItems'
import { NavLink } from 'react-router-dom'

function MobileNavItems() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='lg:hidden relative'>
      <button
        onClick={toggleMenu}
        className='p-2 focus:outline-none ring-2 ring-zinc text-zinc rounded-md'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div
        className={`z-[10] absolute top-full -right-4 py-4 mt-2 w-svw bg-white rounded-md overflow-hidden transition-all duration-300 ease-in-out
           ${isOpen ? 'h-svh opacity-100 border-b border-gray-300' : 'max-h-0 opacity-0'}`
        }
      >
        <ul className='py-2'>
          {guestNavItems.map((navItem, index) => (
            <li key={index}>
              <NavLink onClick={toggleMenu} to={navItem.route} className={({ isActive }) => (
                `block p-4 font-bold ${isActive ? "bg-zinc text-white" : "text-zinc"}`)}>
                {navItem.title}
              </NavLink>
            </li>
          ))}
          <li className='px-4 pt-6'>
            <button className='btn-primary w-full'>
              Get your free website <MoveRight className='inline w-6 h-6 ml-1' />
            </button>
          </li>

          <li className='px-4 py-4'>
            <button
              className=' btn-outline w-full'
            >
              I will pay $ upfront
              {/* <MoveRight className='inline w-6 h-6 ml-2' /> */}

            </button>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default MobileNavItems


import React from 'react'
import { NavLink } from 'react-router-dom'
import { guestNavItems } from '../guestItems'
import { Gem } from 'lucide-react'

function DekstopNavItems() {
    return (
        <nav>
            <ul className='hidden lg:flex items-center justify-center'>
                {guestNavItems.map((navItem, i) => (
                    <li 
                    key={i}
                    className='navItem mx-4'>
                        <NavLink to={navItem.route} className={({ isActive }) => (
                            `block px-4 my-1 py-3 font-bold text-lg text-zinc ${isActive ? "" : ""}`)}>
                            {({ isActive }) => (
                                <section>
                                    {isActive && <span className="mr-2">
                                        <Gem className='inline' />
                                    </span>}
                                    {navItem.title}
                                </section>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default DekstopNavItems
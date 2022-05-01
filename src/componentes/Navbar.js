import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FaBars,
    FaTimes,
} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Tawaynaskp</h1>
            <ul className='hidden md:flex'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/api'>Api</Link>
                </li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0a192f] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>TAWAYNASKP</h1>
                <li className='p-4 border-b border-gray-600'>
                    <Link onClick={handleClick} to='/'>Home</Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <Link onClick={handleClick} to='/api'>Api</Link>
                </li>
            </ul>


        </div>
    )
}

export default Navbar
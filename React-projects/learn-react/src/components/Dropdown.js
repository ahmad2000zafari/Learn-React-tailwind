import React from 'react'
import { Link } from 'react-router-dom'


const Dropdown = ({isOpen, toggle, loggedInMenu}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-3 text-center justify-items-center text-gray-100 border-t border-b' :'hidden '} onClick={toggle}>
            <Link to="/" className="hover:text-gray-300 w-1/2 font-semibold ">Home</Link>
            <Link to="/projects" className="hover:text-gray-200 w-1/2 font-semibold ">Projects</Link>
            <button onClick={loggedInMenu} className="bg-green-300 p-1 px-4 font-semibold transition-all hover:bg-green-800 w-auto rounded ">Login</button>
            </div>
    ) 
}

export default Dropdown

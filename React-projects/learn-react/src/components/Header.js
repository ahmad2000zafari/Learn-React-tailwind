import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({toggle,loggedInMenu}) => {
    return (
        <header className="flex justify-between items-center inline-flex w-full p-6">
            <span className="text-2xl lg:text-5xl hover:text-gray-300 text-gray-200">
                <Link to="/">Learn React</Link>
            </span>
            <div className="content-to-hide flex items-center justify-between w-full sm:w-5/12 md:w-1/3 lg:w-1/4 md:text-lg text-gray-100">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <button onClick={loggedInMenu} className="mr-5 bg-green-400 p-1 px-4 rounded-lg font-semibold transition-all hover:bg-green-700 w-auto">Login</button>
            </div>
            <div className="flex sm:hidden cursor-pointer text-gray-100" onClick={toggle}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </div>
            
            
        </header>
    )
} 

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({loggedInMenu}) => {
  
  return (
    <>
      <div className="flex py-60 items-center ">
        <div className="opacity-70 flex flex-col items-center text-white m-auto">
          <h1 className="text-5xl font-bold text-center mb-10 text-center lg:text-7xl lg:px-56">
            Learn React with me
          </h1>

          <div className="m-auto content-to-flex-col">
            <button
              onClick={loggedInMenu}
              className="mr-5 bg-green-400 py-2 px-4
               rounded-lg text-lg font-semibold transition-all hover:bg-green-700"
            >
              Sign up
            </button>
            <button className="mr-5 bg-white text-green-500 py-2 px-4 text-lg rounded-lg font-semibold transition-all hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
            <Link
              to="/projects"  
            >
              Projects
            </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

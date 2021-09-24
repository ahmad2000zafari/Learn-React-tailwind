import React from 'react'
import Backdrop from './Backdrop'

const Signin = ({loggedInMenu}) => {
  return (
    
      <>
        <Backdrop loggedInMenu={loggedInMenu}/>
        <div className="mx-auto my-20 lg:my-30 flex flex-col items-center justify-center rounded w-72  w-11/12 sm:w-3/5 md:w-1/2 lg:w-1/3 z-10 relative">
            <form
              name="Feedback form"
              method="post"
              className="w-full flex flex-col bg-green-200 opacity-90 py-20  px-10 rounded-lg  border-2"
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-green-500 text-green-500 placeholder-green-300 "
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
                className="py-2 px-4 mb-16 rounded border border-solid border-green-500 text-green-500 placeholder-green-300"
              />
              <input
                type="submit"
                value="Login"
                className="bg-green-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-green-800 mb-10"
              />

              <input
                type="submit"
                value="Sign up"
                className="bg-green-400 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-green-800"
              />
              
            </form>
          </div>
          
        </>
  )
}

export default Signin

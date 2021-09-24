import React from 'react'

const Backdrop = ({loggedInMenu}) => {
    return (
        <div className="inset-0 fixed z-0 bg-gray-400 opacity-80" onClick={loggedInMenu}>
            
        </div>
    )
}

export default Backdrop

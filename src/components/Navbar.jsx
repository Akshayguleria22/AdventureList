import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-green-300 flex flex-col sm:flex-row items-center justify-around px-4 sm:px-10 py-2 shadow-md">
        <img src="src/assets/logaster-2022-07-one-piece-symbol.png" alt="Logo" className="h-12 mb-2 sm:mb-0" />
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 items-center">
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Your Adventures</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

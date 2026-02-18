import React from 'react'
import { useState } from 'react'

const Navbar = () => {

    const [open, setOpen] = useState(false);




  return (
    <div>
    
         <nav className="bg-slate-950 text-white px-10 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Nadeem</h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-gray-300">
        <li className="hover:text-sky-400">Home</li>
        <li className="hover:text-sky-400">About</li>
        <li className="hover:text-sky-400">Projects</li>
        <li className="hover:text-sky-400">Contact</li>
      </ul>

      {/* Mobile button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 right-10 bg-slate-800 rounded-lg p-4 flex flex-col gap-3 md:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      )}
      </nav>

    </div>
  )
}

export default Navbar
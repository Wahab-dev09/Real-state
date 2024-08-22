import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false)
  const togglemenu = () => {
    setshowmenu(!showmenu)
  }
  return (
    <header>
      <div className="logo">
        <img loading='lazy' decoding='async' width='25px' height='25px' src={import.meta.env.BASE_URL + '/allstate-logo.webp'} alt="All-state-logo" />
        <span>Allstate</span>
      </div>
      <ul>
        <li className='xsmall-txt li1'>About us</li>
        <li className='xsmall-txt li2'>Projects</li>
        <li className='xsmall-txt li3'>Agents</li>
        <li className='xsmall-txt li4'>Services</li>
        <li className='xsmall-txt li5'>Listings</li>
        <button>Contact us</button>
      </ul>
      <AnimatePresence>
        {showmenu &&
       <motion.div
       className="menu"
       initial={{ y: '100%', opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       exit={{ y: '100%', opacity: 0 }}
       transition={{ duration: 0.5, ease: 'easeInOut' }}
     >
            <li className='xsmall-txt'>About us</li>
            <li className='xsmall-txt'>Projects</li>
            <li className='xsmall-txt'>Agents</li>
            <li className='xsmall-txt'>Services</li>
            <li className='xsmall-txt'>Listings</li>
            </motion.div>
        }
      </AnimatePresence>
      <div className="nav-btns">
        <span className='xsmall-txt'>More</span>
        <button>Contact us</button>
      </div>
      <svg onClick={togglemenu} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill='black'><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg>
    </header>
  )
}

export default Navbar

import React, { useState } from 'react'
import Designs from '../asset/Designs.png';
import NavLink from './NavLink';
import Button from './Button';
import {Link} from "react";

const NavbardropDown = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white ">Navbar
    <div className="flex item-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img src={Designs} alt="" className="md:cursor-pointer h-9" />
        </div>
        <div className="text-3xl" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
        </div>
        <ul className="md:flex hidden uppercase item-center gap-8 font-[Poppins]">
            <li>
                <Link to="/" className="py-7 px-3 inline-block">
                   Home                             
                </Link>
            </li>
            <NavLink />

            {/* /*Mobile nav*/ }
        </ul>
      <div className="md:block overflow-y-hidden">
          <Button />
      </div>
      <ul className={`
      "md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
      duration-500 ${open ? "left-0" : "left-[-100%"}]>
      `}
      >
        <li>
        <Link to="/" className="py-7 px-3 inline-block">
                   Home                             
        </Link>
        </li>
        <NavLink />
        <div className="py-5">
            <Button />
        </div>
      </ul>
    </div>
    </nav>
  )
}

export default NavbardropDown;
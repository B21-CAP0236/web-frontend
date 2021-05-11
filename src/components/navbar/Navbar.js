import React, {useState} from 'react'
import { FiMenu } from 'react-icons/fi';
import {Link} from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu] = useState(false)

    return (
        <nav>
            <div className=" items-center bg-green-500 h-10 flex flex-row justify-between px-10 md:">
                <Link to="/" className=" font-semibold">
                    ANANTARA
                </Link>
                <div style={{width: "50rem"}} className="hidden flex-row justify-between lg:flex">
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/contacts">
                        Contact Us
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                </div>
                <FiMenu className="lg:hidden" onClick={() => setMenu(!menu)} />
            </div>
            <div className={menu ? "absolute w-full flex-col flex items-center bg-green-500 " : "flex-col hidden items-center"}>
                <Link onClick={() => setMenu(false)} to="/about" className="my-3">
                    About
                </Link>
                <Link onClick={() => setMenu(false)} to="/contacts">
                    Contact Us
                </Link>
                <Link onClick={() => setMenu(false)} to="/login" className="my-3">
                    Login
                </Link>
            </div>
        </nav>
    )
}

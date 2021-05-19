import React, {useState} from 'react'
import { FiMenu } from 'react-icons/fi';
import {Link} from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu] = useState(false)

    return (
        <nav>
            <div className=" items-center h-10 flex flex-row justify-between px-10 md:">
                <Link to="/" className=" font-semibold">
                    ANANTARA
                </Link>
                <div style={{width: "50rem"}} className="hidden flex-row justify-between lg:flex">
                    <Link to="/akun">
                        Akun
                    </Link>
                    <Link to="/analisa-data">
                        Analisa Data
                    </Link>
                    <Link to="/peta">
                        Peta
                    </Link>
                    <Link to="/bansos">
                        Bansos
                    </Link>
                    <Link to="/profile">
                        Profile
                    </Link>
                </div>
                <FiMenu className="lg:hidden" onClick={() => setMenu(!menu)} />
            </div>
            <div className={menu ? "absolute w-full flex-col flex items-center bg-black text-white " : "flex-col hidden items-center"}>
                <Link to="/akun" onClick={() => setMenu(false)} className=" py-3 w-full flex justify-center hover:bg-white hover:text-black" >
                    Akun
                </Link>
                <Link to="/analisa-data" onClick={() => setMenu(false)} className=" py-3 w-full flex justify-center hover:bg-white hover:text-black" >
                    Analisa Data
                </Link>
                <Link to="/peta" onClick={() => setMenu(false)} className=" py-3 w-full flex justify-center hover:bg-white hover:text-black" >
                    Peta
                </Link>
                <Link to="/bansos" onClick={() => setMenu(false)} className=" py-3 w-full flex justify-center hover:bg-white hover:text-black" >
                    Bansos
                </Link>
                <Link to="/profile" onClick={() => setMenu(false)} className=" py-3 w-full flex justify-center hover:bg-white hover:text-black" >
                    Profile
                </Link>
            </div>
            <div className=" w-full h-0.5 bg-black" />
        </nav>
    )
}

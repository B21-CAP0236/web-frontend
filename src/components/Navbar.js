import React, {useState} from 'react'
import { FiMenu } from 'react-icons/fi';

export const Navbar = () => {

    const [menu, setMenu] = useState(false)

    return (
        <nav>
            <div className=" items-center bg-green-500 h-10 flex flex-row justify-between px-10 md:">
                <p className=" font-semibold">
                    ANANTARA
                </p>
                <div style={{width: "50rem"}} className="hidden flex-row justify-between lg:flex">
                    <p>
                        About
                    </p>
                    <p>
                        Contact Us
                    </p>
                    <p>
                        Login
                    </p>
                </div>
                <FiMenu className="lg:hidden" onClick={() => setMenu(!menu)} />
            </div>
            <div className={menu ? "absolute w-full flex-col flex items-center bg-green-500 " : "flex-col hidden items-center"}>
                <p className="my-3">
                    About
                </p>
                <p>
                    Contact Us
                </p>
                <p className="my-3">
                    Login
                </p>
            </div>
        </nav>
    )
}

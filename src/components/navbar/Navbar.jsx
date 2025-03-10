import React, { useState } from 'react'
import Logo from '../../assets/img/logo-black.png'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {

    const [toggle,setToggle] = useState(false);
    const updateToggle = () => {
        setToggle(!toggle)
    }

    return (
        <nav className='bg-[#FFFFFF]'>
            <div className='container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]'>
                <div>
                    <a href="#">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <ul className={`${!toggle ? 'hidden' : 'flex'} flex flex-col my-5 md:flex md:flex-row`}>
                    <li className='my-2 md:mx-4'><Link to="/">Home</Link></li>
                    <li className='my-2 md:mx-4'><Link to="/About">Service</Link></li>
                    <li className='my-2 md:mx-4'><a href="#">Feature</a></li>
                    <li className='my-2 md:mx-4'><a href="#">Product</a></li>
                    <li className='my-2 md:mx-4'><a href="#">Testimonial</a></li>
                    <li className='my-2 md:mx-4'><a href="#">FAQ</a></li>
                </ul>

                <ul className={`${!toggle ? 'hidden' : 'flex'} flex flex-col my-5 md:flex md:flex-row`}>
                    <li className='my-2 md:mx-4'><a href="#" className='inline-flex justify-center items-center py-2 px-4 text-[#4CAF4F]'>Login</a></li>
                    <li className='my-2 md:mx-4'><a href="#" className='inline-flex justify-center items-center py-2 px-4 bg-[#4CAF4F] text-white rounded-md'>Sign up</a></li>
                </ul>

                <FaBars onClick={updateToggle} className='absolute right-5 cursor-pointer text-xl md:hidden'/>
            </div>


        </nav>
    )
}

export default Navbar
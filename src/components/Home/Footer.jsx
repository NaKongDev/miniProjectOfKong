import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa6";
import logoWhite from '../../assets/img/logo-white.png'

function Footer() {
    return (
        <div className='py-20 bg-[#263238] text-white'>
            <div className='container mx-auto max-w-[1320px]'>
                <div className='grid grid-cols-1 m-10 md:m-0 md:grid-cols-2'>
                    <div>
                        <img src={logoWhite} alt="" />
                        <p className='py-10'>Copyright © 2020 Nexcent ltd. <br /> All rights reserved</p>
                        <ul className='flex gap-5 mb-5'>
                            <li className='bg-sky-100/30 p-2 rounded-full'><a className='text-[1.5rem] ' href="#"><FaInstagram /></a></li>
                            <li className='bg-sky-100/30 p-2 rounded-full'><a className='text-[1.5rem] ' href="#"><FaDribbble /></a></li>
                            <li className='bg-sky-100/30 p-2 rounded-full'><a className='text-[1.5rem] ' href="#"><FaTwitter /></a></li>
                            <li className='bg-sky-100/30 p-2 rounded-full'><a className='text-[1.5rem] ' href="#"><FaYoutube /></a></li>
                        </ul>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='mb-5'>
                            <h4 className='text-[1.25rem] font-semibold'>Company</h4>
                            <ul>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">About us</a></li>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Blog</a></li>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Contact us</a></li>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Pricing</a></li>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Testimonials</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='text-[1.25rem] font-semibold'>Support</h4>
                            <ul className='flex flex-col mb-5'>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Terms of service</a></li>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Legal</a></li>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Privacy policy</a></li>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Status</a></li>
                                <li className='mt-2'><a className='text-[0.875rem]' href="#">Help center</a></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='text-[1.25rem] font-semibold'>Stay up to date</h4>
                            <form action="" className='flex mt-5'>
                                <div className='relative'>
                                    <input type="text" className='bg-white/20 text-white text-[0.875rem] px-4 py-2 rounded-md' placeholder='Your email address' />
                                    <button className='absolute top-[10px] right-[10px] cursor-pointer' type='submit'><FaRegPaperPlane/></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
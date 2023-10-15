import React from 'react'
import "./footer.css"
import { FiInstagram } from "react-icons/fi"
import { FaFacebook, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
const Footer = () => {
    return (
        <>
            <div className='footer  mt-[3rem] px-[6rem] pt-8'>
                <div className='flex justify-between pb-6'>
                    <div className='w-[15rem] text-sm text-white'>
                        <img src="/assets/logo2.png" alt="" className='mb-4' />
                        <p>India's first platform dedicated to simplifying partner search</p>
                    </div>
                    <div className='flex gap-[6rem] text-sm text-white'>
                        <div>
                            <p className='text-white font-medium'>COMPANY</p>
                            <p className="mb-4 mt-4">About</p>
                            <p className="mb-4">Princing</p>
                            <p className="mb-4">Careers</p>
                        </div>
                        <div>
                            <p className='text-white font-medium'>SOLUTIONS</p>
                            <p className="mb-4 mt-4">Search</p>
                            <p className="mb-4">Connect</p>
                            <p className="mb-4">Research</p>
                            <p className="mb-4">Academy</p>
                        </div>
                        <div>
                            <p className='text-white font-medium'>RESOURCES</p>
                            <p className="mb-4 mt-4">Blogs</p>
                            <p className="mb-4">Forms</p>
                        </div>
                        <div>
                            <p className='text-white font-medium'>SUPPORT</p>
                            <p className="mb-4 mt-4">Help</p>
                            <p className="mb-4">Contact Us</p>
                        </div>
                        <div>
                            <p className='text-white font-medium'>LEGAL</p>
                            <p className="mb-4 mt-4">Privacy</p>
                            <p className="mb-4">Terms</p>
                            <p className="mb-4">Accessibility</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between py-6'>
                    <div className='text-white'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</div>
                    <div className='text-white text-xl flex gap-4'>
                        <FaFacebook />
                        <FiInstagram />
                        <FaLinkedinIn />
                        <FaWhatsapp />
                    </div>
                </div>
            </div>
            <div className='bg-black  text-center text-white p-3'>
                <p>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer
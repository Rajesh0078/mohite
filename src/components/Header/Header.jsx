import React from 'react'
import { Link } from 'react-router-dom'
import { BsChevronDown } from "react-icons/bs"
import "./header.css"

const Header = () => {
    return (
        <>
            <header className='flex items-center justify-between py-[1rem] px-[6rem]'>
                <div className='flex gap-8 items-center'>
                    <img src="/assets/logo.png" alt="logo" />
                    <span className='text-[18px] font-bold '>Solutions<BsChevronDown className='inline text-[#0076CE] mx-2 text-sm font-bold' /></span>
                    <span className='text-[18px] font-bold'>Features<BsChevronDown className='inline text-[#0076CE] mx-2 text-sm font-bold' /></span>
                    <span className='text-[18px] font-bold'>Blogs</span>
                    <span className='text-[18px] font-bold'>About<BsChevronDown className='inline text-[#0076CE] mx-2 text-sm font-bold' /></span>
                </div>
                <div>
                    <Link className='me-[8px] py-[10px] px-[20px] sign rounded-[10px]  font-bold'>Login</Link>
                    <Link className='bg-[#0076CE] py-[10px] px-[20px] register rounded-[10px] text-[white] font-bold'>Register</Link>
                </div>
            </header>
        </>
    )
}

export default Header
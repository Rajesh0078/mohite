import React, { useContext } from 'react'
import "./home.css"
import { Icon } from '@iconify/react';
import { store } from "../../App"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { setValue } = useContext(store)

    const clickHandler = (e) => {
        e.preventDefault()
        const parent = e.target.parentElement.childNodes[0]
        setValue(parent.value)
        navigate('/search')
    }

    return (
        <>
            <div>
                <div className='ps-[6rem] flex  z-[1000] overflow-x-hidden gap-3'>
                    <div className='w-[38rem] mt-[8rem]'>
                        <h2 className='font-semibold text-[3.2rem]' style={{ lineHeight: "80px" }}>Find <span className='text-x'>Partners</span> (CAs) available online</h2>
                        <p className='text-[18.6px] text-[#616161] mt-3' style={{ lineHeight: "30px" }}><span className='font-semibold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                        <form className=' mt-10 w-[97%] flex'>
                            <input type="text" placeholder='Search by name' className='text-[#BFBFBF] text-lg px-7 outline-none py-5 w-[75%]' />
                            <button className='p-5 bg-[#0076CE] rounded-md text-white text-lg px-9 w-[25%]' onClick={clickHandler}>search</button>
                        </form>
                    </div>
                    <div className=' flex gap-4'>
                        <img src="/assets/Picture.png" alt="hi" className='mt-[9rem] h-[25rem] w-[12rem]' />
                        <img src="/assets/Picture-1.png" alt="hi" className='mt-[3rem] h-[25rem] w-[12rem]' />
                        <img src="/assets/Picture-2.png" alt="hi" className=' mt-[6rem] h-[25rem] w-[12rem]' />
                    </div>
                </div>
                <div className='text-center px-[6rem] py-12 home'>
                    <h3 className='text-[3.8rem] font-semibold '>Want to  <span className='text-x'>Join</span> Us?</h3>
                    <p className='text-[1.3rem] font-normal mt-2'>To remain with us, it is essential that you diligently follow the steps provided</p>
                    <div className='grid grid-cols-3 mt-9 gap-6'>
                        <div className="card relative">
                            <div className='order-box text-white'>1<sup>st</sup></div>
                            <p className='text-[#000000] font-semibold text-xl leading-[24px]'>Commencement of business </p>
                            <p className='text-md mt-2'>Invested shareholders must confirm payment and office address </p>
                            <div className='text-left flex gap-4 rounded-xl mt-3 bg-[#F4F4F4] px-4 py-2 h-[6.9rem]'>
                                <div>
                                    <p className='text-[#0076CE] font-semibold '>Due date</p>
                                    <p className='mt-1 text-sm'>Within 180 days </p>
                                </div>
                                <div>
                                    <p className='text-[#FF6666] font-semibold'>Penalty fees</p>
                                    <p className='mt-1 text-sm'><span className='font-bold'>₹50,000</span>  for the company</p>
                                    <p className='mt-1 text-sm'><span className='font-bold'>₹1,000</span> /day for directors</p>
                                </div>
                            </div>
                        </div>
                        <div className="card relative">
                            <div className='order-box  text-white'>2<sup>nd</sup></div>
                            <p className='text-[#000000] font-semibold text-xl leading-[24px]'>Auditor Appointment </p>
                            <p className='text-md mt-2'>Company informs new auditor and submits ADT.1 form to ROC. </p>
                            <div className='text-left flex gap-4 rounded-xl mt-3 bg-[#F4F4F4] px-4 py-2 h-[6.9rem]'>
                                <div>
                                    <p className='text-[#0076CE] font-semibold '>Due date</p>
                                    <p className='mt-1 text-sm'>Within 30 days </p>
                                </div>
                                <div>
                                    <p className='text-[#FF6666] font-semibold'>Penalty fees</p>
                                    <p className='mt-1 text-sm'><span className='font-bold'>₹300</span> per month</p>
                                </div>
                            </div>
                        </div>
                        <div className="card relative">
                            <div className='order-box  text-white'>3<sup>rd</sup></div>
                            <p className='text-[#000000] font-semibold text-xl leading-[24px]'>DIN eKYC </p>
                            <p className='text-md mt-2'>Directors share personal information for identification & verification </p>
                            <div className='text-left flex gap-4 rounded-xl mt-3 bg-[#F4F4F4] px-4 py-2 h-[6.9rem]'>
                                <div>
                                    <p className='text-[#0076CE] font-semibold '>Due date</p>
                                    <p className='mt-1 text-sm'>Every year </p>
                                </div>
                                <div>
                                    <p className='text-[#FF6666] font-semibold'>Penalty fees</p>
                                    <p className='mt-1 text-sm'><span className='font-bold'>₹5000</span> one time</p>
                                </div>
                            </div>
                        </div>
                        <div className="card relative">
                            <div className='order-box  text-white'>4<sup>th</sup></div>
                            <p className='text-[#000000] font-semibold text-xl leading-[24px]'>DPT-3</p>
                            <p className='text-md mt-2'>Companies report money taken from people to ROC; auditors confirm details.</p>
                            <div className='text-left flex gap-4 rounded-xl mt-3 bg-[#F4F4F4] px-4 py-2 h-[6.9rem]'>
                                <div>
                                    <p className='text-[#0076CE] font-semibold '>Due date</p>
                                    <p className='mt-1 text-sm'>Within 30 days </p>
                                </div>
                                <div>
                                    <p className='text-[#FF6666] font-semibold'>Penalty fees</p>
                                    <p className='mt-1 text-sm'><span className='font-bold'>₹300</span> per month</p>
                                </div>
                            </div>
                        </div>
                        <div className="card relative">
                            <div className='order-box  text-white'>5<sup>th</sup></div>
                            <p className='text-[#000000] font-semibold text-xl leading-[24px]'>MCA Form AOC-4 </p>
                            <p className='text-md mt-2'>It's like an official report card for a company's documents </p>
                            <div className='text-left flex gap-4 rounded-xl mt-3 bg-[#F4F4F4] px-4 py-2 h-[6.9rem]'>
                                <div>
                                    <p className='text-[#0076CE] font-semibold '>Due date</p>
                                    <p className='mt-1 text-sm'>On or Before 30th November  </p>
                                </div>
                                <div>
                                    <p className='text-[#FF6666] font-semibold'>Penalty fees</p>
                                    <p className='mt-1 text-sm'><span className='font-bold'>₹200</span> per day(No upper limit)*</p>
                                </div>
                            </div>
                        </div>
                        <div className="card relative">
                            <div className='order-box text-white'>6<sup>th</sup></div>
                            <p className='text-[#000000] font-semibold text-xl leading-[24px]'>MCA Form MGT-7 </p>
                            <p className='text-md mt-2'>Companies must annually report activities and finances to the registrar. </p>
                            <div className='text-left flex gap-4 rounded-xl mt-3 bg-[#F4F4F4] px-4 py-2 h-[6.9rem]'>
                                <div>
                                    <p className='text-[#0076CE] font-semibold '>Due date</p>
                                    <p className='mt-1 text-sm'>On or Before 31st December </p>
                                </div>
                                <div>
                                    <p className='text-[#FF6666] font-semibold'>Penalty fees</p>
                                    <p className='mt-1 text-sm'><span className='font-bold'>₹200</span> per day(No upper limit)*</p>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <p className='px-[6rem] pb-4 '>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
                <div className='flex px-[6rem] mt-[6rem] '>
                    <div className='w-[38rem] me-3'>
                        <p className='text-[3.5rem] font-semibold'><span className='text-x'>All-in-One</span> platform that Makes Easier</p>
                        <p className='text-[1.5rem] leading-7 mt-6'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                        <div className='grid grid-cols-2 gap-12 mt-12  '>
                            <div className='flex'>
                                <Icon icon="icon-park-twotone:search" color="#0076ce" className='inline-block text-7xl mt-[-10px] ' />
                                <p className='ms-4  text-lg'><span className='font-bold text-lg'>SEARCH</span> for vital company information </p>
                            </div>
                            <div className='flex '>
                                <Icon icon="icon-park-twotone:enquire" color="#0076ce" className='inline-block text-8xl mt-[-23px] ' />
                                <p className='ms-4 text-lg'><span className='font-bold text-lg'>CONNECT</span> with the resources to meet your business needs </p>
                            </div>
                            <div className='flex '>
                                <Icon icon="icon-park-twotone:table-report" color="#0076ce" className='inline-block text-8xl mt-[-14px] ' />
                                <p className='ms-4 text-lg'><span className='font-bold text-lg'>RESEARCH</span> and generate reports that drive growth  </p>
                            </div>
                            <div className='flex '>
                                <Icon icon="icon-park-twotone:degree-hat" color="#0076ce" className='inline-block text-8xl mt-[-28px] ' />
                                <p className='ms-4 text-lg'><span className='font-bold text-lg'>ACADEMY</span> to give you the skills for success in your career</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className=''>
                            <div className='text-right mt-8 flex'>
                                <div className='mt-8'>
                                    <p className='pink_text mb-2 w-[16.7rem] ms-[5rem]'>Hey, check out loreumipsum services. </p>
                                    <p className='pink_text mb-2 w-[18.6rem] ms-[3rem]'>I learned from their videos, got my first job.</p>
                                    <p className='pink_text mb-2 w-[19.2rem] ms-[2.3rem]'>You won't be disappointed with their services.</p>
                                </div>
                                <img src="/assets/Student.png" alt="" />
                            </div>
                            <div className='mt-[-9rem]'>
                                <div className=''>
                                    <p className='blue_text text-left w-[19rem] ms-12 mb-2'>I got a perfect analysis report from them too</p>
                                    <p className='blue_text text-left w-[8rem] ms-[13rem]'>Oh, that's great.</p>
                                </div>
                                <img src="/assets/Teacher.png" alt="" className='mt-[-1.5rem]' />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
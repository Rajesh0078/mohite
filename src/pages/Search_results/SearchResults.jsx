import React, { useContext, useEffect, useState } from 'react'
import { store } from '../../App'
import axios from 'axios'
import { AiFillStar } from "react-icons/ai"
import { SlCalender } from "react-icons/sl"
import "./search.css"


const SearchResults = () => {
    const { value } = useContext(store)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/getbyname/${value}`).then((res) => setData(res.data))
    }, [value])

    return (
        <div>
            {value && data &&
                data.map((item, index) => {
                    return <>
                        <div key={index} className='px-[6rem] flex gap-[4rem] py-8 bg-white'>
                            <div className='basis-1/3'>
                                <p className='text-[2rem] font-bold pb-2'>{item.name}</p>
                                <p className='py-2'>I am here to provide {item.intro}</p>
                                <span className='text-[#0076CE] pb-1'><AiFillStar fill='#0076CE' className='inline' />{item.rating} <span className='text-black'>({item.reviewCount})</span> </span>
                                <div className='card-y p-6 rounded-md bg-white mt-3'>
                                    <div className='flex justify-between'>
                                        <p>{item.taskComplexity}</p>
                                        <p className='font-semibold'>{item.price}</p>
                                    </div>
                                    <p className='py-3'><SlCalender className='inline pe-3 text-3xl' fill='#0076CE' />{item.deliveryTime}</p>
                                    <div className='flex gap-2'>
                                        <p className='text-white bg-[#0076CE] rounded-md py-2 px-2 '>Request Proposal</p>
                                        <p className='bg-white text-center text-[#0076CE] rounded-md py-2 px-6 border  border-[#0076CE]'>chat with me</p>
                                    </div>
                                </div>
                                <div className="card-y p-4 mt-6">
                                    <p className='text-[2rem] font-semibold'>what people says</p>
                                    <p>I cannot express enough gratitude for the support Micheal has provided in managing my personal finances. Their attention to detail and deep understanding of financial markets has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.</p>
                                </div>
                            </div>
                            <div className='basis-2/3'>
                                <img src="/assets/rect.png" alt="" />
                                <p className='text-[2rem] font-bold py-2'>About {item.name}</p>

                                <div className='flex justify-between'>
                                    <div>
                                        <p className='text-[#999999]'>FROM</p>
                                        <p>{item.about.from}</p>
                                    </div>
                                    <div>
                                        <p className='text-[#999999]'>PARTNER SINCE</p>
                                        <p>{item.about.partnerSince}</p>
                                    </div>
                                    <div>
                                        <p className='text-[#999999]'>AVERAGE RESPONSE TIME</p>
                                        <p>{item.about.averageResponseTime}</p>
                                    </div>
                                </div>
                                <p className='text-[#999999] mt-4'>About</p>
                                <p>{item.about.description}</p>
                                <div className='flex gap-12'>
                                    <div>
                                        <p className='text-[#999999] mt-4'>SERVICES I OFFER</p>
                                        {item.about.services.map((i) => {
                                            return <div>
                                                <p>{i}</p>
                                            </div>
                                        })}
                                    </div>
                                    <div>
                                        <p className='text-[#999999] mt-4'>WHY ME?</p>
                                        {item.about.benefits.map((i) => {
                                            return <div>
                                                <p>{i}</p>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                })
            }
        </div>
    )
}

export default SearchResults

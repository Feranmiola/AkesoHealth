/* eslint-disable */
import React from 'react'
import TIconBig from './Icons/TIconBig'
import ForwardIcon from './Icons/ForwardIcon'

const Imagine = () => {
    return (
        <div className='w-screen h-[930px] flex flex-col items-center justify-center bg-[#F8F8F8] space-y-8'>
            <TIconBig />
            <p className='text-[#186AF8] text-base'>[Join the Waitlist]</p>
            <p className='text-blue font-plus-jakarta font-medium text-center leading-[4.5rem] text-[75.22px]'><span className='text-[#42AAFF]'>Imagine<br /></span> healthcare that <br />truly works for you.</p>

            <div className="flex flex-row focus-within:border-blue border-[1px] border-transparent transition ease-in-out items-center w-[590px] h-[60px] space-x-2  rounded-2xl bg-white p-2">
                <input
                    type="email"
                    placeholder="Enter e-mail address"
                    className=" flex-1 flex outline-none bg-transparent active:outline-none focus:outline-none text-gray placeholder:text-gray3 text-base"
                />
                <div className="bg-blue rounded-[10px] w-[139px] h-[44px] flex flex-row space-x-1 items-center justify-center cursor-pointer">
                    <p className="text-white font-medium text-base">Join Waitlist</p>
                    <ForwardIcon />
                </div>
            </div>
            <p className='text-[#717171] text-base text-center leading-[1rem]'>With Akeso Health, you won’t have to <i className='text-[#1B7DFA]'>imagine</i>. Join our email list and be<br /> the first to know about innovations that make care better for everyone.</p>

            <div className='rotate-180 mt-10'>
                <TIconBig />
            </div>

        </div>
    )
}

export default Imagine
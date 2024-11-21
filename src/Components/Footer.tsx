import React from 'react'
import MailIcon from './Icons/MailIcon'
import DotIcon from './Icons/DotIcon'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-[641px] bg-[#F8F8F8] space-y-5'>
            <p className='text-[#656565] text-sm font-inter-var'>Discover how Akeso Health can support your healthcare goals.</p>
            <div className='flex flex-row items-center space-x-4 justify-center'>
                <DotIcon />
                <MailIcon />
                <p className='text-[#D8D8D8] text-[75.22px] font-plus-jakarta'>jack@akesohealthnetwork.com</p>

            </div>
        </div>
    )
}

export default Footer
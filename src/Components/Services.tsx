/* eslint-disable */
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='bg-white h-[938px] w-screen flex flex-col space-y-5 items-center justify-center'>
            <div className='w-[1213.69px] flex flex-row items-end justify-between'>
                <p className='text-[45.59px] text-light-blue font-medium leading-[2.5rem] font-plus-jakarta'>Akeso, because healthcare<br /> deserves better.</p>
                <p className='text-gray2 text-base text-center'>At Akeso, we don’t just fix what’s broken—we build <br />smarter solutions that put care back in healthcare.</p>
            </div>

            <Image
                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732145032/team-young-specialist-doctors-standing-corridor-hospital_xaxlcb.webp'
                alt='Doctor Image'
                width={1200}
                height={443}
                className='rounded-[16px]'
            />
            <div className='w-[1200px] flex items-center justify-between h-[120px]'>
                <div className='h-full w-[291px]'>
                    <p className='text-gray font-mono text-base'>Operational Excellence</p>

                </div>

            </div>

        </div>
    )
}

export default Services
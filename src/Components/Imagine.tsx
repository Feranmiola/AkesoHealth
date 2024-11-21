/* eslint-disable */
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TIconBig from './Icons/TIconBig'
import ForwardIcon from './Icons/ForwardIcon'
import Image from 'next/image'

const Imagine = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 },
        }
    }

    return (
        <motion.div
            className='w-screen h-[930px] flex flex-col items-center relative justify-center bg-[#F8F8F8] space-y-8'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className='w-[1440px] max-md:hidden flex items-center justify-center absolute top-0' variants={containerVariants}>
                <div className='w-full relative'>
                    <motion.div variants={imageVariants} >
                        <Image
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732177545/1_j6hl9n.webp'
                            alt='Imagine Image 1'
                            width={183}
                            height={183}
                            className='absolute z-0 left-[120px] top-[235px]'
                        />
                    </motion.div>

                    <motion.div variants={imageVariants} >
                        <Image
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732177546/2_a8ki2n.webp'
                            alt='Imagine Image 2'
                            width={99}
                            height={131.39}
                            className='absolute z-40 left-[253px] top-[373px]'
                        />
                    </motion.div>

                    <motion.div variants={imageVariants} >
                        <Image
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732177545/3_cyt6j4.webp'
                            alt='Imagine Image 3'
                            width={333}
                            height={192.38}
                            className='absolute z-30 left-[987px] top-[86px]'
                        />
                    </motion.div>

                    <motion.div variants={imageVariants} >
                        <Image
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732177546/4_hnycou.webp'
                            alt='Imagine Image 4'
                            width={187}
                            height={192}
                            className='absolute z-30 left-[1068px] top-[626px]'
                        />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div variants={itemVariants}>
                <TIconBig />
            </motion.div>
            <motion.p className='text-[#186AF8] text-base font-mono' variants={itemVariants}>
                [Join the Waitlist]
            </motion.p>
            <motion.p
                className='text-blue font-plus-jakarta font-medium max-md:text-[40px] max-md:leading-[2.5rem] text-center leading-[4.5rem] text-[75.22px]'
                variants={itemVariants}
            >
                <span className='text-[#42AAFF]'>Imagine<br /></span> healthcare that <br />truly works for you.
            </motion.p>

            <motion.div
                className="flex flex-row focus-within:border-blue border-[1px] border-transparent transition ease-in-out items-center w-[590px] max-md:w-[90%] h-[60px] space-x-2 rounded-2xl bg-white p-2"
                variants={itemVariants}
            >
                <input
                    type="email"
                    placeholder="Enter e-mail address"
                    className="flex-1 max-md:w-[60%] flex outline-none bg-transparent active:outline-none focus:outline-none text-gray placeholder:text-gray3 text-base"
                />
                <motion.div
                    className="bg-blue rounded-[10px] w-[139px] h-[44px] flex flex-row space-x-1 items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <p className="text-white font-medium text-base">Join Waitlist</p>
                    <ForwardIcon />
                </motion.div>
            </motion.div>
            <motion.p
                className='text-[#717171] text-base text-center max-md:hidden leading-[1rem]'
                variants={itemVariants}
            >
                With Akeso Health, you won't have to <i className='text-[#1B7DFA]'>imagine</i>. Join our email list and be<br /> the first to know about innovations that make care better for everyone.
            </motion.p>

            <motion.p
                className='text-[#717171] text-base tracking-tighter text-center md:hidden leading-[1rem]'
                variants={itemVariants}
            >
                With Akeso Health, you won't have to <i className='text-[#1B7DFA]'>imagine</i>. Join<br />our email list and be the first to know about<br />innovations that make care better for everyone.
            </motion.p>

            <motion.div className='rotate-180 mt-10' variants={itemVariants}>
                <TIconBig />
            </motion.div>

        </motion.div>
    )
}

export default Imagine


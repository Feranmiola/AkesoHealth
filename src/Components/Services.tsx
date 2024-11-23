/* eslint-disable */
'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import ThrophyIcon from './Icons/ThrophyIcon'
import StatIcon from './Icons/StatIcon'
import PersonIcon from './Icons/PersonIcon'

const Services = () => {
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
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div
            className='bg-white min-h-[938px] w-screen flex flex-col space-y-7 items-center justify-center py-10 md:py-16 lg:py-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className='w-full max-w-[1213.69px] px-4 md:px-8 flex flex-col md:flex-row md:items-end justify-between space-y-4 md:space-y-0 md:space-x-8' variants={containerVariants}>
                <motion.p className='text-2xl md:text-3xl lg:text-[45.59px] text-light-blue font-medium leading-tight md:leading-snug lg:leading-[2.5rem] font-plus-jakarta' variants={itemVariants}>
                    Akeso, because healthcare<br className="hidden md:inline" /> deserves better.
                </motion.p>
                <motion.p className='text-gray2 text-base max-w-[450px] md:text-right' variants={itemVariants}>
                    At Akeso, we don't just fix what's broken—we build <br className="hidden md:inline" />smarter solutions that put care back in healthcare.
                </motion.p>
            </motion.div>

            <motion.div className='w-full flex items-center justify-center px-4 md:px-8' variants={itemVariants} whileHover={{ scale: 1.05, filter: "brightness(1.2)" }} transition={{ duration: 0.3 }}>
                <Image
                    src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732145032/team-young-specialist-doctors-standing-corridor-hospital_xaxlcb.webp'
                    alt='Doctor Image'
                    width={1200}
                    height={443}
                    className='rounded-[16px] hidden md:block w-full max-w-[1200px] h-auto'
                />

                <Image
                    src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732187324/team-young-specialist-doctors-standing-corridor-hospital_1_zxlcow.webp'
                    alt='Doctor Image'
                    width={352}
                    height={130}
                    className='rounded-[8px] md:hidden w-full'
                />
            </motion.div>
            <motion.div className='w-full max-w-[1200px] px-4 md:px-8 flex flex-col md:flex-row items-start md:items-stretch justify-between space-y-8 md:space-y-0 md:space-x-8' variants={containerVariants}>
                <motion.div className='flex flex-col space-y-4 md:w-1/3' variants={itemVariants}>
                    <ThrophyIcon />
                    <p className='text-gray font-mono text-base font-medium'>Operational Excellence</p>
                    <p className='text-sm text-gray2 font-inter-var tracking-tight'>
                        We simplify healthcare operations by streamlining workflows, improving provider efficiency, and reducing administrative costs.
                    </p>
                </motion.div>
                <motion.div className='flex flex-col space-y-4 md:w-1/3' variants={itemVariants}>
                    <StatIcon />
                    <p className='text-gray font-mono text-base font-medium'>Data-Driven Health Insights</p>
                    <p className='text-sm text-gray2 font-inter-var tracking-tight'>
                        Our actionable analytics and evidence-based insights empower effective policies and better population health management.
                    </p>
                </motion.div>
                <motion.div className='flex flex-col space-y-4 md:w-1/3' variants={itemVariants}>
                    <PersonIcon />
                    <p className='text-gray font-mono text-base font-medium'>Improved Patient Outcomes</p>
                    <p className='text-sm text-gray2 font-inter-var tracking-tight'>
                        With coordinated care plans and integrated health records, we enhance safety, improve care quality, and boost patient satisfaction.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services


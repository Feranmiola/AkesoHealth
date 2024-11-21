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
            className='bg-white h-[938px] w-screen flex flex-col space-y-7 items-center justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className='w-[1213.69px] flex flex-row items-end justify-between' variants={containerVariants}>
                <motion.p className='text-[45.59px] text-light-blue font-medium leading-[2.5rem] font-plus-jakarta' variants={itemVariants}>
                    Akeso, because healthcare<br /> deserves better.
                </motion.p>
                <motion.p className='text-gray2 text-base text-center' variants={itemVariants}>
                    At Akeso, we don't just fix what's broken—we build <br />smarter solutions that put care back in healthcare.
                </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05, filter: "brightness(1.2)" }} transition={{ duration: 0.3 }}>
                <Image
                    src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732145032/team-young-specialist-doctors-standing-corridor-hospital_xaxlcb.webp'
                    alt='Doctor Image'
                    width={1200}
                    height={443}
                    className='rounded-[16px]'
                />
            </motion.div>
            <motion.div className='w-[1200px] flex items-center justify-between h-[120px]' variants={containerVariants}>
                <motion.div className='h-full w-[291px] flex flex-col justify-between' variants={itemVariants}>
                    <ThrophyIcon />
                    <p className='text-gray font-mono text-base font-medium'>Operational Excellence</p>
                    <p className='text-sm text-gray2 font-inter-var tracking-tight w-full'>
                        We simplify healthcare operations by streamlining workflows, improving provider efficiency, and reducing administrative costs.
                    </p>
                </motion.div>
                <motion.div className='h-full w-[291px] flex flex-col justify-between' variants={itemVariants}>
                    <StatIcon />
                    <p className='text-gray font-mono text-base font-medium'>Data-Driven Health Insights</p>
                    <p className='text-sm text-gray2 font-inter-var tracking-tight w-full'>
                        Our actionable analytics and evidence-based insights empower effective policies and better population health management.
                    </p>
                </motion.div>
                <motion.div className='h-full w-[291px] flex flex-col justify-between' variants={itemVariants}>
                    <PersonIcon />
                    <p className='text-gray font-mono text-base font-medium'>Improved Patient Outcomes</p>
                    <p className='text-sm text-gray2 font-inter-var tracking-tight w-full'>
                        With coordinated care plans and integrated health records, we enhance safety, improve care quality, and boost patient satisfaction.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services


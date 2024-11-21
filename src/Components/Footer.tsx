'use client'

import React from 'react'
import { motion } from 'framer-motion'
import MailIcon from './Icons/MailIcon'
import DotIcon from './Icons/DotIcon'
import Footerline from './Icons/Footerline'

const Footer = () => {
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
            className='flex flex-col items-center justify-between w-screen h-[641px] bg-[#F8F8F8] py-10'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className='flex flex-col items-center justify-center w-full space-y-7' variants={containerVariants}>
                <motion.p className='text-[#656565] text-sm font-inter-var' variants={itemVariants}>
                    Discover how Akeso Health can support your healthcare goals.
                </motion.p>
                <motion.div className='flex flex-row items-center space-x-4 justify-center' variants={itemVariants}>
                    <DotIcon />
                    <MailIcon />
                    <p className='text-[#D8D8D8] text-[75.22px] font-plus-jakarta'>jack@akesohealthnetwork.com</p>
                </motion.div>
            </motion.div>

            <motion.div className='w-full' variants={itemVariants}>
                <Footerline />
            </motion.div>

            <motion.p className='text-[#656565] text-sm font-inter-var' variants={itemVariants}>
                (c) Copyright Akeso Health, 2024
            </motion.p>
        </motion.div>
    )
}

export default Footer


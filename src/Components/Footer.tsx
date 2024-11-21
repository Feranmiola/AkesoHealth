'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MailIcon from './Icons/MailIcon'
import DotIcon from './Icons/DotIcon'
import Footerline from './Icons/Footerline'
import FooterLineSmall from './Icons/FooterLineSmall'
import MailIconSmall from './Icons/MailIconSmall'
import ForwardIcon from './Icons/ForwardIcon'

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false)

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

    const emailVariants = {
        animate: {
            x: [0, '-33.33%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                },
            },
        },
        hover: {
            x: 0,
            transition: {
                duration: 0.2,
            },
        },
    }

    const EmailGroup = () => (
        <div className="flex items-center space-x-4 px-2">
            <DotIcon />
            <MailIcon />
            <p className='text-[#D8D8D8] text-[75.22px] font-plus-jakarta'>
                jack@akesohealthnetwork.com
            </p>
        </div>
    )

    return (
        <motion.footer
            className='flex flex-col items-center justify-between w-screen h-[641px] bg-[#F8F8F8] py-10'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className='flex flex-col items-center justify-center w-full space-y-7' variants={containerVariants}>
                <motion.p className='text-[#656565] text-sm font-inter-var max-md:hidden' variants={itemVariants}>
                    Discover how Akeso Health can support your healthcare goals.
                </motion.p>
                <motion.p className='text-[#656565] text-sm md:hidden text-center font-inter-var' variants={itemVariants}>
                    Discover how Akeso Health can <br />support your healthcare goals.
                </motion.p>
                <div className='md:hidden flex flex-col items-center justify-center space-y-3'>
                    <MailIconSmall />

                    <p className='text-[#1B7DFA] tracking-tighter text-[23.46px] font-plus-jakarta'>
                        jack@akesohealthnetwork.com
                    </p>

                    <motion.div
                        className="bg-blue rounded-[10px] w-[139px] h-[44px] flex flex-row space-x-1 items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p className="text-white font-medium text-base">Send e-mail</p>
                        <ForwardIcon />
                    </motion.div>
                </div>
                <motion.div
                    className='relative w-full overflow-hidden max-md:hidden'
                    variants={itemVariants}
                >
                    <motion.div
                        className='flex whitespace-nowrap cursor-pointer'
                        style={{ width: '300%' }}
                        variants={emailVariants}
                        animate={isHovered ? "hover" : "animate"}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        onClick={() => window.location.href = 'mailto:jack@akesohealthnetwork.com'}
                        aria-label="Send email to jack@akesohealthnetwork.com"
                    >
                        <EmailGroup />
                        <EmailGroup />
                        <EmailGroup />
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className='w-full max-md:hidden' variants={itemVariants}>
                <Footerline />
            </motion.div>

            <motion.div className='w-full md:hidden' variants={itemVariants}>
                <FooterLineSmall />
            </motion.div>

            <motion.p className='text-[#656565] text-sm font-inter-var' variants={itemVariants}>
                (c) Copyright Akeso Health, 2024
            </motion.p>
        </motion.footer>
    )
}

export default Footer


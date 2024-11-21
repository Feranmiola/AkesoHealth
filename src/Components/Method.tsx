/* eslint-disable */
'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Method = () => {
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
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 },
        }
    }

    return (
        <motion.div
            className='h-[2227px] bg-[#3197E4] mt-16 flex flex-row w-screen py-20 justify-center space-x-[15rem]'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.div className='flex flex-col space-y-10' variants={containerVariants}>
                <motion.p
                    className='text-[#F8F8F8] font-plus-jakarta font-medium text-[43.13px] w-[318px] leading-[2.5rem]'
                    variants={itemVariants}
                >
                    Here's how we get it done.
                </motion.p>
                <motion.p
                    className='text-pale  text-base w-[328px]'
                    variants={itemVariants}
                >
                    From streamlining doctor visits to empowering long-term health, our technology puts you at the center of better care.
                </motion.p>
            </motion.div>

            <motion.div className='h-full flex flex-col justify-between w-[539px]' variants={containerVariants}>
                <motion.div className='w-full h-[409px] flex flex-col justify-between' variants={itemVariants}>
                    <motion.p className='text-base font-mono text-[#DEEAFF]' variants={itemVariants}>
                        [Simpler Healthcare for Providers]
                    </motion.p>
                    <motion.p className='text-pale text-base' variants={itemVariants}>
                        We reduce paperwork and streamline tasks so <br /> doctors can spend more time with you.
                    </motion.p>
                    <motion.div

                    >
                        <Image
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732120974/Frame_12_wr9jrr.webp'
                            alt='Doctor'
                            width={539}
                            height={287}
                            className='rounded-[16px]'
                        />
                    </motion.div>
                    <motion.p className='font-bold text-base text-pale' variants={itemVariants}>
                        Imagine your doctor actually having time to listen —<br />Akeso makes that possible.
                    </motion.p>
                </motion.div>

                <motion.div className='w-full h-[409px] flex flex-col justify-between' variants={itemVariants}>
                    <motion.p className='text-base font-mono text-[#DEEAFF]' variants={itemVariants}>
                        [Seamless Communication Across Systems]
                    </motion.p>
                    <motion.p className='text-pale text-base' variants={itemVariants}>
                        Your health data flows securely between healthcare providers <br /> so you never have to repeat tests or retell your story.
                    </motion.p>
                    <motion.div

                    >
                        <Image
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732178570/confident-mature-radiologist-mask-pointing-brain-scan-tablet-screen_1_avpd9z.webp'
                            alt='Doctor 2'
                            width={539}
                            height={287}
                            className='rounded-[16px]'
                        />
                    </motion.div>
                    <motion.p className='font-bold text-base text-pale' variants={itemVariants}>
                        Your information, always where it’s needed,<br />when it’s needed.
                    </motion.p>
                </motion.div>

                <motion.div className='w-full h-[409px] flex flex-col justify-between' variants={itemVariants}>
                    <motion.p className='text-base font-mono text-[#DEEAFF]' variants={itemVariants}>
                        [Long-Term Care That’s Proactive]
                    </motion.p>
                    <motion.p className='text-pale text-base' variants={itemVariants}>
                        With personalized care plans and continuous monitoring, we<br /> help you stay on track and prevent issues before they arise.
                    </motion.p>
                    <motion.div

                    >
                        <Image
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732178570/social-worker-taking-care-senior-woman_1_b73qju.webp'
                            alt='Doctor 3'
                            width={539}
                            height={287}
                            className='rounded-[16px]'
                        />
                    </motion.div>
                    <motion.p className='font-bold text-base text-pale' variants={itemVariants}>
                        Your health is more than a single visit—it’s —<br />a lifelong journey.
                    </motion.p>
                </motion.div>

                <motion.div className='w-full h-[409px] flex flex-col justify-between' variants={itemVariants}>
                    <motion.p className='text-base font-mono text-[#DEEAFF]' variants={itemVariants}>
                        [Better Community Health Insights]
                    </motion.p>
                    <motion.p className='text-pale text-base' variants={itemVariants}>
                        We work with public health experts to analyze <br /> trends and improve health at a larger scale.
                    </motion.p>
                    <motion.div

                    >
                        <Image
                            src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732178571/doctors-medical-professionals-healthcare-workers-with-laptop-talking-meeting-planning-hospital-medicine-treatment-view-diverse-group-physician-colleagues-brainstorming-with-tech_i6llhu.webp'
                            alt='Doctor 4'
                            width={539}
                            height={287}
                            className='rounded-[16px]'
                        />
                    </motion.div>
                    <motion.p className='font-bold text-base text-pale' variants={itemVariants}>
                        From individual care to community well-being,<br />Akeso makes a difference.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Method


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
            className='bg-[#3197E4] mt-16 relative flex flex-row max-md:flex-col w-screen py-20 justify-center md:space-x-[10rem] lg:space-x-[15rem] max-md:space-y-16 max-md:px-3 lg:min-h-screen md:px-4 lg:px-8'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.div
                id='howDiv'
                className='flex lg:sticky lg:top-20 flex-col md:space-y-8 lg:space-y-10 max-md:h-[103px] max-md:justify-between lg:h-[calc(50vh-5rem)] md:w-[280px] lg:w-[318px]'
                variants={containerVariants}
            >
                <motion.p
                    className='text-[#F8F8F8] font-plus-jakarta font-medium max-md:text-[24px] md:text-[36px] lg:text-[43.13px] md:w-[280px] lg:w-[318px] leading-[2.5rem]'
                    variants={itemVariants}
                >
                    Here's how we get it done.
                </motion.p>
                <motion.p
                    className='text-pale font-inter-var text-base md:w-[280px] lg:w-[328px]'
                    variants={itemVariants}
                >
                    From streamlining doctor visits to empowering long-term health, our technology puts you at the center of better care.
                </motion.p>
            </motion.div>

            <motion.div id='MethodsContent' className='h-full flex flex-col max-md:space-y-10 md:space-y-16 lg:space-y-20 justify-between md:w-[450px] lg:w-[539px] max-md:w-full' variants={containerVariants}>
                <motion.div className='w-full flex flex-col space-y-2' variants={itemVariants}>
                    <motion.p className='text-base font-mono text-[#DEEAFF]' variants={itemVariants}>
                        [Simpler Healthcare for Providers]
                    </motion.p>
                    <motion.p className='text-pale text-base md:max-w-[450px] lg:max-w-[539px]' variants={itemVariants}>
                        We reduce paperwork and streamline tasks so doctors can spend more time with you.
                    </motion.p>
                    <div>
                        <motion.div className='max-md:hidden'>
                            <Image
                                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732120974/Frame_12_wr9jrr.webp'
                                alt='Doctor'
                                width={539}
                                height={287}
                                className='rounded-[16px] w-full h-auto'
                            />
                        </motion.div>
                        <motion.div className='md:hidden'>
                            <img
                                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732185468/side-view-smiley-doctor-talking-patient_1_d3hzj3.webp'
                                alt='Doctor'
                                className='rounded-[16px]'
                            />
                        </motion.div>
                    </div>
                    <motion.p className='font-bold text-base text-pale md:max-w-[450px] lg:max-w-[539px]' variants={itemVariants}>
                        Imagine your doctor actually having time to listen —Akeso makes that possible.
                    </motion.p>
                </motion.div>

                <motion.div className='w-full flex flex-col space-y-2' variants={itemVariants}>
                    <motion.p className='text-base font-mono text-[#DEEAFF]' variants={itemVariants}>
                        [Seamless Communication Across Systems]
                    </motion.p>
                    <motion.p className='text-pale text-base md:max-w-[450px] lg:max-w-[539px]' variants={itemVariants}>
                        Your health data flows securely between healthcare providers so you never have to repeat tests or retell your story.
                    </motion.p>
                    <div>
                        <motion.div className='max-md:hidden'>
                            <Image
                                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732178570/confident-mature-radiologist-mask-pointing-brain-scan-tablet-screen_1_avpd9z.webp'
                                alt='Doctor 2'
                                width={539}
                                height={287}
                                className='rounded-[16px] w-full h-auto'
                            />
                        </motion.div>
                        <motion.div className='md:hidden'>
                            <img
                                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732185468/confident-mature-radiologist-mask-pointing-brain-scan-tablet-screen_1_1_zj9gt0.webp'
                                alt='Doctor 2'
                                className='rounded-[16px]'
                            />
                        </motion.div>
                    </div>
                    <motion.p className='font-bold text-base text-pale md:max-w-[450px] lg:max-w-[539px]' variants={itemVariants}>
                        Your information, always where it's needed, when it's needed.
                    </motion.p>
                </motion.div>

                <motion.div className='w-full flex flex-col space-y-2' variants={itemVariants}>
                    <motion.p className='text-base font-mono text-[#DEEAFF]' variants={itemVariants}>
                        [Long-Term Care That's Proactive]
                    </motion.p>
                    <motion.p className='text-pale text-base md:max-w-[450px] lg:max-w-[539px]' variants={itemVariants}>
                        With personalized care plans and continuous monitoring, we help you stay on track and prevent issues before they arise.
                    </motion.p>
                    <div>
                        <motion.div className='max-md:hidden'>
                            <Image
                                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732178570/social-worker-taking-care-senior-woman_1_b73qju.webp'
                                alt='Doctor 3'
                                width={539}
                                height={287}
                                className='rounded-[16px] w-full h-auto'
                            />
                        </motion.div>
                        <motion.div className='md:hidden'>
                            <img
                                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732185468/social-worker-taking-care-senior-woman_1_1_qqvhxg.webp'
                                alt='Doctor 3'
                                className='rounded-[16px]'
                            />
                        </motion.div>
                    </div>
                    <motion.p className='font-bold text-base text-pale md:max-w-[450px] lg:max-w-[539px]' variants={itemVariants}>
                        Your health is more than a single visit—it's a lifelong journey.
                    </motion.p>
                </motion.div>

                <motion.div className='w-full flex flex-col space-y-2' variants={itemVariants}>
                    <motion.p className='text-base font-mono text-[#DEEAFF]' variants={itemVariants}>
                        [Better Community Health Insights]
                    </motion.p>
                    <motion.p className='text-pale text-base md:max-w-[450px] lg:max-w-[539px]' variants={itemVariants}>
                        We work with public health experts to analyze trends and improve health at a larger scale.
                    </motion.p>
                    <div>
                        <motion.div className='max-md:hidden'>
                            <Image
                                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732178571/doctors-medical-professionals-healthcare-workers-with-laptop-talking-meeting-planning-hospital-medicine-treatment-view-diverse-group-physician-colleagues-brainstorming-with-tech_i6llhu.webp'
                                alt='Doctor 4'
                                width={539}
                                height={287}
                                className='rounded-[16px] w-full h-auto'
                            />
                        </motion.div>
                        <motion.div className='md:hidden'>
                            <img
                                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732185468/doctors-medical-professionals-healthcare-workers-with-laptop-talking-meeting-planning-hospital-medicine-treatment-view-diverse-group-physician-colleagues-brainstorming-with-tech_1_vxikbv.webp'
                                alt='Doctor4'
                                className='rounded-[16px]'
                            />
                        </motion.div>
                    </div>
                    <motion.p className='font-bold text-base text-pale md:max-w-[450px] lg:max-w-[539px]' variants={itemVariants}>
                        From individual care to community well-being, Akeso makes a difference.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Method


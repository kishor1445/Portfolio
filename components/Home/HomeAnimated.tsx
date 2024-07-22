"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { FlipWords } from '../ui/flip-words'


const HomeAnimated: React.FC = () => {
  return (
    <div className='min-h-full flex items-center justify-center'>
        <div className='flex flex-col justify-center'>
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, delay: 0}} className='text-xl sm:text-3xl text-sky-400 font-bold'>I am <motion.span initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0}} className='text-3xl sm:text-7xl text-white inline-block'>Kishor Ramanan</motion.span></motion.p>
            <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0}} className='text-xl sm:text-3xl text-right italic font-semibold'>
                <FlipWords words={["CSE AI-ML Student", "Developer", "AI Enthusiast", "I use arch btw ;)"]} />
            </motion.div>
        </div>
    </div>
  )
}

export default HomeAnimated
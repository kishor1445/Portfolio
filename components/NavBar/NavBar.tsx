import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import styles from '@/components/NavBar/NavBar.module.css'

const NavBar: React.FC = () => {

  return (
    <header className='fixed z-50 top-0 w-full'> 
        <nav className='flex justify-between items-center h-[10vh] px-4 lg:px-8 bg-black/50'>
            <motion.div
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8, delay: 0}}
            >
                <h1 className={styles.logo_text}>K1SH0R</h1>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.7}}
                className='hidden sm:flex space-x-8 text-xl'
            >
                <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className='group cursor-pointer hover:scale-105'
                    activeClass={styles.active_nav}
                    spy={true}
                >
                    Home
                </Link>
                <Link
                    to='projects'
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className='group cursor-pointer hover:scale-105'
                    activeClass={styles.active_nav}
                    spy={true}
                >
                    Projects
                </Link>
                <Link
                    to='certificates'
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className='group cursor-pointer hover:scale-105'
                    activeClass={styles.active_nav}
                    spy={true}
                >
                    Certificates
                </Link>
                <Link
                    to='contact'
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className='group cursor-pointer hover:scale-105'
                    activeClass={styles.active_nav}
                    spy={true}
                >
                    Contact
                </Link>
            </motion.div>
            <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8, delay: 0}}
            >
                <button className="p-[3px] relative" onClick={(e) => alert("Under development!")}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-cyan-400 to-green-400 rounded-lg" />
                    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                        Login
                    </div>
                </button>
            </motion.div>
        </nav>
    </header>
  )
}

export default NavBar
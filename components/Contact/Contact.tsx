'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { ClipboardCopy, ExternalLink } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import styles from '@/components/Contact/Contact.module.css'
import { Textarea } from '@/components/ui/textarea';
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beams";


const Contact: React.FC = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const send_message = (e: any) => {
    e.preventDefault()
    let data = {
      firstname,
      lastname,
      email,
      message
    }
    console.log(data)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        alert("Your Message has been successfully sent")
        setSubmitted(true)
        setFirstname('')
        setLastname('')
        setEmail('')
        setMessage('')
      }
    })
    // toast("Message Sent!", {
    //   description: "You message has been successfully sent to Kishor's Inbox",
    //   closeButton: true
    // })
  }

  const copy_to_clipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div id="contact" className='relative mt-10'>
        <motion.div
          initial={{opacity: 0, scale: 0}}
          whileInView={{ opacity: 1, scale: 1}}
          viewport={{ once: false, amount: 0.8 }}
          transition={{duration: 1}}
          className='flex items-center justify-center'
        >
          <p className={styles.social_media_text_bg}>Social Media</p>
        </motion.div>
        <div className='m-4 grid grid-cols-2 gap-4 sm:grid-cols-3 whitespace-pre'>
          <div className='group sm:h-80 flex flex-row justify-center items-center'>
            <div className='m-4 sm:m-0'>
              <div className='flex justify-center items-center sm:justify-start'>
                {/* <img className='size-8 sm:size-16 group-hover:size-8 group-hover:transition-all group-hover:duration-500' src='/instagram.svg' /> */}
                <Image className='size-8 sm:size-16 group-hover:size-8 group-hover:transition-all group-hover:duration-500' src='/instagram.svg' width={64} height={64} alt='instagram logo' />
              <span className='sm:hidden text-xl mx-2'>_k1sh0r_</span>
              <a href='https://www.instagram.com/_k1sh0r_/' target='_blank' className='sm:hidden'><ExternalLink  size={18}/></a>
              </div>
              <div className='sm:hidden group-hover:block'>
                <p className='hidden sm:block text-xl text-center m-4'>_k1sh0r_</p>
                <div className='hidden sm:flex space-x-4'>
                  <button onClick={() => copy_to_clipboard('_k1sh0r_')} ><ClipboardCopy /></button>
                  <a href='https://www.instagram.com/_k1sh0r_/' target='_blank' className='flex flex-row items-center justify-center'>Open <ExternalLink /></a>
                </div>
              </div>
            </div>
          </div>
          <div className='group sm:h-80 flex justify-center items-center'>
            <div className='m-4 sm:m-0'>
              <div className='flex justify-center items-center sm:justify-start'>
                {/* <img className='size-8 sm:size-16 group-hover:size-8 group-hover:transition-all group-hover:duration-500' src='/linkedin.svg' /> */}
                <Image className='size-8 sm:size-16 group-hover:size-8 group-hover:transition-all group-hover:duration-500' src='/linkedin.svg' width={64} height={64} alt='linkedin logo' />
                <span className='sm:hidden text-xl mx-2'>kishor1445</span>
                <a href='https://www.linkedin.com/in/kishor1445/' target='_blank' className='sm:hidden'><ExternalLink  size={18}/></a>
              </div>
              <div className='sm:hidden group-hover:block'>
                <p className='hidden sm:block text-xl text-center m-4'>kishor1445</p>
                <div className='hidden sm:flex space-x-4'>
                  <button onClick={() => copy_to_clipboard('kishor1445')} ><ClipboardCopy /></button>
                  <a href='https://www.linkedin.com/in/kishor1445/' target='_blank' className='flex flex-row items-center justify-center'>Open <ExternalLink /></a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2 sm:col-span-1 group sm:h-80 flex flex-row justify-center items-center'>
            <div className='m-2 sm:m-0'>
              <div className='flex justify-center items-center sm:justify-start'>
                {/* <img className='size-8 sm:size-16 group-hover:size-8 group-hover:transition-all group-hover:duration-500' src='/github.png' /> */}
                <Image className='size-8 sm:size-16 group-hover:size-8 group-hover:transition-all group-hover:duration-500' src='/github.png' width={64} height={64} alt='github logo' />
                <span className='sm:hidden text-xl mx-2'>kishor1445</span>
                <a href='https://github.com/kishor1445' target='_blank' className='sm:hidden'><ExternalLink  size={18}/></a>
              </div>
              <div className='sm:hidden group-hover:block'>
                <p className='hidden sm:block text-xl text-center m-4'>kishor1445</p>
                <div className='hidden sm:flex space-x-4'>
                  <button onClick={() => copy_to_clipboard('kishor1445')} ><ClipboardCopy /></button>
                  <a href='https://github.com/kishor1445' target='_blank' className='flex flex-row items-center justify-center'>Open <ExternalLink /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-16 sm:my-8'>
            <div className='block sm:grid sm:grid-cols-2 gap-14 sm:gap-0'>
            <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0}}  className='sm:p-8'>
              <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}} className='text-center text-3xl font-bold text-sky-400'>Contact Form</motion.p>
              <div className=''>
                <form className='m-4' onSubmit={send_message}>
                  <div className='flex flex-col my-8 space-y-8'>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" onChange={(e)=>{setFirstname(e.target.value)}} value={firstname} placeholder="Kishor" type="text" required/>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" onChange={(e)=>{setLastname(e.target.value)}} value={lastname} placeholder="Ramanan" type="text" required/>
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="kishorramanan5@gmail.com" type="email" required/>
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id='message' onChange={(e)=>{setMessage(e.target.value)}} value={message}  placeholder='Hello there! ;)' required/>
                    </LabelInputContainer>
                  </div>
                  
                  <div className='flex items-center justify-end sm:justify-start'>
                    <button
                        className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                        onClick={(e)=>{send_message(e)}}
                    >
                        Send Message &rarr;
                        <BottomGradient />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
            <motion.div initial={{opacity: 0, x: 200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0}} className='flex flex-col items-center justify-center space-y-8'>
              <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}} className='font-bold text-3xl text-sky-400'>Contact</motion.p>
              <div className='text-center'>
                <p className='text-xl'>E-Mail</p>
                <p className='text-gray-400'>kishorramanan5@gmail.com</p>
              </div>
              <div className='text-center'>
                <p className='text-xl'>WhatsApp</p>
                <p className='text-gray-400'>+91 6382628286</p>
              </div>
              <p className='text-xl text-center'>Location</p>
              <PinContainer
                    title="Chennai"
                >
                    <div className="w-[20rem] h-[20rem] ">
                        {/* <img className="w-full h-full rounded-lg " src='/map.png' /> */}
                        <Image src="/map.png" width={350} height={350} alt='chennai' />
                    </div>
                </PinContainer>
                <address>
                  Chennai,
                  Tamil Nadu,
                  India
                </address>
              <div className="h-[1rem] w-full flex items-center justify-center ">
                
            </div>
            </motion.div>
          </div>
        </div>
        {/* <Toaster /> */}
        <BackgroundBeams />
    </div>
  )
}

export default Contact

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";

const Projects = () => {
  return (
    <div id='projects' className='w-full sm:h-screen p-10'>
        <motion.h2 
         initial={{opacity: 0, scale: 0}}
         whileInView={{ opacity: 1, scale: 1}}
         viewport={{ once: false, amount: 0.8 }}
         transition={{duration: 1}}
         className='text-center text-5xl text-sky-400 font-bold'>
            Projects
        </motion.h2>
        <div className='w-full h-full block sm:flex'>
            <motion.div
              initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0}}
              className='w-full h-full block sm:flex sm:flex-col space-y-8 items-center justify-center'>
                <h2 className='text-3xl font-black pt-8'>BlankBot: The AI-Powered Discord Moderator</h2>
                <div className='text-xl px-5 sm:px-10 space-y-4 text-slate-300'>
                <p>BlankBot is a custom Discord bot that leverages cutting-edge AI models to streamline moderation and enhance community engagement. Built with Python and MongoDB, it offers:</p>
                <div className='px-5 sm:px-10'>
                <p><b className='text-sky-400'>Proactive Content Filtering:</b> Automatically detects and removes harmful images using ViT (Vision Transformers) for a safer online environment.</p>
                <p><b className='text-sky-400'>Sentiment Analysis:</b> Monitors feedback channels with DistilBERT to identify negative sentiment and alert moderators.</p>
                <p><b className='text-sky-400'>Powerful Moderator Tools:</b> Simplifies moderation tasks with a single command for a wide range of actions.</p>
                </div>
                <div className='m-0 sm:m-4'>
                <LinkPreview url='https://github.com/kishor1445/BlankBot' className='font-bold hover:text-sky-600 underline border-2 border-sky-400 px-2 py-1'>Project Github</LinkPreview>
                </div>
                </div>
            </motion.div>
            <motion.div initial={{opacity: 0, x: 200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0}} className='mt-5 sm:mt-0 w-full h-full flex items-center justify-center'>
                <Image src="/projects/blankbot.png" width={500} height={300} alt='blankbot' />
            </motion.div>
        </div>
    </div>
  )
}

export default Projects

const projects = [
    {
      title: "BlankBot: The AI-Powered Discord Moderator",
      description:
        `BlankBot is a custom Discord bot that leverages cutting-edge AI models to streamline moderation and enhance community engagement. Built with Python and MongoDB, it offers:

Proactive Content Filtering: Automatically detects and removes harmful images using ViT (Vision Transformers) for a safer online environment.

Sentiment Analysis: Monitors feedback channels with DistilBERT to identify negative sentiment and alert moderators.

Powerful Moderator Tools: Simplifies moderation tasks with a single command for a wide range of actions.
`,
      img_link: "/projects/blankbot.png",
      link: "https://github.com/kishor1445/BlankBot"
    },
    {
      title: "Terminal Portfolio",
      description:
        `My terminal-inspired portfolio website offers a unique, interactive way to explore my projects and skills. Built with:

Backend: FastAPI (Python) and MongoDB for dynamic content delivery, hosted on Render.

Frontend: Vite, ReactJS, and TypeScript for a performant, visually engaging experience.`,
      img_link: "/projects/terminal_portfolio.png",
      link: "https://github.com/kishor1445/Terminal-Portfolio"
    },
    // {
    //   title: "Version control",
    //   description:
    //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
    //       Version control
    //     </div>
    //   ),
    // },
    // {
    //   title: "Running out of content",
    //   description:
    //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    //       Running out of content
    //     </div>
    //   ),
    // },
  ];
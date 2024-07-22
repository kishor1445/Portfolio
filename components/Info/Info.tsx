import React from 'react'

const Info: React.FC = () => {
  return (
    <div className='bg-sky-600 p-10'>
        <h1 className='text-center text-5xl text-black font-bold'>About</h1>
        <div className='text-3xl px-4 py-8 leading-10 tracking-wide'>
            <p className='tracking-wide' >Myself Kishor Ramanan, I am a student at Sathyabama Institute of Science and Technology. I am 19 years old. I like to read research papers and try to implement it. I am a Technical Team Member at ACM-SIST and GDSC.</p>
            <div className='p-4'>
                <p className='text-black font-bold'>Programming Languages:</p>
                <p className='pl-10'>C/C++, Python, Rust, Java, Kotlin, Swift, JavaScript/TypeScript, SQL..,</p>
                <br />
                <p className='text-black font-bold'>Frameworks/Libraries:</p>
                <p className='pl-10'>FastAPI, Flask, Django, Discord.py, TensorFlow, PyTorch, Numpy, Pandas, OpenCV, Scikit Learn, Matplotlib, Kivy, ReactJS, NextJS, Tokio, Requests, BeautifulSoup, Selenium..,</p>
                <br />
                <p className='text-black font-bold'>Technologies:</p>
                <p className='pl-10'>Git, MongoDB, Linux, Redis, Nginx, Docker, Virtual Machines, SSH, Domain Management.., </p>
            </div>
        </div>
    </div>
  )
}

export default Info
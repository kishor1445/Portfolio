import React from 'react'
import HomeAnimated from './HomeAnimated';

const Home: React.FC = () => {
  return (
    <div aria-hidden="true" className='h-screen' id='home'>
      <HomeAnimated />
    </div>
  )
}

export default Home
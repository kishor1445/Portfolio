import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2 w-full h-screen">
        <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounceHigher"></div>
        <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounceHigher200"></div>
        <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounceHigher400"></div>
    </div>
  )
}

export default Loading
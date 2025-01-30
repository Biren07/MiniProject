'use client'

import React from 'react'
import { useState } from 'react';

const like = () => {
   const [count, setCount] = useState(0);

  const like = () => setCount(count + 1);
  const dislike = () => {
    if(count>0)
    {
      setCount(count - 1);
    }
  }
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-green-300 shadow-lg rounded-lg p-5 text-center">
      <img className=' max-w-60 max-h-60 flex justify-center items-center rounded-full m-20' src=".\Biren.jpg" alt="Profile" />
        <div className="space-x-4">
          <button
            onClick={like}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            👍
          </button>
          <button
            onClick={dislike}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-900 transition"
          >
            👎
          </button>
        </div>
      </div>
    </div>
  )
}

export default like
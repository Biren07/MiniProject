'use client'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

const Login = () => {
 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-purple-500 flex justify-center items-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-96 animate-pulse duration-1000">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-500 ">Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username
            </label>
            <input
            type="text"
            id="username"
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your username"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
            </label>
            <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
            />
        </div>
        <div className="mb-6 flex justify-between items-center">
            <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
        </div>

        <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-pink-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
            LOGIN
        </button>
        </form>

        <div className="mt-6 text-center">
        <p className="text-gray-600 mb-2">Or Sign Up Using</p>
        <div className="flex justify-center space-x-4">
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              {/* Facebook Icon - You can use a library like react-icons */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-google"><path d="M20.28 10.78A6.27 6.27 0 0 0 12 4.02c-3.11 0-5.66 2.2-5.66 5.18 0 3.13 2.53 5.16 5.66 5.16.88 0 1.7-.13 2.42-.36v-3.86h-2.16v-.76h5.38c.02.1.02.2.02.3 0 1.83-.5 3.39-1.94 4.74-1.42 1.3-3.4 2.13-5.46 2.13-4.54 0-8.26-3.72-8.26-8.26s3.72-8.26 8.26-8.26c2.5 0 4.79 1.05 6.23 2.45l4.32-4.32C18.28 2.26 15.84.98 13 1c-7.17 0-13 5.8-13 13s5.83 13 13 13c7.16 0 13-5.78 13-13 0-.66-.07-1.3-.19-1.92z"></path></svg>
            </a>
        </div>
        <p className="mt-4 text-gray-600">Or sign up using <Link href='/Register'>SIGN Up</Link></p>
        </div>
    </div>
    </div>
)}

export default Login
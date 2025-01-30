// pages/signup.js
'use client';
import { useState } from 'react';

export default function Signup() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [termsAgreed, setTermsAgreed] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', name, email, password, confirmPassword, termsAgreed);
};

return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-purple-500 flex justify-center items-center">
    <div className="bg-white p-12 rounded-lg shadow-md w-2/3 md:w-1/2 lg:w-2/5 flex flex-col md:flex-row">
        <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full name
            </label>
            <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
            </label>
            <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
                placeholder="Enter your password"
            />
            </div>
            <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                Repeat your password
            </label>
            <input
                type="password"
                id="confirmPassword"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
            />
            </div>
            <div className="mb-6 flex items-center">
            <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
            />
            <label htmlFor="terms" className="text-gray-700">
                I agree all statements in <a href="#" className="text-blue-500 hover:underline">Terms of service</a>
            </label>
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
            Register
            </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
            I am already member <a href=".\LoginPage" className="text-blue-500 hover:underline">Login</a>
        </p>
        </div>
        <div className="md:w-1/2 hidden md:flex justify-center items-center">
          {/* Replace with your image */}
        <img src="https://www.kitabmahalpublishers.com/template/front/img/signup-image.jpg" alt="Signup Illustration" className="max-w-full h-auto" />
        </div>
    </div>
    </div>
);
}
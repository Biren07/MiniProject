'use client'
import React, { useEffect, useRef } from 'react';

const App = () => {
    const boxRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        const handleClick = () => {
            if (boxRef.current) {
                boxRef.current.style.backgroundColor = 
                    boxRef.current.style.backgroundColor === "red" ? "blue" : "red";
            }
        };

        if (buttonRef.current) {
            buttonRef.current.addEventListener("click", handleClick);
        }

        return () => {
            if (buttonRef.current) {
                buttonRef.current.removeEventListener("click", handleClick);
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div ref={boxRef} className="w-32 h-32 bg-green-500 mb-4 transition-all duration-300"></div>
            <button 
                ref={buttonRef} 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Click Me
            </button>
        </div>
    );
};

export default App;

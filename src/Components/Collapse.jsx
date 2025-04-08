import React, { useState } from 'react';

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full mb-2 transition-all duration-300">
            <div 
                className="flex justify-between items-center bg-[#2d4a2d]/50 hover:bg-[#2d4a2d]/70 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={toggleCollapse}
            >
                <h3 className="text-lg font-medium text-[#d1e7dd]/80">{title}</h3>
                <button className="text-[#d1e7dd]/80 focus:outline-none hover:text-[#d1e7dd] transition-colors">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
            </div>
            <div className={`overflow-auto transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-20'} scroll-smooth`}>
                <div className="mt-1 p-3 bg-[#1a2e1a]/50 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}

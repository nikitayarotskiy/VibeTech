import React, { useState, useRef, useEffect } from 'react';

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('auto');
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            // Set height to actual content height for smooth expansion
            setHeight(`${contentRef.current.scrollHeight}px`);
            setTimeout(() => {
                setHeight('auto'); // Reset to auto after animation completes
            }, 300);
        } else {
            // Set height to current height first, then to 0 for smooth collapse
            setHeight(`${contentRef.current.scrollHeight}px`);
            setTimeout(() => {
                setHeight('0px');
            }, 10);
        }
    }, [isOpen]);

    return (
        <div className="w-full mb-2 transition-all duration-300">
            <div 
                className="flex justify-between items-center bg-[#2d4a2d]/50 hover:bg-[#2d4a2d]/70 p-3 rounded-lg cursor-pointer transition-all duration-200"
                onClick={toggleCollapse}
            >
                <h3 className="text-lg font-medium text-[#d1e7dd]/80">{title}</h3>
                <button className="text-[#d1e7dd]/80 focus:outline-none hover:text-[#d1e7dd] transition-colors">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
            </div>
            <div 
                ref={contentRef}
                style={{ height }}
                className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
                <div className="mt-1 p-3 bg-[#1a2e1a]/50 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}

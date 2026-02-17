"use client";

import Image from 'next/image';
import React, { useState, useEffect  } from 'react';

const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) { // md breakpoint in Tailwind
            setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Check once on mount
        handleResize();

        return () => window.removeEventListener('resize', handleResize);

    }, []);


    // Close sidebar when clicking any button inside
    const handleButtonClick = () => setIsOpen(false);

  return (
    <div className="flex lg:hidden ">
        {isOpen && (
            <div
                className="fixed inset-0 bg-transparent z-50"
                onClick={() => setIsOpen(false)}
            />
        )}
        <div className={`
            fixed 
            z-60 
            top-0 
            right-0 
            h-screen
            w-60
            transition-all 
            duration-300
            pointer-events-none
            overflow-hidden
            ${isOpen? "translate-x-0" : "translate-x-full"}`
        }>
            <div className={`
                flex
                flex-col
                justify-between items-center
                bg-[#0A5559]/90
                opacity 
                transition-all 
                duration-300
                w-full
                h-full
                pointer-events-auto
                ${isOpen? "translate-x-0" : "-translate-x-full"}`
            }>
                <div className='flex flex-col gap-4 mb-[5vh] mt-[3vh] w-full'>
                    <button className='bg-transparent font-roboto-condensed text-[1.4rem] text-[#d2f3f5] cursor-pointer' onClick={handleButtonClick}>Store</button>
                    <button className='bg-transparent font-roboto-condensed text-[1.4rem] text-[#d2f3f5] cursor-pointer' onClick={handleButtonClick}>About us</button>
                    <button className='bg-transparent font-roboto-condensed text-[1.4rem] text-[#d2f3f5] cursor-pointer' onClick={handleButtonClick}>Benefits</button>
                    <button className='bg-transparent font-roboto-condensed text-[1.4rem] text-[#d2f3f5] cursor-pointer' onClick={handleButtonClick}>Contact</button>
                </div>

                <div className='flex flex-col gap-2 mb-[3vh] mt-[3vh] w-full px-3'>
                    <button 
                        className='
                        bg-transparent 
                        font-roboto-condensed 
                        border-2 rounded-2xl 
                        text-[#d2f3f5] 
                        border-[#d2f3f5] 
                        hover:bg-[#d2f3f5] 
                        hover:text-[#0A5559] 
                        transition 
                        duration-200
                        cursor-pointer'
                        onClick={handleButtonClick}
                        >
                            Profile
                        </button>
                        
                    <button 
                        className='
                        bg-transparent 
                        font-roboto-condensed 
                        border-2 
                        rounded-2xl 
                        text-[#d2f3f5] 
                        border-[#d2f3f5] 
                        hover:bg-[#d2f3f5] 
                        hover:text-[#0A5559] 
                        transition 
                        duration-200
                        cursor-pointer'
                        onClick={handleButtonClick}
                        >
                            Car
                        </button>
                </div>
                
            </div>
        </div>

        
        <div>
            <button 
                className='cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}>
                <Image
                    src="/navbar-elements/hamburger-icon.svg"
                    width={42}
                    height={42}
                    alt="hamburger-icon"
                    className="lg:hidden cursor-pointer"
                />
            </button>
        </div>

    
    </div>

  )
}

export default MobileNavbar

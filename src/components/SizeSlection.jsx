"use client"
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


const SizeSlection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null)
    const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]
    return (
        <div>
            <div className='flex justify-between items-center cursor-pointer' onClick={() => setIsOpen((prev) => !prev)}>
                <h1 className='text-lg font-bold'>Size</h1>
                <IoIosArrowDown
                    className={`text-xl transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                    }`}
            >
                <div className='flex gap-4 flex-wrap'>
                    {
                        sizes.map((size, i) => (
                            <div key={i} className={`p-3 text-black cursor-pointer rounded-full text-sm ${selectedTab == i ? "bg-black text-white" : "bg-[#F0F0F0]"}`} onClick={(() => setSelectedTab(i))}>{size}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SizeSlection
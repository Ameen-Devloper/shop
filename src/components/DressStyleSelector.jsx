"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";



const DressStyleSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dressStyles = ["casual", "formal", "party", "gym"]

    return (
        <div>
            <div
                className="flex items-center justify-between cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-semibold">Dress Style</h2>
                <IoIosArrowDown
                    className={`transition-transform duration-300 text-xl ${isOpen ? "rotate-180" : ""}`}
                />
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                    }`}
            >
                <div>
                    <ul className='font-satoshi space-y-2'>
                        {
                            dressStyles.map((category, i) => (
                                <li className='flex justify-between items-center capitalize'><span>{category}</span> <FaAngleRight /></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DressStyleSelector
"use client"
import React, { useState, useEffect } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import PriceRangeSlider from './PriceRangeSlider'
import ColorSelector from './ColorSelector'
import SizeSlection from './SizeSlection'
import DressStyleSelector from './DressStyleSelector'
import Image from 'next/image'

const MobileFiter = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"
    }, [isOpen])
    const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"]
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2>Casual</h2>
                <div className='h-8 w-8 rounded-full bg-pri p-2' onClick={() => setIsOpen(true)}>
                    <div className='w-full h-full relative'>
                        <Image src={"/filter_icon.png"} fill className='object-center' />
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "translate-y-0" : "translate-y-full"} h-screen transition-all duration-500  bg-black/40 fixed top-0 w-full left-0 pt-26 z-10`}>
                <div className='h-full w-full bg-white rounded-t-2xl p-4 overflow-y-auto'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-xl font-satoshi'>Filters</h2>
                        <button className='text-2xl' onClick={() => setIsOpen(false)}>
                            <RxCross2 />
                        </button>
                    </div>
                    <div className='border-1 border-gray-200 my-4 rounded-full'></div>
                    <div>
                        <ul className='font-satoshi space-y-2'>
                            {
                                categories.map((category, i) => (
                                    <li className='flex justify-between items-center'><span>{category}</span> <FaAngleRight /></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='border-1 border-gray-200 my-4 rounded-full'></div>
                    <div>
                        <PriceRangeSlider />
                    </div>
                    <div className='border-1 border-gray-200 my-4 rounded-full'></div>
                    <div>
                        <ColorSelector />
                    </div>
                    <div className='border-1 border-gray-200 my-4 rounded-full'></div>
                    <div>
                        <SizeSlection />
                    </div>
                    <div className='border-1 border-gray-200 my-4 rounded-full'></div>
                    <div>
                        <DressStyleSelector />
                    </div>
                    <div className='w-full mt-4'>
                        <button className='bg-black w-full rounded-full py-2 text-white'>Apply Filter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFiter
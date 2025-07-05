
import ColorSelector from '@/components/ColorSelector'
import PriceBarSelector from '@/components/PriceBarSelector'
import Image from 'next/image'
import React from 'react';
import filterIcon from "../../../public/Vector.png"
import { FaAngleRight } from "react-icons/fa6";
import PriceRangeSlider from '@/components/PriceRangeSlider';
import SizeSlection from '@/components/SizeSlection';



const CasusalPage = () => {

    const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"]
    return (
        <div className='container mx-auto px-14 grid grid-cols-1 md:grid-cols-4 gap-4 mt-14'>
            <div className='flex flex-col gap-4 border-2 border-gray-200 rounded-2xl py-4 px-6'>
                <div className='flex justify-between items-center '>
                    <h1 className='text-lg font-bold'>Filters</h1>
                    <Image src={filterIcon} height={"auto"} width={"auto"} />
                </div>
                <div className='border-1 border-gray-200'></div>
                <div>
                    <ul className='font-satoshi space-y-2'>
                        {
                            categories.map((category, i) => (
                                <li className='flex justify-between items-center'><span>{category}</span> <FaAngleRight /></li>
                            ))
                        }
                    </ul>
                </div>
                <PriceRangeSlider />
                <div>
                    <ColorSelector />
                </div>
                <div>
                    <SizeSlection />
                </div>
            </div>
            <div className='col-span-3 bg-red-600'>

            </div>
        </div>
    )
}

export default CasusalPage
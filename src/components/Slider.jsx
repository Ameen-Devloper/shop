import React from 'react'
import Star from './Star'
import { FaCircleCheck } from "react-icons/fa6";

const Slider = ({ testimonial }) => {
    return (

        <div className='min-w-full md:min-w-1/2 lg:min-w-1/3 p-4 flex flex-col gap-2'>
            <div>
                <Star stars={testimonial.rating} />
            </div>
            <div className='flex items-center gap-2'>
                <h1 className='text-black font-bold'>{testimonial.clientName}</h1>
                <FaCircleCheck className='text-[#01AB31]' />
            </div>
            <p className='font-light text-sm text-black font-satoshi tracking-wide leading-6'>"{testimonial.testimonial}"</p>

        </div>
    )
}

export default Slider